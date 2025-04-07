import Home from "./pages/Home";
import { Routes, Route, Navigate } from "react-router";
import LoginPage from "./pages/LoginPage";
import Layout from "./components/Layout";
import Loading from "./components/Loading";
import CreateBlog from "./pages/createBlog";
import Blog_Details from "./pages/Blog_Details";
import Explore_Topics from "./pages/Explore_Topics"
import { Toaster } from "react-hot-toast";
import { useState } from "react";
import { UserContext } from "./contexts/userContext";
import { blogChoiceContext } from "./contexts/blogChoiceContext";


function App() {
  const [userInfo, setUserInfo] = useState({});
  const [blogChoice, setBlogChoice] = useState("Your Blogs");
  
  return (
    <div className="w-full min-h-screen">
      <UserContext.Provider value={[userInfo, setUserInfo]}>
        <Routes>
          <Route path="/" element={<Layout />}>
              <Route index element={
                <blogChoiceContext.Provider value={[blogChoice, setBlogChoice]}>
                  <Home></Home>
                </blogChoiceContext.Provider>
              }></Route>
            <Route path="/login" element={userInfo.username ? <Navigate to={"/"}></Navigate> : <LoginPage/>}></Route>
            <Route path="/loading" element={<Loading />}></Route>
            <Route path="/write" element={<CreateBlog />}></Route>
            <Route path="/blog/:id" element={<Blog_Details></Blog_Details>}></Route>
            <Route path="/explore-topics" element={<Explore_Topics></Explore_Topics>}></Route>
          </Route>
        </Routes>
        <Toaster />
      </UserContext.Provider>
    </div>
  );
}

export default App;
