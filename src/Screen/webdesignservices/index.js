import React from "react";
import "./index.css";
import Layout from "../../components/layout";
import WordPressPerformanceSection from "../../components/WordPressPerformanceSection";
import Growyourbusiness from "../../components/growyourbusiness";
import PricingPlans from "../../components/PricingPlans";
import ContactForm from "../../components/readytocheat";
import Creativitythrough from "../../components/Creativitythrough";

import pixleperfectimg1 from "../../Assets/service-mainServices-pixle-perfect-img1.png";
import pixleperfectimg2 from "../../Assets/service-mainServices-pixle-perfect-img2.png";
import pixleperfectimg3 from "../../Assets/service-mainServices-pixle-perfect-img3.png";
import pixleperfectimg4 from "../../Assets/service-mainServices-pixle-perfect-img4.png";
import pixleperfectimg5 from "../../Assets/service-mainServices-pixle-perfect-img5.png";
import pixleperfectimg6 from "../../Assets/service-mainServices-pixle-perfect-img6.png";

import PixelPerfectSec from "../../components/PixelPerfectSec";
import ServiceBanner from "../../components/ServiceBanner";

import wordpressbg from "../../Assets/wordpressbg.png";
import performence from "../../Assets/performence.png";
import wordpresssectionimg from "../../Assets/wordpresssectionimg.png";
import creativethoughsec from "../../Assets/services-mianServices-creativeThrough-img.png";

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

const Webdesignservices = () => {
  return (
    <Layout>
      <ServiceBanner
        bgImage={wordpressbg}
        title="Build A Fully Customizable WordPress Web Design!"
        description="Launch your professionally made WordPress website, which keeps your visitors hooked to your web pages and guarantees revenue and results! If you’re looking for a site that’s fast, flexible, and built to grow, California Web Coders will do it all!"
        bannerList={[
          "100+ WordPress websites launched.",
          "Custom themes, no cookie-cutters.",
          "Built for speed and SEO.",
        ]}
        btnText="Connect Now"
      />

      <WordPressPerformanceSection
        secTitle1="Your Unique"
        secTitle2="WordPress"
        secTitle3="Web Design"
        description="Your website isn’t just a page; it’s your brand’s digital home. That’s why we take WordPress development seriously. Our creativity isn’t limited to any template or repeated designs; we make custom WordPress website designs that are perfect for launching a fresh website or revamping an existing website with new ideas and exquisite details."
        description2="The websites we make are more than just sparkle; we ensure functionality and user experience. With our team, you’ll get a WordPress site that reflects your brand, supports your growth, and makes managing content effortless."
        image={performence}
        btnText="Make My Website"
      />

      <Growyourbusiness
        title1="Reflect your brand personality with a"
        title2="custom web design!"
        btnText="Click Here"
      />

      <PixelPerfectSec
        secTitle="Your Ideas,"
        secTitleBlue="Our Execution."
        secDescription="No templates. Just thoughtful and strategic designs. Each of our projects is designed for responsiveness, usability, and results."
        projectsData={featuredProjectData}
        btnText="View Our Designs"
      />

      <PricingPlans
        secTitle="Custom WordPress Design, Transparent Pricing"
        secDescription="Whatever your business needs are, our pricing remains transparent. We believe in growing together with flexible financing options for everyone."
        image={wordpresssectionimg}
        whyWordressTitle="WordPress For Exceptional Web Solutions"
        whyWordressDescription1="We’re more than developers, we’re problem solvers, designers, and strategists. As a leading WordPress design team, we go beyond basic templates to create custom solutions built specifically for your goals. From plugin development to advanced back-end functionality, we’ve done it all."
        whyWordressDescription2="Our WordPress websites are built to perform, from lightning-fast load times to mobile-optimized layouts. We bring deep technical expertise and a love for design to every project, making us a WordPress web design partner you can truly rely on."
        // whyWordressDescription3=""
      />

      <ContactForm
        secTitle="Ready To Grow Your Business? Chat With Us!"
        secDescription="You dream it and we’ll build it. Book a free consultation and let’s talk WordPress."
      />

      <Creativitythrough
        title1="WordPress Design"
        title2="That Stands Out."
        description1="Your website deserves more than a basic theme. We bring design expertise, custom development, and SEO-friendly structure to every WordPress project. Our goal? A website that reflects your brand and helps it grow."
        description2="It’s not just WordPress. It’s WordPress done right."
        image={creativethoughsec}
        btnText="Get Started"
      />
    </Layout>
  );
};

export default Webdesignservices;
