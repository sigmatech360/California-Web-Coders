import React from "react";
import "./index.css";
import Layout from "../../components/layout";
import HeroSection from "../../components/Herosection";
import Testimonial from "../../components/Testimonials";

import Pricingplanheroimg from "../../Assets/Pricingplanheroimg.png";
import Mobileworld from "../../components/mobileworld";
import RefundPolicy from "../../components/refundpolicy";
import FrequentQuestions from "../../components/FrequentQuestions";

import smart from "../../Assets//smart.svg";
import Professiona from "../../Assets/Professiona.svg";
import Certified from "../../Assets/Certified.svg";
import Premium from "../../Assets/Premium.svg";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import PricePlanCard from "../../components/PricePlanCard";

import ProgressBar from "react-bootstrap/ProgressBar";

const pricingPlanData = [
  {
    id: 1,
    name: "Startup Wordpress Package",
    price: {
      actualPrice: 699,
      disountPrice: 249,
    },
    servicesList: [
      "5 Stock Photos",
      "5 Page Website",
      "3 Banner Design",
      "1 jQuery Slider Banner",
      "FREE Google Friendly Sitemap",
      "Complete W3C Certified HTML",
      "48 to 72 hours TAT",
      "5 Stock Photos",
      "5 Page Website",
      "3 Banner Design",
      "1 jQuery Slider Banner",
      "FREE Google Friendly Sitemap",
      "Complete W3C Certified HTML",
      "48 to 72 hours TAT",
    ],
    number: `+1 619-798-9688`,
  },
  {
    id: 2,
    name: "Startup Wordpress Package",
    price: {
      actualPrice: 699,
      disountPrice: 249,
    },
    servicesList: [
      "5 Stock Photos",
      "5 Page Website",
      "3 Banner Design",
      "1 jQuery Slider Banner",
      "FREE Google Friendly Sitemap",
      "Complete W3C Certified HTML",
      "48 to 72 hours TAT",
      "5 Stock Photos",
      "5 Page Website",
      "3 Banner Design",
      "1 jQuery Slider Banner",
      "FREE Google Friendly Sitemap",
      "Complete W3C Certified HTML",
      "48 to 72 hours TAT",
    ],
    number: `+1 619-798-9688`,
  },
  {
    id: 3,
    name: "Startup Wordpress Package",
    price: {
      actualPrice: 699,
      disountPrice: 249,
    },
    servicesList: [
      "5 Stock Photos",
      "5 Page Website",
      "3 Banner Design",
      "1 jQuery Slider Banner",
      "FREE Google Friendly Sitemap",
      "Complete W3C Certified HTML",
      "48 to 72 hours TAT",
      "5 Stock Photos",
      "5 Page Website",
      "3 Banner Design",
      "1 jQuery Slider Banner",
      "FREE Google Friendly Sitemap",
      "Complete W3C Certified HTML",
      "48 to 72 hours TAT",
    ],
    number: `+1 619-798-9688`,
  },
  {
    id: 4,
    name: "Startup Wordpress Package",
    price: {
      actualPrice: 699,
      disountPrice: 249,
    },
    servicesList: [
      "5 Stock Photos",
      "5 Page Website",
      "3 Banner Design",
      "1 jQuery Slider Banner",
      "FREE Google Friendly Sitemap",
      "Complete W3C Certified HTML",
      "48 to 72 hours TAT",
      "5 Stock Photos",
      "5 Page Website",
      "3 Banner Design",
      "1 jQuery Slider Banner",
      "FREE Google Friendly Sitemap",
      "Complete W3C Certified HTML",
      "48 to 72 hours TAT",
    ],
    number: `+1 619-798-9688`,
  },
  {
    id: 5,
    name: "Startup Wordpress Package",
    price: {
      actualPrice: 699,
      disountPrice: 249,
    },
    servicesList: [
      "5 Stock Photos",
      "5 Page Website",
      "3 Banner Design",
      "1 jQuery Slider Banner",
      "FREE Google Friendly Sitemap",
      "Complete W3C Certified HTML",
      "48 to 72 hours TAT",
      "5 Stock Photos",
      "5 Page Website",
      "3 Banner Design",
      "1 jQuery Slider Banner",
      "FREE Google Friendly Sitemap",
      "Complete W3C Certified HTML",
      "48 to 72 hours TAT",
    ],
    number: `+1 619-798-9688`,
  },
  {
    id: 6,
    name: "Startup Wordpress Package",
    price: {
      actualPrice: 699,
      disountPrice: 249,
    },
    servicesList: [
      "5 Stock Photos",
      "5 Page Website",
      "3 Banner Design",
      "1 jQuery Slider Banner",
      "FREE Google Friendly Sitemap",
      "Complete W3C Certified HTML",
      "48 to 72 hours TAT",
      "5 Stock Photos",
      "5 Page Website",
      "3 Banner Design",
      "1 jQuery Slider Banner",
      "FREE Google Friendly Sitemap",
      "Complete W3C Certified HTML",
      "48 to 72 hours TAT",
    ],
    number: `+1 619-798-9688`,
  },
];

const progressBarData = [
  {
    id: 1,
    title: "Design Graphics & 3D Design",
    percent: 87,
  },
  {
    id: 2,
    title: "Marketing",
    percent: 72,
  },
  {
    id: 3,
    title: "Animations",
    percent: 81,
  },
  {
    id: 4,
    title: "Programing",
    percent: 92,
  },
];

const PricingPlan = () => {
  return (
    <Layout>
      <HeroSection
        title="Pricing plan"
        para="Our mission is to make your business better through technology"
        heroimg={Pricingplanheroimg}
      />

      <Mobileworld
        title="Delivering business solutions for the web and mobile world."
        description="Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting,"
      >
        <div className="col-lg-12">
          <Tabs
            defaultActiveKey="seo-tab"
            className="brand-tabs justify-content-center my-4 mb-xl-5 border-0"
          >
            <Tab eventKey="seo-tab" title="SEO">
              <div className="row justify-content-center">
                {pricingPlanData.map((item, index) => (
                  <div className="col-lg-4 col-md-7 mb-4" key={index}>
                    <PricePlanCard
                      name={item.name}
                      actualPrice={item.price.actualPrice}
                      discountPrice={item.price.disountPrice}
                      servicesList={item.servicesList}
                      number={item.number}
                    />
                  </div>
                ))}
              </div>
            </Tab>
            <Tab eventKey="logo-design" title="Logo Design">
              Logo Design
            </Tab>
            <Tab eventKey="web-design" title="Web Design">
              Web Design
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
            <Tab eventKey="smm-tab" title="SMM">
              SMM
            </Tab>
          </Tabs>
        </div>
      </Mobileworld>

      <RefundPolicy />

      <section class="express-and-faq-sec">
        <section className="express-sec">
          <div className="container">
            <div className="row flex-lg-row flex-column-reverse gap-lg-0 gap-4">
              <div className="col-lg-6">
                <div className="express-content">
                  <div class="express-content-head">
                    <h2>Express everything and feel everything.</h2>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type.
                    </p>
                  </div>
                  <div className="progress-bar-list">
                    {progressBarData.map((item, index) => (
                      <div className="progress-bar-list-item">
                        <p>{item.title}</p>
                        <ProgressBar
                          now={item.percent}
                          label={`${item.percent}%`}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div class="express-cards h-100">
                  <div className="row h-100 gap-md-0 gap-4">
                    <div className="col-md-6 h-100">
                      <div class="express-cards-items">
                        <div className="card text-center border-0    text-white ">
                          <div className="card-body">
                            <div
                              className="rounded-circle bg-white text-primary d-flex justify-content-center align-items-center mx-auto mb-3"
                              style={{ width: "60px", height: "60px" }}
                            >
                              <img src={smart} className="img-fluid" />
                            </div>
                            <h5 className="card-title  ">
                              Smart & Secure System
                            </h5>
                            <p className="card-text">
                              Lorem Ipsum is simply dummy text of the printing and
                              typesetting industry. Lorem Ipsum has been the
                              industry.
                            </p>
                          </div>
                        </div>
                        <div className="card cards text-center border-0    text-white ">
                          <div className="card-body">
                            <div
                              className="rounded-circle bg-white text-primary d-flex justify-content-center align-items-center mx-auto mb-3"
                              style={{ width: "60px", height: "60px" }}
                            >
                              <img src={Professiona} className="img-fluid" />
                            </div>
                            <h5 className="card-title  ">Professional Team</h5>
                            <p className="card-text">
                              Lorem Ipsum is simply dummy text of the printing and
                              typesetting industry. Lorem Ipsum has been the
                              industry.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div class="express-cards-items">
                        <div className="card text-center border-0    text-white ">
                          <div className="card-body">
                            <div
                              className="rounded-circle bg-white text-primary d-flex justify-content-center align-items-center mx-auto mb-3"
                              style={{ width: "60px", height: "60px" }}
                            >
                              <img src={Certified} className="img-fluid" />
                            </div>
                            <h5 className="card-title  ">Certified Expert</h5>
                            <p className="card-text">
                              Lorem Ipsum is simply dummy text of the printing and
                              typesetting industry. Lorem Ipsum has been the
                              industry.
                            </p>
                          </div>
                        </div>
                        <div className="card cards text-center border-0    text-white ">
                          <div className="card-body">
                            <div
                              className="rounded-circle bg-white text-primary d-flex justify-content-center align-items-center mx-auto mb-3"
                              style={{ width: "60px", height: "60px" }}
                            >
                              <img src={Premium} className="img-fluid" />
                            </div>
                            <h5 className="card-title  ">24/7 Premium Support</h5>
                            <p className="card-text">
                              Lorem Ipsum is simply dummy text of the printing and
                              typesetting industry. Lorem Ipsum has been the
                              industry.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <FrequentQuestions
          FrequentQuestions="faqsbg"
          title="Express everything and feel everything"
        />
      </section>

      <Testimonial />
    </Layout>
  );
};

export default PricingPlan;
