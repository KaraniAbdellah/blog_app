import React from "react";
import { Plus } from "lucide-react";
import { Link } from "react-router";
import { useContext } from "react";
import { blogChoiceContext } from "../contexts/blogChoiceContext";

const Nav = () => {
  const [blogChoice, setBlogChoice] = useContext(blogChoiceContext);
  console.log(blogChoice);

  const handleActive = (e) => {
    document
      .querySelectorAll(".showMe")
      .forEach((ele) => ele.classList.remove("showMe"));
    if (e.target.localName === "button") {
      e.target.classList.add("showMe");
      setBlogChoice(e.target.textContent);
    } else {
      setBlogChoice(e.target.parentElement.textContent);
      e.target.parentElement.classList.add("showMe");
    }
  };
  return (
    <nav className="flex sticky top-0 bg-white pb-2 mb-4 justify-start items-center border-b">
      <Link to="/write">
        <button className="mr-3 text-gray-700 hover:bg-gray-200 p-2 rounded-full">
          <Plus />
        </button>
      </Link>
      <button
        onClick={(e) => handleActive(e)}
        className="mr-3 group text-gray-700 hover:text-gray-900 p-2 rounded-full relative"
      >
        <span
          className="group-[.showMe]:before:absolute before:w-[70%] before:h-[1px] 
                before:bg-zinc-900 group-[.showMe]:text-black group-[.showMe]:font-medium before:top-12"
        >
          For You
        </span>
      </button>

      <button
        onClick={(e) => handleActive(e)}
        className="mr-3 group showMe text-gray-700 hover:text-gray-900 p-2 rounded-full relative"
      >
        <span
          className="group-[.showMe]:before:absolute before:w-[70%] before:h-[1px] 
                before:bg-zinc-900 group-[.showMe]:text-black group-[.showMe]:font-medium before:top-12"
        >
          Your Blogs
        </span>
      </button>
      <button
        onClick={(e) => handleActive(e)}
        className="mr-3 group text-gray-700 hover:text-gray-900 p-2 rounded-full relative"
      >
        <span
          className="group-[.showMe]:before:absolute before:w-[70%] before:h-[1px] 
                before:bg-zinc-900 group-[.showMe]:text-black group-[.showMe]:font-medium before:top-12"
        >
          Saved
        </span>
      </button>
    </nav>
  );
};

export default Nav;
