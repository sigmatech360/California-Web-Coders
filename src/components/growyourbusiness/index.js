import React from "react";
import "./index.css";
const Growyourbusiness = () => {
  return (
    <>
      <section className="gorwyourbusiness">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="grow-business-content d-flex justify-content-md-between justify-content-center align-items-center flex-lg-row flex-column gap-3">
                <h2
                  className="title m-0 text-center"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-offset="0"
                >
                  Want to grow your business <span>digitally?</span>
                </h2>
                <button
                  className="clickhere"
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  data-aos-offset="0"
                >
                  Click Here To Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Growyourbusiness;
