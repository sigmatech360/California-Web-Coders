import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "./index.css"; // Add any additional styling here
import footerlogo from "../../Assets/footerlogo.webp";
import footerlogo1 from "../../Assets/footerlogo2.webp";
import footerlogo2 from "../../Assets/footerlogo3.webp";
import footerlogo3 from "../../Assets/footerlofo3.webp";
import { SiMinutemailer } from "react-icons/si";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { LiaPinterestP } from "react-icons/lia";
import { CiAt } from "react-icons/ci";

function Footer() {
  const [email, setEmail] = useState("");
  const apiUrl = process.env.REACT_APP_API_BASE_URL;

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${apiUrl}/newsletter-subscription`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();
      // alert("Email Submitted Successfully");
      if (result.status) {
        toast.success("Thank you for subscribing to our newsletter!");
        setEmail("");
      } else {
        const messages = result.message;
        Object.keys(messages).forEach((field) => {
          messages[field].forEach((msg) => {
            toast.error(msg);
          });
        });
      }
    } catch (error) {
      // alert("Submission failed. Please try again.");
      toast.error("Submission failed. Please try again.");
    }
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://images.dmca.com/Badges/DMCABadgeHelper.min.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <footer className="main-footer text-white">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-4">
            <Link to={"/"} className="main-footer-logo">
              <img src={footerlogo} alt="Footer Logo" />
            </Link>
            <p className="para mt-2">
              Delivering custom digital solutions with creativity, precision,
              and passion. Your success is our mission.
            </p>

            <div className="connect-sm-icons justify-content-start">
              <a
                href="https://www.facebook.com/people/California-Web-Coders/61560871757077/"
                className="facebook-icon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/californiawebcoders1"
                className="instagram-icon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/company/california-web-coders/"
                className="linkedin-icon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://www.youtube.com/@CaliforniaWebCoders-e8v"
                className="youtube-icon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Youtube"
              >
                <FaYoutube />
              </a>
              <a
                href="https://x.com/californiawebco"
                className="twitter-icon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.pinterest.com/californiawebcoders/"
                className="pinterest-icon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Pinterest"
              >
                <LiaPinterestP />
              </a>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="row">
              <div className="col-md-4 mb-4">
                <h5>Quick Links</h5>
                <div className="main-footer-links">
                  <Link to={"/"} className="main-footer-link">
                    Home
                  </Link>
                  <Link to={"/about"} className="main-footer-link">
                    About Us
                  </Link>
                  <Link to={"/our-work"} className="main-footer-link">
                    Our Work
                  </Link>
                  {/* <Link to={"/blog"} className="main-footer-link">
                    Blogs
                  </Link> */}
                  {/* <Link to={"/services"} className="main-footer-link">
                    Services
                  </Link> */}
                  <Link to={"/pricing-plan"} className="main-footer-link">
                    Packages
                  </Link>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <h5>Info</h5>
                <div className="main-footer-links">
                  {/* <Link to="/?scrollTo=cwc-faq" className="main-footer-link">
                    FAQ's
                  </Link> */}
                  <Link to={"/blog"} className="main-footer-link">
                    Blog
                  </Link>
                  <Link to={"/get-intouch"} className="main-footer-link">
                    Contact
                  </Link>
                  <Link
                    to={"/terms-and-conditions"}
                    className="main-footer-link"
                  >
                    Terms & Conditions
                  </Link>
                  <Link to={"/privacy-policy"} className="main-footer-link">
                    Privacy Policy
                  </Link>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <h5>Contact</h5>
                <p className="contectpara">
                  225 Broadway, San Diego,
                  <br />
                  CA 92101, United States
                  <br />
                  <a href="tel:+12818458498" className="footer_list_item">
                    <i className="fas fa-phone-alt"></i> +1 (281) 845-8498
                  </a>
                  <a
                    href="mailto:support@californiawebcoders.com"
                    className="footer_list_item"
                  >
                    support<span class="at"></span>californiawebcoders<span class="dot"></span>com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom py-4">
          <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
            {/* Logos Section */}
            <div className="d-flex align-items-center mb-3 mb-md-0 footer-dmca-images">
              <a
                href="https://upcity.com/profiles/california-web-coders"
                target="_blank"
                // rel='noopener'
                rel="noreferrer"
              >
                <img
                  src={footerlogo1}
                  alt="WEBSITE DEVELOPMENT"
                  className="me-3 footer-logo"
                />
              </a>
              <a
                href="https://www.dmca.com/r/8mj38w0"
                title="DMCA.com Protection Status"
                target="_blank"
                className="dmca-badge"
                rel="noreferrer"
              >
                <img
                  src={footerlogo3}
                  alt="DMCA Verified"
                  className="footer-protect-img"
                />
              </a>
              {/* <img
                src={footerlogo2}
                alt="DMCA Compliant"
                className="me-3 footer-dmca"
              /> */}
            </div>

            {/* Newsletter Signup */}
            <div className="newsletter-signup text-center text-md-start">
              <h5 className="mb-2">Subscribe to Our Newsletter</h5>
              <form
                className="d-flex justify-content-center"
                onSubmit={handleSubmit}
              >
                <div className="sendmailtab">
                  <input
                    type="email"
                    className="emailsend"
                    placeholder="Email Address"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
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
        <div className="container d-flex flex-wrap justify-content-md-between justify-content-center align-items-center gap-1">
          <div className="    ">
            <p className="mb-1 d-flex">
              <Link
                to="/terms-and-conditions"
                className="footer_list_item  text-white text-decoration-none me-3"
              >
                Terms & Conditions
              </Link>
              <Link
                to="/privacy-policy"
                className="footer_list_item  text-white text-decoration-none me-3"
              >
                Privacy Policy
              </Link>
              {/* <a
                href="#support"
                className="footer_list_item  text-white text-decoration-none"
              >
                Support
              </a> */}
            </p>
          </div>
          <div className="  justify-content-end">
            {" "}
            <p className="mb-0">
              Copyright © {new Date().getFullYear()}. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
