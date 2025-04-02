import React from "react";
import { useState, useRef} from "react";
import JoditEditor from "jodit-react";
import HTMLReactParser from "html-react-parser";

const CreateBlog = () => {
  const editor = useRef(null);
  const [content, setContent] = useState(null);

  return (
    <div className="p-3 bg-white">
      <form>

      </form>
      <JoditEditor
        ref={editor}
        value={content}
        onChange={(newContent) => setContent(newContent)}
      ></JoditEditor>

      <div className="content">{HTMLReactParser(content)}</div>
      <button className="text-end bg-green-700 text-white rounded-sm px-2">Publish</button>
    </div>
  );
};

export default CreateBlog;
