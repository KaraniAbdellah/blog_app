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
    console.log("Get Random Blogs");
    console.log(blogs);
    console.log(blogChoice);
    await axios
      .get("http://127.0.0.1:3000/blog/getRandomBlogs", {
        withCredentials: true
      })
      .then((res) => {
        console.log(res.data);
        setBlogs(res.data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  // This Is The blogs That Was Saved From User
  async function getSavedBlogs() {
    setBlogs([]);
    console.log("Get Saved Blogs");
    console.log(blogs);
    console.log(blogChoice);
    await axios
      .get("http://127.0.0.1:3000/save/getSavedBlog", {
        withCredentials: true // for send the set-cookie header
      })
      .then((res) => {
        console.log(res.data);
        // setBlogs(res.data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  // This Is The blogs That Was Saved From User
  async function getUserBlogs() {
    setBlogs([]);
    console.log("Get User Blogs");
    console.log(blogs);
    console.log(blogChoice);
    await axios
      .get(`http://127.0.0.1:3000/blog/getUserBlogs/${userInfo.id}`, {
        withCredentials: true
      })
      .then((res) => {
        console.log(res.data);
        setBlogs(res.data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  useEffect(() => {
    if (userInfo && userInfo.id) {
      switch (blogChoice) {
        case "Saved":
          getSavedBlogs();
          break;
        case "For You":
          getRandomBlogs();
          break;
        case "Your Blogs":
          getUserBlogs();
          break;
        default:
          break;
      }
    }
  }, [userInfo, blogChoice]);

  // const blogs = [
  //   {
  //     id: 0,
  //     ownerImage:
  //       "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
  //     owner: "Ahmed",
  //     blogTitle:
  //       "Exploring Fractals with C: A Journey into Mandelbrot and Beyond",
  //     shortDescription:
  //       "Dive into the world of fractals with C programming. Learn how to create stunning Mandelbrot, Julia.",
  //     blogDate: "Sep 30, 2025",
  //     likesNumber: 100,
  //     commentsNumber: 100,
  //   },
  //   {
  //     id: 0,
  //     ownerImage:
  //       "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
  //     owner: "Ahmed",
  //     blogTitle:
  //       "Exploring Fractals with C: A Journey into Mandelbrot and Beyond",
  //     shortDescription:
  //       "Dive into the world of fractals with C programming. Learn how to create stunning Mandelbrot, Julia.",
  //     blogDate: "Sep 30, 2025",
  //     likesNumber: 100,
  //     commentsNumber: 100,
  //   },
  //   {
  //     id: 0,
  //     ownerImage:
  //       "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
  //     owner: "Ahmed",
  //     blogTitle:
  //       "Exploring Fractals with C: A Journey into Mandelbrot and Beyond",
  //     shortDescription:
  //       "Dive into the world of fractals with C programming. Learn how to create stunning Mandelbrot, Julia.",
  //     blogDate: "Sep 30, 2025",
  //     likesNumber: 100,
  //     commentsNumber: 100,
  //   },
  //   {
  //     id: 0,
  //     ownerImage:
  //       "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
  //     owner: "Ahmed",
  //     blogTitle:
  //       "Exploring Fractals with C: A Journey into Mandelbrot and Beyond",
  //     shortDescription:
  //       "Dive into the world of fractals with C programming. Learn how to create stunning Mandelbrot, Julia.",
  //     blogDate: "Sep 30, 2025",
  //     likesNumber: 100,
  //     commentsNumber: 100,
  //   },
  //   {
  //     id: 0,
  //     ownerImage:
  //       "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
  //     owner: "Ahmed",
  //     blogTitle:
  //       "Exploring Fractals with C: A Journey into Mandelbrot and Beyond",
  //     shortDescription:
  //       "Dive into the world of fractals with C programming. Learn how to create stunning Mandelbrot, Julia.",
  //     blogDate: "Sep 30, 2025",
  //     likesNumber: 100,
  //     commentsNumber: 100,
  //   },
  //   {
  //     id: 0,
  //     ownerImage:
  //       "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
  //     owner: "Ahmed",
  //     blogTitle:
  //       "Exploring Fractals with C: A Journey into Mandelbrot and Beyond",
  //     shortDescription:
  //       "Dive into the world of fractals with C programming. Learn how to create stunning Mandelbrot, Julia.",
  //     blogDate: "Sep 30, 2025",
  //     likesNumber: 100,
  //     commentsNumber: 100,
  //   },
  // ];

  return (
    <div className="blogs mt-5 w-full mr-4">
      {blogs.length === 0 ? (
        <p class="text-center text-gray-500 text-xl mt-10">
          No blog posts available yet.
        </p>
      ) : IsLoading ? (
        <Loading></Loading>
      ) : (
        blogs.map((blog, index) => {
          return (
            <BlogContext.Provider key={index} value={blog}>
              <Blog></Blog>
            </BlogContext.Provider>
          );
        })
      )}
    </div>
  );
};

export default Blogs;
