import React from "react";
import "./index.css";
import Layout from "../../components/layout";
import WordPressPerformanceSection from "../../components/WordPressPerformanceSection";
import Growyourbusiness from "../../components/growyourbusiness";
import PricingPlans from "../../components/PricingPlans";
import ContactForm from "../../components/readytocheat";
import Creativitythrough from "../../components/Creativitythrough";

import pixleperfectimg1 from "../../Assets/service-customDev-pixle-perfect-img1.png";
import pixleperfectimg2 from "../../Assets/service-customDev-pixle-perfect-img2.png";
import pixleperfectimg3 from "../../Assets/service-customDev-pixle-perfect-img3.png";
import pixleperfectimg4 from "../../Assets/service-customDev-pixle-perfect-img4.png";
import pixleperfectimg5 from "../../Assets/service-customDev-pixle-perfect-img5.png";
import pixleperfectimg6 from "../../Assets/service-customDev-pixle-perfect-img6.png";

import PixelPerfectSec from "../../components/PixelPerfectSec";
import ServiceBanner from "../../components/ServiceBanner";

import wordpressbg from "../../Assets/services-cmsDev-banner-bg.png";
import serviceBannerImg from "../../Assets/services-customDev-banner-img.png";
import performence from "../../Assets/service-customDev-about-img.png";
import wordpresssectionimg from "../../Assets/services-customDev-about2-img.png";
import creativethoughsec from "../../Assets/services-customDev-creativeThrough-img.png";

const featuredProjectData = [
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

const CustomWebDevelopment = () => {
  return (
    <Layout>
      <ServiceBanner
        bgImage={wordpressbg}
        title="Custom Web Development For Unique Businesses"
        description="Gone are the days when you need to browse and brainstorm hundreds of web templates to find the one that connects with your brand voice. At California Web Coders, we provide custom web development services tailored to your target audience."
        description2="Whether you're looking for a sleek design, easy updates, or a powerful back-end structure, we specialize in building CMS platforms that work for you with no tech skills required!"
        bannerList={[
          "Fully customized websites that align with your goals.",
          "Smooth back-end development for seamless management.",
          "Beautiful, responsive front-end development for a polished user experience.",
        ]}
        image={serviceBannerImg}
      />

      <WordPressPerformanceSection
        secTitle1="Your"
        secTitle2="Custom Website,"
        secTitle3="Built With Expertise"
        description="With custom web design and development California expertise, we ensure your site is built to grow with you. Our websites not only look great but are easy for you to manage, with no complicated back-end systems, just simple, user-friendly functionality. From a seamless front-end development experience to a reliable and secure back-end development setup, we focus on simplicity, performance, and long-term results."
        description2=""
        image={performence}
        btnText="Boost Your Business"
      />

      <Growyourbusiness
        title1="Need A Website Fully Customized To Your Brand"
        title2="Voice?"
        btnText="Sign Up Now!"
      />

      <PixelPerfectSec
        secTitle="Explore Our Diversity In"
        secTitleBlue="Custom Website Development"
        secDescription="Our custom web development services have helped clients succeed by creating beautiful, functional websites that drive results. Take a look at some of our work to see what we can do for you."
        projectsData={featuredProjectData}
        btnText="View Our Portfolio"
      />

      <PricingPlans
        secTitle="Flexible Pricing to Match Your Needs"
        secDescription="From simple landing pages to full-scale websites, we offer flexible pricing options to suit every business. Our transparent pricing ensures you get the best value for your investment."
        image={wordpresssectionimg}
        whyWordressTitle="Why Custom Web Development Is The Right Choice:"
        whyWordressDescription1="At California Web Coders, we build online experiences that make a real impact. We offer custom web development services that are efficient, cost-effective, and tailored to your business needs."
        whyWordressDescription2="Our expert team delivers front-end development that grabs attention, paired with back-end development that’s fast, secure, and easy to manage. We make sure your website works for you, not the other way around."
        // whyWordressDescription3=""
        btnText="Start Now"
      />

      <ContactForm
        secTitle="Discuss How You Want Your Website With Our Experts"
        secDescription="Sign up to chat with our custom web development now, get a free consultation, and take your step toward business growth, entirely at your choice!"
      />

      <Creativitythrough
        title1="Be Unique With Your"
        title2="Website Experience"
        description1="Websites should be easy to manage, perform excellently, and align with your goals. With California Web Coders, you get custom web development services that prioritize convenience, performance, and flexibility. We design sites that are as simple to maintain as they are to navigate."
        // description2=""
        image={creativethoughsec}
        btnText="Build Your Custom Website Now!"
      />
    </Layout>
  );
};

export default CustomWebDevelopment;
