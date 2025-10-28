import React, { Suspense, useState } from "react";
import Layout from "../../components/layout";
import ServiceBanner from "../../components/ServiceBanner";
import Growyourbusiness from "../../components/growyourbusiness";
import CustomExperience from "../../components/CustomExperience";
import OurCustomService from "../../components/OurCustomService";
import pixleperfectimg1 from "../../Assets/newChildPagesAssets/smartaiintegration/pixel-1.webp";
import pixleperfectimg2 from "../../Assets/newChildPagesAssets/smartaiintegration/pixel-2.webp";
import pixleperfectimg3 from "../../Assets/newChildPagesAssets/smartaiintegration/pixel-3.webp";
import pixleperfectimg4 from "../../Assets/newChildPagesAssets/smartaiintegration/pixel-4.webp";
import pixleperfectimg5 from "../../Assets/newChildPagesAssets/smartaiintegration/pixel-5.webp";
import pixleperfectimg6 from "../../Assets/newChildPagesAssets/smartaiintegration/pixel-6.webp";
import serviceCardOne from "../../Assets/newChildPagesAssets/nodejsdevelopment/service-customapi.png";
import serviceCardTwo from "../../Assets/newChildPagesAssets/nodejsdevelopment/service-realtime.png";
import serviceCardThree from "../../Assets/newChildPagesAssets/nodejsdevelopment/service-node.png";
import { TbApi } from "react-icons/tb";
import { FaAppStoreIos, FaNode } from "react-icons/fa";
import PixelPerfectSec from "../../components/PixelPerfectSec";
import WordPressPerformanceSection from "../../components/WordPressPerformanceSection";
import CustomGetInTouch from "../../components/CustomGetInTouch";
import ExperessEverything from "../../components/ExperessEverything";
import SinglePricingPlan from "../../components/SinglePricingPlan";
import { wordpressWebsitePricingPlansData } from "../../data";
import { faqHomeData } from "../Designing";
import FrequentQuestions from "../../components/FrequentQuestions";
import Loader from "../../components/Loader";
import BlogSection from "../../components/blogPosts";
import Lightbox from "yet-another-react-lightbox";

const SmartAIIntegration = () => {
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

  const serviceCards = [
    {
      id: 1,
      icon: <TbApi size={40} />,
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
        secClass="smartai-hero-sec"
        leftCol="col-lg-8"
        rowClass="row justify-content-center text-center"
        btnClass="theme-light mt-3"
        title="Smart AI Integration to Transform Your Business"
        description="California Web Coders integrates Artificial Intelligence into websites, apps and business processes—helping you automate tasks, gain insights and deliver next-level user experiences."
        btnText="Get A Free React Quote"
      />

      <Growyourbusiness
        title1="Want to grow your business"
        title2="digitally?"
      />

      <CustomExperience />

      <OurCustomService
        miniHead="Our Services"
        secMainTitle="Our"
        secTitleBlue="AI Integration"
        secLastTitle="Services"
        customServicePara="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages."
        customServiceBtn="View All Services"
        serviceCards={serviceCards}
      />

      <PixelPerfectSec
        minihead="Portfolio"
        secTitle="Recent"
        secTitleBlue="AI Integration"
        secTitle2="Projects"
        secDescription="See how we’ve helped clients build cutting-edge, high-performance React applications."
        projectsData={webDesignPortfolioData}
        onImageClick={handleImageClick}
      />

      <ExperessEverything/>

      <WordPressPerformanceSection
        afterConainerClass="aipower-bg-sec"
        secTitle1="Ready to Add AI Power to Your Business?"
        description="With over 3 billion active devices, Android dominates the global market. Our team builds Android apps that combine innovation, intuitive UI, and powerful functionality to maximize engagement and growth."
        listClass="d-none"
        TouchBtn="d-none"
        serviceImg="d-none"
        btntext="Let's Talk With Us"
        learnmorebtn="aboutus-call"
        phoneNumber="+1 619-798-9688"
      />

      <CustomGetInTouch/>

      <SinglePricingPlan
        pricingSecClass="smartai-pricing-sec"
        secTitle="Flexible"
        secTitleBlue="AI Integration"
        secTitleEnd="Packages"
        secDescription="No more budget issues, get your hands on the most Affordable Website Design Services online."
        // pricingPlanData={eCommerseWebsitePricingPlansData}
        pricingPlanData={wordpressWebsitePricingPlansData}
      />

      <FrequentQuestions
        faqsSecClass="smartai-faqs-sec faqs-sec"
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

export default SmartAIIntegration;
