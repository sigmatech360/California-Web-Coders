import React, { useState } from "react";
import "./index.css";
import Layout from "../../components/layout";
import WordPressPerformanceSection from "../../components/WordPressPerformanceSection";

import Growyourbusiness from "../../components/growyourbusiness";
import PricingPlans from "../../components/PricingPlans";
import ContactForm from "../../components/readytocheat";
import Creativitythrough from "../../components/Creativitythrough";

import pixleperfectimg1 from "../../Assets/service-webDesign-pixle-perfect-img1.png";
import pixleperfectimg2 from "../../Assets/service-webDesign-pixle-perfect-img2.png";
import pixleperfectimg3 from "../../Assets/service-webDesign-pixle-perfect-img3.png";
import pixleperfectimg4 from "../../Assets/service-webDesign-pixle-perfect-img4.png";
import pixleperfectimg5 from "../../Assets/service-webDesign-pixle-perfect-img5.png";
import pixleperfectimg6 from "../../Assets/service-webDesign-pixle-perfect-img6.png";

import PixelPerfectSec from "../../components/PixelPerfectSec";
import ServiceBanner from "../../components/ServiceBanner";

import wordpressbg from "../../Assets/services-webDesign-banner-bg.png";
import performence from "../../Assets/service-webDesign-about-img.png";
import wordpresssectionimg from "../../Assets/services-webDesign-about2-img.png";
import creativethoughsec from "../../Assets/services-webDesign-creativeThrough-img.png";
import BlogSection from "../../components/blogPosts";
import {
  customWebDevPricingPlansData,
  eCommerseWebsitePricingPlansData,
  informativeWebsitePricingPlansData,
} from "../../data";

import Lightbox from "react-image-lightbox";

export const webDesignPortfolioData = [
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

const WebDesign = () => {
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
        title="Creative Website Designs That Work Right"
        description="California Web Coders is the top web design agency in California, creating fast, visually stunning, and high-performing websites that help businesses grow, engage their audience, and stand out online."
        bannerList={[
          "10+ years of design excellence.",
          "Hundreds of successful website launches.",
          "Experts in responsive web design.",
          "Proven results across multiple industries.",
        ]}
      />

      <WordPressPerformanceSection
        secTitle1="Web Designs That Build"
        secTitle2="Trust"
        secTitle3="With Results"
        description="Our reputation as a results-driven website design company is built on experience, creativity, and innovation. We craft responsive web designs that not only look flawless across all devices but also boost engagement, improve user experience, and drive meaningful conversions."
        // description2=""
        image={performence}
      />

      <Growyourbusiness
        title1="Want To Create an Exceptional"
        title2="Digital Identity?"
        btnText="Connect With Us Now"
      />

      <PixelPerfectSec
        secTitle="Get Inspired By Our Beautiful"
        secTitleBlue="Website Designs"
        secDescription="Explore our hand-picked portfolio featuring sleek and high-performing websites built for our esteemed clients. Each project highlights our commitment to design excellence, responsive layouts, and results that drive growth."
        projectsData={webDesignPortfolioData}
        onImageClick={handleImageClick}
      />

      <PricingPlans
        secTitle="Smart Pricing for Growing Brands"
        secDescription="From startups to scaling businesses, our pricing transparently aligns with your digital goals and project demands."
        image={wordpresssectionimg}
        whyWordressTitle="Our Winning Formula"
        whyWordressDescription1="Your brand deserves more than a basic template. That’s why at California Web Coders, we specialize in custom WordPress design, crafted to fit your vision and business goals. Our website design services in California are rooted in strategy, creativity, and performance."
        whyWordressDescription2="We bring your brand to life with visually striking, mobile-friendly, and conversion-optimized websites. Whether you're launching a startup, scaling your business, or refreshing your online presence, we design with purpose and build with precision to deliver results that go beyond the screen."
        // whyWordressDescription3=""
        pricingPlan={informativeWebsitePricingPlansData}
        pricingPlan2={eCommerseWebsitePricingPlansData}
      />

      <ContactForm
        secTitle="Ready To Discuss Your Project?"
        secDescription="Book a free consultation with our professionals in California Web Coders now to see how we can help your business maximize its growth"
        btnText="Let’s Chat"
      />

      <Creativitythrough
        title1="Creativity through"
        title2="web and graphics."
        description1="Your brand is one of a kind, and your website should be too. At California Web Coders, we focus on custom website design that captures your personality, purpose, and promise. Whether you’re launching something new or seeking a modern website redesign, our team brings fresh ideas and a personal touch to every project."
        description2={`We listen first, design second. That’s how we turn your ideas into smart, stylish solutions. Our website design and development services are built around creativity, communication, and collaboration, ensuring your website isn’t just beautiful, but also meaningful and effective. Let’s create something that feels like you and works like a dream.`}
        btnText="Visit Our Portfolio"
        image={creativethoughsec}
      />

      <BlogSection categorySlug="web-design" />

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

export default WebDesign;
