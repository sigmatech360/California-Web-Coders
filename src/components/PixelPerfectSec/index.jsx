import React, { useState } from "react";
import NewsCard from "../NewsCard";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const PixelPerfectSec = (props) => {
  return (
    <>
      <section className="pixel-perfect-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="pixel-perfect-head text-center ">
                <h2
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-offset="0"
                >
                  {props.secTitle}{" "}
                  {props.secTitleBlue && <span>{props.secTitleBlue}</span>}
                </h2>
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
                onClick={() => props.onImageClick(index, props.projectsData)}
              >
                <NewsCard
                  image={item.image}
                  imgClass={props.imgClass}
                  // description={item.description}
                />
              </div>
            ))}
            <div className="col-md-12">
              <div className="justify-content-center d-flex flex-wrap gap-4">
                <Link to={"/get-intouch"} className="viewbtn">
                  {props.btnText || "Request A Quote"}
                </Link>
                <div className="d-flex align-items-center gap-2 packages-number">
                  <FaPhoneSquareAlt className="callicon " />
                  <a
                    href="tel:+12818458498"
                    className="para4 mb-0  align-items-center"
                  >
                    619 837 2111
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </>
  );
};

export default PixelPerfectSec;
