import React from "react";
import "./index.css";
import logodesignimg from "../../Assets/logodesignimg.png";
import { CiCircleCheck } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import itsolution from "../../Assets/itsolutions.png";
import itservicesimg2 from "../../Assets/itservicesimg2.png";

import missionbeforeimg from "../../Assets/mission-before-img.png";
import { Link } from "react-router-dom";

const ItSolutions = () => {
  return (
    <section className="itSolutions">
      <div className="container">
        <div className="row mb-5 pb-lg-0 pb-2 flex-lg-row flex-column-reverse">
          <div className="col-lg-6 ">
            <p className="para">About Company</p>
            <p
              className="title"
              data-aos="fade-right"
              data-aos-duration="1000"
              
            >
              We’re Awards Winning <span> IT Solutions </span> Agency
            </p>
            <p
              className="para2 mb-2"
              data-aos="fade-right"
              data-aos-duration="2000"
              
            >
              California Web Coders started with a vision to simplify digital
              for businesses of all sizes. Over the years, we've grown into a
              full-service digital powerhouse offering web design, development,
              and online marketing services. With a team of expert designers,
              developers, and strategists, we turn your ideas into stunning
              digital experiences.
            </p>
            <p
              className="para2 mb-2"
              data-aos="fade-right"
              data-aos-duration="2000"
              
            >
              Whether it’s building custom websites or launching high-performing
              campaigns, we deliver solutions that work hard for your brand.
            </p>

            <div
              className="itSolutions-list"
              data-aos="fade-right"
              data-aos-duration="3000"
              
            >
              <span className="d-flex align-items-center gap-2">
                <CiCircleCheck className="checkicon" />
                <p className="para4 mb-0 align-self-baseline">
                  Strategy-led digital experiences.
                </p>
              </span>

              <span className="d-flex align-items-center gap-2">
                <CiCircleCheck className="checkicon" />
                <p className="para4 mb-0 align-self-baseline">
                  Full-service creative + tech team.
                </p>
              </span>
              <span className="d-flex align-items-center gap-2">
                <CiCircleCheck className="checkicon" />
                <p className="para4 mb-0 align-self-baseline">
                  Scalable solutions, fast delivery.
                </p>
              </span>
            </div>
            <div
              className=" mt-5 gap-3 d-flex flex-wrap"
              data-aos="fade-right"
              data-aos-duration="3000"
              
            >
              <Link to={"/our-work"} className="learnmore">View Our Portfolio</Link>

              <span className="d-flex align-items-center gap-2 packages-number">
                <FaPhoneAlt className="learnmorecall" />
                <p href="tel:+12818458498" className="para4 mb-0 align-self-baseline">
                  +1 (281) 845-8498
                </p>
              </span>
            </div>
          </div>

          <div className="col-lg-6 mb-lg-0 mb-4">
            <img
              className="img-fluid  itSolutionsimg"
              src={itsolution}
              data-aos="fade-left"
              data-aos-duration="1000"
              
            />
          </div>
        </div>

        <div className="row align-items-center mt-5 pt-lg-0 pt-sm-5 pt-3">
          <div className="col-lg-6">
            <div className="mission-statement-imgs">
              <img src={missionbeforeimg} className="mission-before-img" />
              <img
                src={itservicesimg2}
                className="img-fluid mission-img-front"
                data-aos="fade-right"
                data-aos-duration="1000"
                
              />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="mission-statment-content">
              <h3
                className="missionstatement"
                data-aos="fade-left"
                data-aos-duration="1000"
                
              >
                Our Goals
              </h3>
              <p
                className="missionstatementpara"
                data-aos="fade-left"
                data-aos-duration="2000"
                
              >
                We live and strive for one goal: to empower businesses with
                smart and creative digital solutions backed by
                performance-driven strategies that continually grow their online
                presence and drive real, measurable growth, all while keeping
                things simple, efficient, and beautifully designed.
              </p>
              <Link to={"/get-intouch"}
                className="missionstatementbtn"
                data-aos="fade-left"
                data-aos-duration="3000"
                
              >
                Connect Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ItSolutions;
