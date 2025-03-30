import React from "react";
import Blog from "./Blog";
import { BlogContext } from "../contexts/context";

const Blogs = () => {
  const blogs = [
    {
      id: 0,
      ownerImage:
        "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
      owner: "Ahmed",
      blogTitle:
        "Exploring Fractals with C: A Journey into Mandelbrot and Beyond",
      shortDescription:
        "Dive into the world of fractals with C programming. Learn how to create stunning Mandelbrot, Julia.",
      blogDate: "Sep 30, 2025",
      likesNumber: 100,
      commentsNumber: 100,
    },
    {
      id: 0,
      ownerImage:
        "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
      owner: "Ahmed",
      blogTitle:
        "Exploring Fractals with C: A Journey into Mandelbrot and Beyond",
      shortDescription:
        "Dive into the world of fractals with C programming. Learn how to create stunning Mandelbrot, Julia.",
      blogDate: "Sep 30, 2025",
      likesNumber: 100,
      commentsNumber: 100,
    },
    {
      id: 0,
      ownerImage:
        "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
      owner: "Ahmed",
      blogTitle:
        "Exploring Fractals with C: A Journey into Mandelbrot and Beyond",
      shortDescription:
        "Dive into the world of fractals with C programming. Learn how to create stunning Mandelbrot, Julia.",
      blogDate: "Sep 30, 2025",
      likesNumber: 100,
      commentsNumber: 100,
    },
    {
      id: 0,
      ownerImage:
        "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
      owner: "Ahmed",
      blogTitle:
        "Exploring Fractals with C: A Journey into Mandelbrot and Beyond",
      shortDescription:
        "Dive into the world of fractals with C programming. Learn how to create stunning Mandelbrot, Julia.",
      blogDate: "Sep 30, 2025",
      likesNumber: 100,
      commentsNumber: 100,
    },
    {
      id: 0,
      ownerImage:
        "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
      owner: "Ahmed",
      blogTitle:
        "Exploring Fractals with C: A Journey into Mandelbrot and Beyond",
      shortDescription:
        "Dive into the world of fractals with C programming. Learn how to create stunning Mandelbrot, Julia.",
      blogDate: "Sep 30, 2025",
      likesNumber: 100,
      commentsNumber: 100,
    },
    {
      id: 0,
      ownerImage:
        "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
      owner: "Ahmed",
      blogTitle:
        "Exploring Fractals with C: A Journey into Mandelbrot and Beyond",
      shortDescription:
        "Dive into the world of fractals with C programming. Learn how to create stunning Mandelbrot, Julia.",
      blogDate: "Sep 30, 2025",
      likesNumber: 100,
      commentsNumber: 100,
    },
  ];

  return (
    <div className="blogs mt-5 w-full mr-4">
      {blogs.map((blog, index) => {
        return (
          <BlogContext.Provider key={index} value={blog}>
            <Blog></Blog>
          </BlogContext.Provider>
        );
      })}
    </div>
  );
};

export default Blogs;
