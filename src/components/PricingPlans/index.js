import React from "react";
import "./index.css";
// import { CiCircleCheck } from "react-icons/ci";
import wordpresssectionimg from "../../Assets/wordpresssectionimg.png";
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
              That Fit All Budget Types
            </h2>
            <p data-aos="fade-up" data-aos-duration="3000" data-aos-offset="0">
              No more budget issues, get your hands on the most Affordable
              Website Design Services online.
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
                {props.whyWordressTitle} <span className="colorBlue">?</span>
              </h1>
              <p
                data-aos="fade-left"
                data-aos-duration="2000"
                data-aos-offset="0"
              >
                {props.whyWordressDescription1}
                {/* One of the strengths of WordPress is that it is fully
                customisable. This means we can build bespoke websites tailored
                specifically to our client’s goals */}
              </p>
              {props.whyWordressDescription2 && (
                <p
                  data-aos="fade-left"
                  data-aos-duration="2000"
                  data-aos-offset="0"
                >
                  {props.whyWordressDescription2}
                  {/* Our WordPress developers ensure that your design and website
                functionality works across all devices, allowing you to stand
                out from the competition. */}
                </p>
              )}
              {props.whyWordressDescription3 && (
                <p
                  data-aos="fade-left"
                  data-aos-duration="2000"
                  data-aos-offset="0"
                >
                  {props.whyWordressDescription3}
                  {/* Another added benefit of using such a popular platform is that
                there are thousands of great WordPress plugins available. These
                plugins add complex functionality to your site and can be great
                tools for displaying information, engaging users, and building a
                WordPress eCommerce online store. */}
                </p>
              )}
              <button
                className="morebenifit"
                data-aos="fade-left"
                data-aos-duration="3000"
                data-aos-offset="0"
              >
                See More Benefits
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
