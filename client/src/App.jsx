import Home from "./pages/Home";
import { Routes, Route } from "react-router";
import LoginPage from "./pages/LoginPage";
import Layout from "./components/Layout";
import Loading from "./components/Loading";
import { Toaster } from "react-hot-toast";
import { useState } from "react";
import { UserContext } from "./contexts/userContext";

function App() {
  const [userInfo, setUserInfo] = useState({});
  return (
    <div className="w-full min-h-screen">
      <UserContext.Provider value={[userInfo, setUserInfo]}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home></Home>}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/loading" element={<Loading />}></Route>
          </Route>
        </Routes>
        <Toaster />
      </UserContext.Provider>
    </div>
  );
}

export default App;
