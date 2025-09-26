import React, { useEffect, useState } from "react";

import { Navbar, Nav, Container, Button, Dropdown } from "react-bootstrap";
import { FaCaretDown, FaCaretRight, FaPhoneAlt } from "react-icons/fa";
import "./index.css";

import { RiMailSendLine } from "react-icons/ri";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, NavLink } from "react-router-dom";

import logo from "../../Assets/logo.webp";
import ObfuscatedEmail from "../ObfuscatedEmail";

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
                  <a href="tel:+16193352364">+1 (619) 335-2364</a>
                </div>
                <div className="d-flex gap-2 align-items-center">
                  <RiMailSendLine />
                  {/* <a href="mailto:support@californiawebcoders.com">
                    support<span class="at"></span>californiawebcoders
                    <span class="dot"></span>com
                  </a> */}
                  <ObfuscatedEmail />
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

                <Dropdown className="nav-dropdown-custom">
                  <Dropdown.Toggle
                    as="button"
                    className="custom-toggle nav-link"
                    // role="button"
                    aria-expanded="false"
                  >
                    Services
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    {/* Regular items  */}
                    <NavDropdown.Item
                      as={"a"}
                      href="/logo-design"
                      target="_blank"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Logo Design
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      as={"a"}
                      href="/web-design"
                      target="_blank"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Web Design
                    </NavDropdown.Item>
                    {/* <NavDropdown.Item
                      as={"a"}
                      href="/cms-development"
                      target="_blank"
                      onClick={(e) => e.stopPropagation()}
                    >
                      CMS Development
                    </NavDropdown.Item> */}

                    <div className="nav-subdropdown-wrapper">
                      <NavDropdown.Item
                        as={"a"}
                        href="/cms-development"
                        target="_blank"
                        className="nav-subdropdown-parent"
                        onClick={(e) => e.stopPropagation()}
                      >
                        CMS Development{" "}
                        <span className="submenu-icon d-none d-lg-inline">
                          <FaCaretRight />
                        </span>
                        <span className="submenu-icon d-inline d-lg-none">
                          <FaCaretDown />
                        </span>
                      </NavDropdown.Item>

                      <div className="nav-subdropdown">
                        {/* <NavDropdown.Item
                          as={"a"}
                          href="/cms-solution"
                          target="_blank"
                          onClick={(e) => e.stopPropagation()}
                        >
                          CMS Solution
                        </NavDropdown.Item> */}
                        <NavDropdown.Item
                          as={"a"}
                          href="/shopify-development"
                          target="_blank"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Shopify Development
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          as={"a"}
                          href="/eCommerce-development"
                          target="_blank"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Ecommerce Development
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          as={"a"}
                          href="/wordpress-development"
                          target="_blank"
                          onClick={(e) => e.stopPropagation()}
                        >
                          WordPress Development
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          as={"a"}
                          href="/wix-development"
                          target="_blank"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Wix Development
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          as={"a"}
                          href="/squarespace-development"
                          target="_blank"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Squarespace Development
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          as={"a"}
                          href="/website-maintenance"
                          target="_blank"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Website Maintenance
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          as={"a"}
                          href="/website-revamp"
                          target="_blank"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Website Revamp
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          as={"a"}
                          href="/webflow"
                          target="_blank"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Webflow
                        </NavDropdown.Item>
                      </div>
                    </div>

                    {/* Digital Marketing with Submenu */}
                    <div className="nav-subdropdown-wrapper">
                      <NavDropdown.Item
                        as={"a"}
                        href="/digital-marketing"
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
                          as={"a"}
                          href="/social-media-marketing"
                          target="_blank"
                          onClick={(e) => e.stopPropagation()}
                        >
                          SMM
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          as={"a"}
                          href="/search-engine-optimization"
                          target="_blank"
                          onClick={(e) => e.stopPropagation()}
                        >
                          SEO
                        </NavDropdown.Item>
                      </div>
                    </div>

                    {/* Continue with other items */}
                    <NavDropdown.Item
                      as={"a"}
                      href="/custom-web-development"
                      target="_blank"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Custom Web Development
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      as={"a"}
                      href="/mobile-app-development"
                      target="_blank"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Mobile App Development
                    </NavDropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>


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
