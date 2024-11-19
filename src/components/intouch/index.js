import React from "react";
import "./index.css";
const Intouch = () => {
  return (
    <section className="intouch">
      <div className="container my-5">
        <div className="row">
          {/* Left Section */}
          <div className="col-lg-6 col-md-12 mb-4">
            <h6 className="para1">Get In Touch</h6>
            <h2 className="title">
              Don't hesitate to contact us for <span> more information. </span>
            </h2>
            <p className="para2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <h5 className="para3 mt-4">Follow our social network</h5>
            <p className="text-muted">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <div className="d-flex gap-3">
              <a href="#" className="text-primary fs-4" aria-label="Facebook">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="text-primary fs-4" aria-label="LinkedIn">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="#" className="text-primary fs-4" aria-label="Instagram">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="text-primary fs-4" aria-label="YouTube">
                <i className="bi bi-youtube"></i>
              </a>
              <a href="#" className="text-primary fs-4" aria-label="Twitter">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#" className="text-primary fs-4" aria-label="Pinterest">
                <i className="bi bi-pinterest"></i>
              </a>
            </div>
          </div>
          {/* Right Section */}
          <div className="col-lg-6 col-md-12">
            <div className="row">
              <div className="col-md-6 mb-4">
                <div className="bg-primary text-white p-3 rounded text-center">
                  <i className="bi bi-geo-alt-fill fs-3"></i>
                  <h5 className="mt-2">Head Office</h5>
                  <p>225 Broadway, San Diego, CA 92101, United States</p>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="bg-primary text-white p-3 rounded text-center">
                  <i className="bi bi-envelope-fill fs-3"></i>
                  <h5 className="mt-2">Email Us</h5>
                  <p>
                    support@yourdomain.tld
                    <br />
                    hello@yourdomain.tld
                  </p>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="bg-primary text-white p-3 rounded text-center">
                  <i className="bi bi-telephone-fill fs-3"></i>
                  <h5 className="mt-2">Call Us</h5>
                  <p>
                    +1 609-798-9688
                    <br />
                    +1 609-798-9688
                  </p>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="bg-primary text-white p-3 rounded text-center">
                  <i className="bi bi-headset fs-3"></i>
                  <h5 className="mt-2">24/7 Premium Support</h5>
                  <p>
                    Lorem ipsum is simply dummy text of the printing and
                    typesetting industry.
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

export default Intouch;
