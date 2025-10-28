import React, { Suspense, useState } from "react";
import Layout from "../../components/layout";
import ServiceBanner from "../../components/ServiceBanner";
import blockchainbanner from "../../Assets/newChildPagesAssets/blockchaindevelopment/blockchain-hero-banner.webp";
import blockchainAbout1 from "../../Assets/newChildPagesAssets/blockchaindevelopment/blockchain-about-1.webp";
import blockchainAbout2 from "../../Assets/newChildPagesAssets/blockchaindevelopment/blockchain-about-2.webp";
import serviceCardOne from "../../Assets/newChildPagesAssets/blockchaindevelopment/blockchain-service-1.webp";
import serviceCardTwo from "../../Assets/newChildPagesAssets/blockchaindevelopment/blockchain-service-1.webp";
import serviceCardThree from "../../Assets/newChildPagesAssets/blockchaindevelopment/blockchain-service-1.webp";
import pixleperfectimg1 from "../../Assets/newChildPagesAssets/blockchaindevelopment/pixel-1.webp";
import pixleperfectimg2 from "../../Assets/newChildPagesAssets/blockchaindevelopment/pixel-2.webp";
import pixleperfectimg3 from "../../Assets/newChildPagesAssets/blockchaindevelopment/pixel-3.webp";
import pixleperfectimg4 from "../../Assets/newChildPagesAssets/blockchaindevelopment/pixel-4.webp";
import pixleperfectimg5 from "../../Assets/newChildPagesAssets/blockchaindevelopment/pixel-5.webp";
import pixleperfectimg6 from "../../Assets/newChildPagesAssets/blockchaindevelopment/pixel-6.webp";
import blockchainbuildimg from "../../Assets/newChildPagesAssets/blockchaindevelopment/build-blockchain.webp";
import { ReactComponent as BlockchainIcon } from "../../Assets/newChildPagesAssets/blockchaindevelopment/nft.svg";
import { ReactComponent as WwwIcon } from "../../Assets/newChildPagesAssets/web3development/www-svg.svg";
import { ReactComponent as BlockchainService } from "../../Assets/newChildPagesAssets/blockchaindevelopment/blockchainservice-svg.svg";
import CustomAboutCompany from "../../components/CustomAboutCompany";
import OurCustomService from "../../components/OurCustomService";
import PixelPerfectSec from "../../components/PixelPerfectSec";
import WordPressPerformanceSection from "../../components/WordPressPerformanceSection";
import ContactForm from "../../components/readytocheat";
import SinglePricingPlan from "../../components/SinglePricingPlan";
import FrequentQuestions from "../../components/FrequentQuestions";
import { wordpressWebsitePricingPlansData } from "../../data";
import { faqHomeData } from "../Designing";
import Loader from "../../components/Loader";
import BlogSection from "../../components/blogPosts";
import Lightbox from "yet-another-react-lightbox";
import BlockchainChoose from "../../components/BlockchainChoose";

const BlockChainDevelopment = () => {
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
      serviceCardHead: "NFT Development",
      serviceCardPara:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      serviceCardImg: serviceCardOne,
    },
    {
      id: 2,
      icon: <WwwIcon />,
      serviceCardHead: "Defi Solutions",
      serviceCardPara:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      serviceCardImg: serviceCardTwo,
    },
    {
      id: 3,
      icon: <BlockchainService />,
      serviceCardHead: "Public Blockchain",
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
        bgImage={blockchainbanner}
        btnClass="theme-light mt-3"
        title="Secure & Scalable Blockchain Development Services"
        description="California Web Coders builds decentralized, transparent, and tamper-proof blockchain solutions that power the future of digital business."
        btnText="Get A Free React Quote"
      />

      <CustomAboutCompany
        miniHead="About Company"
        mainHeadStart="Your Trusted Partner in"
        mainHeadBlue="Blockchain"
        mainHeadLast="Solutions"
        frontendAboutImg={blockchainAbout1}
        frontendAboutImgtwo={blockchainAbout2}
        aboutPara="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        listItems={["Professional IT Solutions ", "Experience Team Members"]}
        listClass="aboutCompanylist"
        btntext="Learn More About Us"
        learnmorebtn="aboutus-call"
        phoneNumber="+1 619-798-9688"
      />

      <OurCustomService
        miniHead="Our Services"
        secMainTitle="Our"
        secTitleBlue="Blockchain Development"
        secLastTitle="Services"
        customServicePara="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages."
        customServiceBtn="View All Services"
        serviceCards={serviceCards}
      />

      <PixelPerfectSec
        minihead="Portfolio"
        secTitle="Recent"
        secTitleBlue="Blockchain"
        secTitle2="Projects"
        secDescription="See how we’ve helped clients build cutting-edge, high-performance React applications."
        projectsData={webDesignPortfolioData}
        onImageClick={handleImageClick}
      />


    <BlockchainChoose/>



      <WordPressPerformanceSection
        reverse
        minihead="About Company"
        miniheadclass="shorttop-head"
        secTitle1="Ready to Build Your"
        secTitle2="Blockchain Solution?"
        description="With over 3 billion active devices, Android dominates the global market. Our team builds Android apps that combine innovation, intuitive UI, and powerful functionality to maximize engagement and growth."
        descriptiontwo="With over 3 billion active devices, Android dominates the global market. Our team builds Android apps that combine innovation, intuitive UI, and powerful functionality to maximize engagement and growth."
        image={blockchainbuildimg}
        listClass="d-none"
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

export default BlockChainDevelopment;
