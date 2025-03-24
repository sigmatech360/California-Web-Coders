import React from "react";
import "./index.css";
import Layout from "../../components/layout";
import { CiCircleCheck } from "react-icons/ci";
import WordPressPerformanceSection from "../../components/WordPressPerformanceSection";
import Growyourbusiness from "../../components/growyourbusiness";
import FeatureProject from "../../components/featureproject";
import { FaPhoneAlt, FaPhoneSquareAlt } from "react-icons/fa";
import PricingPlans from "../../components/PricingPlans";
import ContactForm from "../../components/readytocheat";
import Creativitythrough from "../../components/Creativitythrough";

import pixleperfectimg1 from "../../Assets/pixle-perfect-img1.png";
import pixleperfectimg2 from "../../Assets/pixle-perfect-img2.png";
import pixleperfectimg3 from "../../Assets/pixle-perfect-img3.png";
import pixleperfectimg4 from "../../Assets/pixle-perfect-img4.png";
import pixleperfectimg5 from "../../Assets/pixle-perfect-img5.png";
import pixleperfectimg6 from "../../Assets/pixle-perfect-img6.png";
import project7 from "../../Assets/project7.png";
import project8 from "../../Assets/project8.png";
import project9 from "../../Assets/project9.png";
import NewsCard from "../../components/NewsCard";

const featuredProjectData = [
  {
    id: 1,
    image: pixleperfectimg1,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 2,
    image: pixleperfectimg2,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 3,
    image: pixleperfectimg3,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 4,
    image: pixleperfectimg4,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 5,
    image: pixleperfectimg5,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 6,
    image: pixleperfectimg6,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  // {
  //   id: 7,
  //   image: project7,
  //   description:
  //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  // },
  // {
  //   id: 8,
  //   image: project8,
  //   description:
  //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  // },
  // {
  //   id: 9,
  //   image: project9,
  //   description:
  //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  // },
];

const Webdesignservices = () => {
  return (
    <Layout>
      <section className="wordpress-web-design">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1
                className=""
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-offset="0"
              >
                WordPress Web <br /> Design Services
              </h1>
              <p
                className=""
                data-aos="fade-right"
                data-aos-duration="2000"
                data-aos-offset="0"
              >
                Launch a professional, revenue-driving WordPress website with
                our WordPress Web Design Services.
              </p>
              <ul
                className="list-unstyled wordpress-web-design-list"
                data-aos="fade-right"
                data-aos-duration="3000"
                data-aos-offset="0"
              >
                {[
                  "Modern web design techniques",
                  "Optimised for SEO",
                  "Lightning fast load times",
                  "Designed to convert",
                ].map((item, index) => (
                  <li className="d-flex align-items-center mb-2" key={index}>
                    <span className="d-flex align-items-center gap-2">
                      <CiCircleCheck className="checkicon" />
                      <p className="para4 mb-0 align-self-baseline">{item}</p>
                    </span>
                  </li>
                ))}
              </ul>
              <button
                className="btn-theme"
                data-aos="fade-right"
                data-aos-duration="3000"
                data-aos-offset="0"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      <WordPressPerformanceSection />

      <Growyourbusiness />

      <section className="pixel-perfect-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="pixel-perfect-head text-center ">
                <h3
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-offset="0"
                >
                  From Pixels to <span>Perfection.</span>
                </h3>
                <p
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  data-aos-offset="0"
                >
                  Each design is uniquely crafted to suit the specific needs of
                  every business. We strive to showcase and enhance the
                  individuality of your brand. Explore some of our recent
                  projects below.
                </p>
              </div>
            </div>
            {featuredProjectData.map((item, index) => (
              <div
                className="col-lg-4 col-md-6 mb-4"
                key={index}
                data-aos="fade-up"
                data-aos-duration="3000"
                data-aos-offset="0"
              >
                <NewsCard image={item.image} description={item.description} />
              </div>
            ))}
            <div className="col-md-12">
              <div class="justify-content-center d-flex flex-wrap gap-4">
                <button className="viewbtn">Request A Quote</button>
                <div className="d-flex align-items-center gap-2">
                  <FaPhoneSquareAlt className="callicon " />
                  <p className="para4 mb-0  align-items-center">
                    +1 619-798-9688
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PricingPlans />

      <ContactForm />

      <Creativitythrough />
    </Layout>
  );
};

export default Webdesignservices;
