import React, { useEffect, useState, useContext } from "react";
import Blog from "./Blog";
import { BlogContext } from "../contexts/context";
import axios from "axios";
import Loading from "../components/Loading";
import { UserContext } from "../contexts/userContext";
import { blogChoiceContext } from "../contexts/blogChoiceContext";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [IsLoading, setIsLoading] = useState(true);
  const [userInfo] = useContext(UserContext);
  const [blogChoice] = useContext(blogChoiceContext);

  // This Is Not Not Blogs that was created by User
  async function getRandomBlogs() {
    setBlogs([]);
    setIsLoading(true);
    try {
      await axios
        .get("http://127.0.0.1:3000/blog/getRandomBlogs")
        .then((res) => {
          console.log(res.data);
          setBlogs(res.data);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }

  // This Is The blogs That Was Saved From User
  async function getSavedBlogs() {
    setBlogs([]);
    setIsLoading(true);
    try {
      await axios
        .get("http://127.0.0.1:3000/save/getSavedBlog", {
          withCredentials: true, // for send the set-cookie header
        })
        .then((res) => {
          console.log(res.data);
          setBlogs(res.data);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  }

  // This Is The blogs That Was Saved From User
  async function getUserBlogs() {
    setBlogs([]);
    setIsLoading(true);
    try {
      await axios
        .get(`http://127.0.0.1:3000/blog/getUserBlogs/${userInfo.id}`, {
          withCredentials: true,
        })
        .then((res) => {
          console.log(res.data);
          setBlogs(res.data);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  }

  useEffect(() => {
    console.log()
    if (userInfo && userInfo.id) {
      if (blogChoice === "Saved") {
        getSavedBlogs();
      } else if (blogChoice === "For You") {
        getRandomBlogs();
      } else if (blogChoice === "Your Blogs") {
        getUserBlogs();
      } else {
        return 0;
      }
    } else if (blogChoice === "For You") {
      getRandomBlogs();
    }
  }, [userInfo, blogChoice]);

  return (
    <div className="blogs mt-5 w-full mr-4">
      {!userInfo.username && blogChoice !== "For You" ? (
        <p className="text-center text-gray-500 text-xl mt-10">
          No blog posts available yet.
        </p>
      ) : IsLoading === false && blogs.length === 0 ? (
        <p className="text-center text-gray-500 text-xl mt-10">
          No blog posts available yet.
        </p>
      ) : IsLoading ? (
        <Loading></Loading>
      ) : (
        blogs.map((blog, index) => {
          return (
            <BlogContext.Provider key={index} value={blog}>
              <Blog blogs={blogs} setBlogs={setBlogs}></Blog>
            </BlogContext.Provider>
          );
        })
      )}
    </div>
  );
};

export default Blogs;
