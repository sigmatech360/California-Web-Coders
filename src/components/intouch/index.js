import React from "react";
import "./index.css";

import {
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  FaFacebookF,
} from "react-icons/fa";
import { LiaPinterestP } from "react-icons/lia";

import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { RiMailSendLine } from "react-icons/ri";
import { MdOutlineSupportAgent } from "react-icons/md";

const Intouch = () => {
  return (
    <section className="intouch inTouch-sec">
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-6 mb-lg-0 mb-4">
            <div className="inTouch-content">
              <h6 className="sec-head-tag colorBlue">Get In Touch</h6>
              <h2
                className="title"
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-offset="0"
              >
                Don’t hesitate to contact us for{" "}
                <span className="colorBlue"> more information. </span>
              </h2>
              <p
                data-aos="fade-right"
                data-aos-duration="2000"
                data-aos-offset="0"
              >
                We’re here to answer your questions and explore how we can help
                your business grow digitally and strategically.
              </p>
              <h4
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-offset="0"
              >
                Follow our social network
              </h4>
              <p
                data-aos="fade-right"
                data-aos-duration="2000"
                data-aos-offset="0"
              >
                Stay connected with California Web Coders across all platforms
                for the latest updates, insights, and digital marketing tips
                tailored for your brand’s success.
              </p>
              <div
                className="connect-sm-icons justify-content-start"
                data-aos="fade-right"
                data-aos-duration="3000"
                data-aos-offset="0"
              >
                <a
                  target="_blank"
                  href="https://www.facebook.com/people/California-Web-Coders/61560871757077/"
                  className="facebook-icon"
                >
                  <FaFacebookF />
                </a>
                <a
                  target="_blank"
                  href="https://www.instagram.com/californiawebcoders1"
                  className="instagram-icon"
                >
                  <FaInstagram />
                </a>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/company/california-web-coders/"
                  className="linkedin-icon"
                >
                  <FaLinkedinIn />
                </a>
                <a target="_blank" href="#" className="youtube-icon">
                  <FaYoutube />
                </a>
                <a target="_blank" href="#" className="twitter-icon">
                  <FaTwitter />
                </a>
                <a target="_blank" href="#" className="pinterest-icon">
                  <LiaPinterestP />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="row">
              <div className="col-md-6 mb-4">
                <div
                  className="inTouch-icon-box"
                  data-aos="fade-right"
                  data-aos-duration="2000"
                  data-aos-offset="0"
                >
                  <div className="icon-container">
                    <FaMapMarkerAlt color={"#0504a5"} />
                  </div>
                  <div className="inTouch-icon-box-content">
                    <h5>Head Office</h5>
                    <p>225 Broadway, San Diego, CA 92101, United States</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div
                  className="inTouch-icon-box"
                  data-aos="fade-down"
                  data-aos-duration="2000"
                  data-aos-offset="0"
                >
                  <div className="icon-container">
                    <RiMailSendLine color={"#0504a5"} />
                  </div>
                  <div className="inTouch-icon-box-content">
                    <h5>Email Us</h5>
                    <p>
                      <a href="mailto:support@californiawebcoders.com">
                        support@californiawebcoders.com
                      </a>
                      {/* <br />
                      <a href="mailto:support@californiawebcoders.com">
                        support@californiawebcoders.com
                      </a> */}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div
                  className="inTouch-icon-box"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  data-aos-offset="0"
                >
                  <div className="icon-container">
                    <FaPhoneAlt color={"#0504a5"} />
                  </div>
                  <div className="inTouch-icon-box-content">
                    <h5>Call Us</h5>
                    <p>
                      +1 (281) 845-8498
                      {/* <br />
                      +1 609-798-9688 */}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div
                  className="inTouch-icon-box"
                  data-aos="fade-left"
                  data-aos-duration="2000"
                  data-aos-offset="0"
                >
                  <div className="icon-container">
                    <MdOutlineSupportAgent color={"#0504a5"} />
                  </div>
                  <div className="inTouch-icon-box-content">
                    <h5>Follow Us</h5>
                    <p>
                      Follow California Web Coders on Instagram to stay
                      connected with us!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intouch;
