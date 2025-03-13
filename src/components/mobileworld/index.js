import React from "react";
import "./index.css";
import { CiCircleCheck } from "react-icons/ci";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import PricePlanCard from "../PricePlanCard";

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
];

const Mobileworld = () => {
  return (
    <section>
      <div className="Mobileworld">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <p className="para0">Pricing Plans</p>
              <h2 className="title">
                Delivering business solutions for the web and mobile world.
              </h2>
            </div>
            <div className="col-lg-6">
              <p className="para1 mobileworld-head-p ps-xxl-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting,
              </p>
            </div>
            <div className="col-lg-12">
              <Tabs
                defaultActiveKey="seo-tab"
                className="brand-tabs justify-content-center my-4 mb-xl-5 border-0"
              >
                <Tab eventKey="seo-tab" title="SEO">
                  <div className="row justify-content-center">
                    {pricingPlanData.map((item, index) => (
                      <div className="col-lg-4 col-md-7 mb-4 mb-lg-0" key={index}>
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
                <Tab eventKey="eCommerce-website" title="E Commerce Website">
                  E Commerce Website
                </Tab>
                <Tab eventKey="smm-tab" title="SMM">
                  SMM
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mobileworld;
