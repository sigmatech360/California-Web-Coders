import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { FaPhoneAlt } from "react-icons/fa";
import "./index.css";
import logo from "../../Assets/logo.png";
import { IoCallSharp } from "react-icons/io5";
import { RiMailSendLine } from "react-icons/ri";
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";


function Header() {
  return (
    <>
      <section className="uperheader ">
      <div className="container text-white d-flex justify-content-between align-items-center px-3 py-2">
      {/* Left side - Add logo or placeholder for alignment */}
      <div></div>

      {/* Right side - Contact details */}
      <div className="d-flex align-items-center">
        <div className="me-3 d-flex gap-2 align-items-center">
          {/* <i className="bi bi-telephone me-1"></i>  */}

          <FaPhoneAlt/>
          <span>+1-409-798-9688</span>
        </div>
        <div className="d-flex gap-2 align-items-center">
          {/* <i className="bi bi-envelope me-1"></i> */}
          <RiMailSendLine/>
          <span>hello@lorem.com</span>
        </div>
      </div>
    </div>
      </section>
      <section className="navbar-section">
      <div className="container">
        <Navbar expand="lg" className="navbar-custom" variant="light">
          <Container>
            {/* Logo Section */}
            <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
              <img
                src={logo}
                alt="California Web Coders Logo"
                className="header-icon"
              />
            </Navbar.Brand>

            {/* Responsive Toggler */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Navbar.Collapse id="basic-navbar-nav">
              {/* Navigation Links */}
              <Nav className="ms-auto navbar-nav-custom">
                <Nav.Link as={Link} to="/" className="nav-link-custom">
                  Home
                </Nav.Link>

                <NavDropdown
                  title="Services"
                  id="navbarScrollingDropdown"
                  className="nav-dropdown-custom"
                >
                  <NavDropdown.Item as={Link} to="/services/wordpress-webdesignservices">
                  wordpress-webdesignservices
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/services/action2">
                    Another Action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} to="/services/action3">
                    Something Else Here
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown
                  title="Our Work"
                  id="navbarScrollingDropdown"
                  className="nav-dropdown-custom"
                >
                  <NavDropdown.Item as={Link} to="/our-work/action1">
                    Action
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/our-work/action2">
                    Another Action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} to="/our-work/action3">
                    Something Else Here
                  </NavDropdown.Item>
                </NavDropdown>

                <Nav.Link as={Link} to="/about" className="nav-link-custom">
                  About Us
                </Nav.Link>
              </Nav>

              {/* Contact Us Button */}
              <Button
                as={Link}
                to="/contact"
                variant="light"
                className="contact-btn ms-lg-3 mt-3 mt-lg-0"
              >
                Contact Us
              </Button>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </section>
    </>
  );
}

export default Header;
