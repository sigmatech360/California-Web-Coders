import React from "react";
import "./index.css";
import logodesignimg from "../../Assets/logodesignimg.png";
import { CiCircleCheck } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import itsolution from "../../Assets/itsolutions.png";
import itservicesimg2 from "../../Assets/itservicesimg2.png";

import missionbeforeimg from "../../Assets/mission-before-img.png";

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
              data-aos-offset="0"
            >
              We’re Awards Winning <span> IT Solutions </span> Agency
            </p>
            <p
              className="para2 mb-2"
              data-aos="fade-right"
              data-aos-duration="2000"
              data-aos-offset="0"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <div
              className="itSolutions-list"
              data-aos="fade-right"
              data-aos-duration="3000"
              data-aos-offset="0"
            >
              <span className="d-flex align-items-center gap-2">
                <CiCircleCheck className="checkicon" />
                <p className="para4 mb-0 align-self-baseline">
                  Professional IT Solutions
                </p>
              </span>

              <span className="d-flex align-items-center gap-2">
                <CiCircleCheck className="checkicon" />
                <p className="para4 mb-0 align-self-baseline">
                  Experience Team Members
                </p>
              </span>
              <span className="d-flex align-items-center gap-2">
                <CiCircleCheck className="checkicon" />
                <p className="para4 mb-0 align-self-baseline">
                  Awards Winning Solutions Company
                </p>
              </span>
            </div>
            <div
              className=" mt-5 gap-3 d-flex flex-wrap"
              data-aos="fade-right"
              data-aos-duration="3000"
              data-aos-offset="0"
            >
              <button className="learnmore">Learn More About Us</button>

              <span className="d-flex align-items-center gap-2">
                <FaPhoneAlt className="learnmorecall" />
                <p className="para4 mb-0 align-self-baseline">
                  +1 619-798-9688
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
              data-aos-offset="0"
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
                data-aos-offset="0"
              />
            </div>
          </div>

          <div className="col-lg-6">
            <div class="mission-statment-content">
              <h3
                className="missionstatement"
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-offset="0"
              >
                Mission statement.
              </h3>
              <p
                className="missionstatementpara"
                data-aos="fade-left"
                data-aos-duration="2000"
                data-aos-offset="0"
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <button
                className="missionstatementbtn"
                data-aos="fade-left"
                data-aos-duration="3000"
                data-aos-offset="0"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ItSolutions;
