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

const CreateBlog = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("content");
  const [title, setTitle] = useState("title");
  const [image, setImage] = useState("");
  const [short_description, setShort_description] =
    useState("short description");
  const [userInfo, setUserInfo] = useContext(UserContext);

  async function CreateBlog(BlogData) {
    console.log(BlogData);
    await axios
      .post("http://127.0.0.1:3000/blog/createBlog", BlogData)
      .then((res) => {
        console.log(res);
      });
  }

  const handlePublish = async () => {
    // Check The Inputs and Short Description Size
    console.log(short_description.length);
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
      blogDate: `${new Date().toLocaleString("en-US", {
        month: "short",
      })} ${new Date().getDate()}, ${new Date().getFullYear()}`,
      likesNumber: 0,
      commentsNumber: 0,
    };
    CreateBlog(BlogData);
    toast.success("Success Creating Blog", {
      duration: 2000,
      style: { color: "#4BB543", fontWeight: "bold" },
    });
  };

  return (
    <div className="p-3 bg-white w-full px-8 flex justify-center items-center">
      <div className="md:w-[80%] w-full">
        <form className="flex flex-col my-4 w-full">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="border w-full password rounded-sm bg-gray-50 outline-none border-non p-2 mb-2"
            type="text"
            placeholder="Title..."
          />
          <p
            className={`-mt-1 mb-3 text-red-500 font-medium ${
              title ? "hidden" : "block"
            }`}
          >
            this flied required
          </p>
          <textarea
            value={short_description}
            onChange={(e) => setShort_description(e.target.value)}
            required
            className="border w-full password rounded-sm bg-gray-50 outline-none border-non p-2 mb-2"
            type="text"
            placeholder="Short Description..."
          ></textarea>
          <p
            className={`-mt-1 mb-3 text-red-500 font-medium ${
              short_description.length > 200 || short_description.length === 0
                ? "block"
                : "hidden"
            }`}
          >
            max is 200 characters
          </p>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            required
            className="border w-full password rounded-sm bg-gray-50 outline-none border-non p-2 mb-2"
            type="file"
            placeholder="Title..."
          />
          <p
            className={`-mt-1 mb-3 text-red-500 font-medium ${
              image ? "hidden" : "block"
            }`}
          >
            this flied required
          </p>
        </form>
        <div className="editor w-full">
          <JoditEditor
            ref={editor}
            value={content}
            onChange={(newContent) => setContent(newContent)}
            config={EditorConfig}
          ></JoditEditor>
          <p
            className={`mb-3 mt-1 text-red-500 font-medium ${
              content ? "hidden" : "block"
            }`}
          >
            this flied is required
          </p>

          <div className="content p-3 bg-gray-100 border my-5">
            {HTMLReactParser(content)}
          </div>

          <button
            onClick={() => handlePublish()}
            className="bg-sky-700 hover:bg-sky-800 font-medium text-white rounded-sm px-8 py-2"
          >
            Publish
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateBlog;
