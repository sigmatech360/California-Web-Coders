import React from "react";
import "./index.css"; // Add any additional styling here
import footerlogo from "../../Assets/footerlogo.png";
import footerlogo1 from "../../Assets/footerlogo2.png";
import footerlogo2 from "../../Assets/footerlogo3.png";
import footerlogo3 from "../../Assets/footerlofo3.png";
import { SiMinutemailer } from "react-icons/si";

function Footer() {
  return (
    <footer className="  text-white py-5">
      <div className="container">
        <div className="row">
          {/* Logo and About */}
          <div className="col-md-4 mb-4">
            <img src={footerlogo} alt="Footer Logo" />
            <p className="para mt-2">
              Lorem Ipsum Dolor Sit Amet Conset Ateur Adipisicing Elit, Sed Do
              Eiusmod...
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-2 mb-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#home" className="footer_list_item  text-white text-decoration-none">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="footer_list_item  text-white text-decoration-none">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="footer_list_item  text-white text-decoration-none">
                  Services
                </a>
              </li>
              <li>
                <a href="#packages" className="footer_list_item  text-white text-decoration-none">
                  Packages
                </a>
              </li>
            </ul>
          </div>

          {/* Info Links */}
          <div className="col-md-3 mb-4">
            <h5>Info</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#faqs" className="footer_list_item  text-white text-decoration-none">
                  FAQ's
                </a>
              </li>
              <li>
                <a href="#contact" className="footer_list_item  text-white text-decoration-none">
                  Contact
                </a>
              </li>
              <li>
                <a href="#terms" className="footer_list_item  text-white text-decoration-none">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#privacy" className="footer_list_item  text-white text-decoration-none">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="col-md-3 mb-4">
            <h5>Contact</h5>
            <p className="contectpara">
              225 Broadway, San Diego,
              <br />
              CA 92101, United States
              <br />
              <span className="footer_list_item">
                <i className="fas fa-phone-alt"></i> +1 619-798-9688
              </span>
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom py-4">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
        {/* Logos Section */}
        <div className="d-flex align-items-center mb-3 mb-md-0">
          <img
            src={footerlogo1}
            alt="DMCA Protected"
            className="me-3 footer-logo"
          />
          <img
            src={footerlogo2}
            alt="DMCA Compliant"
            className="me-3 footer-logo"
          />
          <img
            src={footerlogo3}
            alt="DMCA Verified"
            className="footer-logo"
          />
        </div>

        {/* Newsletter Signup */}
        <div className="newsletter-signup text-center text-md-start">
          <h5 className="mb-2">Subscribe to Our Newsletter</h5>
          <form className="d-flex justify-content-center">
            <div className="sendmailtab">
              <input
                type="email"
                className="emailsend"
                placeholder="Email Address"
              />
              <button type="submit" className="sendbtn btn">
                <SiMinutemailer />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

        {/* Bottom Footer Links */}
        <div className="container d-flex flex-wrap justify-content-between align-items-center">
          <div className="    ">
            <p className="mb-1 d-flex">
              <a href="#terms" className="footer_list_item  text-white text-decoration-none me-3">
                Terms & Conditions
              </a>
              <a
                href="#privacy"
                className="footer_list_item  text-white text-decoration-none me-3"
              >
                Privacy Policy
              </a>
              <a href="#support" className="footer_list_item  text-white text-decoration-none">
                Support
              </a>
            </p>
          </div>
          <div  className="  justify-content-end">
            {" "}
            <p className="mb-0">Copyright © 2024. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
