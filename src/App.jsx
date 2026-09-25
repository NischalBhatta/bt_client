import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Login from "./pages/Login.jsx";

import DefaultLayout from "./layout/DefaultLayout.jsx";
import SignUp from "./pages/Signup.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Transaction from "./pages/Transaction.jsx";
import Auth from "./auth/Auth.jsx";
import { useEffect } from "react";
import { autoLogin } from "./utils/users.js";
import { useUser } from "./context/UserContext.jsx";

function App() {
  const { user, setUser } = useUser();

  useEffect(() => {
    !user?._id && updateUser();
  }, [user?._id]);

  const updateUser = async () => {
    const user = await autoLogin();
    console.log(user);
    setUser(user);
  };
  return (
    <div className="wrapper">
      <ToastContainer />
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<Login />} />
          <Route path="signup" element={<SignUp />} />

          <Route
            path="dashboard"
            element={
              <Auth>
                <Dashboard />
              </Auth>
            }
          />

          <Route
            path="transaction"
            element={
              <Auth>
                <Transaction />
              </Auth>
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
