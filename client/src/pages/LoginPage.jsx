import React, { useState } from "react";
import { Chrome, AtSign, Lock, User } from "lucide-react";

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div className="flex justify-center items-center w-full h-[calc(100vh-80px)]">
      <div className="bg-white lg:w-[40%] md:w-[60%] w-[90%] shadow-md rounded-md p-6">
        <h1 className="mb-10 text-center font-medium font-serif text-3xl">
          Join Crafting.
        </h1>
        <nav className="mb-5 flex justify-center items-center">
          <button
            onClick={() => setIsLogin(true)}
            className={`bg-gray-200 p-2 w-full font-medium text-zinc-800 ${isLogin ? "active" : ""}`}
          >
            Login
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`bg-gray-200 p-2 w-full font-medium text-zinc-800 ${!isLogin ? "active" : ""}`}
          >
            Registration
          </button>
        </nav>
        {isLogin ? (
          <from className="text-center">
            <div className="flex justify-start p-2 mb-4 items-center w-full email rounded-sm border-gray-300 border bg-gray-50">
              <AtSign className="text-gray-300 font-medium mr-2" />
              <input
                className="w-full email rounded-sm bg-gray-50 outline-none border-non"
                type="email"
                placeholder="Phone number, username, or email"
              />
            </div>
            <div className="flex justify-start p-2 mb-2 items-center w-full password rounded-sm border-gray-300 border bg-gray-50">
              <Lock className="text-gray-300 font-medium mr-2" />
              <input
                className="w-full password rounded-sm bg-gray-50 outline-none border-non"
                type="password"
                placeholder="Password"
              />
            </div>
            <button className="mx-auto my-2 rounded-sm bg-sky-600 w-full p-2 font-semibold text-white">
              Log In
            </button>

            <button onClick={() => setIsLogin(false)} className="flex justify-center w-full items-center">
              <span className="mr-1">No account?</span>
              <span className="text-sky-700 font-semibold">Create one</span>
            </button>
          </from>
        ) : (
          <from className="text-center">
            <div className="flex justify-start p-2 mb-4 items-center w-full email rounded-sm border-gray-300 border bg-gray-50">
              <User className="text-gray-300 font-medium mr-2" />
              <input
                className="w-full email rounded-sm bg-gray-50 outline-none border-non"
                type="email"
                placeholder="Username"
              />
            </div>
            <div className="flex justify-start p-2 mb-4 items-center w-full email rounded-sm border-gray-300 border bg-gray-50">
              <AtSign className="text-gray-300 font-medium mr-2" />
              <input
                className="w-full email rounded-sm bg-gray-50 outline-none border-non"
                type="email"
                placeholder="Phone number, username, or email"
              />
            </div>
            <div className="flex justify-start p-2 mb-2 items-center w-full password rounded-sm border-gray-300 border bg-gray-50">
              <Lock className="text-gray-300 font-medium mr-2" />
              <input
                className="w-full password rounded-sm bg-gray-50 outline-none border-non"
                type="password"
                placeholder="Password"
              />
            </div>
            <button className="mx-auto my-2 rounded-sm bg-sky-600 w-full p-2 font-semibold text-white">
              Register
            </button>

            <p className="text-gray-500 relative my-2">
              <span
                className="before:absolute before:bg-gray-200 before:w-[41%] before:h-[1px] 
            before:bottom-1/2 before:right-0
            after:absolute after:bg-gray-200 after:w-[41%] after:h-[1px] 
            after:bottom-1/2 after:left-0"
              >
                OR
              </span>
            </p>

            <button className="flex my-3 justify-center items-center mx-auto rounded-sm bg-sky-600 text-white w-full p-2">
              <Chrome className="mr-2" />
              <span className="font-medium">Log in with google</span>
            </button>

            <button onClick={() => setIsLogin(true)} className="flex justify-center w-full items-center">
                <span className="mr-2">Already have an account?</span>
              <span className="text-sky-700 font-semibold">Sign in</span>
            </button>
          </from>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
