import React, { useContext } from "react";
import { ThumbsUp, MessageCircle, Bookmark, BookmarkCheck } from "lucide-react";
import { BlogContext } from "../contexts/context";
import { UserContext } from "../contexts/userContext";
import { blogChoiceContext } from "../contexts/blogChoiceContext";
import axios from "axios";
import { toast } from "react-hot-toast";

const Blog = () => {
  const blog = useContext(BlogContext);
  const [userInfo] = useContext(UserContext);
  const [blogChoice] = useContext(blogChoiceContext);

  const SaveBlog = async (blogId) => {
    await axios
      .get(`http://127.0.0.1:3000/save/savedBlog/${blogId}`, {
        withCredentials: true, // for send the set-cookie header
      })
      .then((res) => {
        toast.success("Blog Saved Succesfully", {
          duration: 2000,
          style: { color: "#4BB543", fontWeight: "bold" },
        });
      });
  };

  return (
    <article
      id={blog._id}
      className="blog w-full border-b py-4 mb-4 flex flex-col md:flex-row justify-between items-start md:items-center"
    >
      <div className="info flex-1 md:w-3/4 pr-4">
        <header className="user_info mb-2 flex justify-start items-center">
          {userInfo?.userImage ? (
            <img
              className="w-8 h-8 rounded-full mr-2 object-cover"
              src={userInfo.userImage}
              alt={`${userInfo.username || "User"}'s profile`}
            />
          ) : (
            <div
              className="w-8 h-8 rounded-full mr-2 bg-gray-200"
              aria-hidden="true"
            />
          )}
          <h3 className="font-semibold text-zinc-800">
            {userInfo.username || "Anonymous"}
          </h3>
        </header>

        <h2 className="font-semibold md:text-2xl text-lg text-zinc-800 mb-1">
          {blog.blogTitle || "Untitled Blog Post"}
        </h2>

        <p className="short_description mb-3 text-zinc-600">
          {blog.shortDescription}
        </p>

        <div className="blog_info flex justify-between items-center">
          <div className="flex justify-start items-center space-x-4">
            <time className="date font-medium text-zinc-600">
              {blog.blogDate}
            </time>

            <div
              className="likes flex justify-center items-center text-zinc-600"
              aria-label={`${blog.likesNumber || 0} likes`}
            >
              <ThumbsUp size={18} className="mr-1" />
              <span className="font-medium">{blog.likesNumber || 0}</span>
            </div>

            <div
              className="comments flex justify-center items-center text-zinc-600"
              aria-label={`${blog.commentsNumber || 0} comments`}
            >
              <MessageCircle size={18} className="mr-1" />
              <span className="font-medium">{blog.commentsNumber || 0}</span>
            </div>
          </div>

          <button
            className="save-button flex items-center text-zinc-600 hover:text-blue-600 transition-colors"
            aria-label="Save this blog post"
            onClick={() => SaveBlog(blog._id)}
          >
            <BookmarkCheckBookmarkCheck size={18} />
          </button>
        </div>
      </div>

      <div className="image w-full md:w-1/4 mt-3 md:mt-0">
        {blog.ownerImage ? (
          <img
            className="w-full md:w-40 h-24 md:h-28 object-cover transition-all rounded"
            src={blog.ownerImage}
            alt={`Image for ${blog.blogTitle || "blog post"}`}
            loading="lazy"
          />
        ) : (
          <div className="w-full md:w-40 h-24 md:h-28 bg-gray-200 rounded flex items-center justify-center text-gray-400">
            No image
          </div>
        )}
      </div>
    </article>
  );
};

export default Blog;
