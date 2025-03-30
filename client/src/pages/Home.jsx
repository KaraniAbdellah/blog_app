import React from "react";
import Blogs from "./Blogs";
import Aside from "./Aside";
import Nav from "./Nav";

const Home = () => {
  return (
    <div className="home lg:mx-24 lg:mt-8 m-6 flex justify-between items-start">
      <div className="lg:w-[70%] w-full">
        <Nav></Nav>
        <Blogs></Blogs>
      </div>
      <Aside></Aside>
    </div>
  );
};

export default Home;
