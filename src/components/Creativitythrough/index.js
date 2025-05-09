import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import creativethoughsec from "../../Assets/creativethoughsec.png";

const Creativitythrough = (props) => {
  return (
    <section className="Creativitythrough">
      <div className="container">
        <div className="row Creativitythrough-row">
          <div className="col-xxl-4 col-lg-5">
            <div className="creativitythrough-content pt-lg-3 pt-0">
              <h1
                className="title"
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-offset="0"
              >
                {props.title1} {props.title2 && <span>{props.title2}</span>}
              </h1>
              <p
                className="para mt-3"
                data-aos="fade-right"
                data-aos-duration="2000"
                data-aos-offset="0"
              >
                {props.description1}
              </p>

              {props.description2 && (
                <p
                  className="para"
                  data-aos="fade-right"
                  data-aos-duration="2000"
                  data-aos-offset="0"
                >
                  {props.description2}
                </p>
              )}

              <button
                className="intouch btn   btn-lg mt-3"
                data-aos="fade-right"
                data-aos-duration="3000"
                data-aos-offset="0"
              >
                {props.btnText || `View Our Latest Work`}
              </button>
            </div>
          </div>

          <div className="col-xxl-8 col-lg-7">
            {props.image && (
              <div
                className="creativitythrough-content"
                data-aos="fade-left"
                data-aos-duration="2000"
                data-aos-offset="0"
              >
                <img
                  src={props.image}
                  alt="Image"
                  className="img-fluid workpressimges"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Creativitythrough;
