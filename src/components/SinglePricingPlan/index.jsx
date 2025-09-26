import React from "react";
import PricePlanCard from "../PricePlanCard";



const SinglePricingPlan = (props) => {
    // const pricingPlanData = props.pricingPlanData || [];
  return (
    <section className="PricingPlans singlePricingPlan">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="pricing-plan-head">
              <p
                className="head-tag"
                data-aos="fade-up"
                // data-aos-duration="500"
                data-aos-offset="50"
              >
                Pricing Plans
              </p>
              <h3
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-offset="50"
              >
                {props.secTitle || `That Fit All Budget Types`}
              </h3>
              <p
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-offset="50"
              >
                {props.secDescription ||
                  `No more budget issues, get your hands on the most Affordable Website Design Services online.`}
              </p>
            </div>
          </div>

          {props.pricingPlanData.map((item, index) => (
            <div className="col-lg-4 col-md-7 mb-4 mb-lg-0" key={index}>
              <PricePlanCard
                packageInfo={item.packageInfo}
                name={item.name}
                actualPrice={item.price.actualPrice}
                discountPrice={item.price.disountPrice}
                servicesList={item.servicesList}
                number={item.number}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SinglePricingPlan;
