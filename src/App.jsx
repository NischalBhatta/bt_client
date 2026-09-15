import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Login from "./pages/Login.jsx";

import SignUp from "./pages/SignUp.jsx";

function App() {
  return (
    <div className="wrapper">
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
