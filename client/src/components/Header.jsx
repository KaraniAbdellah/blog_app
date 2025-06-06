import React, { useContext, useEffect, useState } from "react";
import {
  Search,
  LogIn,
  ArrowUpRight,
  User,
  LogOut,
  FilePenLine,
} from "lucide-react";
import { Link, Navigate, useNavigate } from "react-router";
import axios from "axios";
import { UserContext } from "../contexts/userContext";
import Loading from "./Loading";

const Header = () => {
  const [showExploreTopics, setShowExploreTopics] = useState(false);
  const [Profile, setProfile] = useState(false);
  const [userInfo, setUserInfo] = useContext(UserContext);
  const navigate = useNavigate();

  const getUserProfile = async () => {
    try {
      await axios
        .get(`${import.meta.env.VITE_SERVER_URL}/user/profile`, {
          withCredentials: true,
        })
        .then((res) => {
          setUserInfo(res.data);
          console.log(res.data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  async function Logout() {
    await axios
      .get(`${import.meta.env.VITE_SERVER_URL}/user/logout`, {
        withCredentials: true,
      })
      .then((res) => {
        setUserInfo({});
        setProfile(false);
        navigate("/loading");
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      });
  }
  const username = userInfo.username;

  useEffect(() => {
    // const controller = new AbortController();
    // const signal = controller.signal;
    getUserProfile();
    // return () => controller.abort();
  }, []);

  return (
    <header className="h-[70px] border px-8 bg-gray-50 w-full flex justify-between items-center">
      <div className="logo flex justify-between items-center">
        <a
          href="/"
          className="font-semibold md:block hidden font-serif text-3xl mr-3 bg-gradient-to-r from-sky-400 via-sky-500 to-sky-600 text-transparent bg-clip-text"
        >
          Crafting
        </a>
        <div className="search rounded-full relative bg-gray-100 p-2 flex justify-start items-center">
          <Search className="text-gray-300 mr-2" />
          <input
            onFocus={() => setShowExploreTopics(true)}
            onBlur={() => setTimeout(() => setShowExploreTopics(false), 150)} // delay to allow click
            className="bg-gray-100 group outline-none text-black w-full"
            type="text"
            placeholder="Search"
          />
          {showExploreTopics && (
            <div
              onMouseDown={() => {
                setShowExploreTopics(false);
                navigate("/explore-topics");
              }}
              className="explore_topics flex justify-between top-11 items-center cursor-pointer text-zinc-600
      hover:text-zinc-900 absolute bg-white w-full px-4 py-4 shadow-lg
      before:absolute before:border-b-8 before:border-b-white
      before:border-t-8 before:border-t-transparent 
      before:border-r-8 before:border-r-transparent 
      before:border-l-8 before:border-l-transparent 
      p-10 left-5 before:top-[-14px] z-[200]"
            >
              <p>Explore Topics</p>
              <p>
                <ArrowUpRight />
              </p>
            </div>
          )}
        </div>
      </div>
      <nav className="flex relative">
        {username ? (
          <div className="flex justify-between items-center">
            <Link to="/write">
              <button className="flex hover:bg-sky-100 rounded-md border hover:transition-all px-3 py-2">
                <FilePenLine className="text-sky-400 mr-2 font-normal" />
                <p className="text-sky-400">Write</p>
              </button>
            </Link>
            {userInfo.userImage ? (
              <button
                onClick={() => setProfile(!Profile)}
                className="w-[35px] h-[35px] flex hover:bg-white transition-all rounded-full ml-2"
              >
                <img
                  src={userInfo.userImage}
                  className="w-full h-full rounded-full"
                  alt="Profile Image"
                />
              </button>
            ) : (
              <p>...</p>
            )}

            <ul
              className={`
          bg-white text-start absolute w-full z-[1000] top-[55px] left-0 px-4 py-3 shadow-md
          ${Profile ? "block" : "hidden"}`}
            >
              <li className="text-sm mb-4 text-center text-sky-500 font-medium">@{userInfo.username}</li>
              <Link to="/profile">
                <li className="cursor-pointer flex justify-start items-center text-zinc-600 hover:text-zinc-800 mb-4">
                  <span className="mr-3">
                    <User></User>
                  </span>
                  Profile
                </li>
              </Link>
              <li
                onClick={() => Logout()}
                className="cursor-pointer flex justify-start items-center text-zinc-600 hover:text-zinc-800"
              >
                <span className="mr-3">
                  <LogOut></LogOut>
                </span>
                Log Out
              </li>
            </ul>
          </div>
        ) : (
          <Link to="/login">
            <button className="flex transition-all px-3 py-2 rounded-sm">
              <LogIn className="text-zinc-500 mr-2 font-mono" />
              <p className="text-zinc-500">Login</p>
            </button>
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
