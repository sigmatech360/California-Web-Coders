import React from "react";
import { CiCircleCheck } from "react-icons/ci";
import { Link } from "react-router-dom";

import whiteCheck from "../../Assets/white-check.webp"

const ServiceBanner = (props) => {
  
  return (
    <section
      className="wordpress-web-design"
      style={{
        backgroundImage: `url(${props.bgImage})`,
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className={`${props.leftCol || "col-lg-6"}`}>
            <h1
              className=""
              // data-aos="fade-right"
              // data-aos-duration="1000"
              // data-aos-offset="0"
            >
              {props.title}
            </h1>
            <p
              className=""
              // data-aos="fade-right"
              // data-aos-duration="2000"
              // data-aos-offset="0"
            >
              {props.description}
            </p>
            {props.description2 && (
              <p
                className=""
                // data-aos="fade-right"
                // data-aos-duration="2000"
                // data-aos-offset="0"
              >
                {props.description2}
              </p>
            )}
            <ul
              className="list-unstyled wordpress-web-design-list"
              // data-aos="fade-right"
              // data-aos-duration="3000"
              // data-aos-offset="0"
            >
              {props.bannerList.map((item, index) => (
                <li className="d-flex align-items-center mb-2" key={index}>
                  <span className="d-flex align-items-center gap-2">
                    {/* <CiCircleCheck className="checkicon" /> */}
                    <img src={whiteCheck} alt="" />
                    <p className="para4 mb-0 align-self-baseline">{item}</p>
                  </span>
                </li>
              ))}
            </ul>
            <Link to={"/get-intouch"}
              className="btn-theme"
              // data-aos="fade-right"
              // data-aos-duration="3000"
              // data-aos-offset="0"
            >
              {props.btnText || `Contact Us`}
            </Link>
          </div>
          {props.image && (
            <div className={`${props.rightCol || "col-lg-6"}`}>
              <div className="services__banner-img">
                <img
                  src={props.image}
                  alt="Services Banner Img"
                  className="img-fluid"
                  // data-aos="fade-left"
                  // data-aos-duration="2000"
                  // data-aos-offset="0"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ServiceBanner;
