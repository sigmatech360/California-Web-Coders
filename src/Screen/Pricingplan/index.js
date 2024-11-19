import React from "react";
import "./index.css";
import Layout from "../../components/layout";
import aboutheroimg from "../../Assets/aboutheroimg.png";
import ItSolutions from "../../components/itsolutions";
import WhychoseUs from "../../components/choseus";
import { CiCircleCheck } from "react-icons/ci";
import Testimonial from "../../components/Testimonials";
import WordPressPerformanceSection from "../../components/WordPressPerformanceSection";
import Growyourbusiness from "../../components/growyourbusiness";
import FeatureProject from "../../components/featureproject";
import { FaPhoneAlt } from "react-icons/fa";
// import PricingPlans from "../../components/PricingPlans";
import ContactForm from "../../components/readytocheat";
import Creativitythrough from "../../components/Creativitythrough";
import ourworkheroimg from "../../Assets/ourworkheroimg.png";
import HeroSection from "../../components/Herosection";

import Pricingplanheroimg from "../../Assets/Pricingplanheroimg.png";
import Mobileworld from "../../components/mobileworld";
import RefundPolicy from "../../components/refundpolicy";
import FrequentQuestions from "../../components/FrequentQuestions";
const PricingPlan = () => {
  return (
    <Layout>
      <HeroSection
        titleclass="pricingtitle"
        title="Pricing plan"
        para="Our mission is to make your business better through technology"
        paraclass="herosecpara"
        heroimg={Pricingplanheroimg}
        imgclass="herosecimg"
      />
      <FeatureProject
        // FaPhoneAlt={FaPhoneAlt}
        // callicon="callicon"
        viewbtn="viewbtn"
        titleclass="wpdstitle"
        mainclass="wpds"
        paraclass="OurWorkpara"
        title="View our latest  "
        title2="creations."
        para="At California Web Coders, we bring visions to life with innovative web design, custom software development, and seamless digital solutions. From sleek eCommerce platforms to powerful business apps, our portfolio showcases diverse projects tailored to meet our clients' unique needs. Every project reflects our commitment to creativity, quality, and cutting-edge technology."
        btntitle="View All Projects"
      />
      <Mobileworld />
      <RefundPolicy />
      <div className=" mt-5">
        <FrequentQuestions FrequentQuestions="faqsbg" title="Express everything and feel everything" />
      </div>
 



<Testimonial/>
    </Layout>
  );
};

export default PricingPlan;
