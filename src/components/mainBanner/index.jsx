import React from "react";
import heroimg from "../../Assets/heroimg.jpg";
import heroimg2 from "../../Assets/heroimg2.jpg";
import { Link } from "react-router-dom";

const MainBanner = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="heroinner">
          <div className="row justify-content-center  align-items-cener">
            <div className="col-lg-6 text-center text-lg-start">
              <div className="hero-content">
                <div>
                  <h2
                    className="title"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-offset="0"
                  >
                    Your Growth Starts <span>With</span> A Great Web Design
                  </h2>
                  <p
                    className="para me-lg-5 me-0 pe-lg-5 pe-0"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    data-aos-offset="0"
                  >
                    <span>California Web Coders</span> excel at creating
                    websites that build connections, fuel growth, and ensure
                    long-term success.
                  </p>
                  <Link
                    to={"/our-work"}
                    className="herobtn"
                    data-aos="fade-up"
                    data-aos-duration="3000"
                    data-aos-offset="0"
                  >
                    View Our Work
                  </Link>
                </div>
                <div className="google-review mt-4">
                  <img
                    src={heroimg2}
                    alt="Google Logo"
                    className="google-logo"
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div
                className="hero-img-right"
                data-aos="fade-left"
                data-aos-duration="3000"
                data-aos-offset="0"
              >
                <img
                  src={heroimg}
                  alt="Responsive Design Showcase"
                  className="heroimg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainBanner;
