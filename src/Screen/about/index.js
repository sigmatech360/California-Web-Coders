import React from "react";
import "./index.css";
import Layout from "../../components/layout";
import aboutheroimg from "../../Assets/aboutheroimg.webp";
import ItSolutions from "../../components/itsolutions";
import WhychoseUs from "../../components/choseus";
import Testimonial from "../../components/Testimonials";
import ReactHelmet from "../../components/ReactHelmet";
const About = () => {
  return (
    <>
      <ReactHelmet
        title="About Us | Expert Web Solutions | California Web Coders"
        description="Learn about California Web Coders, your partner for custom web and app development. Discover our mission, values, and commitment to delivering digital success."
        keywords="web development, custom website, react development, logo design, digital marketing, social media marketing, web design"
        baseUrl="https://californiawebcoders.com/about"
      />
      <Layout>
        <section className="about-banner">
          <div className="container">
            <div className="row align-items-center flex-lg-row flex-column-reverse">
              <div className="col-lg-6">
                <h1
                  className="about-title"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-offset="0"
                >
                  About <br /> <span>California Web Coders</span>
                </h1>
                <p
                  className="about-subtitle"
                  data-aos="fade-right"
                  data-aos-duration="2000"
                  data-aos-offset="0"
                >
                  Providing innovative and high-performing web design and
                  marketing services that give businesses a strong digital
                  presence.
                </p>
              </div>

              <div className="col-lg-6">
                <div
                  className=""
                  data-aos="fade-left"
                  data-aos-duration="2000"
                  data-aos-offset="0"
                >
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
    </>
  );
};

export default About;
