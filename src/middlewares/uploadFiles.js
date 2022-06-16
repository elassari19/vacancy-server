// https://www.youtube.com/watch?v=8Q5p3xQOH6E
import cloudinary from 'cloudinary'
import fs from 'fs'

export default () => async (req, res, next) => {

  try {
    if(!req.files || Object.keys(req.files).length === 0)
      return res.status(400).json({msg: 'No files were uploaded.'})
    
    const file = req.files.file;
    if(file.size > 1024*1024) {
      removeTmp(file.tempFilePath)
      return res.status(400).json({msg: "Size too large"})
    }

    if(file.mimetype !== 'image/jpeg' && file.mimetype !== 'image/svg'){
      removeTmp(file.tempFilePath)
      return res.status(400).json({msg: "File format is incorrect."})
    }

    cloudinary.v2.uploader.upload(file.tempFilePath, {folder: "avatar"}, async(err, resault)=>{
      if(err) throw err;

      removeTmp(file.tempFilePath);

      // delete the old avatar of user
      const {avatar} = req.user.profile.avatar;
      if(avatar) {
        
        // remove image avatar from the cloudinary
        cloudinary.v2.uploader.destroy(avatar, async(err, result) =>{
          if(err) throw err;
        })
      }


      req.user.profile.avatar = {
        public_id: resault.public_id,
        secure_url: resault.secure_url
      }

      next();
    })

  } catch (err) {
      return res.status(500).json({msg: err.message})
  }
};

// cleare request from files
const removeTmp = (path) =>{
  fs.unlink(path, err=>{
      if(err) throw err;
  })
};