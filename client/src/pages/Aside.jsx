import React from "react";
import { Link } from "react-router";

const Aside = () => {
  const topics = [
    "Programming",
    "Music",
    "Technology",
    "Self Development",
    "Machine Learning",
  ];
  return (
    <div className="lg:w-[25%] lg:block hidden mt-2 sticky right-0 top-10 text-start border rounded-lg p-3">
      <h2 className="font-semibold text-lg text-zinc-800">
        Recommended topics
      </h2>
      <nav>
        {topics.map((topic, index) => {
          return (
            <button
              key={index}
              className="p-3 bg-sky-100 text-sky-500 m-1 font-medium border rounded-full text-sm"
            >
              {topic}
            </button>
          );
        })}
      </nav>
      {/* Go to explore-topics */}
      <Link to="/explore-topics">
        <button className="m-1 text-sm font-medium text-sky-500">
          See more topics
        </button>
      </Link>
    </div>
  );
};

export default Aside;
