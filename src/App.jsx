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

function App() {
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
