import React from "react";
import "./index.css";
import { CiCircleCheck } from "react-icons/ci";
import wordpresssectionimg from "../../Assets/wordpresssectionimg.png";
const PricingPlans = () => {
  return (
    <section>
      <div className="PricingPlans">
        <div className="container">
          <div className="    text-center">
            <p className="para0">Pricing Plans</p>
            <h2 className="title">That Fit All Budget Types</h2>
            <p>
              No more budget issues, get your hands on the most Affordable
              Website Design Services online.
            </p>
          </div>

          <div className="py-4 mb-4 ">
            <div className="d-flex flex-wrap gap-4 ">
              <div className="mbsersicesblk">
                <div>
                  <p className="titlewp">Startup Wordpress Package</p>
                  <p>$699 ONLY</p>
                  <h3 className="servicesrs">$249</h3>
                  <div className="mt-4 scroll-container">
                    <p className="stock align-item-center">
                      <span className="icon">
                        <CiCircleCheck />{" "}
                      </span>
                      5 Stock Photos
                    </p>
                    <p className="stock align-item-center">
                      <span className="icon">
                        <CiCircleCheck />{" "}
                      </span>
                      5 Page Website
                    </p>
                    <p className="stock align-item-center">
                      <span className="icon">
                        <CiCircleCheck />{" "}
                      </span>
                      3 Banner Design
                    </p>
                    <p className="stock align-item-center">
                      <span className="icon">
                        <CiCircleCheck />{" "}
                      </span>
                      1 jQuery Slider Banner
                    </p>
                    <p className="stock align-item-center">
                      <span className="icon">
                        <CiCircleCheck />{" "}
                      </span>
                      FREE Google Friendly Sitemap
                    </p>
                    <p className="stock align-item-center">
                      <span className="icon">
                        <CiCircleCheck />{" "}
                      </span>
                      Complete W3C Certified HTML
                    </p>
                    <p className="stock align-item-center">
                      <span className="icon">
                        <CiCircleCheck />{" "}
                      </span>
                      48 to 72 hours TAT
                    </p>
                  </div>
                  <button className="orderbtn">Order Now</button>
                  <p className="shareidea mt-4">Share your idea?</p>
                  <p className="numb">+1 619-798-9688</p>
                </div>
              </div>

              {/* Repeat the .mbsersicesblk for other items */}
              <div className="mbsersicesblk">
                <div>
                  <p className="titlewp">Startup Wordpress Package</p>
                  <p>$699 ONLY</p>
                  <h3 className="servicesrs">$249</h3>
                  <div className="mt-4 scroll-container">
                    <p className="stock align-item-center">
                      <span className="icon">
                        <CiCircleCheck />{" "}
                      </span>
                      5 Stock Photos
                    </p>
                    <p className="stock align-item-center">
                      <span className="icon">
                        <CiCircleCheck />{" "}
                      </span>
                      5 Page Website
                    </p>
                    <p className="stock align-item-center">
                      <span className="icon">
                        <CiCircleCheck />{" "}
                      </span>
                      3 Banner Design
                    </p>
                    <p className="stock align-item-center">
                      <span className="icon">
                        <CiCircleCheck />{" "}
                      </span>
                      1 jQuery Slider Banner
                    </p>
                    <p className="stock align-item-center">
                      <span className="icon">
                        <CiCircleCheck />{" "}
                      </span>
                      FREE Google Friendly Sitemap
                    </p>
                    <p className="stock align-item-center">
                      <span className="icon">
                        <CiCircleCheck />{" "}
                      </span>
                      Complete W3C Certified HTML
                    </p>
                    <p className="stock align-item-center">
                      <span className="icon">
                        <CiCircleCheck />{" "}
                      </span>
                      48 to 72 hours TAT
                    </p>
                  </div>
                  <button className="orderbtn">Order Now</button>
                  <p className="shareidea mt-4">Share your idea?</p>
                  <p className="numb">+1 619-798-9688</p>
                </div>
              </div>
              <div className="mbsersicesblk">
                <div>
                  <p className="titlewp">Startup Wordpress Package</p>
                  <p>$699 ONLY</p>
                  <h3 className="servicesrs">$249</h3>
                  <div className="mt-4 scroll-container">
                    <p className="stock align-item-center">
                      <span className="icon">
                        <CiCircleCheck />{" "}
                      </span>
                      5 Stock Photos
                    </p>
                    <p className="stock align-item-center">
                      <span className="icon">
                        <CiCircleCheck />{" "}
                      </span>
                      5 Page Website
                    </p>
                    <p className="stock align-item-center">
                      <span className="icon">
                        <CiCircleCheck />{" "}
                      </span>
                      3 Banner Design
                    </p>
                    <p className="stock align-item-center">
                      <span className="icon">
                        <CiCircleCheck />{" "}
                      </span>
                      1 jQuery Slider Banner
                    </p>
                    <p className="stock align-item-center">
                      <span className="icon">
                        <CiCircleCheck />{" "}
                      </span>
                      FREE Google Friendly Sitemap
                    </p>
                    <p className="stock align-item-center">
                      <span className="icon">
                        <CiCircleCheck />{" "}
                      </span>
                      Complete W3C Certified HTML
                    </p>
                    <p className="stock align-item-center">
                      <span className="icon">
                        <CiCircleCheck />{" "}
                      </span>
                      48 to 72 hours TAT
                    </p>
                  </div>
                  <button className="orderbtn">Order Now</button>
                  <p className="shareidea mt-4">Share your idea?</p>
                  <p className="numb">+1 619-798-9688</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row py-4">
            <div className="col-12 col-lg-6 text-center mt-4 mt-lg-0">
              <img
                src={wordpresssectionimg} // Replace with actual image URL
                alt="Laptop Display"
                className="img-fluid workpressimges"
              
              />
            </div>
            {/* Left Content */}
            <div className="col-12 col-lg-6">
              <h1 className="title">Why WordPress?</h1>
              <p className="para mt-3">
                One of the strengths of WordPress is that it is fully
                customisable. This means we can build bespoke websites tailored
                specifically to our client’s goals
              </p>
              <p className="para">
                Our WordPress developers ensure that your design and website
                functionality works across all devices, allowing you to stand
                out from the competition.
              </p>
              <p>
                Another added benefit of using such a popular platform is that
                there are thousands of great WordPress plugins available. These
                plugins add complex functionality to your site and can be great
                tools for displaying information, engaging users, and building a
                WordPress eCommerce online store.
              </p>
              <button className="morebenifit btn   btn-lg mt-3">
                See More Benefits
              </button>
            </div>

            {/* Right Content */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
