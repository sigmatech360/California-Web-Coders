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
import PricingPlans from "../../components/PricingPlans";
import ContactForm from "../../components/readytocheat";
import Creativitythrough from "../../components/Creativitythrough";
import ourworkheroimg from "../../Assets/ourworkheroimg.png";
const OurWork = () => {
  return (
    <Layout>
      <section className="OurWork text-white py-5">
        <div className="container">
          <div className="row align-items-center">
            {/* Text Content */}
            <div className="col-12 col-lg-6">
              <h1 className="title ">
                Our work. <br />
              </h1>

              <p className="lead mt-3">
                Explore our impactful digital creations, where every experience
                leaves a lasting impression.
              </p>
            </div>

            {/* Image Content */}
            <div className="col-12 col-lg-6 text-center mt-4 mt-lg-0">
              <img
                src={ourworkheroimg} // Replace with your image URL
                alt="Web Design"
                className="img-fluid rounded"
              />
            </div>
          </div>
        </div>
      </section>

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

   
    </Layout>
  );
};

export default OurWork;
