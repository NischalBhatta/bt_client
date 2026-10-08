import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

import { TbLogin } from "react-icons/tb";
import { SiGnuprivacyguard } from "react-icons/si";
import { RiDashboard2Fill } from "react-icons/ri";
import { FaPiggyBank } from "react-icons/fa6";

import { UserContext, useUser } from "../context/UserContext.jsx";
import { useState } from "react";

const Header = () => {
  const { user, setUser } = useUser();

  const [showMenu, setShowMenu] = useState(false);
  const handleonLogout = () => {
    alert("Logout successfully");
    localStorage.removeItem("accessJWT");
    setUser();
    setShowMenu(false);
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="dark"
      className="bg-body-dark"
      expanded={showMenu}
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          Budget Tracker
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => setShowMenu(true)}
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            {user?._id ? (
              <>
                <Link
                  onClick={() => setShowMenu(true)}
                  className="nav-link"
                  to="/dashboard"
                >
                  <RiDashboard2Fill />
                  Dashboard
                </Link>
                <Link
                  onClick={() => setShowMenu(true)}
                  className="nav-link"
                  to="/transaction"
                >
                  <FaPiggyBank />
                  Transaction
                </Link>
                <Link className="nav-link" onClick={handleonLogout} to="/login">
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
