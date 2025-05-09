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
      "We bring fresh, creative solutions that help your brand stand out and connect with your audience.",
  },
  {
    id: 2,
    image: digitaltogo,
    name: "Digital Marketing",
    description:
      "From strategy to results, our digital marketing helps you get noticed and stay top of mind.",
  },
  {
    id: 3,
    image: softwarelogo,
    name: "Software Integration",
    description:
      "We streamline your systems with smart software integration that improves workflow and boosts efficiency instantly.",
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
              <p
                className="title"
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-offset="0"
              >
                Smart Digital Services and Premium Web Design. Always Delivered
                on Time.
              </p>
              <p
                className="para2 mb-0"
                data-aos="fade-right"
                data-aos-duration="2000"
                data-aos-offset="0"
              >
                We can revamp your existing website or build a new one from
                scratch, and the one thing that stays uncompromised is Quality!
              </p>
            </div>

            {creativeSectionData.map((item, index) => (
              <div
                className="creativesection d-flex"
                key={index}
                data-aos="fade-right"
                data-aos-duration="3000"
                data-aos-offset="0"
              >
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
            <div
              className="services-right-img"
              data-aos="fade-left"
              data-aos-duration="2000"
              data-aos-offset="0"
            >
              <img className="servicesheroimg img-fluid" src={servicesimg} />
            </div>
          </div>
        </div>



        <div className="row justify-content-center  compservices">
          <div className="col-lg-4 mb-4 ">
            <div
              className="graphic-services-outer"
              data-aos="fade-right"
              data-aos-duration="2000"
              data-aos-offset="0"
            >
              <div className="graphicservices graphic-bg">
                <div className="graphicservices-icon">
                  <img src={graphiclogo} className="graphiclogo" />
                </div>
                <div className="graphicservices-content">
                  <h4 className="graphicgesigntitle">Graphic Design</h4>
                  <p className="graphicservicespara">
                    We deliver striking graphic design that enhances your brand’s identity and supports your digital presence.
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
                  Our online marketing strategies drive engagement, increase visibility, and convert visitors into loyal customers.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4 compservices-col-3">
            <div
              className="mobileservices-outer h-100 d-flex flex-column"
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-offset="0"
            >
              <div className="mobileservices flex-grow-1">
                <div className="mobile-services-content">
                  <h4>Mobile App Developments</h4>
                  <p className="graphicservicespara">
                  Our mobile app developers in California create intuitive, scalable apps that deliver seamless user experiences.
                  </p>
                </div>
                <div className="mobile-services-image">
                  <img src={mobileservicesimg} className="mobileservicesimg" />
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 mb-4 ">
            <div
              className="graphic-services-outer"
              data-aos="fade-left"
              data-aos-duration="2000"
              data-aos-offset="0"
            >
              <div className="graphicservices">
                <div className="graphicservices-icon">
                  <img src={websitelogo} className="graphiclogo" />
                </div>
                <div className="graphicservices-content">
                  <p className="graphicgesigntitle">Website Developments</p>
                  <p className="graphicservicespara">
                  As a custom web development company, we build responsive, high-performing websites tailored to your needs.
                  </p>
                </div>
              </div>
              <div className="graphicservices web-dev-bg">
                <div className="graphicservices-icon">
                  <img src={websitelogo} className="graphiclogo" />
                </div>
                <div className="graphicservices-content">
                  <p className="graphicgesigntitle">CMS Developments</p>
                  <p className="graphicservicespara">
                  We offer CMS development services to help you manage content easily, boosting efficiency and user experience.
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
