import React from "react";
import "./index.css";
const HeroSection = (props) => {
  return (
    <section className="HeroSection text-white py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Text Content */}
          <div className="col-12 col-lg-6">
            <h1 className={props?.titleclass}>
              {props?.title} <br />
            </h1>

            <p className={`${props?.paraclass} mt-3`}>{props?.para}</p>
          </div>

          {/* Image Content */}
          <div className="col-12 col-lg-6 text-center mt-4 mt-lg-0">
            <img
              src={props?.heroimg} // Replace with your image URL
              alt="Web Design"
              className={`img-fluid ${props?.imgclass}  `}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
