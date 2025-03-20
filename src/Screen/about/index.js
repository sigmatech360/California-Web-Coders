import React from "react";
import "./index.css";
import Layout from "../../components/layout";
import aboutheroimg from "../../Assets/aboutheroimg.png";
import ItSolutions from "../../components/itsolutions";
import WhychoseUs from "../../components/choseus";
import Testimonial from "../../components/Testimonials";
const About = () => {
  return (
    <Layout>
      <section className="about-banner">
        <div className="container">
          <div className="row align-items-center flex-lg-row flex-column-reverse">
            <div className="col-lg-6">
              <h1 className="about-title">
                About <br /> <span>California Web Coders</span>
              </h1>
              <p className="about-subtitle">
                Our mission is to make your business better through technology
              </p>
            </div>

            <div className="col-lg-6">
              <div className="">
                <img
                  src={aboutheroimg}
                  alt="Laptop"
                  className="img-fluid main-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <ItSolutions />

      <WhychoseUs />

      <Testimonial />
    </Layout>
  );
};

export default About;
