import React from "react";

const OurAppServices = ({
  minihead,
  ourSectitleStart,
  ourSecTitleBlue,
  ourSecTitle,
  miniPara,
  OurServiceBtn,
  appServices = [], 
}) => {
  return (
      <section className="our-app-services">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="our-appservice-txt">
                <h6>{minihead}</h6>
                <h4>{ourSectitleStart}
                  <span>{ourSecTitleBlue}</span>{" "}
                  {ourSecTitle}
                </h4>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="our-appservice-txt">
                <p>{miniPara}</p>
                {/* <button>{OurServiceBtn}</button> */}
              </div>
            </div>
          </div>

          <div className="row">
            {appServices.map((service, index) => (
              <div className="col-lg-4 col-md-6 mb-4" key={index}>
                <div className="our-appservice-box">
                  <span>{service.icon}</span>
                  <h5>{service.appServiceHead}</h5>
                  <p>{service.appServicePara}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  );
};

export default OurAppServices;
