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


import project1 from "../../Assets/project1.png";
import project2 from "../../Assets/project2.png";
import project3 from "../../Assets/project3.png";
import project4 from "../../Assets/project4.png";
import project5 from "../../Assets/project5.png";
import project6 from "../../Assets/project6.png";
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
  {
    id: 7,
    image: project7,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 8,
    image: project8,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 9,
    image: project9,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

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

      {/* <FeatureProject
        viewbtn="viewbtn"
        titleclass="wpdstitle"
        mainclass="wpds"
        paraclass="OurWorkpara"
        title="View our latest  "
        title2="creations."
        para="At California Web Coders, we bring visions to life with innovative web design, custom software development, and seamless digital solutions. From sleek eCommerce platforms to powerful business apps, our portfolio showcases diverse projects tailored to meet our clients' unique needs. Every project reflects our commitment to creativity, quality, and cutting-edge technology."
        btntitle="View All Projects"
      /> */}

      <section className="pixel-perfect-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="pixel-perfect-head text-center ">
                <h3>
                  View our latest <span>creations</span>
                </h3>
                <p>
                  At California Web Coders, we bring visions to life with
                  innovative web design, custom software development, and
                  seamless digital solutions. From sleek eCommerce platforms to
                  powerful business apps, our portfolio showcases diverse
                  projects tailored to meet our clients' unique needs. Every
                  project reflects our commitment to creativity, quality, and
                  cutting-edge technology.
                </p>
              </div>
            </div>
            {featuredProjectData.map((item, index) => (
              <div className="col-lg-4 col-md-6 mb-4" key={index}>
                <NewsCard image={item.image} description={item.description} />
              </div>
            ))}
            <div className="col-md-12">
              <div class="justify-content-center d-flex flex-wrap gap-4">
                <button className="viewbtn">View All Projects</button>
              </div>
            </div>
          </div>
        </div>
      </section>


    </Layout>
  );
};

export default OurWork;
