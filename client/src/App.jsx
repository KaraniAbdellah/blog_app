import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Layout from "./components/Layout";

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
