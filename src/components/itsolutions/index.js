import React from "react";
import "./index.css";
import logodesignimg from "../../Assets/logodesignimg.png";
import { CiCircleCheck } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import itsolution from "../../Assets/itsolutions.png";
import itservicesimg2 from "../../Assets/itservicesimg2.png";
const ItSolutions = () => {
  return (
    <section className="itSolutions">
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-6 ">
            <p className="para">About Company</p>
            <p className="title">
              We’re Awards Winning <span> IT Solutions </span> Agency
            </p>
            <p className="para2 mb-2">
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
            <div>
              <div>
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
            </div>
            <div className=" mt-5 gap-3 d-flex">
              <button className="learnmore">Learn More About Us</button>

              <span className="d-flex align-items-center gap-2">
                <FaPhoneAlt className="learnmorecall" />
                <p className="para4 mb-0 align-self-baseline">
                  +1 619-798-9688
                </p>
              </span>
            </div>
          </div>

          <div className="col-md-6">
            <img className="img-fluid  itSolutionsimg" src={itsolution} />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <img src={itservicesimg2} className="img-fluid" />
          </div>

          <div className="col-md-6">
            <h3 className="missionstatement">Mission statement.</h3>
            <p className="missionstatementpara">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing.
            </p>
            <button className="missionstatementbtn">Get In Touch</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ItSolutions;
