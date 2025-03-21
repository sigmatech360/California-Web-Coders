import React from "react";
import "./index.css";

const Mobileworld = (props) => {
  return (
    <section className="Mobileworld">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <p className="para0">Pricing Plans</p>
            <h2 className="title">{props.title}</h2>
          </div>
          <div className="col-lg-6">
            <p className="para1 mobileworld-head-p ps-xxl-5">
              {props.description}
            </p>
          </div>
          {props.children}
        </div>
      </div>
    </section>
  );
};

export default Mobileworld;
