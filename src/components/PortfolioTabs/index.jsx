import React, { useState } from "react";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { logoDesignPortfolioData } from "../../Screen/webdesignservices/LogoDesign";
import NewsCard from "../NewsCard";
import { webDesignPortfolioData } from "../../Screen/webdesignservices/WebDesign";
import { customWebDesignPortfolioData } from "../../Screen/webdesignservices/CustomWebDevelopment";
import { cmsDevelopmentPortfolioData } from "../../Screen/webdesignservices/CMSDevelopment";
import { mobileAppDevelopmentPortfolioData } from "../../Screen/webdesignservices/MobileAppDevelopment";

const PortfolioTabs = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [images, setImages] = useState([]);

  const handleImageClick = (index, imageArray) => {
    const imageList = imageArray.map((item) => item.image);
    setImages(imageList);
    setPhotoIndex(index);

    // Delay opening the Lightbox until state is updated
    setTimeout(() => {
      setIsOpen(true);
    }, 50);
  };
  return (
    <>
      <div className="col-md-12">
        <Tabs
          defaultActiveKey="web-design"
          className="brand-tabs justify-content-center my-4 mb-xl-5 border-0"
          data-aos="fade-up"
          data-aos-duration="3000"
          data-aos-offset="0"
        >
          <Tab eventKey="logo-design" title="Logo Design">
            <div
              className="row justify-content-center"
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-offset="0"
            >
              {logoDesignPortfolioData.map((item, index) => (
                <div
                  className="col-lg-4 col-md-6 mb-4"
                  key={index}
                  onClick={() =>
                    handleImageClick(index, logoDesignPortfolioData)
                  }
                >
                  <NewsCard
                    image={item.image}
                    // description={item.description}
                  />
                </div>
              ))}
            </div>
          </Tab>

          <Tab eventKey="web-design" title="Web Design">
            <div
              className="row justify-content-center"
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-offset="0"
            >
              {webDesignPortfolioData.map((item, index) => (
                <div
                  className="col-lg-4 col-md-6 mb-4"
                  key={index}
                  onClick={() =>
                    handleImageClick(index, webDesignPortfolioData)
                  }
                >
                  <NewsCard
                    image={item.image}
                    // description={item.description}
                  />
                </div>
              ))}
            </div>
          </Tab>

          <Tab eventKey="customWebDesign" title="Custom Web Design">
            <div
              className="row justify-content-center"
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-offset="0"
            >
              {customWebDesignPortfolioData.map((item, index) => (
                <div
                  className="col-lg-4 col-md-6 mb-4"
                  key={index}
                  onClick={() =>
                    handleImageClick(index, customWebDesignPortfolioData)
                  }
                >
                  <NewsCard
                    image={item.image}
                    imgClass={'landingWebImg-div'}
                    // description={item.description}
                  />
                </div>
              ))}
            </div>
          </Tab>

          <Tab eventKey="cmsDevelopment" title="CMS Development">
            <div
              className="row justify-content-center"
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-offset="0"
            >
              {cmsDevelopmentPortfolioData.map((item, index) => (
                <div
                  className="col-lg-4 col-md-6 mb-4"
                  key={index}
                  onClick={() =>
                    handleImageClick(index, cmsDevelopmentPortfolioData)
                  }
                >
                  <NewsCard
                    image={item.image}
                    imgClass={'landingWebImg-div'}
                    // description={item.description}
                  />
                </div>
              ))}
            </div>
          </Tab>

          <Tab eventKey="mobileAppDevelopment" title="Mobile App Development">
            <div
              className="row justify-content-center"
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-offset="0"
            >
              {mobileAppDevelopmentPortfolioData.map((item, index) => (
                <div
                  className="col-lg-4 col-md-6 mb-4"
                  key={index}
                  onClick={() =>
                    handleImageClick(index, mobileAppDevelopmentPortfolioData)
                  }
                >
                  <NewsCard
                    image={item.image}
                    // description={item.description}
                  />
                </div>
              ))}
            </div>
          </Tab>
        </Tabs>
      </div>

      {isOpen && images.length > 0 && images[photoIndex] && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
          // loader={<div className="my-custom-loader">Loading...</div>}
        />
      )}
      {/* loader={<Loader />} */}
    </>
  );
};

export default PortfolioTabs;
