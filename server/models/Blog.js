import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
  owner: {
    type: String,
    required: [true, "owner is Required"],
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
  likesNumber: {
    type: Number,
    required: [true, "likesNumber is Required"],
  },
  commentsNumber: {
    type: Number,
    required: [true, "commentsNumber is Required"],
  },
}, {
    timestamps: true
});

const BlogModel = mongoose.model("Project", BlogSchema);
export default BlogModel;
