import React from "react";
import "./index.css";
import Layout from "../../components/layout";
import WordPressPerformanceSection from "../../components/WordPressPerformanceSection";
import Growyourbusiness from "../../components/growyourbusiness";
import PricingPlans from "../../components/PricingPlans";
import ContactForm from "../../components/readytocheat";
import Creativitythrough from "../../components/Creativitythrough";

import pixleperfectimg1 from "../../Assets/service-webDesign-pixle-perfect-img1.png";
import pixleperfectimg2 from "../../Assets/service-webDesign-pixle-perfect-img2.png";
import pixleperfectimg3 from "../../Assets/service-webDesign-pixle-perfect-img3.png";
import pixleperfectimg4 from "../../Assets/service-webDesign-pixle-perfect-img4.png";
import pixleperfectimg5 from "../../Assets/service-webDesign-pixle-perfect-img5.png";
import pixleperfectimg6 from "../../Assets/service-webDesign-pixle-perfect-img6.png";

import PixelPerfectSec from "../../components/PixelPerfectSec";
import ServiceBanner from "../../components/ServiceBanner";

import wordpressbg from "../../Assets/services-cmsDev-banner-bg.png";
import performence from "../../Assets/service-cmsDev-about-img.png";
import wordpresssectionimg from "../../Assets/services-cmsDev-about2-img.png";
import creativethoughsec from "../../Assets/services-cmsDev-creativeThrough-img.png";


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
  }
];

const CMSDevelopment = () => {
  return (
    <Layout>
      <ServiceBanner
        bgImage={wordpressbg}
        title="WordPress Web Design Services"
        description="Launch a professional, revenue-driving WordPress website with our WordPress Web Design Services."
        bannerList={[
          "Modern web design techniques",
          "Optimised for SEO",
          "Lightning fast load times",
          "Designed to convert",
        ]}
      />

      <WordPressPerformanceSection
        secTitle1="Beautiful"
        secTitle2="WordPress"
        secTitle3="websites built to perform."
        description="With more than 10 years in the web design industry, building
              hundreds of WordPress websites across numerous industries, Octave
              Agency have a tried and tested process to achieve maximum results
              which is why our clients love our WordPress web design services."
        description2="We understand that your website is your most effective marketing
              tool and that it is quite often your customer’s first point of
              contact with you. With this in mind, all our websites are built
              with strategic techniques for maximum lead conversion."
        image={performence}
      />

      <Growyourbusiness />

      <PixelPerfectSec
        secTitle="From Pixels to"
        secTitleBlue="Perfection."
        secDescription="Each design is uniquely crafted to suit the specific needs of every business. We strive to showcase and enhance the individuality of your brand. Explore some of our recent projects below."
        projectsData={featuredProjectData}
      />

      <PricingPlans
        image={wordpresssectionimg}
        whyWordressTitle="Why WordPress"
        whyWordressDescription1="One of the strengths of WordPress is that it is fully
                customisable. This means we can build bespoke websites tailored
                specifically to our client’s goals"
        whyWordressDescription2="Our WordPress developers ensure that your design and website
                functionality works across all devices, allowing you to stand
                out from the competition."
        whyWordressDescription3="Another added benefit of using such a popular platform is that
                there are thousands of great WordPress plugins available. These
                plugins add complex functionality to your site and can be great
                tools for displaying information, engaging users, and building a
                WordPress eCommerce online store."
      />

      <ContactForm />

      <Creativitythrough
        title1="Creativity through"
        title2="web and graphics."
        description1="we put a lot of work into being on trend with design as well as
                ensuring the websites we produce are performance led for SEO
                purposes. This means that whilst focusing on making you look
                good, we can make sure you stand the best chance of getting in
                front of your audience and ultimately convert leads into paying
                customers."
        description2="View our latest work to see how we’ve helped businesses
                transform their digital presence."
        image={creativethoughsec}
      />
    </Layout>
  );
};

export default CMSDevelopment;
