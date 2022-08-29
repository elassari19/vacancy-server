import company from "../../models/company";
import db from "../../services";
import { cloudinaryDeleteFiles } from "../../utils";

export default () => async (req, res) => {
  // console.log("newCompany", req.value);
  try {
    req.oldCompany = await db.findOne(
      "Company",
      company,
      { $or: [{ name: req.value.name }, { email: req.value.email }] },
      {}
    );

    if (
      req.oldCompany?.profileImage?.public_id &&
      req.value.profileImage.public_id &&
      req.oldCompany?.profileImage?.public_id !=
        req.value.profileImage.public_id
    ) {
      cloudinaryDeleteFiles([req.oldCompany.profileImage.public_id]);

      req.company = await db.findOneAndUpdate(
        "Company",
        company,
        { $or: [{ name: req.value.name }, { email: req.value.email }] },
        req.value
      );

      if (req.company?._id) {
        return res
          .status(200)
          .send({
            success: true,
            message: "company details updated",
            company: req.company,
          });
      }
    }

    await db.createOne("Company", company, {
      ...req.value,
      createdBy: req.user._id,
    });
    res.status(200).send({
      success: true,
      message: "company created",
      company: req.company,
    });
  } catch (error) {
    console.log(error);
    res.status(203).send({ success: false, message: error });
  }
};
