import React from "react";
import "./index.css";
import Layout from "../../components/layout";
import aboutheroimg from '../../Assets/aboutheroimg.png'
import ItSolutions from '../../components/itsolutions'
import WhychoseUs from "../../components/choseus";
import Testimonial from "../../components/Testimonials";
const About = () => {
  return (
    <Layout>
      <section className="about">
        <div className="container my-5">
          <div className="row align-items-center">
            {/* Left Side Text Content */}
            <div className="col-md-6">
              <h1 className="about-title">
                About <br/>              <span>California Web Coders</span>
              </h1>
              {/* <h1 className="about-title">

              </h1> */}
              <p className="about-subtitle">
                Our mission is to make your business better through technology
              </p>
            </div>

            {/* Right Side Image Content */}
            <div className="col-md-6 text-center order-md-1">
              <div className="">
                <img
                  src={aboutheroimg}
                  alt="Laptop"
                  className="image-fluid main-image"
                />
             
                {/* Add more overlay images as needed */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <ItSolutions/>


      <WhychoseUs/>


      <Testimonial/>
    </Layout>
  );
};

export default About;
