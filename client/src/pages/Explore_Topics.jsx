import React, { useState } from "react";
import { Search, ThumbsUp, MessageCircle } from "lucide-react";
import { ReactTyped } from "react-typed";
import axios from "axios";

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
    try {
      await axios.get(`http://127.0.0.1:3000/blog/getBlogByCategory/${category}`, {
        withCredentials: true
      }).then((res) => {
        console.log(res.data);
        setFiltredBlogs(FiltredBlogs);
      })
    } catch (error) {
      console.log(error);
    }
  }
  const handleChoiceCategory = (e) => {
    GetBlogsByCategory(e.target.textContent);

  };
  return (
    <div className="w-[100%] p-5 flex justify-center flex-col items-center">
      <div className="flex justify-center flex-col items-center w-[90%] md:w-[60%]">
        <div className="categories flex items-startjustify-center flex-wrap">
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
        <h1 className="text-4xl text-center font-medium my-5 mr-3 bg-gradient-to-r from-sky-600 via-sky-700 to-sky-800 text-transparent bg-clip-text">
          <span>
            <ReactTyped
              strings={["Explore Topics"]}
              typeSpeed={150}
              backSpeed={100}
              loop
            />
          </span>
        </h1>

        <div className="search flex justify-start items-center bg-gray-100 rounded-full w-full px-5">
          <Search className="text-gray-400 mr-2" />
          <input
            value={searched}
            onChange={(e) => setSearched(e.target.value)}
            type="text"
            placeholder="Search all topics"
            className="bg-gray-100 p-4 outline-none w-full"
          />
        </div>

        <div className="searched_blogs grid grid-cols-6 mt-6">
          <div className="blog col-span-3 bg-red-400 p-3 rounded-sm">
            <img
              src="https://medium.com/@thatguydannyb/what-happens-when-a-black-adoptee-in-a-white-family-realizes-love-isnt-protection-a02f7edb2fdb?source=topic_portal---recommended_stories---adoption---0-107--------------------3157d956_bb3f_47bd_91b6_27de35633239--------------"
              alt="Blog Image"
            />
            <div className="user_info flex justify-start items-center">
              <img
                className="w-[100px]"
                src="https://medium.com/@thatguydannyb?source=topic_portal---recommended_stories---adoption---0-107--------------------3157d956_bb3f_47bd_91b6_27de35633239--------------"
                alt="user"
              />
              Abdellah Karani
            </div>
            <div className="desc_info">
              <p>
                What Happens When a Black Adoptee in a White Family Realizes
                Love Isn't Protection
              </p>
              <p>
                What Happens When a Black Adoptee in a White Family Realizes
                Love Isn't Protection
              </p>
            </div>
            <div className="blog_info flex">
              <p className="date">12, Apr 2025</p>
              <p className="likes flex">
                <ThumbsUp></ThumbsUp> <p>10</p>
              </p>
              <p className="comments flex">
                <MessageCircle></MessageCircle> <p>19</p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreTopics;
