import React, { Suspense, useState } from "react";
import Layout from "../../components/layout";
import CustomAboutCompany from "../../components/CustomAboutCompany";
import AboutFrontendOne from "../../Assets/newChildPagesAssets/reactdevelopment/aboutone.webp";
import AboutFrontendTwo from "../../Assets/newChildPagesAssets/reactdevelopment/abouttwo.webp";
import serviceCardOne from "../../Assets/newChildPagesAssets/frontenddevelopment/serviceOne.png";
import reactChoose from "../../Assets/newChildPagesAssets/reactdevelopment/reactchoose.webp";
import OurCustomService from "../../components/OurCustomService";
import { TbApi, TbDeviceMobileCode } from "react-icons/tb";
import { SiCreatereactapp } from "react-icons/si";
import WordPressPerformanceSection from "../../components/WordPressPerformanceSection";
import { FaMedal, FaTachometerAlt } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import CustomCustomerCard from "../../components/CustomCustomerCard";
import FrequentQuestions from "../../components/FrequentQuestions";
import { faqHomeData } from "../Designing";
import SinglePricingPlan from "../../components/SinglePricingPlan";
import { wordpressWebsitePricingPlansData } from "../../data";
import ContactForm from "../../components/readytocheat";
import Loader from "../../components/Loader";
import BlogSection from "../../components/blogPosts";
import Lightbox from "yet-another-react-lightbox";
import ReactHeroBanner from "../../components/ReactHeroBanner";

const ReactDevelopment = () => {

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
  

  const serviceCards = [
    {
      id: 1,
      icon: <TbDeviceMobileCode size={40} />,
      serviceCardHead: "Custom React Applications",
      serviceCardPara:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      serviceCardImg: serviceCardOne,
    },
    {
      id: 2,
      icon: <TbApi size={40} />,
      serviceCardHead: "API Integration",
      serviceCardPara:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      serviceCardImg: serviceCardOne,
    },
    {
      id: 3,
      icon: <SiCreatereactapp size={40} />,
      serviceCardHead: "Migration to React",
      serviceCardPara:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      serviceCardImg: serviceCardOne,
    },
  ];

  const cardsData = [
    {
      icon: <FaTachometerAlt />,
      cardTitle: "24/7 Expert Customer Support",
      cardPara:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since .",
    },
    {
      icon: <FaMedal />,
      cardTitle: "99.9% Uptime Guarantee",
      cardPara:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since .",
    },
    {
      icon: <IoSettingsSharp />,
      cardTitle: "Easy-to-Use Control Panel",
      cardPara:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since .",
    },
  ];

  return (
    <Layout>


    
      <ReactHeroBanner/>



      <CustomAboutCompany
        CustomFrontendSec="react-about-sec"
        miniHead="About Company"
        mainHeadBlue="React Specialists"
        mainHead="You Can Trust"
        frontendAboutImg={AboutFrontendOne}
        frontendAboutImgtwo={AboutFrontendTwo}
        aboutPara="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        listItems={["Professional IT Solutions ", "Experience Team Members"]}
        listClass="aboutCompanylist"
        btntext="Learn More About Us"
        learnmorebtn="aboutus-call"
        phoneNumber="+1 619-798-9688"
      />

      <OurCustomService
        CustomFrontendSec="react-service-sec"
        miniHead="Our Services"
        secMainTitle="Our"
        secTitleBlue="Search Engine Optimization"
        secLastTitle="Services"
        customServicePara="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages."
        customServiceBtn="View All Services"
        serviceCards={serviceCards}
      />

      <section className="why-choose-react-card">
        <WordPressPerformanceSection
          wordpresssecclass="react-choose-sec"
          miniheadclass="shorttop-head"
          minihead="Why Choose Us"
          secTitle1="Why Choose Our"
          secTitle2="React Development"
          secTitle3="Services"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          image={reactChoose}
          listClass="d-none"
          TouchBtn="d-none"
          btntext="Register With Confidence"
          learnmorebtn="aboutus-call"
          phoneNumber="+1 619-798-9688"
        />
        <CustomCustomerCard cardsData={cardsData} />;
      </section>

      <FrequentQuestions
        secTitle="You Will Find Our Client's Frequent Questions"
        FrequentQuestions="homeFrequentQuestions"
        faqData={faqHomeData}
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

      <ContactForm
        secTitle="Ready to chat about your project?"
        secDescription="Get in touch today to see how we can help your business achieve its full potential online."
        btnText="Let’s Chat"
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

export default ReactDevelopment;
