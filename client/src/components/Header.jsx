import React from "react";
import { Search } from "lucide-react";

const Header = () => {
  return (
    <header className="h-[70px] border px-8 bg-gray-50 w-full flex justify-between items-center">
      <div className="logo flex justify-between items-center">
        <a href="#" className="font-semibold text-2xl mr-3 text-zinc-800">
          Crafting
        </a>
        <div className="search rounded-full bg-gray-200 p-2 flex justify-start items-center">
          <Search className="text-gray-500 mr-2"/>
          <input
            className="bg-gray-200 outline-none text-black"
            type="text"
            placeholder="Search"
          />
        </div>
      </div>
      <nav>
        <button className="bg-sky-600 hover:bg-sky-700 transition-all px-3 py-2 rounded-sm">
          <a href="" className="font-medium text-white">
            Login
          </a>
        </button>
        <button className="bg-sky-600 hover:bg-sky-700 transition-all px-3 py-2 rounded-sm ml-2">
          <a href="" className="font-medium text-white">
            Registration
          </a>
        </button>
        <button className="bg-sky-600 w-[40px] h-[40px] hover:bg-sky-700 transition-all px-3 py-1 rounded-full ml-2">
          <a href="" className="font-medium text-white">
            A
          </a>
        </button>
      </nav>
    </header>
  );
};

export default Header;
