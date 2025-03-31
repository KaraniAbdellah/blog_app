import React, { useState } from "react";
import { Chrome, AtSign, Lock, User, Eye, EyeOff } from "lucide-react";
import { LoginPageSchema } from "../InputValidations/LoginPageInput";
import axios from "axios";
import toast from 'react-hot-toast';

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState({ username: "", email: "", password: "" });
  const [isValid, setIsValid] = useState(false);

  const handleChange = () => {
    setIsLogin(!isLogin);
    setShowPassword(false);
    setIsValid(false);
  };

  const userLogin = async () => {
    try {
      await axios.post(`http://127.0.0.1:3000/user/login`, user).then((res) => {
        console.log(res.data);
      });
      setIsValid(false);
    } catch (error) {
      toast("Login Failed. Try Again later", {duration: 2000, style: {color: "#ED4337", fontWeight: "bold"},});
    }
  };

  const userRegister = async () => {
    try {
      await axios.post(`http://127.0.0.1:3000/user/register`, user).then((res) => {
        console.log(res.data);
      });
      setIsValid(false);
      toast("Registration Success", {duration: 2000, style: {color: "#4BB543", fontWeight: "bold"},});
      setIsLogin(true);
    } catch (error) {
      toast("Registration Failed", {duration: 2000, style: {color: "#ED4337", fontWeight: "bold"},});
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here Input Validation With Yup
    const isValid = await LoginPageSchema.isValid(user);
    console.log(isValid);
    if (isLogin && isValid) {
      userLogin();
    } else if (!isLogin && isValid) {
      userRegister();
    } else {
      setIsValid(true);
    }
  };

  return (
    <div className="flex justify-center items-center w-full h-[calc(100vh-80px)]">
      <div className="bg-white lg:w-[40%] md:w-[60%] w-[90%] shadow-md rounded-md p-6">
        <h1 className="mb-10 text-center font-medium font-serif text-3xl">
          Join Crafting.
        </h1>
        <p
          className={`error_message mb-4 text-center text-red-700 ${
            isValid ? "block" : "hidden"
          }`}
        >
          password should be contain at least 6 characters
        </p>

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
                placeholder="Phone number, username, or email"
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
                placeholder="Phone number, username, or email"
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
