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
                  <a href="tel:+1-409-798-9688">+1-409-798-9688</a>
                </div>
                <div className="d-flex gap-2 align-items-center">
                  <RiMailSendLine />
                  <a href="mailto:hello@lorem.com">hello@lorem.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="navbar-section">
        <Navbar expand="lg" className="navbar-custom" variant="light">
          <Container>
            <Navbar.Brand as={Link} to="/" className="justify-content-start">
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
                  {[
                    { name: "Web Design", link: "web-design" },
                    { name: "CMS Development", link: "cms-development" },
                    { name: "Digital Marketing", link: "digital-marketing" },
                    { name: "SMM", link: "social-media-marketing" },
                    {
                      name: "Custom Web Development",
                      link: "custom-web-development",
                    },
                    { name: "SEO", link: "seo" },
                    { name: "Logo Design", link: "logo-design" },
                    {
                      name: "Mobile App Development",
                      link: "mobile-app-development",
                    },
                  ].map((item, index) => (
                    <NavDropdown.Item
                      as={Link}
                      to={`/services/${item.link}`}
                      key={index}
                    >
                      {item.name}
                    </NavDropdown.Item>
                  ))}
                </NavDropdown>

                <NavDropdown
                  title="Our Work"
                  id="navbarScrollingDropdown"
                  className="nav-dropdown-custom"
                >
                  <NavDropdown.Item as={Link} to="/our-work">
                    Our Work
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/pricing-plan">
                    Pricing Plan
                  </NavDropdown.Item>
                  {/* <NavDropdown.Divider /> */}
                  <NavDropdown.Item as={Link} to="/news-trends">
                    News Trends
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/get-intouch">
                    Get In Touch
                  </NavDropdown.Item>
                </NavDropdown>

                <Nav.Link as={Link} to="/about" className="nav-link-custom">
                  About Us
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/get-intouch"
                  className="nav-link-custom contact-button"
                >
                  Contact Us
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </section>
    </>
  );
}

export default Header;
