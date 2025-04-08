import React, { useState, useContext } from "react";
import { useNavigate } from "react-router";
import { Chrome, AtSign, Lock, User, Eye, EyeOff } from "lucide-react";
import { LoginPageSchema } from "../InputValidations/LoginPageInput";
import axios from "axios";
import toast from "react-hot-toast";
import { UserContext } from "../contexts/userContext";
import profile from "../assests/profile.png";
import { UseConvertTo64 } from "../hooks/useConverter";

const LoginPage = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    userImage: "",
  });
  const [isValid, setIsValid] = useState(false);
  const [userInfo, setUserInfo] = useContext(UserContext);
  const [isImageSeted, setIsImageSeted] = useState(false);
  const [ProfileImage, setProfileImage] = useState(profile);

  const handleChange = () => {
    setIsLogin(!isLogin);
    setShowPassword(false);
    setIsValid(false);
  };

  const setUserProfile = async (file) => {
    const imageUrl = await UseConvertTo64(file);
    setIsImageSeted(true);
    setProfileImage(imageUrl);
    setUser((prev) => ({ ...prev, userImage: imageUrl }));
    console.log(imageUrl);
  };

  const userLogin = async () => {
    try {
      await axios
        .post(`http://127.0.0.1:3000/user/login`, user, {
          withCredentials: true, // For saving cookie that exit in set-cookie
          // We can use it inside react app
          // Consider the cookie as credentials infomations
        })
        .then((res) => {
          toast.success("Login Success", {
            duration: 2000,
            style: { color: "#4BB543", fontWeight: "bold" },
          });
          setIsValid(false);
          setUserInfo(res.data);
          navigate("/loading");
          setTimeout(() => {
            navigate("/");
          }, 2000);
        });
    } catch (error) {
      console.log(error);
      toast.error("Wrong Credentials", {
        duration: 2000,
        style: { color: "#ED4337", fontWeight: "bold" },
      });
    }
  };

  const userRegister = async () => {
    try {
      await axios
        .post(`http://127.0.0.1:3000/user/register`, user)
        .then((res) => {
          if (res.data.message) {
            toast.error("Email Already Exit", {
              duration: 2000,
              style: { color: "#ED4337", fontWeight: "bold" },
            });
          } else {
            toast.success("Registration Success", {
              duration: 2000,
              style: { color: "#4BB543", fontWeight: "bold" },
            });
            setIsValid(false);
            setIsLogin(true);
          }
        });
    } catch (error) {
      toast.error("Registration Failed", {
        duration: 2000,
        style: { color: "#ED4337", fontWeight: "bold" },
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here Input Validation With Yup
    const isValid = await LoginPageSchema.isValid(user);
    console.log(isValid);
    setIsValid(!isValid);
    if (isLogin && isValid) {
      userLogin();
    }
    if (!isLogin && isValid && user.userImage) {
      userRegister();
    }
    if (!isValid || (!user.userImage && !isLogin)) {
      toast.error("All Input are required", {
        duration: 2000,
        style: { color: "rgb(239 68 68)", fontWeight: "bold" },
      });
    }
  };

  return (
    <div className="flex justify-center items-center w-full min-h-screen p-10">
      <div className="bg-white lg:w-[40%] md:w-[60%] w-[90%] border rounded-md p-6">
        <h1
          className="mb-10 text-center font-medium font-serif text-3xl mr-3 
        bg-gradient-to-r from-sky-600 via-sky-700 to-sky-800 text-transparent bg-clip-text"
        >
          Join Crafting.
        </h1>

        <nav className="mb-5 flex justify-center items-center">
          <button
            onClick={() => handleChange()}
            className={`bg-gray-200 p-2 w-full font-medium text-zinc-800 ${
              isLogin ? "active" : ""
            }`}
          >
            Login
          </button>
          <button
            onClick={() => handleChange()}
            className={`bg-gray-200 p-2 w-full font-medium text-zinc-800 ${
              !isLogin ? "active" : ""
            }`}
          >
            Registration
          </button>
        </nav>
        {isLogin ? (
          <form onSubmit={(e) => handleSubmit(e)} className="text-center">
            <div className="flex justify-start p-2 mb-4 items-center w-full email rounded-sm border-gray-300 border bg-gray-50">
              <AtSign className="text-gray-300 font-medium mr-2" />
              <input
                required
                value={user.email || ""}
                onChange={(e) =>
                  setUser((prev) => ({ ...prev, email: e.target.value }))
                }
                className="w-full email rounded-sm bg-gray-50 outline-none border-non"
                type="email"
                placeholder="Your email..."
              />
            </div>
            <div className="flex justify-start p-2 mb-2 items-center w-full password rounded-sm border-gray-300 border bg-gray-50">
              <Lock className="text-gray-300 font-medium mr-2" />
              <input
                required
                value={user.password || ""}
                onChange={(e) =>
                  setUser((prev) => ({ ...prev, password: e.target.value }))
                }
                className="w-full password rounded-sm bg-gray-50 outline-none border-non"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
              />
              <p
                className="text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <Eye /> : <EyeOff />}
              </p>
            </div>
            <button className="mx-auto my-2 rounded-sm bg-sky-600 w-full p-2 font-semibold text-white">
              Log In
            </button>

            <button
              onClick={() => handleChange()}
              className="flex justify-center w-full items-center"
            >
              <span className="mr-1">No account?</span>
              <span className="text-sky-700 font-semibold">Create one</span>
            </button>
          </form>
        ) : (
          <form onSubmit={(e) => handleSubmit(e)} className="text-center">
            <div className="profile_image bg-gray-100 rounded-full w-[200px] h-[200px] flex justify-center items-center mx-auto">
              <input
                type="file"
                className="hidden"
                id="file-input"
                onChange={(e) => setUserProfile(e.target.files[0])}
              />
              <label htmlFor="file-input" className="cursor-pointer">
                <span className="text-sm text-gray-500">
                  <img
                    className="w-[170px] h-[170px] rounded-full"
                    src={ProfileImage}
                    alt=""
                  />
                </span>
              </label>
            </div>
            <p className="mb-5 text-zinc-700 font-medium mt-2">
              Choice an image
            </p>

            <div className="flex justify-start p-2 mb-4 items-center w-full email rounded-sm border-gray-300 border bg-gray-50">
              <User className="text-gray-300 font-medium mr-2" />
              <input
                required
                value={user.username || ""}
                onChange={(e) =>
                  setUser((prev) => ({ ...prev, username: e.target.value }))
                }
                className="w-full username rounded-sm bg-gray-50 outline-none border-non"
                type="Username"
                placeholder="Username"
              />
            </div>
            <div className="flex justify-start p-2 mb-4 items-center w-full email rounded-sm border-gray-300 border bg-gray-50">
              <AtSign className="text-gray-300 font-medium mr-2" />
              <input
                required
                value={user.email || ""}
                onChange={(e) =>
                  setUser((prev) => ({ ...prev, email: e.target.value }))
                }
                className="w-full email rounded-sm bg-gray-50 outline-none border-non"
                type="email"
                placeholder="Your email..."
              />
            </div>
            <div className="flex justify-start p-2 mb-2 items-center w-full password rounded-sm border-gray-300 border bg-gray-50">
              <Lock className="text-gray-300 font-medium mr-2" />
              <input
                required
                value={user.password || ""}
                onChange={(e) =>
                  setUser((prev) => ({ ...prev, password: e.target.value }))
                }
                className="w-full password rounded-sm bg-gray-50 outline-none border-non"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
              />
              <p
                className="text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <Eye /> : <EyeOff />}
              </p>
            </div>
            <button className="mx-auto my-2 rounded-sm bg-sky-600 w-full p-2 font-semibold text-white">
              Register
            </button>

            <button
              onClick={() => handleChange()}
              className="flex justify-center w-full items-center"
            >
              <span className="mr-2">Already have an account?</span>
              <span className="text-sky-700 font-semibold">Sign in</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
