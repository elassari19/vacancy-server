import { v2 as cloudinary } from "cloudinary";

export default (arrayOfIds) => {
  cloudinary.api.delete_resources(arrayOfIds, function (error, result) {
    console.log("resault", result?.deleted_counts, "error", error);
  });
};
