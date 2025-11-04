import React from "react";
import { Link } from "react-router-dom";

const DomainService = (props) => {
  return (
    <section className="domain-service-sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="domain-service-head">
              <h6>{props.domainserviceminihead}</h6>
              <h2>{props.domainservicelargehead}</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="domain-service-one">
            <div className="row">
              <div className="col-lg-6 pl-0">
                <div className="domain-service-img">
                  <img src={props.serviceImgone} alt={props.bighead} />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="domain-service-txt">
                  <h6>{props.shorthead}</h6>
                  <h4>{props.bighead}</h4>
                  <p>{props.servicepara}</p>
                  <Link to="">{props.btntext}</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="domain-service-box">
              <div className="service-domain-img">
                <img src={props.serviceImgtwo} alt={props.bigheadtwo} />
              </div>
              <div className="domain-service-txt">
                <h6>{props.shortheadtwo}</h6>
                <h4>{props.bigheadtwo}</h4>
                <p>{props.serviceparatwo}</p>
                <Link to="">{props.btntwotxt}</Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="domain-service-box">
              <div className="service-domain-img">
                <img src={props.serviceImgthree} alt={props.bigheadthree} />
              </div>
              <div className="domain-service-txt">
                <h6>{props.shortheadthree}</h6>
                <h4>{props.bigheadthree}</h4>
                <p>{props.serviceparathree}</p>
                <Link to="">{props.btnthreetxt}</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DomainService;
