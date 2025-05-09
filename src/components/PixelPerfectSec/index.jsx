import React from "react";
import NewsCard from "../NewsCard";
import { FaPhoneSquareAlt } from "react-icons/fa";

const PixelPerfectSec = (props) => {
  return (
    <section className="pixel-perfect-sec">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="pixel-perfect-head text-center ">
              <h3
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-offset="0"
              >
                {props.secTitle}{" "}
                {props.secTitleBlue && <span>{props.secTitleBlue}</span>}
              </h3>
              <p
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-offset="0"
              >
                {props.secDescription}
              </p>
            </div>
          </div>
          {props.projectsData.map((item, index) => (
            <div
              className="col-lg-4 col-md-6 mb-4"
              key={index}
              data-aos="fade-up"
              data-aos-duration="3000"
              data-aos-offset="0"
            >
              <NewsCard image={item.image} description={item.description} />
            </div>
          ))}
          <div className="col-md-12">
            <div class="justify-content-center d-flex flex-wrap gap-4">
              <button className="viewbtn">
                {props.btnText || "Request A Quote"}
              </button>
              <div className="d-flex align-items-center gap-2">
                <FaPhoneSquareAlt className="callicon " />
                <p className="para4 mb-0  align-items-center">
                  +1 619-798-9688
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PixelPerfectSec;
