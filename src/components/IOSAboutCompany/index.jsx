import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import nextlevelabout from "../../Assets/newChildPagesAssets/IOSDevelopment/nextlevel-about.webp"
import { Link } from "react-router-dom";

const IOSAboutCompany = () => {
  return (
    <section className="iosaboutcompany-sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="ios-about-bannerimg">
              <img src={nextlevelabout} alt="img" />
            </div>
          </div>
          <div className="col-lg-8">
            <div className="ios-about-txt">
              <h6>About IOS Development</h6>
              <h2>
                Crafting Next-Level <span>IOS Applications</span> for Modern Users
              </h2>
              <p>
               At California Web Coders, we create smooth and scalable iOS applications built with precision and creativity. As a leading Swift app development company in California, we deliver fast and stable apps tailored to your goals. Our iOS UI/UX design services in California focus on creating intuitive interfaces that make navigation effortless and every interaction enjoyable.
              </p>
            </div>
            <div className="ios-about-pointflex">
              <div className="ios-about-points">
                <span>01</span>
                <div className="iosabout-point-txt">
                  <h4>Exceptional Performance </h4>
                  <p>We optimize every app for speed, responsiveness, and consistent reliability.</p>
                </div>
              </div>
              <div className="ios-about-points">
                <span>02</span>
                <div className="iosabout-point-txt">
                  <h4>Custom Features</h4>
                  <p>Tailored functionalities that adapt to your brand and audience expectations.</p>
                </div>
              </div>
            </div>
            <div className="ios-about-pointflex">
              <div className="ios-about-points">
                <span>03</span>
                <div className="iosabout-point-txt">
                  <h4>End-to-End Security</h4>
                  <p>Secure coding and data protection are built into every stage of development.</p>
                </div>
              </div>
              <div className="ios-about-points">
                <span>04</span>
                <div className="iosabout-point-txt">
                  <h4>Native Experience</h4>
                  <p>Smooth performance using Apple’s best frameworks for flawless compatibility.</p>
                </div>
              </div>
            </div>
            <div className="webapp-btnflex">
              <Link to="/about">Learn More About Us</Link>
              <div className="about-number">
                <span>
                  <FaPhoneAlt />
                </span>
                <p> +1 619-798-9688</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IOSAboutCompany;
