
export default (imageIds) => {
  let image_ids = []

  // set the public_id in array
  const ids = imageIds.filter( (items) => items.cv.length > 0 )
  .map( (items) => items.cv.map((item) => item.public_id) )
  
  for (let index = 0; index < ids.length; index++) {
    const element = ids[index];
    image_ids.push(...element)
  }

  return image_ids
}