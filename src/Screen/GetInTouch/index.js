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
import Intouch from "../../components/intouch";
const Getintouch = () => {
  return (
    <Layout>
      <HeroSection
        titleclass="newstrendtitle"
        title="Insights on tech news and trends"
        para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since."
        paraclass="newstrendpara"
        heroimg={Pricingplanheroimg}
      />
 <Intouch/>
      <ContactForm/>





      <section className="connectsocialmedia">


 
      </section>
    </Layout>
  );
};

export default Getintouch;




