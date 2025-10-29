import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import nextlevelabout from "../../Assets/newChildPagesAssets/IOSDevelopment/nextlevel-about.webp";
import { Link } from "react-router-dom";

const IOSAboutCompany = (props) => {
  return (
    <section className="iosaboutcompany-sec">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Image Section */}
          <div
            className="col-lg-4"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-offset="50"
          >
            <div
              className="ios-about-bannerimg"
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <img src={nextlevelabout} alt="img" />
            </div>
          </div>

          {/* Right Text Section */}
          <div
            className="col-lg-8"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-offset="50"
          >
            <div className="ios-about-txt">
              <h6
                data-aos="fade-left"
                data-aos-duration="800"
                data-aos-delay="100"
              >
                About IOS Development
              </h6>
              <h2
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                Crafting Next-Level <span>IOS Applications</span> for Modern
                Users
              </h2>
              <p
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-delay="300"
              >
                At California Web Coders, we create smooth and scalable iOS
                applications built with precision and creativity. As a leading
                Swift app development company in California, we deliver fast and
                stable apps tailored to your goals. Our iOS UI/UX design
                services in California focus on creating intuitive interfaces
                that make navigation effortless and every interaction enjoyable.
              </p>
            </div>

            <div
              className="ios-about-pointflex"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <div
                className="ios-about-points"
                data-aos="fade-up"
                data-aos-delay="250"
                data-aos-duration="900"
              >
                <span>01</span>
                <div className="iosabout-point-txt">
                  <h4>Exceptional Performance</h4>
                  <p>
                    We optimize every app for speed, responsiveness, and
                    consistent reliability.
                  </p>
                </div>
              </div>
              <div
                className="ios-about-points"
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="900"
              >
                <span>02</span>
                <div className="iosabout-point-txt">
                  <h4>Custom Features</h4>
                  <p>
                    Tailored functionalities that adapt to your brand and
                    audience expectations.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="ios-about-pointflex"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="300"
            >
              <div
                className="ios-about-points"
                data-aos="fade-up"
                data-aos-delay="350"
                data-aos-duration="900"
              >
                <span>03</span>
                <div className="iosabout-point-txt">
                  <h4>End-to-End Security</h4>
                  <p>
                    Secure coding and data protection are built into every stage
                    of development.
                  </p>
                </div>
              </div>
              <div
                className="ios-about-points"
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-duration="900"
              >
                <span>04</span>
                <div className="iosabout-point-txt">
                  <h4>Native Experience</h4>
                  <p>
                    Smooth performance using Apple’s best frameworks for
                    flawless compatibility.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="webapp-btnflex"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="400"
            >
              <Link to="/about">Learn More About Us</Link>
              <div
                className="about-number about-number-anchor"
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-delay="500"
              >
                <a href={`tel:${props.phoneNumberLink || "+16197989688"}`}>
                  <span>
                    <FaPhoneAlt />
                  </span>
                  <p>+1 619-798-9688</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IOSAboutCompany;
