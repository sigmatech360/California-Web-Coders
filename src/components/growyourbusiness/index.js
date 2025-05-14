import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
const Growyourbusiness = (props) => {
  return (
    <>
      <section className="gorwyourbusiness">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="grow-business-content d-flex justify-content-md-between justify-content-center align-items-center flex-lg-row flex-column gap-3">
                <h2
                  className="title m-0"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-offset="0"
                >
                  {props.title1} {props.title2 && <span>{props.title2}</span>}{" "}
                  {props.title3}
                </h2>
                <Link
                  to={"/get-intouch"}
                  className="clickhere"
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  data-aos-offset="0"
                >
                  {props.btnText || `Click Here To Get Started`}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Growyourbusiness;
