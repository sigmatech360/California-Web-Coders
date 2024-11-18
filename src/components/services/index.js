import React from "react";
import "./index.css";
import servicesimg from "../../Assets/servicesimg.png";
import creativelogo from "../../Assets/creativelogo.svg";
 
import websitelogo from "../../Assets/websitelogo.svg";
import graphiclogo from "../../Assets/graphiclogo.svg";
import digitaltogo from "../../Assets/digitaltogo.svg";
import softwarelogo from "../../Assets/softwarelogo.svg";
import mrketinglogo from "../../Assets/mrketinglogo.svg";
import mobileservicesimg from "../../Assets/mobileservicesimg.png";

const Servies = () => {
  return (
    <section className="services">
      <div className="container">
        <div className="row  ">
        <div className="col-md-7 col-sm-12">
            <p className="para">Services</p>
            <p className="title">
              We deliver the services you need, with the quality you deserve
            </p>
            <p className="para2 mb-2">
              Whether you're looking for a cutting-edge cloud solution, want to
              harness AI's potential, or need to reinvent the user experience,
              we're your all-in-one innovation partner.
            </p>

            <div className="creativesection d-flex gap-3 mb-2">
              <span className="creativelg">
                <img src={creativelogo} className="creativelogo" />
              </span>
              <span>
                <p className="para4 d-flex gap-3 mb-0">Creative Solutions</p>
                <p className="para3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper.
                </p>
              </span>
            </div>

            <div className="creativesection d-flex gap-3 mb-2">
              <span className="creativelg">
                <img src={digitaltogo} className="creativelogo" />
              </span>
              <span>
                <p className="para4 d-flex gap-3 mb-0">Digital Marketing</p>
                <p className="para3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper.
                </p>
              </span>
            </div>

            <div className="creativesection d-flex gap-3 mb-2">
              <span className="creativelg">
                <img src={softwarelogo} className="creativelogo" />
              </span>
              <span>
                <p className="para4 d-flex gap-3 mb-0">Software Integration</p>
                <p className="para3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper.
                </p>
              </span>
            </div>
          </div>

          <div className="col-md-5 col-sm-12">
            <img className="servicesheroimg" src={servicesimg} />
          </div>
        </div>
        <div className="row  compservices">
          <div className="col-md-4">
            <div className="graphicservices  mb-4">
              <img src={graphiclogo} className="graphiclogo" />
              <p className="graphicgesigntitle">Graphic Design</p>
              <p className="graphicservicespara"> 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper.
              </p>
            </div>
            <div className="graphicservices  mb-4">
              <img src={mrketinglogo} className="graphiclogo" />
              <p className="graphicgesigntitle">Graphic Design</p>
              <p className="graphicservicespara" >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="mobileservices  mb-4">
              <p>Mobile App Developments</p>
              <p className="graphicservicespara">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper.
              </p>
              <img src={mobileservicesimg} className="mobileservicesimg" />
            </div>
          </div>

          <div className="col-md-4">
            <div className="graphicservices  mb-4">
              <img src={websitelogo} className="graphiclogo" />
              <p className="graphicgesigntitle">Graphic Design</p>
              <p className="graphicservicespara">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper.
              </p>
            </div>
            <div className="graphicservices  mb-4">
              <img src={websitelogo} className="graphiclogo" />
              <p className="graphicgesigntitle">Graphic Design</p>
              <p className="graphicservicespara">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Servies;
