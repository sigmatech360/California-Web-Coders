import React, { Suspense, useState } from "react";
import Layout from "../../components/layout";
import ServiceBanner from "../../components/ServiceBanner";
import { ReactComponent as Serviceone } from "../../Assets/newChildPagesAssets/mernstack/service-card-1svg.svg";
import { ReactComponent as Servicetwo } from "../../Assets/newChildPagesAssets/mernstack/service-card-2svg.svg";
import { ReactComponent as Servicethree } from "../../Assets/newChildPagesAssets/mernstack/service-card-3svg.svg";
import serviceCardOne from "../../Assets/newChildPagesAssets/mernstack/service-card-1.webp";
import serviceCardTwo from "../../Assets/newChildPagesAssets/mernstack/service-card-2.webp";
import serviceCardThree from "../../Assets/newChildPagesAssets/mernstack/service-card-3.webp";
import mernherobanner from "../../Assets/newChildPagesAssets/mernstack/mernstack-banner.webp";
import pixleperfectimg1 from "../../Assets/newChildPagesAssets/mernstack/pixel-1.webp";
import pixleperfectimg2 from "../../Assets/newChildPagesAssets/mernstack/pixel-2.webp";
import pixleperfectimg3 from "../../Assets/newChildPagesAssets/mernstack/pixel-3.webp";
import pixleperfectimg4 from "../../Assets/newChildPagesAssets/mernstack/pixel-4.webp";
import pixleperfectimg5 from "../../Assets/newChildPagesAssets/mernstack/pixel-5.webp";
import pixleperfectimg6 from "../../Assets/newChildPagesAssets/mernstack/pixel-6.webp";
import mernbuidimg from "../../Assets/newChildPagesAssets/mernstack/web-whychoose-abslt.webp";
import WordPressPerformanceSection from "../../components/WordPressPerformanceSection";
import OurCustomService from "../../components/OurCustomService";
import PixelPerfectSec from "../../components/PixelPerfectSec";
import CustomCustomerCard from "../../components/CustomCustomerCard";
import { FaMedal, FaTachometerAlt } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import ContactForm from "../../components/readytocheat";
import SinglePricingPlan from "../../components/SinglePricingPlan";
import { wordpressWebsitePricingPlansData } from "../../data";
import { faqHomeData } from "../Designing";
import Loader from "../../components/Loader";
import BlogSection from "../../components/blogPosts";
import Lightbox from "yet-another-react-lightbox";
import FrequentQuestions from "../../components/FrequentQuestions";

const MERNStackDevelopment = () => {
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
      icon: <Serviceone />,
      serviceCardHead: "Migration & Maintaince",
      serviceCardPara:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      serviceCardImg: serviceCardOne,
    },
    {
      id: 2,
      icon: <Servicetwo />,
      serviceCardHead: "Defi Solutions",
      serviceCardPara:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      serviceCardImg: serviceCardTwo,
    },
    {
      id: 3,
      icon: <Servicethree />,
      serviceCardHead: "Public Blockchain",
      serviceCardPara:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      serviceCardImg: serviceCardThree,
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
        bgImage={mernherobanner}
        btnClass="theme-light mt-3"
        title="End-to-End MERN Stack Development Services"
        description="We build modern, scalable, and high-performance web applications using the MERN Stack — MongoDB, Express.js, React, and Node.js."
        btnText="Get A Free React Quote"
      />

      <WordPressPerformanceSection
        wordpresssecclass="mern-about-sec"
        minihead="About Company"
        miniheadclass="shorttop-head"
        secTitle1="Full-Stack Expertise with "
        secTitle2="MERN Development"
        secTitle3="Agency"
        description="The years of hands-on experience as a trusted WordPress web development company have brought us to this point where we can combine strategy, innovation, and technical prowess to create websites that look good and perform well. Whether it is a startup or an enterprise-level business, our WordPress web development services are designed so that you can scale, engage, and succeed. Let our WordPress web development agency in the USA turn your ideas into high-impact results."
        listItems={["Professional IT Solutions ", "Experience Team Members"]}
        listClass="aboutCompanylist"
        serviceImg="d-none"
        TouchBtn="d-none"
        btntext="Learn More About Us"
        learnmorebtn="aboutus-call"
        phoneNumber="+1 619-798-9688"
      />

      <OurCustomService
        miniHead="Our Services"
        secMainTitle="Our"
        secTitleBlue="MERN Stack Development "
        secLastTitle="Services"
        customServicePara="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages."
        customServiceBtn="View All Services"
        serviceCards={serviceCards}
      />

      <PixelPerfectSec
        minihead="Portfolio"
        secTitle="Recent"
        secTitleBlue="MERN Stack"
        secTitle2="Projects"
        secDescription="See how we’ve helped clients build cutting-edge, high-performance React applications."
        projectsData={webDesignPortfolioData}
        onImageClick={handleImageClick}
      />

      <section className="why-choose-react-card">
        <WordPressPerformanceSection
          wordpresssecclass="react-choose-sec"
          miniheadclass="shorttop-head"
          minihead="Why Choose Us"
          secTitle1="Why Businesses Choose Our "
          secTitle2="Web 3.0 Development"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          //image={reactChoose}
          listClass="d-none"
          TouchBtn="d-none"
          btntext="Register With Confidence"
          learnmorebtn="aboutus-call"
          phoneNumber="+1 619-798-9688"
        />
        <CustomCustomerCard cardsData={cardsData} />;
      </section>

      <WordPressPerformanceSection
        wordpresssecclass="mernstack-build-sec"
        afterConainerClass="react-build-bg"
        secTitle1="Ready to Build a Powerful React App?"
        description="With over 3 billion active devices, Android dominates the global market. Our team builds Android apps that combine innovation, intuitive UI, and powerful functionality to maximize engagement and growth."
        listClass="d-none"
        TouchBtn="d-none"
        image={mernbuidimg}
        serviceImg="mern-build-img"
        btntext="Let's Talk With Us"
        learnmorebtn="aboutus-call"
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

export default MERNStackDevelopment;
