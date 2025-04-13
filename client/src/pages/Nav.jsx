import React, { useEffect } from "react";
import { Plus } from "lucide-react";
import { Link } from "react-router";
import { useContext } from "react";
import { blogChoiceContext } from "../contexts/blogChoiceContext";
import { UserContext } from "../contexts/userContext";

const Nav = () => {
  const [blogChoice, setBlogChoice] = useContext(blogChoiceContext);
  const [userInfo] = useContext(UserContext);

  useEffect(() => {
    const savedBlogChoice = localStorage.getItem("blogChoice");
    if (savedBlogChoice) {
      setBlogChoice(savedBlogChoice);
      
      document.querySelectorAll("button").forEach(button => {
        if (button.textContent.trim() === savedBlogChoice) {
          button.classList.add("showMe");
        } else {
          button.classList.remove("showMe");
        }
      });
    }
  }, [setBlogChoice]);

  const handleActive = (e) => {
    document
      .querySelectorAll(".showMe")
      .forEach((ele) => ele.classList.remove("showMe"));
    
    let selectedChoice = "";
    
    if (e.target.localName === "button") {
      e.target.classList.add("showMe");
      selectedChoice = e.target.textContent.trim();
    } else {
      e.target.parentElement.classList.add("showMe");
      selectedChoice = e.target.parentElement.textContent.trim();
    }
    
    setBlogChoice(selectedChoice);
    
    localStorage.setItem("blogChoice", selectedChoice);
  };

  return (
    <nav className="flex sticky top-0 bg-white pb-2 mb-4 justify-start items-center border-b">
      {userInfo && userInfo.username ? (
        <Link to="/write">
          <button className="mr-3 text-gray-700 hover:bg-gray-200 p-2 rounded-full">
            <Plus />
          </button>
        </Link>
      ) : null}
      <button
        onClick={(e) => handleActive(e)}
        className={`mr-3 group text-gray-700 hover:text-gray-900 p-2 rounded-full relative ${blogChoice === "For You" ? "showMe" : ""}`}
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
        className={`mr-3 group text-gray-700 hover:text-gray-900 p-2 rounded-full relative ${blogChoice === "Your Blogs" ? "showMe" : ""}`}
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
        className={`mr-3 group text-gray-700 hover:text-gray-900 p-2 rounded-full relative ${blogChoice === "Saved" ? "showMe" : ""}`}
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