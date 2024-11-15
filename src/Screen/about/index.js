import React from "react";
import "./index.css";
import Layout from "../../components/layout";
import aboutheroimg from '../../Assets/aboutheroimg.png'
const About = () => {
  return (
    <Layout>
      <section className="about">
        <div className="container my-5">
          <div className="row align-items-center">
            {/* Left Side Text Content */}
            <div className="col-md-6">
              <h1 className="about-title">
                About <span>California Web Coders</span>
              </h1>
              <p className="about-subtitle">
                Our mission is to make your business better through technology
              </p>
            </div>

            {/* Right Side Image Content */}
            <div className="col-md-6 text-center">
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
    </Layout>
  );
};

export default About;
