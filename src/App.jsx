import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Login from "./pages/Login.jsx";

import DefaultLayout from "./layout/DefaultLayout.jsx";
import SignUp from "./pages/Signup.jsx";

function App() {
  return (
    <div className="wrapper">
      <ToastContainer />
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
