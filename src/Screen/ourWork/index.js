import React from "react";
import "./index.css";
import Layout from "../../components/layout";
import ourworkheroimg from "../../Assets/ourworkheroimg.png";

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

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

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
      <section className="OurWork">
        <div className="container">
          <div className="row align-items-center flex-lg-row flex-column-reverse gap-lg-0 gap-4">
            <div className="col-xl-4 col-lg-5">
              <div class="OurWork-content">
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
                  Explore our impactful digital creations, where every
                  experience leaves a lasting impression.
                </p>
              </div>
            </div>

            <div className="col-xl-8 col-lg-7">
              <div
                class="OurWork-image"
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
                  View our latest <span>creations</span>
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
              <Tabs
                defaultActiveKey="web-design"
                className="brand-tabs justify-content-center my-4 mb-xl-5 border-0"
                data-aos="fade-up"
                data-aos-duration="3000"
                data-aos-offset="0"
              >
                <Tab eventKey="logo-design" title="Logo Design">
                  Logo Design
                </Tab>
                <Tab eventKey="web-design" title="Web Design">
                  <div
                    className="row"
                    data-aos="fade-up"
                    data-aos-duration="3000"
                    data-aos-offset="0"
                  >
                    {featuredProjectData.map((item, index) => (
                      <div className="col-lg-4 col-md-6 mb-4" key={index}>
                        <NewsCard
                          image={item.image}
                          description={item.description}
                        />
                      </div>
                    ))}
                  </div>
                </Tab>
                <Tab eventKey="nft-design" title="NFT Design">
                  NFT Design
                </Tab>
                <Tab eventKey="eCommerce-website" title="E Commerce Website">
                  E Commerce Website
                </Tab>
                <Tab eventKey="video-animation" title="Video Animation">
                  Video Animation
                </Tab>
              </Tabs>
            </div>

            <div className="col-md-12 mt-3">
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
