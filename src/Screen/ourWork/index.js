import React, { useState } from "react";
import "./index.css";

// import Lightbox from "react-image-lightbox";
// import "react-image-lightbox/style.css";

import Layout from "../../components/layout";
import ourworkheroimg from "../../Assets/ourworkheroimg.png";

import pixleperfectimg1 from "../../Assets/ourWork-pixle-perfect-img1.png";
import pixleperfectimg2 from "../../Assets/ourWork-pixle-perfect-img2.png";
import pixleperfectimg3 from "../../Assets/ourWork-pixle-perfect-img3.png";
import pixleperfectimg4 from "../../Assets/ourWork-pixle-perfect-img4.png";
import pixleperfectimg5 from "../../Assets/ourWork-pixle-perfect-img5.png";
import pixleperfectimg6 from "../../Assets/ourWork-pixle-perfect-img6.png";
import pixleperfectimg7 from "../../Assets/ourWork-pixle-perfect-img7.png";
import pixleperfectimg8 from "../../Assets/ourWork-pixle-perfect-img8.png";
import pixleperfectimg9 from "../../Assets/ourWork-pixle-perfect-img9.png";
import pixleperfectimg10 from "../../Assets/ourWork-pixle-perfect-img10.png";
import pixleperfectimg11 from "../../Assets/ourWork-pixle-perfect-img11.png";
import pixleperfectimg12 from "../../Assets/ourWork-pixle-perfect-img12.png";
import pixleperfectimg13 from "../../Assets/ourWork-pixle-perfect-img13.png";
import pixleperfectimg14 from "../../Assets/ourWork-pixle-perfect-img14.png";
import pixleperfectimg15 from "../../Assets/ourWork-pixle-perfect-img15.png";

import PortfolioTabs from "../../components/PortfolioTabs";

const featuredProjectData = [
  {
    id: 1,
    image: pixleperfectimg1,
  },
  {
    id: 2,
    image: pixleperfectimg2,
  },
  {
    id: 3,
    image: pixleperfectimg3,
  },
  {
    id: 4,
    image: pixleperfectimg4,
  },
  {
    id: 5,
    image: pixleperfectimg5,
  },
  {
    id: 6,
    image: pixleperfectimg6,
  },
  {
    id: 7,
    image: pixleperfectimg7,
  },
  {
    id: 8,
    image: pixleperfectimg8,
  },
  {
    id: 9,
    image: pixleperfectimg9,
  },
  {
    id: 10,
    image: pixleperfectimg10,
  },
  {
    id: 11,
    image: pixleperfectimg11,
  },
  {
    id: 12,
    image: pixleperfectimg12,
  },
  {
    id: 13,
    image: pixleperfectimg13,
  },
  {
    id: 14,
    image: pixleperfectimg14,
  },
  {
    id: 15,
    image: pixleperfectimg15,
  },
]; 

const OurWork = () => {
  
  return (
    <Layout>
      <section className="OurWork">
        <div className="container">
          <div className="row align-items-center flex-lg-row flex-column-reverse gap-lg-0 gap-4">
            <div className="col-xl-4 col-lg-5">
              <div className="OurWork-content">
                <h1
                  className="title "
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-offset="0"
                >
                  Our work.
                </h1>
                <p
                  className=""
                  data-aos="fade-right"
                  data-aos-duration="2000"
                  data-aos-offset="0"
                >
                  From startups to enterprises, our work showcases powerful
                  websites built with purpose, precision, and performance at
                  every digital touchpoint.
                </p>
              </div>
            </div>

            <div className="col-xl-8 col-lg-7">
              <div
                className="OurWork-image"
                data-aos="fade-left"
                data-aos-duration="2000"
                data-aos-offset="0"
              >
                <img
                  src={ourworkheroimg}
                  alt="Web Design"
                  className="img-fluid rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pixel-perfect-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="pixel-perfect-head text-center">
                <h3
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-offset="0"
                >
                  A Glimpse Into Our <span>Expertise</span>
                </h3>
                <p
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  data-aos-offset="0"
                >
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
            <div className="col-md-12">

              <PortfolioTabs />
            </div>

            {/* <div className="col-md-12 mt-3">
              <div className="justify-content-center d-flex flex-wrap gap-4">
                <Link to={"/services/web-design"} className="viewbtn">View All Projects</Link>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      
    </Layout>
  );
};

export default OurWork;
