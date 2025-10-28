import React, { Suspense, useState } from "react";
import Layout from "../../components/layout";
import ServiceBanner from "../../components/ServiceBanner";
import landingPageBanner from "../../Assets/newChildPagesAssets/nodejsdevelopment/nodejs-herobanner.webp";
import processFrontendPlug from "../../Assets/newChildPagesAssets/frontenddevelopment/frontend-plug.webp";
import pixleperfectimg1 from "../../Assets/newChildPagesAssets/nodejsdevelopment/pixel-1.webp";
import pixleperfectimg2 from "../../Assets/newChildPagesAssets/nodejsdevelopment/pixel-2.webp";
import pixleperfectimg3 from "../../Assets/newChildPagesAssets/nodejsdevelopment/pixel-3.webp";
import pixleperfectimg4 from "../../Assets/newChildPagesAssets/nodejsdevelopment/pixel-4.webp";
import pixleperfectimg5 from "../../Assets/newChildPagesAssets/nodejsdevelopment/pixel-5.webp";
import pixleperfectimg6 from "../../Assets/newChildPagesAssets/nodejsdevelopment/pixel-6.webp";
import laptopVideo from "../../Assets/newChildPagesAssets/frontenddevelopment/process-side.mp4";
import serviceCardOne from "../../Assets/newChildPagesAssets/nodejsdevelopment/service-customapi.png"
import serviceCardTwo from "../../Assets/newChildPagesAssets/nodejsdevelopment/service-realtime.png"
import serviceCardThree from "../../Assets/newChildPagesAssets/nodejsdevelopment/service-node.png"
import WordPressPerformanceSection from "../../components/WordPressPerformanceSection";
import OurProcess from "../../components/OurProcess";
import OurCustomService from "../../components/OurCustomService";
import { TbApi } from "react-icons/tb";
import { FaAppStoreIos, FaNode } from "react-icons/fa";
import PixelPerfectSec from "../../components/PixelPerfectSec";
import SinglePricingPlan from "../../components/SinglePricingPlan";
import { wordpressWebsitePricingPlansData } from "../../data";
import FrequentQuestions from "../../components/FrequentQuestions";
import { faqHomeData } from "../Designing";
import Loader from "../../components/Loader";
import BlogSection from "../../components/blogPosts";
import Lightbox from "yet-another-react-lightbox";

const NodejsDevelopment = () => {

      const webDesignPortfolioData = [
    {
      id: 1,
      image: pixleperfectimg1,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 2,
      image: pixleperfectimg2,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 3,
      image: pixleperfectimg3,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 4,
      image: pixleperfectimg4,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 5,
      image: pixleperfectimg5,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 6,
      image: pixleperfectimg6,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  ];

  const processStepsData = [
    {
      title: "Starting with a Clear Roadmap",
      description:
        "With over 3 billion active devices, Android dominates the global market. Our team builds Android apps that combine innovation, intuitive UI, and powerful functionality to maximize engagement and growth. With over 3 billion active devices, Android dominates the global market. Our team builds Android apps that combine innovation, intuitive UI, and powerful functionality to maximize engagement and growth.",
    },
    {
      title: "Design & Prototype",
      description:
        "With over 3 billion active devices, Android dominates the global market. Our team builds Android apps that combine innovation, intuitive UI, and powerful functionality to maximize engagement and growth. With over 3 billion active devices, Android dominates the global market. Our team builds Android apps that combine innovation, intuitive UI, and powerful functionality to maximize engagement and growth.",
    },
    {
      title: "Development & Testing",
      description:
        "With over 3 billion active devices, Android dominates the global market. Our team builds Android apps that combine innovation, intuitive UI, and powerful functionality to maximize engagement and growth. With over 3 billion active devices, Android dominates the global market. Our team builds Android apps that combine innovation, intuitive UI, and powerful functionality to maximize engagement and growth.",
    },
    {
      title: "Launch & Continuous Improvement",
      description:
        "With over 3 billion active devices, Android dominates the global market. Our team builds Android apps that combine innovation, intuitive UI, and powerful functionality to maximize engagement and growth. With over 3 billion active devices, Android dominates the global market. Our team builds Android apps that combine innovation, intuitive UI, and powerful functionality to maximize engagement and growth.",
    },
  ];

  const serviceCards = [
      {
        id: 1,
        icon:  <TbApi size={40} />,
        serviceCardHead: "Custom API Development",
        serviceCardPara:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        serviceCardImg: serviceCardOne,
      },
      {
        id: 2,
        icon: <FaAppStoreIos size={40} />,
        serviceCardHead: "Real Time Applications",
        serviceCardPara:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        serviceCardImg: serviceCardTwo,
      },
      {
        id: 3,
        icon: <FaNode size={40} />,
        serviceCardHead: "Migration to node",
        serviceCardPara:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        serviceCardImg: serviceCardThree,
      },
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
    <Layout>
      <ServiceBanner
        leftCol="col-lg-10"
        rowClass="row justify-content-center text-center"
        bgImage={landingPageBanner}
        btnClass="theme-light mt-3"
        title="High-Performance Node.js Development for Scalable Back-End Solutions"
        description="Our Node.js experts create fast, real-time, and secure back-end systems that scale effortlessly with your growing business."
        btnText="Get A Free React Quote"
      />

      <WordPressPerformanceSection
        wordpresssecclass="nodejs-about-sec"
        minihead="About Company"
        miniheadclass="shorttop-head"
        secTitle1="Experts in Fast & Reliable"
        secTitle2="Node.js Applications"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        listItems={["Professional IT Solutions ", "Experience Team Members"]}
        listClass="aboutCompanylist"
        serviceImg="nodejs-about-img"
        TouchBtn="d-none"
        btntext="Learn More About Us"
        learnmorebtn="aboutus-call"
        phoneNumber="+1 619-798-9688"
      />

      <OurProcess
        sectitle="Our"
        sectitleblue="Process"
        absltImg={processFrontendPlug}
        videoSrc={laptopVideo}
        processSteps={processStepsData}
      />

      <OurCustomService
        miniHead="Our Services"
        secMainTitle="Our"
        secTitleBlue="Node.js Development"
        secLastTitle="Services"
        customServicePara="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages."
        customServiceBtn="View All Services"
        serviceCards={serviceCards}
      />

        <PixelPerfectSec
        minihead="Portfolio"
        secTitle="Recent"
        secTitleBlue="Node.Js"
        secTitle2="Projects"
        secDescription="See how we’ve helped clients build cutting-edge, high-performance React applications."
        projectsData={webDesignPortfolioData}
        onImageClick={handleImageClick}
      />

       <WordPressPerformanceSection
        afterConainerClass="react-build-bg"
        secTitle1="Ready to Build a Powerful React App?"
        description="With over 3 billion active devices, Android dominates the global market. Our team builds Android apps that combine innovation, intuitive UI, and powerful functionality to maximize engagement and growth."
        listClass="d-none"
        TouchBtn="d-none"
        serviceImg="d-none"
        btntext="Let's Talk With Us"
        learnmorebtn="aboutus-call"
        phoneNumber="+1 619-798-9688"
      />


      <SinglePricingPlan
        secTitle="Affordable Website Design Packages"
        secDescription="Choose the perfect plan that fits your needs and budget."
        // pricingPlanData={eCommerseWebsitePricingPlansData}
        pricingPlanData={wordpressWebsitePricingPlansData}
      />

      <FrequentQuestions
        secTitle="You Will Find Our Client's Frequent Questions"
        FrequentQuestions="homeFrequentQuestions"
        faqData={faqHomeData}
      />

      <Suspense fallback={<Loader />}>
        <BlogSection categorySlug="cms-development" />
      </Suspense>

      {isOpen && images.length > 0 && (
        <Lightbox
          open={isOpen}
          close={() => setIsOpen(false)}
          slides={images}
          index={currentIndex}
        />
      )}

    </Layout>
  );
};

export default NodejsDevelopment;
