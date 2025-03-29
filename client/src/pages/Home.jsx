import React from "react";
import { ThumbsUp, MessageCircle, Save } from "lucide-react";
import Blog from "./Blog";
import Blogs from "./Blogs";

// Should Have Aside and Blogs
const Home = () => {
  return (
    <div className="home mt-10 flex justify-center items-center">
      <div className="blogs w-[80%]">
        <div className="blog w-full bg-gray-100 p-3 mb-3 flex justify-between items-center">
          <div className="info w-[75%]">
            <div className="user_info mb-2">
              <img src="" alt="" />
              <h2 className="font-semibold">Abdellah Karani</h2>
            </div>
            <h2 className="font-semibold text-2xl">
              Exploring Fractals with C: A Journey into Mandelbrot and Beyond
            </h2>
            <p className="short_description mb-3">
              Dive into the world of fractals with C programming. Learn how to
              create stunning Mandelbrot, Julia, and other fractals using
              miniLibX, pthread, and math libraries. A simple guide for
              beginners and enthusiasts!
            </p>
            <div className="blog_info flex justify-between items-center">
              <div className="flex justify-start items-center space-x-4">
                <p className="date font-medium">Sep 30, 2025</p>
                <p className="likes flex justify-center items-center">
                  <ThumbsUp className="mr-1" />
                  <span className="font-medium">100</span>
                </p>
                <p className="comments flex justify-center items-center">
                  <MessageCircle className="mr-1" />
                  <span className="font-medium">100</span>
                </p>
              </div>
              <div className="">
                <button>
                  <Save />
                </button>
              </div>
            </div>
          </div>
          <div className="image w-[20%] ml-4">
            <img
              className="w-[200px] h-[100px]"
              src="https://images.unsplash.com/photo-1742268351444-7e153a9fb747?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
