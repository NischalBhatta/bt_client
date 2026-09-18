import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

import { TbLogin } from "react-icons/tb";
import { SiGnuprivacyguard } from "react-icons/si";

const Header = () => {
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
            <Link className="nav-link" to="/signup">
              <SiGnuprivacyguard />
              Sign Up
            </Link>
            <Link className="nav-link" to="/">
              <TbLogin />
              Login
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
