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
const Webdesignservices = () => {
  return (
    <Layout>
      <section className="wordpress-web-design text-white py-5">
        <div className="container">
          <div className="row align-items-center">
            {/* Text Content */}
            <div className="col-12 col-lg-6">
              <h1 className="title ">
                WordPress Web <br /> Design Services
              </h1>

              <p className="lead mt-3">
                Launch a professional, revenue-driving WordPress website with
                our WordPress Web Design Services.
              </p>
              <ul className="list-unstyled mt-4">
                <li className="d-flex align-items-center mb-2">
                  <span className="d-flex align-items-center gap-2">
                    <CiCircleCheck className="checkicon" />
                    <p className="para4 mb-0 align-self-baseline">
                      Modern web design techniques
                    </p>
                  </span>{" "}
                </li>
                <li className="d-flex align-items-center mb-2">
                  <span className="d-flex align-items-center gap-2">
                    <CiCircleCheck className="checkicon" />
                    <p className="para4 mb-0 align-self-baseline">
                      Optimised for SEO
                    </p>
                  </span>
                </li>
                <li className="d-flex align-items-center mb-2">
                  <span className="d-flex align-items-center gap-2">
                    <CiCircleCheck className="checkicon" />
                    <p className="para4 mb-0 align-self-baseline">
                      Lightning fast load times
                    </p>
                  </span>
                </li>
                <li className="d-flex align-items-center mb-2">
                  <span className="d-flex align-items-center gap-2">
                    <CiCircleCheck className="checkicon" />
                    <p className="para4 mb-0 align-self-baseline">
                      Designed to convert
                    </p>
                  </span>
                </li>
              </ul>
              <button className="contactbtn btn   btn-lg mt-3">
                Contact Us
              </button>
            </div>

            {/* Image Content */}
            <div className="col-12 col-lg-6 text-center mt-4 mt-lg-0">
              {/* <img
                src="https://via.placeholder.com/600x400" // Replace with your image URL
                alt="Web Design"
                className="img-fluid rounded"
              /> */}
            </div>
          </div>
        </div>
      </section>

      <WordPressPerformanceSection />

      <Growyourbusiness />

      <FeatureProject
        FaPhoneAlt={FaPhoneAlt}
        callicon="callicon"
        viewbtn="viewbtn"
        titleclass="wpdstitle"
        mainclass="wpds"
        paraclass="para"
        title="From Pixels "
        title2="to Perfection."
        para="Each design is uniquely crafted to suit
         the specific needs of every business. We strive to
          showcase and enhance the individuality of your brand.
           Explore some of our recent projects below."
        btntitle="Request A Quote"
      />

      <PricingPlans />


      <ContactForm/>


<Creativitythrough/>
    </Layout>
  );
};

export default Webdesignservices;
