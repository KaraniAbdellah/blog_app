import React from "react";
import { Chrome } from "lucide-react";

const LoginPage = () => {
  return (
    <div className="flex justify-center items-center w-full h-[calc(100vh-80px)]">
      <div className="bg-white w-[30%] shadow-md rounded-md p-6">
        <h1 className="mb-10 text-center font-medium font-serif text-3xl">
          Join Crafting.
        </h1>
        <from className="text-center">
          <p>
            <input
              className="w-full email rounded-sm border-gray-300 border bg-gray-50 mb-2 p-2 outline-none border-non"
              type="email"
              placeholder="Phone number, username, or email"
            />
          </p>
          <p>
            <input
              className="w-full password rounded-sm border-gray-300 border bg-gray-50 mb-2 p-2 outline-none border-non"
              type="password"
              placeholder="Password"
            />
          </p>
          <button className="mx-auto my-2 rounded-sm bg-sky-600 w-full p-2 font-semibold text-white">
            Log In
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

          <button className="flex justify-center w-full items-center">No account? <span className="text-sky-700 font-semibold">Create one</span></button>
        </from>
      </div>
    </div>
  );
};

export default LoginPage;
