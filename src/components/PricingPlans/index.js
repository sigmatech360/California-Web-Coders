import React from "react";
import "./index.css";
import { CiCircleCheck } from "react-icons/ci";
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
const PricingPlans = () => {
  return (
    <section className="PricingPlans">
      <div className="container">
        <div className="row justify-content-center mb-md-5 mb-3">
          <div className="pricing-plan-head">
            <p className="head-tag">Pricing Plans</p>
            <h2>That Fit All Budget Types</h2>
            <p>
              No more budget issues, get your hands on the most Affordable
              Website Design Services online.
            </p>
          </div>

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

        <div className="row">
          <div className="col-lg-6">
            <div class="why-wordpress-img">
              <img
                src={wordpresssectionimg}
                alt="Laptop Display"
                className="img-fluid workpressimges"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div class="why-wordpress-content">
              <h1>Why WordPress?</h1>
              <p>
                One of the strengths of WordPress is that it is fully
                customisable. This means we can build bespoke websites tailored
                specifically to our client’s goals
              </p>
              <p>
                Our WordPress developers ensure that your design and website
                functionality works across all devices, allowing you to stand
                out from the competition.
              </p>
              <p>
                Another added benefit of using such a popular platform is that
                there are thousands of great WordPress plugins available. These
                plugins add complex functionality to your site and can be great
                tools for displaying information, engaging users, and building a
                WordPress eCommerce online store.
              </p>
              <button className="morebenifit">See More Benefits</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
