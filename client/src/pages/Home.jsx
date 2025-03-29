import React from "react";
import Blogs from "./Blogs";
import Aside from "./Aside";
import Nav from "./Nav";

const Home = () => {
  return (
    <div className="home mx-24 mt-10 flex justify-start items-start">
      <div className="w-[60%]">
        <Nav></Nav>
        <Blogs></Blogs>
      </div>
      <Aside></Aside>
    </div>
  );
};

export default Home;
