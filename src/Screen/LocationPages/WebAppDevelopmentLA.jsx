import React, { useState } from 'react'
import ReactHelmet from '../../components/ReactHelmet'
import Lightbox from 'yet-another-react-lightbox'
import LocationSupport from '../../components/LocationSupport/Index'
import LocationFaqs from '../../components/LocationFaqs'
import LocationContact from '../../components/LocationContact'
import ServiceBanner from '../../components/ServiceBanner'
import SinglePricingPlan from '../../components/SinglePricingPlan'
import { wordpressWebsitePricingPlansData } from '../../data'
import PixelPerfectSec from '../../components/PixelPerfectSec'
import WordPressPerformanceSection from '../../components/WordPressPerformanceSection'
import BookConsultation from '../../components/BookConsultation'
import LocationHeroBanner from '../../components/LocationHeroBanner'
import Layout from '../../components/layout'
import support1 from "../../Assets/locationpages/mba-los-angeles/guarrantee.svg";
import support2 from "../../Assets/locationpages/mba-los-angeles/support.svg";
import support3 from "../../Assets/locationpages/mba-los-angeles/ownership.svg";
import support4 from "../../Assets/locationpages/mba-los-angeles/money.svg";
import support5 from "../../Assets/locationpages/mba-los-angeles/Pentool.svg";
import herobanner from "../../Assets/locationpages/webappdevelopment-los-angeles/herobanner.webp";
import chooseimg from "../../Assets/locationpages/webappdevelopment-los-angeles/aboutimg.webp";
import gooddesignbg from "../../Assets/locationpages/webappdevelopment-los-angeles/good-design-bg.webp";
import pixleperfectimg1 from "../../Assets/locationpages/webappdevelopment-los-angeles/portfolio-1.webp";
import pixleperfectimg2 from "../../Assets/locationpages/webappdevelopment-los-angeles/portfolio-2.webp";
import pixleperfectimg3 from "../../Assets/locationpages/webappdevelopment-los-angeles/portfolio-3.webp";
import pixleperfectimg4 from "../../Assets/locationpages/webappdevelopment-los-angeles/portfolio-4.webp";
import pixleperfectimg5 from "../../Assets/locationpages/webappdevelopment-los-angeles/portfolio-5.webp";
import pixleperfectimg6 from "../../Assets/locationpages/webappdevelopment-los-angeles/portfolio-6.webp";


const WebAppDevelopmentLA = () => {


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
      header: "What exactly is a web app?",
      content:
        "A web app is essentially a website that functions like an app and is built to perform functions that simple websites can’t.",
    },
    {
      header: "When should a business move from a website to a web app?",
      content:
        "In simpler words, when a website starts feeling limiting. ",
    },
    {
      header: "Are web apps different from mobile apps?",
      content:
        "Yes, web apps run in browsers and work across devices without downloads. Mobile apps are platform-specific. Many businesses start with web apps before expanding to mobile.",
    },
    {
      header: "Do you offer custom web app development services in Los Angeles, CA?",
      content:
        "Yes, every web app we build is custom, designed around your business needs, workflows, and long-term goals.",
    },
    {
      header: "Can web apps scale as my business grows?",
      content:
        "That’s the point: web apps are built to handle growth in users, features, and data without needing to be rebuilt from scratch.",
    },
  ];

  const supportCardsData = [
    { image: support1, title: "Satisfaction Guaranteed, 100%" },
    { image: support2, title: "24/7 Support" },
    { image: support3, title: "Your Web, You Own It 100%" },
    { image: support4, title: "Affordable and Reliable" },
    { image: support5, title: "Build for Growth & Scalability" },
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
        title="Web App Development in Los Angeles, CA"
        description="Develop and deploy a high-performing web app in Los Angeles, CA, powered by California Web Coders and built for businesses that need more than a basic website."
        keywords="web app development services Los Angeles CA, web app development company Los Angeles CA, web app development agency Los Angeles CA, custom web app development services Los Angeles CA, web app development companies Los Angeles CA, web and mobile app development company Los Angeles CA, Full stack web app development Los Angeles CA"
        baseUrl="https://californiawebcoders.com/webapp-development-los-angeles"
      />
      
        <Layout>
        <LocationHeroBanner
          secClass="mad-la-herobanner locate-wordpress-herobanner"
          bgImage={herobanner}
          sectitle="Expert Web App Development in Los Angeles, CA"
          secPara="Websites show information. Web apps interact, respond, and handle complex functionality the way websites can’t. That’s why businesses choose web app development services in Los Angeles, CA, when performance and scalability actually matter."
          btntxt="Get a Web App Quote"
        />
        <BookConsultation />

        <WordPressPerformanceSection
          reverse
          minihead="Smooth & Scalable"
          miniheadclass="shorttop-head"
          secTitle1="What Websites Can’t Do,"
          secTitle2="Web Apps Do It Better"
          description="Most businesses don’t wake up wanting a web app. They arrive there after their website starts bending under pressure. Features get patched in. Performance dips. Simple updates turn into workarounds. That’s when the cracks show, and web apps exist for that exact moment. As a web app development company in Los Angeles, CA, we build applications for businesses that have crossed that line and know it."
          descriptiontwo="This is not about adding more pages. It’s about building a system that pays for itself and brings in more!"
          TouchBtn="d-none"
          btntext="Talk to Our Developers"
          aboutbtnlink="/get-intouch"
          learnmorebtn="aboutus-call"
          image={chooseimg}
        />

        <PixelPerfectSec
          pixelSec="pixel-perfect-sec asetheic-portfolio-sec"
          minihead="Portfolio"
          secTitle="Web App Projects We’re Proud Of"
          secDescription="These aren’t concept pieces or showpieces. Our portfolio is filled with web apps built to handle real users, real data, and real pressure, quietly doing their job every day."
          projectsData={webDesignPortfolioData}
          onImageClick={handleImageClick}
        />

        {/* <SinglePricingPlan
          secTitle="Not a Cost, An Investment in Your Business"
          secDescription="Your business deserves the best. Thus, choose a package that fits your goals and see how the right web app helps you achieve them."
          // pricingPlanData={eCommerseWebsitePricingPlansData}
          pricingPlanData={wordpressWebsitePricingPlansData}
        /> */}

        <ServiceBanner
          secClass="herobanner-imghide"
          leftCol="col-lg-6"
          bgImage={gooddesignbg}
          btnClass="theme-light mt-3"
          title="Develop Web Apps Like the Ones You’re Using Daily"
          description="Seen a Shopify store? Any e-commerce site? Gmail? Yahoo? Every email platform you use daily is a web app. You use them because they work. If they didn’t load fast, respond instantly, or stay reliable, you’d stop using them. That’s human nature."
          descriptiontwo="That’s why businesses turn to custom web app development services in Los Angeles, CA, when they want products people actually enjoy using and keep coming back to."
          btnText="Start Your Project"
        />

        <LocationContact
          miniHead="Contact Us"
          mainHead="Talk to Our Web App Developers"
          secPara="Have a question? Want to show us your project? Or simply curious about how web app development can help your business? Talk to our developers, and we’ll show you how many possibilities you can unlock with web apps."
        />

        <LocationFaqs
          miniHead="FAQs"
          mainHead="Got Questions? We’ve Got the "
          mainHeadSpan="Answers You Need!"
          secPara="Considering web app development services in Los Angeles, CA? The answers below will help you think clearly before moving forward."
          faqs={faqsData}
        />

        <LocationSupport
          minihead="We Do What Others Can’t"
          mainheadSpan="Web Apps to Outpace"
          mainhead="Your Competition"
          mainPara="While others struggle with websites, be the business that deploys the tech of the future."
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
  )
}

export default WebAppDevelopmentLA
