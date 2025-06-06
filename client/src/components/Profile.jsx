import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

function Profile() {
  const [userInfo, setUserInfo] = useState([]);
  const [newUserInfo, setNewUserInfo] = useState({
    username: "",
    oldPassword: "",
    newPassword: "",
  });
  async function getProfile() {
    try {
      const user_profile = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/user/getUserById`,
        {
          withCredentials: true,
        }
      );
      setUserInfo(user_profile.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function CheckCredentials() {
    try {
      await axios
        .put(`${import.meta.env.VITE_SERVER_URL}/user/updateUserInfo`, newUserInfo, {
          withCredentials: true,
        })
        .then((res) => {
          toast.success("Update Credentiels Successfully");
        });
    } catch (error) {
      toast.error("Incorrect Credentiels");
      console.log(error);
    }
  }

  function EditProfile() {
    if (
      !newUserInfo.username ||
      !newUserInfo.oldPassword ||
      !newUserInfo.newPassword
    ) {
      toast.error("Make Sure To Fill all Inputs");
      return;
    }
    CheckCredentials();
  }

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <main className="w-full mt-16 mb-10 flex justify-center items-center">
      <div className="w-[90%] sm:w-[80%] md:w-[60%] bg-gray-50 p-5 rounded-md border">
        <div className="back_img flex justify-center items-center flex-col">
          <p className="h-[100px] w-full bg-gradient-to-r from-sky-400 via-sky-500 to-sky-600 rounded-t-md"></p>
          <img
            className="w-[80px] h-[80px] -mt-10 text-center border rounded-full"
            src={userInfo.userImage}
            alt="User Profile"
          />
        </div>
        <div className="user_info text-center">
          <p className="font-medium">@{userInfo.username}</p>
          <p className="font-medium">{userInfo.email}</p>
        </div>
        <form
          onSubmit={() => EditProfile()}
          className="flex w-full flex-col justify-center items-center mt-5"
        >
          <div className="set_user_name w-full">
            <label htmlFor="new_username">
              <span className="text-red-600">*</span> New Username:{" "}
            </label>
            <input
              onChange={(e) =>
                setNewUserInfo({ ...newUserInfo, username: e.target.value })
              }
              id="new_username"
              className="mb-2 border w-full p-2 outline-none mt-1"
              type="text"
              placeholder="New Username"
            />
          </div>
          <div className="oldPassword w-full">
            <label htmlFor="oldPassword">
              <span className="text-red-600">*</span> Old Password:{" "}
            </label>
            <input
              onChange={(e) =>
                setNewUserInfo({ ...newUserInfo, oldPassword: e.target.value })
              }
              id="oldPassword"
              className="mb-2 border w-full p-2 outline-none mt-1"
              type="text"
              placeholder="Old Password"
            />
          </div>
          <div className="set_password w-full">
            <label htmlFor="set_password">
              <span className="text-red-600">*</span> New Password:{" "}
            </label>
            <input
              onChange={(e) =>
                setNewUserInfo({ ...newUserInfo, newPassword: e.target.value })
              }
              id="set_password"
              className="mb-2 border w-full p-2 outline-none mt-1"
              type="text"
              placeholder="New Password"
            />
          </div>
        </form>
        <hr />
        <button
          onClick={() => EditProfile()}
          className="px-8 py-2 block mx-auto mt-2 bg-gradient-to-r from-sky-400 via-sky-500 to-sky-600 text-white font-medium rounded-md hover:from-sky-500 hover:to-sky-600 transition duration-200 shadow-sm"
        >
          Edit Information
        </button>
      </div>
    </main>
  );
}

export default Profile;
