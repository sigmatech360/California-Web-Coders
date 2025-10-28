import React from "react";
import { CiCircleCheck } from "react-icons/ci";
import { Link } from "react-router-dom";

import whiteCheck from "../../Assets/white-check.webp";

const ServiceBanner = (props) => {
  return (
    <section
      className={`wordpress-web-design ${props.secClass}`}
      // style={{
      //   backgroundImage: `url(${props.bgImage})`,
      // }}
    >
      <img
        src={props.bgImage}
        className="servicesBanner-bgImage"
        alt="Services Background Img"
        fetchpriority="high"
        width="1920"
        height="1080"
      />
      <div className="container">
        <div className={props.rowClass || "row align-items-center"}>
          <div className={`${props.leftCol || "col-lg-6"}`}>
            <div className={props.innerServicetxt || "inner-services-banner-content"}>
              <h1
                className=""
                data-aos="fade-right"
                data-aos-duration="500"
                // data-aos-offset="50"
              >
                {props.title}
              </h1>
              <p
                className=""
                data-aos="fade-right"
                data-aos-duration="1000"
                // data-aos-offset="50"
              >
                {props.description}
              </p>
              {props.description2 && (
                <p
                  className=""
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  // data-aos-offset="50"
                >
                  {props.description2}
                </p>
              )}
              {props.bannerList && (
                <ul
                  className="list-unstyled wordpress-web-design-list"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  // data-aos-offset="50"
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
              )}
              <Link
                to={"/get-intouch"}
                className={props.btnClass || "btn-theme"}
                data-aos="fade-right"
                data-aos-duration="1000"
                // data-aos-offset="50"
              >
                {props.btnText || `Contact Us`}
              </Link>
              <img src={props.innerheroimg} className="next-inner-hero" alt="img" />
            </div>
          </div>
          {props.image && (
            <div className={`${props.rightCol || "col-lg-6"}`}>
              <div className="services__banner-img">
                <img
                  src={props.image}
                  alt="Services Banner Img"
                  className="img-fluid"
                  fetchpriority="high"
                  width="336"
                  height="252"
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  // data-aos-offset="50"
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
