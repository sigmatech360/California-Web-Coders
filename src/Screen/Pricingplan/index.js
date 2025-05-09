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
    title: "UI/UX Design",
    percent: 87,
  },
  {
    id: 2,
    title: "Online Marketing",
    percent: 72,
  },
  {
    id: 3,
    title: "Web and App Development",
    percent: 81,
  },
  {
    id: 4,
    title: "Backend Support",
    percent: 92,
  },
];

const faqData = [
  {
    id: 1,
    question: "1. What’s included in your pricing plans?",
    answer:
      "Each plan covers design, development, revisions, and dedicated support based on the scope you choose.",
  },
  {
    id: 2,
    question:
      "2. Do I have to pay everything upfront?",
    answer:
      "Not at all! We offer flexible milestone-based payments depending on the size of your project.",
  },
  {
    id: 3,
    question: "3. How do I know which package is right for me?",
    answer: "Book a free consultation and we’ll recommend a plan that suits your business goals and budget."
  },
  {
    id: 4,
    question: "4. Are there any hidden or extra charges?",
    answer: "Nope. We believe in 100% transparent pricing with no surprise fees along the way."
  },
  {
    id: 5,
    question: "5. Can I customize a pricing package?",
    answer: "Absolutely! We’re happy to tailor any plan to fit your specific requirements."
  },
  {
    id: 6,
    question:
      "6. What if I need changes after project completion?",
    answer: "We offer affordable maintenance and update plans after launch. Just let us know what you need."
  },
  {
    id: 7,
    question: "7. How long will my project take?",
    answer: "Timelines vary by project, but we’ll give you a clear estimate before starting."
  },
  {
    id: 8,
    question: "8. Do you offer a refund if I cancel?",
    answer: "Yes! We have a 7-day refund policy if you're unsatisfied with the initial progress."
  },
  {
    id: 9,
    question: "9. Can I upgrade my plan later?",
    answer: "Of course! You can scale up at any time as your business grows or your needs evolve."
  },
  // {
  //   id: 10,
  //   question:
  //     "",
  //   answer: ""
  // },
];

const PricingPlan = () => {
  return (
    <Layout>
      <HeroSection
        title="Pricing plan"
        para="At California Web Coders, we offer flexible financing options to keep your convenience at the top!"
        heroimg={Pricingplanheroimg}
      />

      <Mobileworld
        title="Transparent Pricing Plans Backed by Real Value"
        description="Every dollar should count. Our transparent and comprehensive pricing plans are designed to help you quickly see the value, with expert service, clear deliverables, and zero confusion. Let’s achieve results without wasting time or money."
      >
        <div className="col-lg-12">
          <Tabs
            defaultActiveKey="seo-tab"
            className="brand-tabs justify-content-center my-4 mb-xl-5 border-0"
            data-aos="fade-up"
            data-aos-duration="3000"
            data-aos-offset="0"
          >
            <Tab eventKey="seo-tab" title="SEO">
              <div
                className="row justify-content-center"
                data-aos="fade-up"
                data-aos-duration="3000"
                data-aos-offset="0"
              >
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
                <div
                  className="express-content"
                  data-aos="fade-right"
                  data-aos-duration="2000"
                  data-aos-offset="0"
                >
                  <div class="express-content-head">
                    <h2>It’s Not The Money, It’s The Experience.</h2>
                    <p>
                      Every penny spent at California Web Coders is an
                      investment set up for high returns. We value your time and
                      money, and ensure that every dollar you invest brings the
                      best results for your future. Together, we can achieve
                      high profits and greater success.
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
                <div
                  class="express-cards h-100"
                  data-aos="fade-left"
                  data-aos-duration="2000"
                  data-aos-offset="0"
                >
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
                            <h5 className="card-title  ">Creative Solutions</h5>
                            <p className="card-text">
                              We blend creativity with clean code to build
                              digital experiences that are beautiful,
                              brand-aligned, and function perfectly across all
                              devices.
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
                            <h5 className="card-title  ">
                              User-friendly Experience
                            </h5>
                            <p className="card-text">
                              Our websites are built for easy updates, simple
                              navigation, and intuitive use, so you stay in
                              control without the tech stress.
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
                            <h5 className="card-title  ">Performance Driven</h5>
                            <p className="card-text">
                              From fast load times to SEO-ready frameworks,
                              every site we create is optimized to perform and
                              scale with your growth.
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
                            <h5 className="card-title  ">
                              24/7 Customer Service
                            </h5>
                            <p className="card-text">
                              Our clients are our top priority; we offer 24/7
                              customer support to maintain constant
                              communication and ensure transparency in all our
                              projects.
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
          secTitle="Got Questions? We Are Happy To Answer!"
          faqData={faqData}
        />
      </section>

      <Testimonial />
    </Layout>
  );
};

export default PricingPlan;
