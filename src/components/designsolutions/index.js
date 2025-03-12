import React from "react";
import "./index.css";

import { MdEdit } from "react-icons/md";
import { CiMobile3 } from "react-icons/ci";
import { MdOutlineComputer } from "react-icons/md";
import { RiToolsLine } from "react-icons/ri";
import { RiSeoFill } from "react-icons/ri";

const webSolutionsData = [
  {
    id: 1,
    name: "Custom Web Design:",
    description:
      "We create bespoke websites tailored to your specific needs and goals, ensuring a unique and memorable online presence.",
    icon: <MdEdit />,
  },
  {
    id: 2,
    name: "Responsive Web Design:",
    description: "We ensure your website looks and functions flawlessly across all devices, providing an optimal user experience for everyone.",
    icon: <CiMobile3 />,
  },
  {
    id: 3,
    name: "eCommerce Development:",
    description: "We build robust and secure online stores that enable you to sell your products or services with ease.",
    icon: <MdOutlineComputer  />,
  },
  {
    id: 4,
    name: "Website Maintenance & Support:",
    description: "We provide ongoing maintenance and support to keep your website running smoothly and up-to-date.",
    icon: <RiToolsLine />,
  },
  {
    id: 5,
    name: "SEO Optimization:",
    description: "We implement proven SEO strategies to improve your website’s visibility in search engines and attract organic traffic.",
    icon: <RiSeoFill />,
  },
  {
    id: 6,
    name: "Content Management Systems (CMS):",
    description: "We empower you to easily manage your website content with user-friendly CMS solutions.",
    icon: <MdEdit />,
  },
];  

const Designsolutions = () => {
  return (
    <section className="Designsolutions">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mb-lg-0 mb-4">
            <p className="para">What we do</p>

            <p className="title">
              <span> Web design solutions </span>for your business growth.
            </p>

            <p className="para2 mb-2">
              At <span>California Web Coders,</span> we’re passionate about
              crafting exceptional digital experiences that drive results. As a
              leading web design agency, we specialize in creating visually
              stunning, user-friendly, and high-performing websites that elevate
              your brand and engage your audience. We believe that a
              well-designed website is more than just an online presence – it’s
              a powerful tool for achieving your business goals.
            </p>

            <p className="para2">
              Our team of talented designers, developers, and strategists
              collaborate closely with you to understand your unique vision and
              objectives. We then translate those insights into a custom web
              design solution that reflects your brand identity, resonates with
              your target audience, and delivers measurable results.
            </p>
            <p className="paratitle">
              Ready to transform your online presence?
            </p>

            <p className="para2  mb-3">
              Contact us today for a free consultation and discover how our web
              design expertise can help your business thrive.
            </p>

            <button className="freecons">Get My Free Consulation</button>
          </div>

          <div className="col-lg-6">
            {webSolutionsData.map((item, index) => (
              <div className="solution d-flex mb-2" key={index}>
                <span>
                  {item.icon}
                </span>{" "}
                <span className=" ">
                  <h4 className="solution-heading">{item.name}</h4>
                  <p className="para3">{item.description}
                  </p>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Designsolutions;
