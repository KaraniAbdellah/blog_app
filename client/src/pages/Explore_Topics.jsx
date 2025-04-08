import React, { useState } from "react";
import { Search, ThumbsUp, MessageCircle, Calendar } from "lucide-react";
import { ReactTyped } from "react-typed";
import axios from "axios";
import { Link } from "react-router";
import toast from "react-hot-toast";

const ExploreTopics = () => {
  const [searched, setSearched] = useState("");
  const [FiltredBlogs, setFiltredBlogs] = useState([]);
  const topics = [
    "Programming",
    "Music",
    "Technology",
    "Self Development",
    "Machine Learning",
  ];

  async function GetBlogsByCategory(category) {
    setFiltredBlogs([]);
    try {
      await axios
        .get(`http://127.0.0.1:3000/blog/getBlogByCategory/${category}`, {
          withCredentials: true,
        })
        .then((res) => {
          console.log(res.data);
          if (res.data.length === 0) {
            toast("No blog available");
          }
          setFiltredBlogs(res.data);
        });
    } catch (error) {
      console.log(error);
    }
  }

  async function GetBlogsBySearch() {
    setFiltredBlogs([]);
    try {
      await axios
        .get(`http://127.0.0.1:3000/blog/getBlogsBySearch/${searched}`, {
          withCredentials: true,
        })
        .then((res) => {
          if (res.data.length === 0) {
            toast("No blog available");
          }
          setFiltredBlogs(res.data);
        });
    } catch (error) {
      console.log(error);
    }
  }

  const handleChoiceCategory = (e) => {
    GetBlogsByCategory(e.target.textContent);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    GetBlogsBySearch();
    setSearched("");
  };
  return (
    <div className="w-[100%] p-5 flex justify-center flex-col items-center">
      <div className="flex justify-center flex-col items-center w-[90%] md:w-[60%]">
        <div className="categories flex items-center justify-center flex-wrap">
          <button
            className=" bg-gray-100 p-3 m-1 rounded-full
            text-white bg-gradient-to-r from-sky-600 via-sky-700 to-sky-700
             hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-zinc-100 
            font-medium text-sm  text-center"
          >
            Explore Topics
          </button>
          {topics.map((topic, index) => {
            return (
              <button
                onClick={(e) => handleChoiceCategory(e)}
                key={index}
                className="p-3 bg-gray-100 m-1 text-zinc-900 rounded-full text-sm focus:ring-4 focus:outline-none focus:ring-zinc-100 "
              >
                {topic}
              </button>
            );
          })}
        </div>

        <h1 className="text-4xl text-center font-medium my-10 mr-3 bg-gradient-to-r from-sky-600 via-sky-700 to-sky-800 text-transparent bg-clip-text">
          <span>
            <ReactTyped
              strings={["Explore Topics"]}
              typeSpeed={150}
              backSpeed={100}
              loop
            />
          </span>
        </h1>

        <form
          onSubmit={(e) => handleSearch(e)}
          className="search flex justify-start items-center bg-gray-100 rounded-full w-full px-5"
        >
          <Search className="text-gray-400 mr-2" />
          <input
            value={searched}
            onChange={(e) => setSearched(e.target.value)}
            type="text"
            placeholder="Search all topics"
            className="bg-gray-100 p-4 outline-none w-full"
          />
        </form>
        <div className="searched_blogs w-full grid grid-cols-6 gap-3 mt-6 p-4">
          {FiltredBlogs.length != 0 ? (
            FiltredBlogs.map((blog, index) => {
              return (
                <div
                  key={index}
                  className="blog w-full col-span-6 md:col-span-3 bg-white shadow-sm rounded-sm"
                >
                  <div className="overflow-hidden h-48">
                    <img
                      src={blog.blogImage}
                      alt="Blog Image"
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105 rounded-sm"
                    />
                  </div>
                  <div className="user_info flex items-center px-4 py-3 border-b">
                    <img
                      className="w-10 h-10 rounded-full object-cover mr-3"
                      src={blog.owner.userImage}
                      alt="user"
                    />
                    <p className="font-medium text-gray-700">
                      {blog.owner.username}
                    </p>
                  </div>

                  <div className="desc_info p-4">
                    <Link to={`/blog/${blog._id}`}>
                      <h2 className="title text-xl font-bold text-gray-800 mb-2 line-clamp-2">
                        {blog.blogTitle}
                      </h2>
                    </Link>
                    <p className="short_description text-gray-600 line-clamp-3 mb-4">
                      {blog.shortDescription}
                    </p>
                  </div>

                  <div className="blog_info flex justify-between items-center px-4 py-3 bg-gray-50">
                    <p className="date flex items-center text-sm text-gray-500">
                      <Calendar size={16} className="mr-1" />
                      {blog.blogDate}
                    </p>
                    <div className="flex space-x-3">
                      <p className="likes flex items-center text-sm text-gray-500">
                        <ThumbsUp size={16} className="mr-1" />
                        <span>{blog.likesNumber}</span>
                      </p>
                      <p className="comments flex items-center text-sm text-gray-500">
                        <MessageCircle size={16} className="mr-1" />
                        <span>{blog.commentsNumber}</span>
                      </p>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <p className="text-gray-400 text-center w-full col-span-6 font-semibold">
              No blog posts available
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExploreTopics;
