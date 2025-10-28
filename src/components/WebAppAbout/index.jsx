import React from "react";
import webappabout from "../../Assets/newChildPagesAssets/webapp/webappabout.webp";
import { SiTicktick } from "react-icons/si";
import { FaCheckCircle, FaPhoneAlt } from "react-icons/fa";

const WebAppAbout = () => {
  return (
    <div className="web-app-about">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="webapp-abouttxt">
              <h6>About Web Development</h6>
              <h2>
                Powering Businesses with Smart <span>Web Applications</span>
              </h2>
              <p>
                At California Web Coders, we are proud to offer comprehensive and custom web application development services in California. Our team specializes in creating solutions that prioritize speed, security, and scalability to meet your business's unique needs. Each web app we develop is designed not only to simplify your operations but also to enhance the overall user experience, ensuring that your customers enjoy seamless and engaging interactions. Additionally, our focus is on delivering measurable business value while carefully aligning with your brand’s goals and vision.
              </p>
              <ul className="webap-list-flex">
                <li>
                  <SiTicktick /> Professional IT Solutions
                </li>
                <li>
                  <SiTicktick /> Experience Team Members
                </li>
              </ul>
              <div className="webapp-btnflex">
                <button>Learn More About Us</button>
                <div className="about-number">
                  <span>
                    <FaPhoneAlt />
                  </span>
                  <p> +1 619-798-9688</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="webapp-centermob">
              <img src={webappabout} alt="img" />
            </div>
          </div>
          <div className="col-lg-5">
            <div className="webapp-aboutend">
              <p>
               From frontend to backend, we focus on building web applications that are fast, reliable, and easy to use. Our React developers create smooth, interactive designs that keep users engaged, while Node.js powers the backend to handle performance and scalability. Together, they create a full-stack solution that looks amazing, runs efficiently, and grows with your business, so you can focus on results instead of worrying about tech slowing you down.
              </p>
              <ul>
                <li><FaCheckCircle/> Scalable architecture for long-term growth</li>
                <li><FaCheckCircle/> Secure backend infrastructure</li>
                <li><FaCheckCircle/> User-centered design with intuitive workflows</li>
                <li><FaCheckCircle/> Integration with APIs and third-party tools</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebAppAbout;
