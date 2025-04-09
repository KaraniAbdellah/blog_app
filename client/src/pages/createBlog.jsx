import React from "react";
import { useState, useRef } from "react";
import JoditEditor from "jodit-react";
import HTMLReactParser from "html-react-parser";
import EditorConfig from "../config/EditorConfig";
import axios from "axios";
import { useContext } from "react";
import { UserContext } from "../contexts/userContext";
import toast from "react-hot-toast";
import { UseConvertTo64 } from "../hooks/useConverter";
import "../css_filies/create_blog_bg.css";

const CreateBlog = ({ EditedBlog }) => {
  const editor = useRef(null);
  const [content, setContent] = useState(EditedBlog.contentBlog || "content");
  const [title, setTitle] = useState(EditedBlog.blogTitle || "title");
  const [category, setCategory] = useState(EditedBlog.Category || "Programming");
  const [image, setImage] = useState(EditedBlog.blogImage || "");
  const [short_description, setShort_description] = useState(EditedBlog.shortDescription || "short description");
  const [userInfo, setUserInfo] = useContext(UserContext);

  console.log("Edited Blog From Create Blog Is", EditedBlog);

  const topics = [
    "Programming",
    "Music",
    "Technology",
    "Self Development",
    "Machine Learning",
  ];

  async function CreateBlog(BlogData) {
    console.log(BlogData);
    await axios
      .post("http://127.0.0.1:3000/blog/createBlog", BlogData, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
      });
  }

  const handlePublish = async () => {
    // Check The Inputs and Short Description Size
    console.log(short_description.length);
    console.log(category);
    if (
      !title ||
      short_description.length > 200 ||
      short_description.length === 0 ||
      !content ||
      !image
    ) {
      toast.error("All Input are required", {
        duration: 2000,
        style: { color: "rgb(239 68 68)", fontWeight: "bold" },
      });
      return;
    }
    // Convert Image to Base64
    const ImageUrl = await UseConvertTo64(image);
    // Make Data Form
    const BlogData = {
      owner: userInfo.id,
      blogTitle: title,
      blogImage: ImageUrl,
      ownerImage: ImageUrl,
      shortDescription: short_description,
      contentBlog: content,
      Category: category,
      blogDate: `${new Date().toLocaleString("en-US", {
        month: "short",
      })} ${new Date().getDate()}, ${new Date().getFullYear()}`,
      likesNumber: 0,
      commentsNumber: 0,
      isSaved: false,
    };
    console.log(BlogData);
    CreateBlog(BlogData);
    toast.success("Success Creating Blog", {
      duration: 2000,
      style: { color: "#4BB543", fontWeight: "bold" },
    });
  };

  const handleUpdate = async () => {
    console.log("You Mist Edit This Blog");
  };

  return (
    <div className="container_bg relative z-[100]">
      <div className="min-h-screen bg-gradient-to-b flex justify-center items-start py-10 px-4">
        <div className="max-w-4xl w-full bg-white opacity-95 rounded-lg shadow-sm p-6 md:p-8 border">
          <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Create New Blog
          </h1>

          <form className="flex flex-col my-4 w-full space-y-4">
            <div className="form-group">
              <label
                className="block text-gray-700 text-sm font-medium mb-2"
                htmlFor="title"
              >
                Blog Title
              </label>
              <input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className="border w-full rounded-md bg-gray-50 outline-none border-gray-300 p-3 focus:ring-2 focus:ring-sky-500 focus:border-transparent transition duration-200"
                type="text"
                placeholder="Enter your blog title..."
              />
              <p
                className={`mt-1 text-red-500 text-sm ${
                  title ? "hidden" : "block"
                }`}
              >
                Title is required
              </p>
            </div>

            <div className="form-group">
              <label
                className="block text-gray-700 text-sm font-medium mb-2"
                htmlFor="category"
              >
                Category
              </label>
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="border w-full rounded-md bg-gray-50 outline-none border-gray-300 p-3 focus:ring-2 focus:ring-sky-500 focus:border-transparent transition duration-200"
              >
                {topics.map((topic, index) => (
                  <option key={index} value={topic}>
                    {topic}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label
                className="block text-gray-700 text-sm font-medium mb-2"
                htmlFor="short_description"
              >
                Short Description{" "}
                <span className="text-sm text-gray-500">
                  (Max 200 characters)
                </span>
              </label>
              <textarea
                id="short_description"
                value={short_description}
                onChange={(e) => setShort_description(e.target.value)}
                required
                className="border w-full rounded-md bg-gray-50 outline-none border-gray-300 p-3 focus:ring-2 focus:ring-sky-500 focus:border-transparent transition duration-200 h-24"
                placeholder="Write a brief description of your blog..."
              ></textarea>
              <div className="flex justify-between items-center mt-1">
                <p
                  className={`text-red-500 text-sm ${
                    short_description.length > 200 ||
                    short_description.length === 0
                      ? "block"
                      : "hidden"
                  }`}
                >
                  {short_description.length === 0
                    ? "Description is required"
                    : "Maximum 200 characters allowed"}
                </p>
                <span className="text-sm text-gray-500">
                  {short_description.length}/200
                </span>
              </div>
            </div>

            <div className="form-group">
              <label
                className="block text-gray-700 text-sm font-medium mb-2"
                htmlFor="image"
              >
                Featured Image
              </label>
              <div className="border border-dashed border-gray-300 rounded-md bg-gray-50 p-4">
                <input
                  id="image"
                  onChange={(e) => setImage(e.target.files[0])}
                  required
                  className="w-full outline-none bg-transparent"
                  type="file"
                  accept="image/*"
                />
                <p className="text-sm text-gray-500 mt-2">
                  Upload a high-quality image to represent your blog
                  (recommended size: 1200x630 pixels)
                </p>
              </div>
              <p
                className={`mt-1 text-red-500 text-sm ${
                  image ? "hidden" : "block"
                }`}
              >
                Featured image is required
              </p>
            </div>
          </form>

          <div className="editor w-full mt-6">
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Blog Content
            </label>
            <JoditEditor
              ref={editor}
              value={content}
              onChange={(newContent) => setContent(newContent)}
              config={EditorConfig}
            />
            <p
              className={`mt-1 text-red-500 text-sm ${
                content ? "hidden" : "block"
              }`}
            >
              Content is required
            </p>

            <div className="mt-8 mb-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-3">
                Preview
              </h2>
              <div className="content p-4 bg-gray-50 border border-gray-200 rounded-md">
                {HTMLReactParser(content)}
              </div>
            </div>

            <div className="flex justify-end mt-6">
              {EditedBlog ? (
                <button
                  onClick={() => handleUpdate()}
                  className="px-8 py-2 bg-gradient-to-r from-sky-600 to-sky-700 text-white font-medium rounded-md hover:from-sky-700 hover:to-sky-800 transition duration-200 shadow-sm"
                >
                  Update
                </button>
              ) : (
                <button
                  onClick={() => handlePublish()}
                  className="px-8 py-2 bg-gradient-to-r from-sky-600 to-sky-700 text-white font-medium rounded-md hover:from-sky-700 hover:to-sky-800 transition duration-200 shadow-sm"
                >
                  Publish
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateBlog;
