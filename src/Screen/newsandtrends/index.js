import React from "react";
import "./index.css";
import Layout from "../../components/layout";
  
import ContactForm from "../../components/readytocheat";
 import HeroSection from "../../components/Herosection";
 import { LiaPinterestP } from "react-icons/lia";

import Pricingplanheroimg from "../../Assets/Pricingplanheroimg.png";
import { TiSocialLinkedin } from "react-icons/ti";

import { FaLinkedinIn } from "react-icons/fa";

import { FaFacebookF } from "react-icons/fa";

 import Trends from "../../components/trends";
const NewsandTrends = () => {
  return (
    <Layout>
      <HeroSection
        titleclass="newstrendtitle"
        title="Insights on tech news and trends"
        para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since."
        paraclass="newstrendpara"
        heroimg={Pricingplanheroimg}
        imgclass="herosecimg"
      />

      <Trends />


      <ContactForm/>





      <section className="connectsocialmedia">



      <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8 col-sm-10 text-center">
          <div className="connectbg text-white  py-4 ">
            <h4 className="  mt-3 mb-3">Connect on Social Media</h4>
            <p className="SocialMediapara">Follow Octave Agency on Social Media for regular updates.</p>
            <div className="d-flex justify-content-center gap-3 mt-3">
              <a href="#" className="trenticonbg text-white" aria-label="Facebook">
              <FaFacebookF />

              </a>
              <a href="#" className="trenticonbg text-white" aria-label="Instagram">
                <i className="bi bi-instagram fs-4"></i>
              </a>
              <a href="#" className="trenticonbg text-white" aria-label="LinkedIn">
             <FaLinkedinIn/>
              </a>
              <a href="#" className="trenticonyoutubebg text-white" aria-label="YouTube">
                <i className="bi bi-youtube fs-4"></i>
              </a>
              <a href="#" className="trenticonbg text-white" aria-label="Twitter">
                <i className="bi bi-twitter fs-4"></i>
              </a>
              <a href="#" className="trenticonyoutubebg text-white" aria-label="Pinterest">
             <LiaPinterestP/>
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




