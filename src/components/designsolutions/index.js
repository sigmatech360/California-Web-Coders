import React from "react";
import "./index.css";
import { MdEdit } from "react-icons/md";

import { CiMobile3 } from "react-icons/ci";

const Designsolutions = () => {
  return (
    <section className="Designsolutions">
      <div className="container">
        <div className="row py-4">
          <div className="col-md-6 ">
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

            <p className="para2  mb-4">
              Contact us today for a free consultation and discover how our web
              design expertise can help your business thrive.
            </p>

            <button className="freecons">Get My Free Consulation</button>
          </div>

          <div className="col-md-6">
          <div className="solution d-flex gap-3 mb-2">
              <span>
                <MdEdit />
              </span>{" "}
              <span className=" ">
                <p className="d-flex gap-3">
                  {" "}
                  Content Management Systems (CMS):
                </p>
                <p className="para3">
                  We empower you to easily manage your website content with
                  user-friendly CMS solutions.
                </p>
              </span>
            </div>{" "}
            <div className="solution d-flex gap-3 mb-2">
              <span>
                <MdEdit />
              </span>{" "}
              <span className=" ">
                <p className="d-flex gap-3"> Responsive Web Design::</p>
                <p className="para3">
                  We ensure your website looks and functions flawlessly across
                  all devices, providing an optimal user experience for
                  everyone.
                </p>
              </span>
            </div>{" "}
            <div className="solution d-flex gap-3 mb-2">
              <span>
                <CiMobile3 />
              </span>{" "}
              <span className=" ">
                <p className="d-flex gap-3"> eCommerce Development:</p>
                <p className="para3">
                  We build robust and secure online stores that enable you to
                  sell your products or services with ease.
                </p>
              </span>
            </div>{" "}
            <div className="solution d-flex gap-3 mb-2">
              <span>
                <MdEdit />
              </span>{" "}
              <span className=" ">
                <p className="d-flex gap-3"> Website Maintenance & Support:</p>
                <p className="para3">
                  We provide ongoing maintenance and support to keep your
                  website running smoothly and up-to-date.
                </p>
              </span>
            </div>{" "}
            <div className="solution d-flex gap-3 mb-2">
              <span>
                <MdEdit />
              </span>{" "}
              <span className=" ">
                <p className="d-flex gap-3"> SEO Optimization:</p>
                <p className="para3">
                  We implement proven SEO strategies to improve your website’s
                  visibility in search engines and attract organic traffic.
                </p>
              </span>
            </div>{" "}
       
          
          </div>
        </div>
      </div>
    </section>
  );
};

export default Designsolutions;
