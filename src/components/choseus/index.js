import React from "react";
import smart from "../../Assets//smart.svg";
import Professiona from "../../Assets/Professiona.svg";
import Certified from "../../Assets/Certified.svg";
import Premium from "../../Assets/Premium.svg";
import './index.css'
const WhychoseUs = () => {
  return (
    <services className="whychoseus">
      <div className="container py-5">
        {/* Section Title */}
        <div className="text-center  ">
          <h6 className="head1 text-uppercase text-muted">Why Choose Us</h6>
          <h2 className=" ">
            Let us change the way you think <br />
            <span className="changewayspan">about technology.</span>
          </h2>
        </div>

        {/* Cards Section */}
        <div className="row g-4 py-5">
          {/* Card 1 */}
          <div className="col-12 col-md-6 col-lg-3">
            <div className="card text-center border-0    text-white h-100">
              <div className="card-body">
                <div
                  className="rounded-circle bg-white text-primary d-flex justify-content-center align-items-center mx-auto mb-3"
                  style={{ width: "60px", height: "60px" }}
                >
                  <img src={smart} className="img-fluid" />
                </div>
                <h5 className="card-title  ">Smart & Secure System</h5>
                <p className="card-text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-12 col-md-6 col-lg-3">
            <div className="card cards text-center border-0    text-white h-100">
              <div className="card-body">
                <div
                  className="rounded-circle bg-white text-primary d-flex justify-content-center align-items-center mx-auto mb-3"
                  style={{ width: "60px", height: "60px" }}
                >
                  <img src={Professiona} className="img-fluid" />
                </div>
                <h5 className="card-title  ">Professional Team</h5>
                <p className="card-text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-12 col-md-6 col-lg-3">
            <div className="card text-center border-0    text-white h-100">
              <div className="card-body">
                <div
                  className="rounded-circle bg-white text-primary d-flex justify-content-center align-items-center mx-auto mb-3"
                  style={{ width: "60px", height: "60px" }}
                >
                  <img src={Certified} className="img-fluid" />
                </div>
                <h5 className="card-title  ">Certified Expert</h5>
                <p className="card-text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="col-12 col-md-6 col-lg-3">
            <div className="card cards text-center border-0    text-white h-100">
              <div className="card-body">
                <div
                  className="rounded-circle bg-white text-primary d-flex justify-content-center align-items-center mx-auto mb-3"
                  style={{ width: "60px", height: "60px" }}
                >
                  <img src={Premium} className="img-fluid" />
                </div>
                <h5 className="card-title  ">24/7 Premium Support</h5>
                <p className="card-text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </services>
  );
};

export default WhychoseUs;
