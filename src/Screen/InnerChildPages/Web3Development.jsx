import React, { Suspense, useState } from "react";
import Layout from "../../components/layout";
import WordPressPerformanceSection from "../../components/WordPressPerformanceSection";
import web3AboutImage from "../../Assets/newChildPagesAssets/web3development/buildweb-about.webp";
import { ReactComponent as BlockchainIcon } from "../../Assets/newChildPagesAssets/web3development/blockchain-svg.svg";
import { ReactComponent as WwwIcon } from "../../Assets/newChildPagesAssets/web3development/www-svg.svg";
import { ReactComponent as SmartContractIcon } from "../../Assets/newChildPagesAssets/web3development/smart-contract-svg.svg";
import pixleperfectimg1 from "../../Assets/newChildPagesAssets/web3development/pixel-1.webp";
import pixleperfectimg2 from "../../Assets/newChildPagesAssets/web3development/pixel-2.webp";
import pixleperfectimg3 from "../../Assets/newChildPagesAssets/web3development/pixel-3.webp";
import pixleperfectimg4 from "../../Assets/newChildPagesAssets/web3development/pixel-4.webp";
import pixleperfectimg5 from "../../Assets/newChildPagesAssets/web3development/pixel-5.webp";
import pixleperfectimg6 from "../../Assets/newChildPagesAssets/web3development/pixel-6.webp";
import serviceCardOne from "../../Assets/newChildPagesAssets/web3development/service-img-1.webp";
import serviceCardTwo from "../../Assets/newChildPagesAssets/web3development/service-img-2.webp";
import serviceCardThree from "../../Assets/newChildPagesAssets/web3development/service-img-3.webp";
import webchooseabslt from "../../Assets/newChildPagesAssets/web3development/web-whychoose-abslt.webp";
import OurCustomService from "../../components/OurCustomService";
import PixelPerfectSec from "../../components/PixelPerfectSec";
import SinglePricingPlan from "../../components/SinglePricingPlan";
import { wordpressWebsitePricingPlansData } from "../../data";
import { faqHomeData } from "../Designing";
import BlogSection from "../../components/blogPosts";
import Loader from "../../components/Loader";
import Lightbox from "yet-another-react-lightbox";
import FrequentQuestions from "../../components/FrequentQuestions";
import Web3herobanner from "../../components/Web3herobanner";

const Web3Development = () => {
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
      icon: <BlockchainIcon />,
      serviceCardHead: "API Development & Integration",
      serviceCardPara:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      serviceCardImg: serviceCardOne,
    },
    {
      id: 2,
      icon: <WwwIcon />,
      serviceCardHead: "Automation & Scripting",
      serviceCardPara:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      serviceCardImg: serviceCardTwo,
    },
    {
      id: 3,
      icon: <SmartContractIcon />,
      serviceCardHead: "Migration and Support",
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


        <Web3herobanner/>


      <WordPressPerformanceSection
        wordpresssecclass="future-web-sec"
        minihead="About Company"
        secTitle1="Pioneering the Future of Web Development"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        listClass="d-none"
        TouchBtn="d-none"
        serviceImg="d-none"
        btntext="Learn More About Us"
        learnmorebtn="aboutus-call"
        phoneNumber="+1 619-798-9688"
      />

      <WordPressPerformanceSection
        reverse
        minihead="About Company"
        miniheadclass="shorttop-head"
        secTitle1="Ready to Build Your "
        secTitle2="Web 3.0 Platform?"
        description="With over 3 billion active devices, Android dominates the global market. Our team builds Android apps that combine innovation, intuitive UI, and powerful functionality to maximize engagement and growth."
        descriptiontwo="With over 3 billion active devices, Android dominates the global market. Our team builds Android apps that combine innovation, intuitive UI, and powerful functionality to maximize engagement and growth."
        image={web3AboutImage}
        listClass="d-none"
        TouchBtn="d-none"
        btntext="Let's Talk With Us"
        learnmorebtn="aboutus-call"
        phoneNumber="+1 619-798-9688"
      />

      <OurCustomService
        miniHead="Our Services"
        secMainTitle="Our"
        secTitleBlue="Web 3.0 Development"
        secLastTitle="Services"
        customServicePara="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages."
        customServiceBtn="View All Services"
        serviceCards={serviceCards}
      />

      <PixelPerfectSec
        minihead="Portfolio"
        secTitle="Recent"
        secTitleBlue="Python Projects"
        secDescription="See how we’ve helped clients build cutting-edge, high-performance React applications."
        projectsData={webDesignPortfolioData}
        onImageClick={handleImageClick}
      />

      <WordPressPerformanceSection
        wordpresssecclass="web3-whychooseus"
        leftCol="col-lg-6"
        minihead="Why Choose Us"
        secTitle1="Why Businesses Choose Our"
        secTitle2="Web 3.0 Development"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        listClass="aboutCompanylist"
        image={webchooseabslt}
        TouchBtn="d-none"
        btntext="Learn More About Us"
        learnmorebtn="aboutus-call"
        phoneNumber="+1 619-798-9688"
      />

      <SinglePricingPlan
        secTitle="Flexible"
        secTitleBlue="Python Development"
        secTitleEnd="Packages"
        secDescription="No more budget issues, get your hands on the most Affordable Website Design Services online."
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

export default Web3Development;
