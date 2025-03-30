import React, { useContext } from "react";
import { ThumbsUp, MessageCircle, Save } from "lucide-react";
import { BlogContext } from "../contexts/context";

const Blog = () => {
  const blog = useContext(BlogContext);
  return (
    <div className="blog w-full border-b py-3 mb-3 flex justify-between items-center">
      <div className="info w-[75%]">
        <div className="user_info mb-2 flex justify-start items-center">
          <img
            className="w-[30px] h-[30px] rounded-full mr-2"
            src={blog.ownerImage}
            alt="profile image"
          />
          <h2 className="font-semibold text-zinc-800">{blog.owner}</h2>
        </div>
        <h2 className="font-semibold md:text-2xl text-lg text-zinc-800">
          {blog.blogTitle}
        </h2>
        {/* Max 50 charcater */}
        <p className="short_description mb-3">
          {blog.shortDescription}
        </p>
        <div className="blog_info flex justify-between items-center">
          <div className="flex justify-start items-center space-x-4">
            <p className="date font-medium text-zinc-800">{blog.blogDate}</p>
            <p className="likes flex justify-center items-center text-zinc-800">
              <ThumbsUp className="mr-1" />
              <span className="font-medium">{blog.likesNumber}</span>
            </p>
            <p className="comments flex justify-center items-center text-zinc-800">
              <MessageCircle className="mr-1" />
              <span className="font-medium">{blog.commentsNumber}</span>
            </p>
          </div>
          <div className="text-zinc-800">
            <button>
              <Save />
            </button>
          </div>
        </div>
      </div>
      <div className="image w-[20%] ml-4">
        <img
          className="w-full h-full"
          src="https://images.unsplash.com/photo-1742268351444-7e153a9fb747?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8"
          alt="Problem in Image"
        />
      </div>
    </div>
  );
};

export default Blog;
