import React, { Suspense, useState } from "react";
import Layout from "../../components/layout";
import ServiceBanner from "../../components/ServiceBanner";
import landingPageBanner from "../../Assets/newChildPagesAssets/laraveldevelopment/laravel-hero-banner.webp";
import pixleperfectimg1 from "../../Assets/newChildPagesAssets/laraveldevelopment/pixel-1.webp";
import pixleperfectimg2 from "../../Assets/newChildPagesAssets/laraveldevelopment/pixel-2.webp";
import pixleperfectimg3 from "../../Assets/newChildPagesAssets/laraveldevelopment/pixel-3.webp";
import pixleperfectimg4 from "../../Assets/newChildPagesAssets/laraveldevelopment/pixel-4.webp";
import pixleperfectimg5 from "../../Assets/newChildPagesAssets/laraveldevelopment/pixel-5.webp";
import pixleperfectimg6 from "../../Assets/newChildPagesAssets/laraveldevelopment/pixel-6.webp";
import serviceCardOne from "../../Assets/newChildPagesAssets/laraveldevelopment/service-card-1.png";
import serviceCardTwo from "../../Assets/newChildPagesAssets/laraveldevelopment/service-card-2.png";
import serviceCardThree from "../../Assets/newChildPagesAssets/laraveldevelopment/service-card-3.png";
import ChooseSecImg from "../../Assets/newChildPagesAssets/laraveldevelopment/choose-sec-img.webp";
import powerfulimg from "../../Assets/newChildPagesAssets/laraveldevelopment/powerfull-laravelapp-bg.webp";
import aboutvideo from "../../Assets/newChildPagesAssets/laraveldevelopment/about-video.mp4";
import aboutsmallimg from "../../Assets/newChildPagesAssets/laraveldevelopment/aboutshortimg.webp";
import CustomCustomerCard from "../../components/CustomCustomerCard";
import { FaMedal, FaTachometerAlt } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import OurCustomService from "../../components/OurCustomService";
import { TbApi } from "react-icons/tb";
import { SlBasket } from "react-icons/sl";
import { GrHostMaintenance } from "react-icons/gr";
import PixelPerfectSec from "../../components/PixelPerfectSec";
import WordPressPerformanceSection from "../../components/WordPressPerformanceSection";
import ContactForm from "../../components/readytocheat";
import SinglePricingPlan from "../../components/SinglePricingPlan";
import FrequentQuestions from "../../components/FrequentQuestions";
import Loader from "../../components/Loader";
import BlogSection from "../../components/blogPosts";
import Lightbox from "yet-another-react-lightbox";
import { wordpressWebsitePricingPlansData } from "../../data";
import { faqHomeData } from "../Designing";

const LaravelDevelopment = () => {
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

  const serviceCards = [
    {
      id: 1,
      icon: <TbApi size={40} />,
      serviceCardHead: "RESTful & API Development",
      serviceCardPara:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      serviceCardImg: serviceCardOne,
    },
    {
      id: 2,
      icon: <SlBasket size={40} />,
      serviceCardHead: "E-Commerce Solutiuons",
      serviceCardPara:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      serviceCardImg: serviceCardTwo,
    },
    {
      id: 3,
      icon: <GrHostMaintenance size={40} />,
      serviceCardHead: "Maintenance & Support",
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
        leftCol="col-lg-6"
        bgImage={landingPageBanner}
        btnClass="theme-light mt-3"
        title="Powerful & Scalable Laravel Development Services"
        description="Our backend experts build powerful, reliable server-side solutions that keep your applications fast, stable, and ready to scale."
        btnText="Get A Free React Quote"
      />
      <CustomCustomerCard cardsData={cardsData} />;
      <WordPressPerformanceSection
        wordpresssecclass="laravel-about-sec"
        minihead="About Company"
        miniheadclass="shorttop-head"
        secTitle1="Expert"
        secTitle2="Laravel Developers"
        secTitle3="for Your Next Project"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        listItems={["Professional IT Solutions ", "Experience Team Members"]}
        anotherFlexClass="about-another-flex"
        aboutSmall="about-small-img"
        aboutSmallImg={aboutsmallimg}
        videoSrc={aboutvideo}
        listClass="aboutCompanylist"
        TouchBtn="d-none"
        serviceImg="laravel-about-img"
        btntext="Learn More About Us"
        learnmorebtn="aboutus-call"
        phoneNumber="+1 619-798-9688"
      />
      <OurCustomService
        miniHead="Our Services"
        secMainTitle="Our"
        secTitleBlue=" Laravel Development"
        secLastTitle="Services"
        customServicePara="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages."
        customServiceBtn="View All Services"
        serviceCards={serviceCards}
      />
      <PixelPerfectSec
        minihead="Portfolio"
        secTitle="Recent"
        secTitleBlue="Laravel Projects"
        secDescription="See how we’ve helped clients build cutting-edge, high-performance React applications."
        projectsData={webDesignPortfolioData}
        onImageClick={handleImageClick}
      />
      <WordPressPerformanceSection
        wordpresssecclass="laravel-choose-us"
        miniheadclass="shorttop-head"
        minihead="Why Choose Us"
        secTitle1="Why Businesses Choose Our Laravel Development"
        description="One of the strengths of WordPress is that it is fully customisable. This means we can build bespoke websites tailored specifically to our client’s goals."
        designpointheadline="At California Web Coders, we focus on:"
        landingList="landing-design-points laravel-choose-points"
        landingListItems={[
          "Experienced Laravel Developers",
          "Pixel-Perfect Execution",
          "Scalable & Secure Architecture",
          "Reliable Support",
        ]}
        serviceImg="laravel-choose-video"
        image={ChooseSecImg}
        TouchBtn="d-none"
        btntext="See More Benefits"
        learnmorebtn="aboutus-call"
      />
      <WordPressPerformanceSection
        reverse
        minihead="About Company"
        miniheadclass="shorttop-head"
        secTitle1="Ready to Build a Powerful "
        secTitle2="Laravel Application?"
        description="With over 3 billion active devices, Android dominates the global market. Our team builds Android apps that combine innovation, intuitive UI, and powerful functionality to maximize engagement and growth."
        image={powerfulimg}
        listClass="aboutCompanylist"
        TouchBtn="d-none"
        btntext="Let's Talk With Us"
        learnmorebtn="aboutus-call"
        phoneNumber="+1 619-798-9688"
      />
      <ContactForm
        secTitle="Ready to chat about your project?"
        secDescription="Get in touch today to see how we can help your business achieve its full potential online."
        btnText="Let’s Chat"
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

export default LaravelDevelopment;
