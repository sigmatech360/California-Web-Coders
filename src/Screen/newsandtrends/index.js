import React from "react";
import "./index.css";
import Layout from "../../components/layout";

import ContactForm from "../../components/readytocheat";
import HeroSection from "../../components/Herosection";
import bannerBgImage from "../../Assets/newsTrend-banner-bg.png";
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
      // leftCol="col-lg-6"
      //   rightCol="col-lg-6"
        bgImage={bannerBgImage}
        title="Discover What’s Trending In The Tech And Marketing World."
        para="Browse our latest posts covering online trends, digital tools, and expert opinions that shape modern websites and marketing success."
        // heroimg={Pricingplanheroimg}
      />

      <Trends />
      <ContactForm
        secTitle="Want To Grow Your Business? Let’s Talk!"
        secDescription="We’re always open to feedback, ideas and growth hacks. Let’s discuss your business goals!s"
      />

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
                  Let’s Connect On Social Media!
                </h4>
                <p
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  data-aos-offset="0"
                >
                  Follow California Web Coders on social media for regular
                  updates.
                </p>
                <div
                  className="connect-sm-icons"
                  data-aos="fade-up"
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
                    {/* <i className="bi bi-instagram"></i> */}
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
                    {/* <i className="bi bi-youtube"></i> */}
                    <FaYoutube />
                  </a>
                  <a target="_blank" href="#" className="twitter-icon">
                    {/* <i className="bi bi-twitter"></i> */}
                    <FaTwitter />
                  </a>
                  <a target="_blank" href="#" className="pinterest-icon">
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
