import React from "react";
import "./index.css";
import project1 from "../../Assets/project1.png";
import project2 from "../../Assets/project2.png";
import project3 from "../../Assets/project3.png";
import project4 from "../../Assets/project4.png";
import project5 from "../../Assets/project5.png";
import project6 from "../../Assets/project6.png";
import project7 from "../../Assets/project7.png";
import project8 from "../../Assets/project8.png";
import project9 from "../../Assets/project9.png";
import NewsCard from "../NewsCard";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { logoDesignPortfolioData } from "../../Screen/webdesignservices/LogoDesign";
import { webDesignPortfolioData } from "../../Screen/webdesignservices/WebDesign";
import { customWebDesignPortfolioData } from "../../Screen/webdesignservices/CustomWebDevelopment";
import { cmsDevelopmentPortfolioData } from "../../Screen/webdesignservices/CMSDevelopment";
import { mobileAppDevelopmentPortfolioData } from "../../Screen/webdesignservices/MobileAppDevelopment";

// const featuredProjectData = [
//   {
//     id: 1,
//     image: project1,
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//   },
//   {
//     id: 2,
//     image: project2,
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//   },
//   {
//     id: 3,
//     image: project3,
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//   },
//   {
//     id: 4,
//     image: project4,
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//   },
//   {
//     id: 5,
//     image: project5,
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//   },
//   {
//     id: 6,
//     image: project6,
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//   },
//   {
//     id: 7,
//     image: project7,
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//   },
//   {
//     id: 8,
//     image: project8,
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//   },
//   {
//     id: 9,
//     image: project9,
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//   },
// ];

const FeatureProject = (props) => {
  return (
    <section className={`${props?.mainclass}`}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="justify-content-center text-center ">
              <h3
                className={props?.titleclass}
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-offset="0"
              >
                {props?.title}
                <span> {props?.title2}</span>
              </h3>
              <p
                className={props?.paraclass}
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-offset="0"
              >
                {props?.para}
              </p>
            </div>
            <Tabs
              defaultActiveKey="web-design"
              className="brand-tabs justify-content-center my-4 mb-xl-5 border-0"
              data-aos="fade-up"
              data-aos-duration="3000"
              data-aos-offset="0"
            >
              <Tab eventKey="logo-design" title="Logo Design">
                <div
                  className="row justify-content-center"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  data-aos-offset="0"
                >
                  {logoDesignPortfolioData.map((item, index) => (
                    <div className="col-lg-4 col-md-6 mb-4" key={index}>
                      <NewsCard
                        image={item.image}
                        // description={item.description}
                      />
                    </div>
                  ))}
                </div>
              </Tab>

              <Tab eventKey="web-design" title="Web Design">
                <div
                  className="row justify-content-center"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  data-aos-offset="0"
                >
                  {webDesignPortfolioData.map((item, index) => (
                    <div className="col-lg-4 col-md-6 mb-4" key={index}>
                      <NewsCard
                        image={item.image}
                        // description={item.description}
                      />
                    </div>
                  ))}
                </div>
              </Tab>

              <Tab eventKey="eCommerce-website" title="E-commerce Websites">
                {/* E-commerce Websites */}
                <div
                  className="row justify-content-center"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  data-aos-offset="0"
                >
                  {customWebDesignPortfolioData.map((item, index) => (
                    <div className="col-lg-4 col-md-6 mb-4" key={index}>
                      <NewsCard
                        image={item.image}
                        // description={item.description}
                      />
                    </div>
                  ))}
                </div>
              </Tab>

              <Tab eventKey="customWebDesign" title="Custom Web Design">
                <div
                  className="row justify-content-center"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  data-aos-offset="0"
                >
                  {customWebDesignPortfolioData.map((item, index) => (
                    <div className="col-lg-4 col-md-6 mb-4" key={index}>
                      <NewsCard
                        image={item.image}
                        // description={item.description}
                      />
                    </div>
                  ))}
                </div>
              </Tab>

              <Tab eventKey="cmsDevelopment" title="CMS Development">
                <div
                  className="row justify-content-center"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  data-aos-offset="0"
                >
                  {cmsDevelopmentPortfolioData.map((item, index) => (
                    <div className="col-lg-4 col-md-6 mb-4" key={index}>
                      <NewsCard
                        image={item.image}
                        // description={item.description}
                      />
                    </div>
                  ))}
                </div>
              </Tab>

              <Tab
                eventKey="mobileAppDevelopment"
                title="Mobile App Development"
              >
                <div
                  className="row justify-content-center"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  data-aos-offset="0"
                >
                  {mobileAppDevelopmentPortfolioData.map((item, index) => (
                    <div className="col-lg-4 col-md-6 mb-4" key={index}>
                      <NewsCard
                        image={item.image}
                        // description={item.description}
                      />
                    </div>
                  ))}
                </div>
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureProject;
