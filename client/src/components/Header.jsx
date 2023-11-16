import "../css/header.css";
import { useState } from "react";
import {
  Button,
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavLink,
} from "reactstrap";
import {Link} from "react-router-dom"
import omWhiteLogo from "../assets/omWhiteLogo.png";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const [deviceWidth, _] = useState(0);

  return (
    <>
      <Navbar expand={deviceWidth} className="navbar-container">
        <Link to="/">
          <div className="nav-logo2"></div>
          <img src={omWhiteLogo} alt="OrganizeMe-Logo" id="nav-logo" />
        </Link>

        <div className="nav-links">
          <Link to="/features" id="feat">
            Features
          </Link>
          <Link to="/about" id="about">
            About
          </Link>
          <Link to="/auth/login" id="login">
            Login
          </Link>
          <Link to="/auth/register"><button className="start-free-btn">Try for free</button></Link>
        </div>

        <NavbarToggler onClick={toggle} />
        <Collapse
          isOpen={isOpen}
          navbar
        >
          <Nav className="burger-menu" navbar>
            <div className="burger-menu-container">
              <Link to="/features" id="feat">
                Features
              </Link>
              <Link to="/about" id="about">
                About
              </Link>
              <Link to="/auth/login" id="login">
                Login
              </Link>
              <Link>
                <Button
                  type="button"
                  className="btn btn-success mx-auto started-btn1"
                >
                  <Link to="/auth/Register">Start for free </Link>
                </Button>
              </Link>
            </div>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
}

export default Header;
