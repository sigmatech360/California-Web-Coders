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
const FeatureProject = () => {
  return (
    <section className="FeatureProject mt-5">
      <div className="container">
        <div className=" justify-content-center text-center ">
          <h3 className="title">
            <span> Featured projects.</span>
          </h3>
          <p className="para">
            At California Web Coders, we bring visions to life with innovative
            web design, custom software development, and seamless digital
            solutions. From sleek eCommerce platforms to powerful business apps,
            our portfolio showcases diverse projects tailored to meet our
            clients' unique needs. Every project reflects our commitment to
            creativity, quality, and cutting-edge technology.
          </p>

          <div className=" d-flex flex-wrap justify-content-center align-items-center  gap-3">
            <button className="featuredbtn">Logo Design</button>

            <button className="featuredbtn">Web Design</button>
            <button className="featuredbtn">NFT Design</button>
            <button className="featuredbtn">E Commerce Website</button>
            <button className="featuredbtn">Video Animation</button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
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

          <div className="col-md-4">
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

          <div className="col-md-4">
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
          <div className="col-md-4">
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
          <div className="col-md-4">
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
          <div className="col-md-4">
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



          <div className="col-md-4">
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
          <div className="col-md-4">
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
          <div className="col-md-4">
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



          <button className="viewdbtn">View All Projects</button>
        </div>

      </div>
    </section>
  );
};

export default FeatureProject;
