import React, { useState } from "react";
import { Chrome, AtSign, Lock, User, Eye, EyeOff } from "lucide-react";

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = () => {
    setIsLogin(!isLogin);
    setShowPassword(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here Input Validation With Yup
    console.log(email, password, username);
  }

  return (
    <div className="flex justify-center items-center w-full h-[calc(100vh-80px)]">
      <div className="bg-white lg:w-[40%] md:w-[60%] w-[90%] shadow-md rounded-md p-6">
        <h1 className="mb-10 text-center font-medium font-serif text-3xl">
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full email rounded-sm bg-gray-50 outline-none border-non"
                type="email"
                placeholder="Phone number, username, or email"
              />
            </div>
            <div className="flex justify-start p-2 mb-2 items-center w-full password rounded-sm border-gray-300 border bg-gray-50">
              <Lock className="text-gray-300 font-medium mr-2" />
              <input
                onChange={(e) => setPassword(e.target.value)}
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
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full username rounded-sm bg-gray-50 outline-none border-non"
                type="Username"
                placeholder="Username"
              />
            </div>
            <div className="flex justify-start p-2 mb-4 items-center w-full email rounded-sm border-gray-300 border bg-gray-50">
              <AtSign className="text-gray-300 font-medium mr-2" />
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full email rounded-sm bg-gray-50 outline-none border-non"
                type="email"
                placeholder="Phone number, username, or email"
              />
            </div>
            <div className="flex justify-start p-2 mb-2 items-center w-full password rounded-sm border-gray-300 border bg-gray-50">
              <Lock className="text-gray-300 font-medium mr-2" />
              <input
                onChange={(e) => setPassword(e.target.value)}
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
