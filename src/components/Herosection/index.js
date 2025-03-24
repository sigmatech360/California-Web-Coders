import React from "react";
import "./index.css";

const HeroSection = (props) => {
  return (
    <section className="HeroSection">
      <div className="container">
        <div className="row align-items-center justify-content-center flex-lg-row flex-column-reverse gap-lg-0 gap-4">
          <div className="col-lg-8">
            <div class="HeroSection-content">
              <h1
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-offset="0"
              >
                {props?.title}
              </h1>
              <p
                data-aos="fade-right"
                data-aos-duration="2000"
                data-aos-offset="0"
              >
                {props?.para}
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div
              class="HeroSection-img"
              data-aos="fade-left"
              data-aos-duration="2000"
              data-aos-offset="0"
            >
              <img
                src={props?.heroimg}
                alt="Web Design"
                className={`img-fluid`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
