import React from "react";
import performence from "../../Assets/performence.webp";
import "./index.css";
import { Link } from "react-router-dom";

const WordPressPerformanceSection = (props) => {
  return (
    <section className="WordPressPerformanceSection">
      <div className="container">
        <div className="row align-items-center flex-lg-row flex-column-reverse">
          <div className="col-lg-6">
            <h2
              className="title"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-offset="0"
            >
              {props.secTitle1}{" "}
              {props.secTitle2 && <span>{props.secTitle2}</span>}{" "}
              {props.secTitle3 && props.secTitle3}
            </h2>
            <p
              data-aos="fade-right"
              data-aos-duration="2000"
              data-aos-offset="0"
            >
              {props.description}
            </p>
            {props.description2 && (
              <p
                data-aos="fade-right"
                data-aos-duration="2000"
                data-aos-offset="0"
              >
                {props.description2}
              </p>
            )}
            <Link to={"/pricing-plan"}
              className="btn-theme"
              data-aos="fade-right"
              data-aos-duration="3000"
              data-aos-offset="0"
            >
              {props.btnText || `Get In Touch`}
            </Link>
          </div>

          <div className="col-lg-6">
            <div className="services__about-img">
              <img
                src={props.image}
                alt="Service About"
                className="img-fluid"
                data-aos="fade-left"
                data-aos-duration="2000"
                data-aos-offset="0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WordPressPerformanceSection;
