import React from "react";
import "./index.css";
import project1 from "../../Assets/project1.png";

import project2 from "../../Assets/project2.png";
import project3 from "../../Assets/project3.png";

import project4 from "../../Assets/project4.png";

import project5 from "../../Assets/project5.png";
import project6 from "../../Assets/project6.png";
import project7 from "../../Assets/project7.png";

import project8 from "../../Assets/project8.png";
import project9 from "../../Assets/project9.png";
const FeatureProject = (props) => {
  return (
    <section className={`${props?.mainclass}   mt-5"`}>
      <div className="container">
        <div className=" justify-content-center text-center ">
          <h3 className={props?.titleclass}>
            {props?.title}
            <span> {props?.title2}</span>
          </h3>
          <p className={props?.paraclass}>{props?.para}</p>

          <div className=" d-flex flex-wrap justify-content-center align-items-center  gap-3">
            <button className="featuredbtn">Logo Design</button>

            <button className="featuredbtn">Web Design</button>
            <button className="featuredbtn">NFT Design</button>
            <button className="featuredbtn">E Commerce Website</button>
            <button className="featuredbtn">Video Animation</button>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="p-4 mt-4">
              <div className="news-card  ">
                <img src={project1} className="img-fluid rounded mb-2" />
                <div className="mt-2">
                  {/* <p className="text-muted small mb-1"> </p> */}

                  <p className="projectpara mb-3">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="p-4 mt-4">
              <div className="news-card  ">
                <img src={project2} className="img-fluid rounded mb-2" />
                <div className="mt-2">
                  {/* <p className="text-muted small mb-1"> </p> */}

                  <p className="projectpara mb-3">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="p-4 mt-4">
              <div className="news-card  ">
                <img src={project3} className="img-fluid rounded mb-2" />
                <div className="mt-2">
                  {/* <p className="text-muted small mb-1"> </p> */}

                  <p className="projectpara mb-3">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="p-4 mt-4">
              <div className="news-card  ">
                <img src={project4} className="img-fluid rounded mb-2" />
                <div className="mt-2">
                  {/* <p className="text-muted small mb-1"> </p> */}

                  <p className="projectpara mb-3">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="p-4 mt-4">
              <div className="news-card  ">
                <img src={project5} className="img-fluid rounded mb-2" />
                <div className="mt-2">
                  {/* <p className="text-muted small mb-1"> </p> */}

                  <p className="projectpara mb-3">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="p-4 mt-4">
              <div className="news-card  ">
                <img src={project6} className="img-fluid rounded mb-2" />
                <div className="mt-2">
                  {/* <p className="text-muted small mb-1"> </p> */}

                  <p className="projectpara mb-3">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="p-4 mt-4">
              <div className="news-card  ">
                <img src={project7} className="img-fluid rounded mb-2" />
                <div className="mt-2">
                  {/* <p className="text-muted small mb-1"> </p> */}

                  <p className="projectpara mb-3">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="p-4 mt-4">
              <div className="news-card  ">
                <img src={project8} className="img-fluid rounded mb-2" />
                <div className="mt-2">
                  {/* <p className="text-muted small mb-1"> </p> */}

                  <p className="projectpara mb-3">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="p-4 mt-4">
              <div className="news-card  ">
                <img src={project9} className="img-fluid rounded mb-2" />
                <div className="mt-2">
                  {/* <p className="text-muted small mb-1"> </p> */}

                  <p className="projectpara mb-3">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="  justify-content-center  d-flex gap-4">
            <button className={props?.viewbtn}>{props?.btntitle}</button>

            {props?.FaPhoneAlt && (
              <span className="d-flex align-items-center gap-2">
                <props.FaPhoneAlt className={props?.callicon} />
                <p className="para4 mb-0  align-items-center">
                  +1 619-798-9688
                </p>
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureProject;
