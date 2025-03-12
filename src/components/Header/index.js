import React from "react";

import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { FaPhoneAlt } from "react-icons/fa";
import "./index.css";

import { RiMailSendLine } from "react-icons/ri";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

import logo from "../../Assets/logo.png";

function Header() {
  return (
    <>
      <section className="uperheader ">
        <div className="container px-3 py-2">
          <div className="row">
            <div className="col-md-12">
              <div className="d-flex align-items-center justify-content-end gap-3">
                <div className="d-flex gap-2 align-items-center">
                  <FaPhoneAlt />
                  <span>+1-409-798-9688</span>
                </div>
                <div className="d-flex gap-2 align-items-center">
                  <RiMailSendLine />
                  <span>hello@lorem.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="navbar-section">
          <Navbar expand="lg" className="navbar-custom" variant="light">
            <Container>
              <Navbar.Brand
                as={Link}
                to="/"
                className="justify-content-start"
              >
                <img
                  src={logo}
                  alt="California Web Coders Logo"
                  className="header-icon"
                />
              </Navbar.Brand>

              <Navbar.Toggle aria-controls="basic-navbar-nav" />

              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto navbar-nav-custom">
                  <Nav.Link as={Link} to="/" className="nav-link-custom">
                    Home
                  </Nav.Link>
                  <NavDropdown
                    title="Services"
                    id="navbarScrollingDropdown"
                    className="nav-dropdown-custom"
                  >
                    <NavDropdown.Item
                      as={Link}
                      to="/services/wordpress-webdesignservices"
                    >
                      wordpress-webdesignservices
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item as={Link} to="/pricing-plan">
                      Pricing-plan
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item as={Link} to="/news-trends">
                      News-Trends
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/get-intouch">
                      Get-intouch
                    </NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown
                    title="Our Work"
                    id="navbarScrollingDropdown"
                    className="nav-dropdown-custom"
                  >
                    <NavDropdown.Item as={Link} to="/our-work">
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
                  <Nav.Link as={Link} to="/contact" className="nav-link-custom contact-button">
                  Contact Us
                  </Nav.Link>
                </Nav>

                {/* Contact Us Button */}
                {/* <Button
                  as={Link}
                  to="/contact"
                  variant="light"
                  className="contact-btn ms-lg-3 mt-3 mt-lg-0"
                >
                  Contact Us
                </Button> */}
              </Navbar.Collapse>
            </Container>
          </Navbar>

      </section>
    </>
  );
}

export default Header;
