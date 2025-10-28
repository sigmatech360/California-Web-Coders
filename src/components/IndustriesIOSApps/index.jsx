import React from "react";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

const IndustriesIOSApps = ({
  sectionTitle,         
  highlightText,      
  description,         
  features,             
  image,                
}) => {
  return (
    <section className="iundustries-ios-apps">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="industries-iosapp-txt">
              <h4>
                {sectionTitle} <span>{highlightText}</span>
              </h4>
              <p>{description}</p>

              <ul>
                {features?.map((item, index) => (
                  <li key={index}>
                    <span className="ios-service-icon">{item.icon}</span>
                    <span className="ios-arrow-icon">
                      <HiOutlineArrowLongRight />
                    </span>
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="ios-app-img">
              <img src={image} alt="App showcase" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesIOSApps;
