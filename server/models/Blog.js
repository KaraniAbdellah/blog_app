import mongoose, { Types } from "mongoose";

const BlogSchema = new mongoose.Schema(
  {
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    ownerImage: {
      type: String,
      required: [true, "Image is Required"],
    },
    blogTitle: {
      type: String,
      required: [true, "blogTitle is Required"],
    },
    shortDescription: {
      type: String,
      required: [true, "shortDescription is Required"],
    },
    blogDate: {
      type: String,
      required: [true, "blogDate is Required"],
    },
    blogImage: {
      type: String,
      required: [true, "blogDate is Required"],
    },
    likesNumber: {
      type: Number,
      required: [true, "likes Number is Required"],
    },
    commentsNumber: {
      type: Number,
      required: [true, "comments Number is Required"],
    },
  },
  {
    timestamps: true,
  }
);

const BlogModel = mongoose.model("Blogs", BlogSchema);
export default BlogModel;
