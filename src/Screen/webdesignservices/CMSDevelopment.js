import React from "react";
import "./index.css";
import Layout from "../../components/layout";
import WordPressPerformanceSection from "../../components/WordPressPerformanceSection";
import Growyourbusiness from "../../components/growyourbusiness";
import PricingPlans from "../../components/PricingPlans";
import ContactForm from "../../components/readytocheat";
import Creativitythrough from "../../components/Creativitythrough";

import pixleperfectimg1 from "../../Assets/service-cmsDev-pixle-perfect-img1.png";
import pixleperfectimg2 from "../../Assets/service-cmsDev-pixle-perfect-img2.png";
import pixleperfectimg3 from "../../Assets/service-cmsDev-pixle-perfect-img3.png";
import pixleperfectimg4 from "../../Assets/service-cmsDev-pixle-perfect-img4.png";
import pixleperfectimg5 from "../../Assets/service-cmsDev-pixle-perfect-img5.png";
import pixleperfectimg6 from "../../Assets/service-cmsDev-pixle-perfect-img6.png";

import PixelPerfectSec from "../../components/PixelPerfectSec";
import ServiceBanner from "../../components/ServiceBanner";

import wordpressbg from "../../Assets/services-cmsDev-banner-bg.png";
import serviceBannerImg from "../../Assets/services-cmsDev-banner-img.png";
import performence from "../../Assets/service-cmsDev-about-img.png";
import wordpresssectionimg from "../../Assets/services-cmsDev-about2-img.png";
import creativethoughsec from "../../Assets/services-cmsDev-creativeThrough-img.png";

export const cmsDevelopmentPortfolioData = [
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

const CMSDevelopment = () => {
  return (
    <Layout>
      <ServiceBanner
        bgImage={wordpressbg}
        title="CMS Development That Puts You In Control"
        description="California Web Coders offers intuitive and innovative CMS solutions that make website management easy. From content edits to full-scale updates, our platforms are designed to keep you in control. We specialize in user-friendly systems built for performance and growth."
        bannerList={[
          "Expert in custom CMS solutions.",
          "Seamless Shopify and WordPress development setup.",
          "Simple content control, no tech skills needed.",
          "Ongoing support and upgrades included.",
        ]}
        image={serviceBannerImg}
      />

      <WordPressPerformanceSection
        secTitle1="Custom"
        secTitle2="CMS Development"
        secTitle3="With Real Flexibility"
        description="We specialize in CMS platforms that let you run your site without running to your developer for every update. Our custom website development California services are perfect for businesses that want beautiful websites backed by powerful, user-friendly content management systems."
        // description2=""
        image={performence}
        btnText="Get Your CMS"
      />

      <Growyourbusiness
        title1="Want To Simplify Your Website"
        title2="Management?"
        btnText="Book A Free Consultation"
      />

      <PixelPerfectSec
        secTitle="Smart, Custom Websites Made to Perform"
        // secTitleBlue="Perfection."
        secDescription="Explore our CMS-powered websites, ranging from sleek blogs to full-scale e-commerce website development projects. Whether it's custom Shopify stores or advanced WordPress platforms, every project reflects our design quality, smart structure, and easy-to-manage content flow."
        projectsData={cmsDevelopmentPortfolioData}
        btnText="View Our Portfolio"
      />

      <PricingPlans
        secTitle="Smart Pricing for Smarter Control"
        secDescription="We offer flexible CMS packages tailored to match your business stage, whether you're a startup, a growing store, or an enterprise platform, we got a plan suitable just for you"
        image={wordpresssectionimg}
        whyWordressTitle="Why Choose California Web Coders"
        whyWordressDescription1="You want a site that works hard behind the scenes, and we get that. Our CMS development services are built on real-world experience, creative problem-solving, and a passion for clean, intuitive design. Whether you need Shopify development, WordPress development, or a fully custom website development solution in California, we tailor every project to your goals."
        whyWordressDescription2="We focus on systems you’ll love using, websites that grow with you, and solutions that look as good as they perform. At California Web Coders, we keep it simple, smart, and designed with you in mind."
        // whyWordressDescription3=""
      />

      <ContactForm
        secTitle="Ready to Take Control of Your Website?"
        secDescription="Book a free consultation with our CMS pros and discover how easy managing your site can be."
      />

      <Creativitythrough
        title1="Website Management"
        title2="Made Simpler"
        description1="Managing your website shouldn’t feel like a full-time job. At California Web Coders, we’re a website development agency that believes in giving you control, without the chaos. Whether you're running a blog, online store, or business platform, our systems are built to be intuitive, flexible, and stress-free."
        description2="Our expert website developers in California create smart CMS solutions that allow you to update content, launch new pages, and manage media with just a few clicks. No coding. No confusion. Just powerful tools tailored to your needs."
        image={creativethoughsec}
        btnText="Start Your Journey With Us"
      />
    </Layout>
  );
};

export default CMSDevelopment;
