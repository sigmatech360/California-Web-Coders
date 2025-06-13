import React from "react";
import "./index.css";
import project1 from "../../Assets/project1.png";
import project2 from "../../Assets/project2.png";
import project3 from "../../Assets/project3.png";
import project4 from "../../Assets/project4.png";
import project5 from "../../Assets/project5.png";
import project6 from "../../Assets/project6.png";
import project7 from "../../Assets/project7.png";
import project8 from "../../Assets/project8.png";
import project9 from "../../Assets/project9.png";
import NewsCard from "../NewsCard"; 

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { logoDesignPortfolioData } from "../../Screen/webdesignservices/LogoDesign";
import { webDesignPortfolioData } from "../../Screen/webdesignservices/WebDesign";
import { customWebDesignPortfolioData } from "../../Screen/webdesignservices/CustomWebDevelopment";
import { cmsDevelopmentPortfolioData } from "../../Screen/webdesignservices/CMSDevelopment";
import { mobileAppDevelopmentPortfolioData } from "../../Screen/webdesignservices/MobileAppDevelopment";
import PortfolioTabs from "../PortfolioTabs";

const FeatureProject = (props) => {
  return (
    <section className={`${props?.mainclass}`}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="justify-content-center text-center ">
              <h3
                className={props?.titleclass}
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-offset="0"
              >
                {props?.title}
                <span> {props?.title2}</span>
              </h3>
              <p
                className={props?.paraclass}
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-offset="0"
              >
                {props?.para}
              </p>
            </div>
          </div>

          <PortfolioTabs />
        </div>
      </div>
    </section>
  );
};

export default FeatureProject;
