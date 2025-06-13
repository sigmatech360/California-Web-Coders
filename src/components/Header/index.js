import React from "react";

import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { FaCaretDown, FaCaretRight, FaPhoneAlt } from "react-icons/fa";
import "./index.css";

import { RiMailSendLine } from "react-icons/ri";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, NavLink } from "react-router-dom";

import logo from "../../Assets/logo.png";

function Header() {
  return (
    <>
      <section className="uperheader ">
        <div className="container px-3 py-2">
          <div className="row">
            <div className="col-md-12">
              <div className="uperheader__links d-flex align-items-center justify-content-end flex-wrap">
                <div className="d-flex gap-2 align-items-center">
                  <FaPhoneAlt />
                  <a href="tel:+12818458498">+1 (281) 845-8498</a>
                </div>
                <div className="d-flex gap-2 align-items-center">
                  <RiMailSendLine />
                  <a href="mailto:support@californiawebcoders.com">
                    support@californiawebcoders.com
                  </a>
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
                <NavLink to="/" className="nav-link-custom nav-link">
                  Home
                </NavLink>
                {/* <NavDropdown
                  title="Services"
                  id="navbarScrollingDropdown"
                  className="nav-dropdown-custom"
                >
                  {[
                    { name: "Logo Design", link: "logo-design" },
                    { name: "Web Design", link: "web-design" },
                    { name: "CMS Development", link: "cms-development" },
                    { name: "Digital Marketing", link: "digital-marketing" },
                    { name: "SMM", link: "social-media-marketing" },
                    { name: "SEO", link: "seo" },
                    {
                      name: "Custom Web Development",
                      link: "custom-web-development",
                    },
                    {
                      name: "Mobile App Development",
                      link: "mobile-app-development",
                    },
                  ].map((item, index) => (
                    <NavDropdown.Item
                      as={Link}
                      to={`/services/${item.link}`}
                      key={index}
                      target="_blank"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {item.name}
                    </NavDropdown.Item>
                  ))}
                </NavDropdown> */}

                <NavDropdown
                  title="Services"
                  id="navbarScrollingDropdown"
                  className="nav-dropdown-custom"
                >
                  {/* Regular items */}
                  <NavDropdown.Item
                    as={Link}
                    to="/services/logo-design"
                    target="_blank"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Logo Design
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/services/web-design"
                    target="_blank"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Web Design
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/services/cms-development"
                    target="_blank"
                    onClick={(e) => e.stopPropagation()}
                  >
                    CMS Development
                  </NavDropdown.Item>

                  {/* Digital Marketing with Submenu */}
                  <div className="nav-subdropdown-wrapper">
                    <NavDropdown.Item
                      as={Link}
                      to="/services/digital-marketing"
                      target="_blank"
                      className="nav-subdropdown-parent"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Digital Marketing{" "}
                      <span className="submenu-icon d-none d-lg-inline">
                        <FaCaretRight />
                      </span>
                      <span className="submenu-icon d-inline d-lg-none">
                        <FaCaretDown />
                      </span>
                    </NavDropdown.Item>

                    <div className="nav-subdropdown">
                      <NavDropdown.Item
                        as={Link}
                        to="/services/social-media-marketing"
                        target="_blank"
                        onClick={(e) => e.stopPropagation()}
                      >
                        SMM
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        as={Link}
                        to="/services/seo"
                        target="_blank"
                        onClick={(e) => e.stopPropagation()}
                      >
                        SEO
                      </NavDropdown.Item>
                    </div>
                  </div>

                  {/* Continue with other items */}
                  <NavDropdown.Item
                    as={Link}
                    to="/services/custom-web-development"
                    target="_blank"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Custom Web Development
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/services/mobile-app-development"
                    target="_blank"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Mobile App Development
                  </NavDropdown.Item>
                </NavDropdown>

                <NavLink to="/our-work" className="nav-link-custom nav-link">
                  Our Work
                </NavLink>
                <NavLink
                  to="/pricing-plan"
                  className="nav-link-custom nav-link"
                >
                  Pricing Plan
                </NavLink>
                <NavLink to="/blog" className="nav-link-custom nav-link">
                  Blogs
                </NavLink>
                <NavLink to="/about" className="nav-link-custom nav-link">
                  About Us
                </NavLink>
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
