import React from "react";
import { useContext } from "react";
import { UserContext } from "../contexts/userContext";
import { useEffect } from "react";
import axios from "axios";

function Profile() {
  const userInfo = useContext(UserContext);
  console.log(userInfo);
  async function getProfile() {
    const user_profile = await axios.get("http://127.0.0.1:3000/user/profile");
    console.log(user_profile);
  }
  useEffect(() => {
    getProfile();
  }, []);
  return (
    <main className="w-full h-screen flex justify-center items-center bg-green-800">
      <div className="w-[60%] bg-red-50 p-5 rounded-md">
        <div className="back_img flex justify-center items-center flex-col">
          <p className="h-[100px] w-full bg-gradient-to-r from-sky-400 via-sky-500 to-sky-600 rounded-t-md"></p>
          <img
            className="w-[80px] h-[80px] -mt-10 text-center border rounded-full"
            src={userInfo.userImage}
            alt="User Profile"
          />
        </div>
        <div className="user_info">
          <p>{userInfo.username}</p>
          <p>{userInfo.email}</p>
        </div>
      </div>
    </main>
  );
}

export default Profile;
