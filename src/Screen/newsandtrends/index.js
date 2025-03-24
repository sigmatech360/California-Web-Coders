import React from "react";
import "./index.css";
import Layout from "../../components/layout";

import ContactForm from "../../components/readytocheat";
import HeroSection from "../../components/Herosection";
import { LiaPinterestP } from "react-icons/lia";

import Pricingplanheroimg from "../../Assets/Pricingplanheroimg.png";
import { TiSocialLinkedin } from "react-icons/ti";

import {
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  FaFacebookF,
} from "react-icons/fa";

import Trends from "../../components/trends";
const NewsandTrends = () => {
  return (
    <Layout>
      <HeroSection
        title="Insights on tech news and trends"
        para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since."
        heroimg={Pricingplanheroimg}
      />

      <Trends />
      <ContactForm />

      <section className="connectsocialmedia">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8">
              <div className="connectbg">
                <h4
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-offset="0"
                >
                  Connect on Social Media
                </h4>
                <p
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  data-aos-offset="0"
                >
                  Follow Octave Agency on Social Media for regular updates.
                </p>
                <div
                  className="connect-sm-icons"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                  data-aos-offset="0"
                >
                  <a href="#" className="facebook-icon">
                    <FaFacebookF />
                  </a>
                  <a href="#" className="instagram-icon">
                    {/* <i className="bi bi-instagram"></i> */}
                    <FaInstagram />
                  </a>
                  <a href="#" className="linkedin-icon">
                    <FaLinkedinIn />
                  </a>
                  <a href="#" className="youtube-icon">
                    {/* <i className="bi bi-youtube"></i> */}
                    <FaYoutube />
                  </a>
                  <a href="#" className="twitter-icon">
                    {/* <i className="bi bi-twitter"></i> */}
                    <FaTwitter />
                  </a>
                  <a href="#" className="pinterest-icon">
                    <LiaPinterestP />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NewsandTrends;
