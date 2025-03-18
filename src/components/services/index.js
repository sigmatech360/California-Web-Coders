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

const creativeSectionData = [
  {
    id: 1,
    image: creativelogo,
    name: "Creative Solutions",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper.",
  },
  {
    id: 2,
    image: digitaltogo,
    name: "Digital Marketing",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper.",
  },
  {
    id: 3,
    image: softwarelogo,
    name: "Software Integration",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper.",
  },
];

const Servies = () => {
  return (
    <section className="services">
      <div className="container">
        <div className="row  services-row-1">


          <div className="col-lg-8">
            <div className="services-heading">
              <p className="para">Services</p>
              <p className="title">
                We deliver the services you need, with the quality you deserve
              </p>
              <p className="para2 mb-0">
                Whether you're looking for a cutting-edge cloud solution, want
                to harness AI's potential, or need to reinvent the user
                experience, we're your all-in-one innovation partner.
              </p>
            </div>

            {creativeSectionData.map((item, index) => (
              <div className="creativesection d-flex" key={index}>
                <span className="creativelg">
                  <img src={item.image} className="creativelogo" />
                </span>
                <span>
                  <p className="para4 d-flex gap-3 mb-0">{item.name}</p>
                  <p className="para3">{item.description}</p>
                </span>
              </div>
            ))}
          </div>

          <div className="col-lg-4">
            <div className="services-right-img">
              <img className="servicesheroimg img-fluid" src={servicesimg} />
            </div>
          </div>


        </div>
        <div className="row justify-content-center  compservices">
          <div className="col-lg-4 mb-4 ">
            <div className="graphic-services-outer">
              <div className="graphicservices graphic-bg">
                <div className="graphicservices-icon">
                  <img src={graphiclogo} className="graphiclogo" />
                </div>
                <div className="graphicservices-content">
                  <h4 className="graphicgesigntitle">Graphic Design</h4>
                  <p className="graphicservicespara">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    elit tellus, luctus nec ullamcorper.
                  </p>
                </div>
              </div>
              <div className="graphicservices">
                <div className="graphicservices-icon">
                  <img src={mrketinglogo} className="graphiclogo" />
                </div>
                <div className="graphicservices-content">
                  <h4 className="graphicgesigntitle">Online Marketing</h4>
                  <p className="graphicservicespara">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    elit tellus, luctus nec ullamcorper.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4 compservices-col-3">
            <div className="mobileservices-outer h-100 d-flex flex-column">
              <div className="mobileservices flex-grow-1">
                <div className="mobile-services-content">
                  <h4>Mobile App Developments</h4>
                  <p className="graphicservicespara">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    elit tellus, luctus nec ullamcorper.
                  </p>
                </div>
                <div className="mobile-services-image">
                  <img src={mobileservicesimg} className="mobileservicesimg" />
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 mb-4 ">
            <div className="graphic-services-outer">
              <div className="graphicservices">
                <div className="graphicservices-icon">
                  <img src={websitelogo} className="graphiclogo" />
                </div>
                <div className="graphicservices-content">
                  <p className="graphicgesigntitle">Website Developments</p>
                  <p className="graphicservicespara">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    elit tellus, luctus nec ullamcorper.
                  </p>
                </div>
              </div>
              <div className="graphicservices web-dev-bg">
                <div className="graphicservices-icon">
                  <img src={websitelogo} className="graphiclogo" />
                </div>
                <div className="graphicservices-content">
                  <p className="graphicgesigntitle">Website Developments</p>
                  <p className="graphicservicespara">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    elit tellus, luctus nec ullamcorper.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Servies;
