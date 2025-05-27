import React from "react";
import "./index.css";
// import { CiCircleCheck } from "react-icons/ci";
import wordpresssectionimg from "../../Assets/wordpresssectionimg.png";
import PricePlanCard from "../PricePlanCard";
import { Link } from "react-router-dom";

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
const PricingPlans = (props) => {
  return (
    <section className="PricingPlans">
      <div className="container">
        <div className="row justify-content-center mb-md-5 mb-3">
          <div className="pricing-plan-head">
            <p
              className="head-tag"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-offset="0"
            >
              Pricing Plans
            </p>
            <h2 data-aos="fade-up" data-aos-duration="2000" data-aos-offset="0">
              {props.secTitle || `That Fit All Budget Types`}
            </h2>
            <p data-aos="fade-up" data-aos-duration="3000" data-aos-offset="0">
              {props.secDescription ||
                `No more budget issues, get your hands on the most Affordable Website Design Services online.`}
            </p>
          </div>

          {pricingPlanData.map((item, index) => (
            <div
              className="col-lg-4 col-md-7 mb-4 mb-lg-0"
              key={index}
              data-aos="fade-up"
              data-aos-duration="3000"
              data-aos-offset="0"
            >
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

        <div className="row">
          <div className="col-lg-6">
            <div
              class="why-wordpress-img"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-offset="0"
            >
              {props.image && (
                <img
                  // src={wordpresssectionimg}
                  src={props.image}
                  alt="Laptop Display"
                  className="img-fluid workpressimges"
                />
              )}
            </div>
          </div>
          <div className="col-lg-6">
            <div class="why-wordpress-content">
              <h1
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-offset="0"
              >
                {/* Why WordPress */}
                {props.whyWordressTitle} {props.question && <span className="colorBlue">?</span>} 
              </h1>
              <p
                data-aos="fade-left"
                data-aos-duration="2000"
                data-aos-offset="0"
              >
                {props.whyWordressDescription1}
              </p>
              {props.whyWordressDescription2 && (
                <p
                  data-aos="fade-left"
                  data-aos-duration="2000"
                  data-aos-offset="0"
                >
                  {props.whyWordressDescription2}
                </p>
              )}
              {props.whyWordressDescription3 && (
                <p
                  data-aos="fade-left"
                  data-aos-duration="2000"
                  data-aos-offset="0"
                >
                  {props.whyWordressDescription3}
                </p>
              )}
              <Link to={"/our-work"}
                className="morebenifit"
                // data-aos="fade-left"
                // data-aos-duration="3000"
                // data-aos-offset="0"
              >
                {props.btnText || `See More Benefits`}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
