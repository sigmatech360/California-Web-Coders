import React from "react";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import PricePlanCard from "../PricePlanCard";
import {
  eCommerseWebsitePricingPlansData,
  logoDesignPricingPlansData,
  seoPricingPlansData,
  smmPricingPlansData,
  customWebDevPricingPlansData,
  comboPricingPlansData,
  informativeWebsitePricingPlansData,
} from "../../data";

const PackagesTabs = () => {
  return (
    <div className="col-lg-12">
      <Tabs
        defaultActiveKey="logo-design"
        className="brand-tabs justify-content-center my-4 mb-xl-5 border-0"
        data-aos="fade-up"
        data-aos-duration="3000"
        data-aos-offset="0"
      >
        <Tab eventKey="logo-design" title="Logo Design">
          <div
            className="row justify-content-center"
            data-aos="fade-up"
            data-aos-duration="3000"
            data-aos-offset="0"
          >
            {logoDesignPricingPlansData.map((item, index) => (
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

        <Tab eventKey="informative-websites" title="Informative Websites">
          <div
            className="row justify-content-center"
            // data-aos="fade-up"
            // data-aos-duration="3000"
            // data-aos-offset="0"
          >
            {informativeWebsitePricingPlansData.map((item, index) => (
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
        <Tab eventKey="eCommerce-website" title="E Commerce Website">
          <div
            className="row justify-content-center"
            // data-aos="fade-up"
            // data-aos-duration="3000"
            // data-aos-offset="0"
          >
            {eCommerseWebsitePricingPlansData.map((item, index) => (
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
        <Tab eventKey="custom-web" title="Custom Web Development">
          <div
            className="row justify-content-center"
            // data-aos="fade-up"
            // data-aos-duration="3000"
            // data-aos-offset="0"
          >
            {customWebDevPricingPlansData.map((item, index) => (
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
        <Tab eventKey="seo-tab" title="SEO">
          <div
            className="row justify-content-center"
            // data-aos="fade-up"
            // data-aos-duration="3000"
            // data-aos-offset="0"
          >
            {seoPricingPlansData.map((item, index) => (
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
        <Tab eventKey="smm-tab" title="SMM">
          <div
            className="row justify-content-center"
            // data-aos="fade-up"
            // data-aos-duration="3000"
            // data-aos-offset="0"
          >
            {smmPricingPlansData.map((item, index) => (
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
        <Tab eventKey="combo-packages" title="Combo Packages">
          <div
            className="row justify-content-center"
            // data-aos="fade-up"
            // data-aos-duration="3000"
            // data-aos-offset="0"
          >
            {comboPricingPlansData.map((item, index) => (
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
      </Tabs>
    </div>
  );
};

export default PackagesTabs;
