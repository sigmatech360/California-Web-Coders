import React, { Suspense, useState } from "react";
import Layout from "../../components/layout";
import ServiceBanner from "../../components/ServiceBanner";
import landingPageBanner from "../../Assets/newChildPagesAssets/frontenddevelopment/landingbanner.webp";
import angularaboutvideo from "../../Assets/newChildPagesAssets/angulardevelopment/video-about.mp4";
import WordPressPerformanceSection from "../../components/WordPressPerformanceSection";
import serviceCardOne from "../../Assets/newChildPagesAssets/frontenddevelopment/serviceOne.png";
import OurCustomService from "../../components/OurCustomService";
import { FaMobileScreen } from "react-icons/fa6";
import { FaLaptopCode } from "react-icons/fa";
import { BsPcDisplay } from "react-icons/bs";
import PixelPerfectSec from "../../components/PixelPerfectSec";
import pixleperfectimg1 from "../../Assets/newChildPagesAssets/angulardevelopment/pixel-1.webp";
import pixleperfectimg2 from "../../Assets/newChildPagesAssets/angulardevelopment/pixel-2.webp";
import pixleperfectimg3 from "../../Assets/newChildPagesAssets/angulardevelopment/pixel-3.webp";
import pixleperfectimg4 from "../../Assets/newChildPagesAssets/angulardevelopment/pixel-4.webp";
import pixleperfectimg5 from "../../Assets/newChildPagesAssets/angulardevelopment/pixel-5.webp";
import pixleperfectimg6 from "../../Assets/newChildPagesAssets/angulardevelopment/pixel-6.webp";
import angularbuildlaptop from "../../Assets/newChildPagesAssets/angulardevelopment/360laptop.png";
import FrequentQuestions from "../../components/FrequentQuestions";
import { faqHomeData } from "../Designing";
import SinglePricingPlan from "../../components/SinglePricingPlan";
import { wordpressWebsitePricingPlansData } from "../../data";
import Loader from "../../components/Loader";
import BlogSection from "../../components/blogPosts";
import Lightbox from "yet-another-react-lightbox";

const AngularDevelopment = () => {
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
      icon: <FaMobileScreen size={40} />,
      serviceCardHead: "Custom UI Development",
      serviceCardPara:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      serviceCardImg: serviceCardOne,
    },
    {
      id: 2,
      icon: <FaLaptopCode size={40} />,
      serviceCardHead: "Custom Angular Application",
      serviceCardPara:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      serviceCardImg: serviceCardOne,
    },
    {
      id: 3,
      icon: <BsPcDisplay size={40} />,
      serviceCardHead: "Progressive Web Apps (PWAs)",
      serviceCardPara:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      serviceCardImg: serviceCardOne,
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
        secClass="angular-herobanner"
        leftCol="col-lg-6"
        bgImage={landingPageBanner}
        btnClass="theme-light mt-3"
        title="Robust Angular Development for Dynamic Web Applications"
        description="Our Angular specialists create scalable, high-performance front-end solutions with clean code and a flawless user experience."
        btnText="Get A Free React Quote"
      />

      <WordPressPerformanceSection
        wordpresssecclass="react-specialist-sec"
        miniheadclass="shorttop-head"
        secTitle2="React Specialists"
        secTitle3="You Can Trust"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        listItems={["Professional IT Solutions ", "Experience Team Members"]}
        listClass="aboutCompanylist"
        videoSrc={angularaboutvideo}
        serviceImg="angular-aboutimg"
        TouchBtn="d-none"
        btntext="Learn More About Us"
        learnmorebtn="aboutus-call"
        phoneNumber="+1 619-798-9688"
      />

      <OurCustomService
        miniHead="Our Services"
        secMainTitle="Our"
        secTitleBlue="Angular Development"
        secLastTitle="Services"
        customServicePara="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages."
        customServiceBtn="View All Services"
        serviceCards={serviceCards}
      />

      <PixelPerfectSec
        minihead="Portfolio"
        secTitleBlue="Recent Angular"
        secTitle2="Projects"
        secDescription="See how we’ve helped clients build cutting-edge, high-performance React applications."
        projectsData={webDesignPortfolioData}
        onImageClick={handleImageClick}
      />

      <WordPressPerformanceSection
        wordpresssecclass="angular-build-sec"
        miniheadclass="shorttop-head"
        secTitle1="Ready to Build Your Next"
        secTitle2="Angular App?"
        description="With over 3 billion active devices, Android dominates the global market. Our team builds Android apps that combine innovation, intuitive UI, and powerful functionality to maximize engagement and growth."
        description2="With over 3 billion active devices, Android dominates the global market. Our team builds Android apps that combine innovation, intuitive UI, and powerful functionality to maximize engagement and growth."
        serviceImg="angular-video-hide"
        image={angularbuildlaptop}
        listClass="d-none"
        TouchBtn="d-none"
        btntext="Let's Talk With Us"
        learnmorebtn="aboutus-call"
        phoneNumber="+1 619-798-9688"
      />

      <FrequentQuestions
        secTitle="You Will Find Our Client's Frequent Questions"
        FrequentQuestions="homeFrequentQuestions"
        faqData={faqHomeData}
      />

      <WordPressPerformanceSection
        wordpresssecclass="angular-choose-bg"
        miniheadclass="shorttop-head"
        minihead="Why Choose Us"
        secTitle1="Why Businesses Choose Our "
        secTitle2="Angular Development"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer."
        serviceImg="angular-choose-imghide"
        image={angularbuildlaptop}
        designpointheadline="At California Web Coders, we focus on:"
        listFlex="angular-choose-list"
        landingList="landing-design-points"
        landingListItems={[
          "Certified Angular Developers",
          "Performance Focused",
        ]}
        AngularChooseListItems={[
          "Enterprise-Ready Solutions",
          "Comprehensive Support",
        ]}
        TouchBtn="d-none"
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

export default AngularDevelopment;
