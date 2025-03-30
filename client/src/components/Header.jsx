import React, { useState } from "react";
import { Search, LogIn, ArrowUpRight, User, LogOut } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [showExploreTopics, setShowExploreTopics] = useState(false);
  const [Profile, setProfile] = useState(false);
  return (
    <header className="h-[70px] border px-8 bg-gray-50 w-full flex justify-between items-center">
      <div className="logo flex justify-between items-center">
        <a
          href="/"
          className="font-semibold md:block hidden font-serif text-3xl mr-3 text-zinc-800"
        >
          Crafting
        </a>
        <div className="search rounded-full relative bg-gray-100 p-2 flex justify-start items-center">
          <Search className="text-gray-300 mr-2" />
          <input
            onFocus={() => setShowExploreTopics(true)}
            onBlur={() => setShowExploreTopics(false)}
            className="bg-gray-100 group outline-none text-black w-full"
            type="text"
            placeholder="Search"
          />
          <div
            className={` ${showExploreTopics ? "flex" : "hidden"}
              explore_topics justify-between top-11 items-center cursor-pointer text-zinc-600
           hover:text-zinc-900 absolute bg-white w-full px-4 py-4 z-[100] shadow-lg
           before:absolute before:border-b-8 before:border-b-white
            before:border-t-8 before:border-t-transparent 
            before:border-r-8 before:border-r-transparent 
            before:border-l-8 before:border-l-transparent 
            p-10 left-5 before:top-[-14px]`}
          >
            <p>Explore Topics</p>
            <p>
              {" "}
              <ArrowUpRight />
            </p>
          </div>
        </div>
      </div>
      <nav className="flex relative">
        <Link to="/login">
          <button className="flex transition-all px-3 py-2 rounded-sm">
            <LogIn className="text-zinc-500 mr-2 font-mono" />
            <a href="" className="text-zinc-500">
              Login
            </a>
          </button>
        </Link>
        <button
          onBlur={() => setProfile(false)}
          onClick={() => setProfile(!Profile)}
          className="bg-sky-600  w-[35px] h-[35px] hover:bg-sky-700 transition-all rounded-full ml-2"
        >
          <a href="#" className="font-medium text-white">
            AB
          </a>
        </button>
        <ul
          className={`
          bg-white text-start absolute w-full z-[100] top-[55px] left-0 px-4 py-3 shadow-md
          ${Profile ? "block" : "hidden"}`}
        >
          <li className="cursor-pointer flex justify-start items-center text-zinc-600 hover:text-zinc-800 mb-4">
            <span className="mr-3">
              <User></User>
            </span>
            Profile
          </li>
          <li className="cursor-pointer flex justify-start items-center text-zinc-600 hover:text-zinc-800">
            <span className="mr-3">
              <LogOut></LogOut>
            </span>
            Log Out
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
