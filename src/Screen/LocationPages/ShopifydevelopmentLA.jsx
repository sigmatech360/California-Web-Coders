import React, { useState } from "react";
import ReactHelmet from "../../components/ReactHelmet";
import support1 from "../../Assets/locationpages/mba-los-angeles/guarrantee.svg";
import support2 from "../../Assets/locationpages/mba-los-angeles/support.svg";
import support3 from "../../Assets/locationpages/mba-los-angeles/ownership.svg";
import support4 from "../../Assets/locationpages/mba-los-angeles/money.svg";
import support5 from "../../Assets/locationpages/mba-los-angeles/Pentool.svg";
import herobanner from "../../Assets/locationpages/shopify-development-los-angeles/herobanner.webp";
import chooseimg from "../../Assets/locationpages/shopify-development-los-angeles/aboutimg.webp";
import gooddesignbg from "../../Assets/locationpages/shopify-development-los-angeles/good-design-bg.webp";
import pixleperfectimg1 from "../../Assets/locationpages/shopify-development-los-angeles/portfolio-1.webp";
import pixleperfectimg2 from "../../Assets/locationpages/shopify-development-los-angeles/portfolio-2.webp";
import pixleperfectimg3 from "../../Assets/locationpages/shopify-development-los-angeles/portfolio-3.webp";
import pixleperfectimg4 from "../../Assets/locationpages/shopify-development-los-angeles/portfolio-4.webp";
import pixleperfectimg5 from "../../Assets/locationpages/shopify-development-los-angeles/portfolio-5.webp";
import pixleperfectimg6 from "../../Assets/locationpages/shopify-development-los-angeles/portfolio-6.webp";
import Lightbox from "yet-another-react-lightbox";
import LocationHeroBanner from "../../components/LocationHeroBanner";
import Layout from "../../components/layout";
import BookConsultation from "../../components/BookConsultation";
import WordPressPerformanceSection from "../../components/WordPressPerformanceSection";
import PixelPerfectSec from "../../components/PixelPerfectSec";
import ServiceBanner from "../../components/ServiceBanner";
import LocationContact from "../../components/LocationContact";
import LocationFaqs from "../../components/LocationFaqs";
import LocationSupport from "../../components/LocationSupport/Index";
import SinglePricingPlan from "../../components/SinglePricingPlan";
import { wordpressWebsitePricingPlansData } from "../../data";




const ShopifydevelopmentLA = () => {

  const webDesignPortfolioData = [
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


  const faqsData = [
    {
      header: "How does Shopify website development support business growth?",
      content:
        "Shopify website development focuses on building an ecommerce store that is easy to navigate, fast to load, and simple to manage. For businesses in Los Angeles, a functional Shopify website helps improve customer experience, increase conversions, and support steady online sales growth.",
    },
    {
      header: "Is Shopify a good choice for growing ecommerce businesses?",
      content:
        "Shopify is a strong choice for businesses planning to grow online as it offers flexible features, secure payments, and easy product management. Shopify website development in Los Angeles allows businesses to scale their online store without complex technical challenges.",
    },
    {
      header: "Can Shopify websites be customized for my brand?",
      content:
        "Yes, Shopify websites can be fully customized. This includes layout design, branding, product structure, and feature setup. California Web Coders provides custom Shopify website development services in Los Angeles to ensure your store reflects your brand identity and business goals.",
    },
    {
      header: "Do you work with existing Shopify stores?",
      content:
        "Yes, we work with both new and existing Shopify websites. This includes redesigning stores, improving performance and usability, and fixing existing issues. Shopify website development services in Los Angeles help improve results without starting from scratch.",
    },
    {
      header: "Will my Shopify website be mobile-friendly?",
      content:
        "Yes, all Shopify websites we develop are built on a mobile-first model. A responsive Shopify design ensures your store works smoothly on phones, tablets, and desktops, helping businesses in Los Angeles reach customers wherever they are.",
    },
    {
      header: "Do you provide ongoing support after launch?",
      content:
        "Yes, we offer ongoing support and website maintenance after your Shopify website goes live. We help with updates, improvements, and technical assistance so your ecommerce store keeps performing smoothly.",
    },
  ];

  const supportCardsData = [
    { image: support1, title: "Satisfaction Guaranteed" },
    { image: support2, title: "24/7 Customer Support" },
    { image: support3, title: "Ownership Rights" },
    { image: support4, title: "Money Back Guarantee" },
    { image: support5, title: "Industry Specific-Expertise" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageClick = (index, imageArray) => {
    const imageList = imageArray.map((item) => ({
      src: item.image,
    }));
    setImages(imageList);
    setCurrentIndex(index);
    setIsOpen(true);
  };




  return (
    <>
      <ReactHelmet
        title="Shopify Development Company in Los Angeles, CA"
        description="Expert Shopify website development in Los Angeles, CA. California Web Coders builds fast, secure, and conversion-focused Shopify ecommerce websites."
        keywords="shopify website development Angeles CA, shopify website development services Angeles CA, shopify website development company Angeles CA, shopify website development agency Angeles CA, shopify ecommerce website development Angeles CA"
        baseUrl="https://californiawebcoders.com/shopify-development-los-angeles"
      />


         <Layout>
        <LocationHeroBanner
          secClass="mad-la-herobanner locate-wordpress-herobanner"
          bgImage={herobanner}
          sectitle="Shopify Website Development in Los Angeles"
          secPara="At California Web Coders, we provide professional Shopify website development in Los Angeles for businesses looking to grow online. We build websites that are protected by multiple layers, function smoothly, and perform high. All our Shopify ecommerce websites are designed to attract customers and increase sales, while our focus remains on clean design, smooth functionality, and long-term scalability."
          btntxt="Start Your Shopify Project"
        />
        <BookConsultation />

        <WordPressPerformanceSection
          reverse
          minihead="Why Choose Us"
          miniheadclass="shorttop-head"
          secTitle1="Why Your Brand Needs Shopify Development"
          secTitle2="from California Web Coders"
          description="A professionally developed Shopify website in Los Angeles, CA, helps your business compete and grow online. California Web Coders combines ecommerce research strategies on audience behaviour and industry insights with technical expertise to create Shopify stores that perform well, load fast, and deliver a smooth shopping experience for customers across Los Angeles."
          TouchBtn="d-none"
          btntext="Discuss Your Shopify Project"
          aboutbtnlink="/get-intouch"
          learnmorebtn="aboutus-call"
          image={chooseimg}
        />

        <PixelPerfectSec
          pixelSec="pixel-perfect-sec asetheic-portfolio-sec"
          minihead="Our Portfolio"
          secTitle="Shopify Website Development Projects We Take Pride In"
          secDescription="Our portfolio reflects our commitment to quality design, strong performance, and ecommerce solutions that support real business growth."
          projectsData={webDesignPortfolioData}
          onImageClick={handleImageClick}
        />

        {/* <SinglePricingPlan
          secTitle="Shopify Web Development Packages"
          secDescription="Our packages for Shopify website development services in Los Angeles, CA, focus on value, transparency, and delivering ecommerce websites that are reliable and built to support long-term success."
          // pricingPlanData={eCommerseWebsitePricingPlansData}
          pricingPlanData={wordpressWebsitePricingPlansData}
        /> */}

        <ServiceBanner
          secClass="herobanner-imghide"
          leftCol="col-lg-6"
          bgImage={gooddesignbg}
          btnClass="theme-light mt-3"
          title="Websites Built for Business Growth, Optimized for Success"
          description="A strong Shopify website can become your full-time functioning store, with you no longer needing a physical presence. Our Shopify ecommerce website development services in Los Angeles, CA, focus on usability, speed, and clear structure so your online store supports sales growth and customer trust."
          btnText="More About California Web Coders"
          btnLink="/about"
        />

        <LocationContact
          miniHead="Contact Us"
          mainHead="Start Your Shopify Project in Los Angeles, CA"
          secPara="Connect with our team today and let us build a Shopify website designed to support your business goals in Los Angeles."
        />

        <LocationFaqs
          miniHead="FAQs"
          mainHead="Common Questions About "
          mainHeadSpan=" Shopify Development in Los Angeles"
          secPara="Below are answers to common questions about Shopify website development services in Los Angeles, CA, offered by California Web Coders."
          faqs={faqsData}
        />

        <LocationSupport
          minihead="Our Expertise"
          mainheadSpan="E-Commerce Website Development"
          mainhead="You Can Trust"
          mainPara="At California Web Coders, we proudly deliver professional Shopify website development services designed that support businesses in improving their performance, scalability, and long-term ecommerce success."
          supportCards={supportCardsData}
        />


        
        {isOpen && images.length > 0 && (
          <Lightbox
            open={isOpen}
            close={() => setIsOpen(false)}
            slides={images}
            index={currentIndex}
          />
        )}
      </Layout>

    </>
  );
};

export default ShopifydevelopmentLA;
