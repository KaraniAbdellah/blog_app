import React from "react";
import { useState, useRef } from "react";
import JoditEditor from "jodit-react";
import HTMLReactParser from "html-react-parser";

const CreateBlog = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  return (
    <div className="p-3 bg-white w-full px-8 flex justify-center items-center">
      <div className="md:w-[80%] w-full">
        <form className="flex flex-col my-4 w-full">
          <input
            required
            className="border w-full password rounded-sm bg-gray-50 outline-none border-non p-2 mb-2"
            type="text"
            placeholder="Title..."
          />
          <textarea
            required
            className="border w-full password rounded-sm bg-gray-50 outline-none border-non p-2 mb-2"
            type="text"
            placeholder="Short Description..."
          ></textarea>
          <input
            required
            className="border w-full password rounded-sm bg-gray-50 outline-none border-non p-2 mb-2"
            type="file"
            placeholder="Title..."
          />
        </form>
        <div className="editor w-full">
          <JoditEditor
            ref={editor}
            value={content}
            onChange={(newContent) => setContent(newContent)}
          ></JoditEditor>

          <div className="content p-3 bg-gray-100 border my-5">
            {HTMLReactParser(content)}
          </div>

          <button className="bg-sky-700 hover:bg-sky-800 font-medium text-white rounded-sm px-8 py-2">
            Publish
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateBlog;
