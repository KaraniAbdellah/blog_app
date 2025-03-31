import Home from "./pages/Home";
import { Routes, Route } from "react-router";
import LoginPage from "./pages/LoginPage";
import Layout from "./components/Layout";
import "dotenv/config";

function App() {
  return (
    <div className="w-full min-h-screen">
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={ <Home></Home>}></Route>
          <Route path="/login" element={<LoginPage/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
