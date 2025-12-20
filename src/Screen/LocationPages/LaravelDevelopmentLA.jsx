import React, { useState } from 'react'
import support1 from "../../Assets/locationpages/mba-los-angeles/guarrantee.svg";
import support2 from "../../Assets/locationpages/mba-los-angeles/support.svg";
import support3 from "../../Assets/locationpages/mba-los-angeles/ownership.svg";
import support4 from "../../Assets/locationpages/mba-los-angeles/money.svg";
import support5 from "../../Assets/locationpages/mba-los-angeles/Pentool.svg";
import herobanner from "../../Assets/locationpages/laravel-development-los-angeles/herobanner.webp";
import chooseimg from "../../Assets/locationpages/laravel-development-los-angeles/aboutimg.webp";
import gooddesignbg from "../../Assets/locationpages/laravel-development-los-angeles/good-design-bg.webp";
import pixleperfectimg1 from "../../Assets/locationpages/laravel-development-los-angeles/portfolio-1.webp";
import pixleperfectimg2 from "../../Assets/locationpages/laravel-development-los-angeles/portfolio-2.webp";
import pixleperfectimg3 from "../../Assets/locationpages/laravel-development-los-angeles/portfolio-3.webp";
import pixleperfectimg4 from "../../Assets/locationpages/laravel-development-los-angeles/portfolio-4.webp";
import pixleperfectimg5 from "../../Assets/locationpages/laravel-development-los-angeles/portfolio-5.webp";
import pixleperfectimg6 from "../../Assets/locationpages/laravel-development-los-angeles/portfolio-6.webp";
import Lightbox from 'yet-another-react-lightbox';
import LocationSupport from '../../components/LocationSupport/Index';
import LocationFaqs from '../../components/LocationFaqs';
import LocationContact from '../../components/LocationContact';
import ServiceBanner from '../../components/ServiceBanner';
import PixelPerfectSec from '../../components/PixelPerfectSec';
import WordPressPerformanceSection from '../../components/WordPressPerformanceSection';
import BookConsultation from '../../components/BookConsultation';
import LocationHeroBanner from '../../components/LocationHeroBanner';
import Layout from '../../components/layout';
import ReactHelmet from '../../components/ReactHelmet';



const LaravelDevelopmentLA = () => {

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
      header: "Why is Laravel a strong choice for backend development?",
      content:
        "Laravel offers clean architecture, strong security, and scalability, making it ideal for applications that need to grow without performance issues.",
    },
    {
      header: "Can Laravel handle high-traffic applications?",
      content:
        "Yes, Laravel is built to manage heavy traffic, complex logic, and large datasets when implemented with proper architecture and optimization.",
    },
    {
      header: "Is Laravel suitable for long-term projects?",
      content:
        "Absolutely, Laravel is known for maintainability, making future updates, feature additions, and scaling far easier over time.",
    },
    {
      header: "Do you build fully custom Laravel applications?",
      content:
        "Yes, every Laravel solution we build is custom, designed around your business logic rather than prebuilt templates.",
    },
    {
      header: "Can you improve or rebuild an existing Laravel application?",
      content:
        "We can audit, optimize, refactor, or extend existing Laravel applications to improve speed, stability, and performance.",
    },
    {
      header: "How do you ensure backend security in Laravel projects?",
      content:
        "We follow Laravel best practices for authentication, data protection, and server security to keep applications safe and reliable.",
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
        title="Laravel Development in Los Angeles, CA"
        description="If your business demands an app, build it with United Web Developers, the leading Laravel custom application development company, powering thousands of American businesses with robust solutions."
        keywords="laravel development company Angeles CA, laravel development services Angeles CA, laravel development agency Angeles CA, laravel web development services Angeles CA, laravel web development services Angeles CA, laravel application development company Angeles CA"
        baseUrl="https://californiawebcoders.com/laravel-development-los-angeles"
      />


         <Layout>
         <LocationHeroBanner
          secClass="mad-la-herobanner locate-wordpress-herobanner"
          bgImage={herobanner}
          sectitle="Where Other Frameworks Lag, Laravel Leads"
          secPara="Growth exposes weak backends fast. But the ones built with Laravel, they don’t even flinch a bit. As a Laravel development company in Los Angeles, CA, we build systems that stay fast, stable, and scalable when real users and real traffic arrive."
          anotherpara="Need a backend that’s fast and reliable? Click Below"
          btntxt="Go Skyrocket!"
        />


        <BookConsultation />

         <WordPressPerformanceSection
          reverse
          minihead="Why Laravel?"
          miniheadclass="shorttop-head"
          secTitle1="When Backend is Faster,"
          secTitle2="Growth is Easier"
          description="More than 70% of businesses prefer Laravel for backend development. It’s not just a framework developers like. It’s a framework businesses benefit from. Clean architecture keeps systems readable. Built-in security keeps risks low. Scalable logic keeps growth smooth instead of stressful. With Laravel, you can:"
          landingList="landing-design-points domain-register-list"
          landingListItems={[
            "Boost sales by 20%",
            "Increase visitor retention by 7%",
            "Improve conversions by 17%",
          ]}
          description2="As a Laravel development agency in Los Angeles, CA, we do not rush builds or pile features on top of weak foundations. We design backends that stay flexible, predictable, and easy to expand. The kind of systems teams trust because they simply keep working."
          TouchBtn="d-none"
          btntext="Talk to Our Developers"
          aboutbtnlink="/get-intouch"
          learnmorebtn="aboutus-call"
          image={chooseimg}
        />

        <PixelPerfectSec
          pixelSec="pixel-perfect-sec asetheic-portfolio-sec"
          minihead="Portfolio"
          secTitle="Projects So Good… they Put Competition Under Pressure"
          secDescription="Swipe through our Laravel development projects in Los Angeles, CA, and see the apps that are outpacing competition with speed and scalability."
          projectsData={webDesignPortfolioData}
          onImageClick={handleImageClick}
        />

        {/* <SinglePricingPlan
          secTitle="Not a Cost, but an Investment"
          secDescription="The right investment in your business is never a cost. Choose the right package and see how a backed developed using Laravel delivers value far beyond what it costs in the first place."
          // pricingPlanData={eCommerseWebsitePricingPlansData}
          pricingPlanData={wordpressWebsitePricingPlansData}
        /> */}

        <ServiceBanner
          secClass="herobanner-imghide"
          leftCol="col-lg-6"
          bgImage={gooddesignbg}
          btnClass="theme-light mt-3"
          title="Apps So Fast, They Barely Need to Load"
          description="You click the app, and it opens instantly. You tap, and it responds without hesitation. That’s the power of robust Laravel development. You won’t notice it in design or content, but you’ll feel it in speed, performance, and reliability delivered by Laravel development services in Los Angeles, CA"
          btnText="Get a Quote"
        />

        <LocationContact
          miniHead="Contact Us"
          mainHead="Develop a Zero-Lag Backend with Laravel"
          secPara="Need an app but not sure where to begin? Fill out the form and get a free consultation from our developers. Tell us your inspiration, and we’ll show you the magic Laravel can bring to your brand."
        />

        <LocationFaqs
          miniHead="FAQs"
          mainHead="What Smart Brands"
          mainHeadSpan="Ask First"
          secPara="Swipe through our FAQ section and find the answer you’re looking for. And if you can’t find them here, fill out the form and send your query directly to us. "
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

export default LaravelDevelopmentLA
