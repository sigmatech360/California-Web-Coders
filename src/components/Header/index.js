import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import "./index.css";
import logo from "../../Assets/logo.png";
import { IoCallSharp } from "react-icons/io5";
import { RiMailSendLine } from "react-icons/ri";
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";


function Header() {
  return (
    <>
      <section className="uperheader">
        <div className="container">
          <div className="row">
            {/* Empty column for spacing on larger screens */}
            <div className="col-lg-8 d-none d-lg-block"></div>

            {/* Contact Information */}
            <div className="col-12 col-lg-4 text-lg-right text-center">
              <span className="mr-3   gap-2">
                <IoCallSharp />
                +1 619-798-9688
              </span>
              <span>
                <RiMailSendLine />
                hello@lorem.com
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="nabver">
        <div className="container">
          <Navbar expand="lg" className="      ">
            <Container>
              {/* Logo Section */}
              <Navbar.Brand href="/" className=" d-flex align-items-center">
                <img
                  src={logo}
                  alt="California Web Coders Logo"
                  // style={{ width: '30px', marginRight: '10px' }}
                  className="headericon"
                />
              </Navbar.Brand>

              {/* Contact Info */}

              {/* Responsive Toggler */}
              <Navbar.Toggle aria-controls="basic-navbar-nav" />

              <Navbar.Collapse id="basic-navbar-nav">
                {/* Navigation Links */}
                <Nav className="ms-auto">
                  <Link href="/" className=" ">
                    Home
                  </Link>
                 

                  <NavDropdown title="Services" id="navbarScrollingDropdown">
                    <Link href="#action3">Action</Link>
                    <Link href="#action4">
                      Another action
                    </Link>
                    <NavDropdown.Divider />
                    <Link href="#action5">
                      Something else here
                    </Link>
                  </NavDropdown>
                 

                  <NavDropdown title="Our Work" id="navbarScrollingDropdown">
                    <Link href="#action3">Action</Link>
                    <Link href="#action4">
                      Another action
                    </Link>
                    <NavDropdown.Divider />
                    <Link href="#action5">
                      Something else here
                    </Link>
                  </NavDropdown>


                  <Link to="/about" className=" ">
                    About Us
                  </Link>
                </Nav>

                {/* Contact Us Button */}
                <Button
                  href="#contact"
                  variant="light"
                  className="contact ms-lg-3 mt-3 mt-lg-0"
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
