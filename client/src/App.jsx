import { MailMinus } from "lucide-react";
import Header from "./components/Header";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="w-full min-h-screen">
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <Header></Header>
              <Home></Home>
            </main>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
