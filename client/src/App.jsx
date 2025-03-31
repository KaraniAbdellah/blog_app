import Home from "./pages/Home";
import { Routes, Route } from "react-router";
import LoginPage from "./pages/LoginPage";
import Layout from "./components/Layout";
import { Toaster } from 'react-hot-toast';


function App() {

  return (
    <div className="w-full min-h-screen">
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={ <Home></Home>}></Route>
          <Route path="/login" element={<LoginPage/>}></Route>
        </Route>
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
