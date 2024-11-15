import React from "react";
import { CiFaceSmile } from "react-icons/ci";
import { FaFaceSmile } from "react-icons/fa6";
import { TbSpeakerphone } from "react-icons/tb";
import { IoBagRemoveSharp } from "react-icons/io5";

import video from "../../Assets/digitalvideo.mp4";
import "./index.css";
const Digitalagency = () => {
  return (
    <section>
      <div className="digitalagency">
        <div className="container">
          <div className="row mb-4 mb-5">
            <div className="col-md-6">
              <h2 className="title">
                We are a creative bold digital agency based in{" "}
                <span>Californi.</span>{" "}
              </h2>
            </div>
            <div className="col-md-6">
              <div className="d-flex gap-4">
                <span className="twentypls"> 20+</span>
                <div className=" align-content-center justify-content-center">
                  {" "}
                  <p className="para"> 20+ Years of Experience</p>
                  <p className="para1">
                    We are dedicated to providing outstanding digital and design
                    services meet the functional and aesthetic.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
              <div className="satisfiedpara  d-flex justify-content-between  align-content-center">
                <p className="para2 ">
                  {" "}
                  <span>350+ </span>very satisfied clients around the worldwide.
                </p>
                <span className="facespan    ">
                  <FaFaceSmile />
                </span>
              </div>
            </div>

            <div className="col-md-4">
              <div className="satisfiedpara  d-flex justify-content-between  align-content-center">
                <p className="para2 ">
                  {" "}
                  <span>200+ </span>good award winning digital media agency.
                </p>
                <span className="facespan    ">
                  <TbSpeakerphone />
                </span>
              </div>
            </div>

            <div className="col-md-4">
              <div className="satisfiedpara  d-flex justify-content-between  align-content-center">
                <p className="para2 ">
                  {" "}
                  <span>750+ </span> successfully project completed in one year.
                </p>
                <span className="facespan    ">
                  <IoBagRemoveSharp />
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="video-container">
          <video width="100%" height="auto" autoPlay loop muted>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default Digitalagency;
