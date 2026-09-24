import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

import { TbLogin } from "react-icons/tb";
import { SiGnuprivacyguard } from "react-icons/si";
import { RiDashboard2Fill } from "react-icons/ri";
import { FaPiggyBank } from "react-icons/fa6";

import { UserContext, useUser } from "../context/UserContext.jsx";

const Header = () => {
  const { user, setUser } = useUser();
  // const data = useUser();
  const handleonLogout = () => {
    alert("Logout successfully");
    localStorage.removeItem("accessJWT");
    setUser();
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="dark"
      className="bg-body-dark"
    >
      <Container>
        <Navbar.Brand href="#home">Budget Tracker</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            {user?._id ? (
              <>
                <Link className="nav-link" to="/dashboard">
                  <RiDashboard2Fill />
                  Dashboard
                </Link>
                <Link className="nav-link" to="/transaction">
                  <FaPiggyBank />
                  Transaction
                </Link>
                <Link
                  className="nav-link"
                  onClick={handleonLogout}
                  to="/logout"
                >
                  Logout
                </Link>
              </>
            ) : (
              <>
                <Link className="nav-link" to="/signup">
                  <SiGnuprivacyguard />
                  Sign Up
                </Link>
                <Link className="nav-link" to="/login">
                  <TbLogin />
                  Login
                </Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
