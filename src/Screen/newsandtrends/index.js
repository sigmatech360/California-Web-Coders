import React, { lazy, Suspense } from "react";
import "./index.css";
import Layout from "../../components/layout";

import ContactForm from "../../components/readytocheat";
import HeroSection from "../../components/Herosection";
import bannerBgImage from "../../Assets/newsTrend-banner-bg.webp";
import { LiaPinterestP } from "react-icons/lia";

import Pricingplanheroimg from "../../Assets/Pricingplanheroimg.webp";
import { TiSocialLinkedin } from "react-icons/ti";

import {
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  FaFacebookF,
} from "react-icons/fa";

import ReactHelmet from "../../components/ReactHelmet";
import Loader from "../../components/Loader";

import Trends from "../../components/trends";
// const Trends = lazy(() => import("../../components/trends"));

const NewsandTrends = () => {
  return (
    <>
      <ReactHelmet
        title="Blogs | Web & App Insights by California Web Coders"
        description="Stay updated with expert tips and insights on web design, development, and digital marketing from the pros at California Web Coders. Read our latest posts."
        keywords="web development, custom website, react development, logo design, digital marketing, social media marketing, web design"
        baseUrl="https://californiawebcoders.com/blog"
      />
      <Layout>
        <HeroSection
          // leftCol="col-lg-6"
          //   rightCol="col-lg-6"
          bgImage={bannerBgImage}
          title="Discover What’s Trending In The Tech And Marketing World."
          para="Browse our latest posts covering online trends, digital tools, and expert opinions that shape modern websites and marketing success."
          // heroimg={Pricingplanheroimg}
        />

        {/* <Suspense fallback={<Loader />}> */}
        <Trends />
        {/* </Suspense> */}
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
                    // data-aos-duration="500"
                    data-aos-offset="50"
                  >
                    Let’s Connect On Social Media!
                  </h4>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-offset="50"
                  >
                    Follow California Web Coders on social media for regular
                    updates.
                  </p>
                  <div
                    className="connect-sm-icons"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-offset="50"
                  >
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
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default NewsandTrends;
