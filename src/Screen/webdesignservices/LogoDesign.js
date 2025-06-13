import React, { useState } from "react";
import "./index.css";
import Layout from "../../components/layout";
import WordPressPerformanceSection from "../../components/WordPressPerformanceSection";
import Growyourbusiness from "../../components/growyourbusiness";
import PricingPlans from "../../components/PricingPlans";
import ContactForm from "../../components/readytocheat";
import Creativitythrough from "../../components/Creativitythrough";

// import pixleperfectimg1 from "../../Assets/service-logoDesign-pixle-perfect-img1.png";
// import pixleperfectimg2 from "../../Assets/service-logoDesign-pixle-perfect-img2.png";
// import pixleperfectimg3 from "../../Assets/service-logoDesign-pixle-perfect-img3.png";
// import pixleperfectimg4 from "../../Assets/service-logoDesign-pixle-perfect-img4.png";
// import pixleperfectimg5 from "../../Assets/service-logoDesign-pixle-perfect-img5.png";
// import pixleperfectimg6 from "../../Assets/service-logoDesign-pixle-perfect-img6.png";

import pixleperfectimg1 from "../../Assets/LogoPortfolio/service-logoDesign-pixle-perfect-img1.jpg";
import pixleperfectimg2 from "../../Assets/LogoPortfolio/service-logoDesign-pixle-perfect-img2.jpg";
import pixleperfectimg3 from "../../Assets/LogoPortfolio/service-logoDesign-pixle-perfect-img3.jpg";
import pixleperfectimg4 from "../../Assets/LogoPortfolio/service-logoDesign-pixle-perfect-img4.jpg";
import pixleperfectimg5 from "../../Assets/LogoPortfolio/service-logoDesign-pixle-perfect-img5.jpg";
import pixleperfectimg6 from "../../Assets/LogoPortfolio/service-logoDesign-pixle-perfect-img6.jpg";

import PixelPerfectSec from "../../components/PixelPerfectSec";
import ServiceBanner from "../../components/ServiceBanner";

import wordpressbg from "../../Assets/services-cmsDev-banner-bg.png";
import serviceBannerImg from "../../Assets/services-logoDesign-banner-img.png";
import performence from "../../Assets/service-logoDesign-about-img.png";
import wordpresssectionimg from "../../Assets/services-logoDesign-about2-img.png";
import creativethoughsec from "../../Assets/services-logoDesign-creativeThrough-img.png";
import { logoDesignPricingPlansData } from "../../data";

import Lightbox from "react-image-lightbox";

export const logoDesignPortfolioData = [
  {
    id: 1,
    image: pixleperfectimg1,
  },
  {
    id: 2,
    image: pixleperfectimg2,
  },
  {
    id: 3,
    image: pixleperfectimg3,
  },
  {
    id: 4,
    image: pixleperfectimg4,
  },
  {
    id: 5,
    image: pixleperfectimg5,
  },
  {
    id: 6,
    image: pixleperfectimg6,
  },
];

const LogoDesign = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [images, setImages] = useState([]);

  const handleImageClick = (index, imageArray) => {
    const imageList = imageArray.map((item) => item.image);
    setImages(imageList);
    setPhotoIndex(index);
    setTimeout(() => {
      setIsOpen(true);
    }, 50);
  };
  return (
    <Layout>
      <ServiceBanner
        bgImage={wordpressbg}
        title="Build Your Brand Identity With Custom Logo Design"
        description="At California Web Coders, we design logos that make a lasting impression. As a leading logo design company California brands rely on, we deliver professional logo design that captures your brand’s identity with purpose and style."
        bannerList={[
          "No templates, just custom creativity.",
          "Perfect for print, web, and mobile.",
          "Fast delivery with unlimited revisions.",
        ]}
        image={serviceBannerImg}
      />

      <WordPressPerformanceSection
        secTitle1="Your Logo,"
        secTitle2="Your Brand’s"
        secTitle3="Voice"
        description="A great logo isn’t just one that looks good; it should also convey your brand voice to the audience. It tells your audience who you are before you say a word. Our logo design services are focused on making that message unforgettable."
        description2="We work closely with you to understand your brand, industry, and goals. Whether you're a startup looking for your first business logo design or a growing brand in need of a refresh, we create logos that look sharp and feel uniquely yours."
        image={performence}
        btnText="Get Your Logo"
      />

      <Growyourbusiness
        title1="Want A Logo That Sets You"
        title2="Apart?"
        // btnText="Sign Up With Our Logo Design Masters"
      />

      <PixelPerfectSec
        secTitle="Check Out The Best Of Our"
        secTitleBlue="Logos"
        secDescription="From minimalist icons to bold typography, every design in our collection tells a unique story. Explore how our clients use their logos across packaging, websites, and social platforms, and why they trust us again and again."
        projectsData={logoDesignPortfolioData}
        // btnText="Witness Our Wins"
        onImageClick={handleImageClick}
      />

      <PricingPlans
        secTitle="Smart Branding Starts Here"
        secDescription="We’ve made professional logo design affordable for all, from new businesses to evolving brands. Our pricing reflects real creativity, not shortcuts."
        image={wordpresssectionimg}
        whyWordressTitle="Choose California Web Coders For Your Logo!"
        whyWordressDescription1="We’re more than just another design business. As a full-service logo design company California entrepreneurs trust, we take your ideas and turn them into iconic brand marks."
        whyWordressDescription2="Our logo design for website, packaging, merchandise, and social platforms ensures brand consistency at every touchpoint. From concept to final files, we keep you in the loop, ensuring your logo represents your identity and stands the test of time."
        whyWordressDescription3="No clip art. No templates. Just authentic, high-impact design from people who get your vision."
        btnText="Connect With Us"
        btnLink="/get-intouch"
        pricingPlan={logoDesignPricingPlansData}
      />

      <ContactForm
        secTitle="Ready To Design Your Brand’s Signature?"
        secDescription="Say goodbye to generic designs and hello to a custom brand logo that instantly connects with your audience."
        btnText="Let’s Chat"
        btnLink="/get-intouch"
      />

      <Creativitythrough
        title1="Your Logo Is A"
        title2="Legacy!"
        description1="We believe your logo should be simple, strong, and unforgettable. Whether used on a website, storefront, or business card, it should turn heads and build trust. That’s why our logo designers focus on clarity, originality, and alignment with your brand’s core values."
        description2="Let's build a visual identity you’ll be proud to show off, because your business deserves a logo that works as hard as you do."
        image={creativethoughsec}
        btnText="Create Your Custom Logo!"
      />

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
        />
      )}
    </Layout>
  );
};

export default LogoDesign;
