import React, { Suspense, useState } from "react";
import Layout from "../../components/layout";
import ServiceBanner from "../../components/ServiceBanner";
import videoAnimationBanner from "../../Assets/designingpage-images/videoanimationpage/videoanimationbannr.webp";
import videoAnimationAbout from "../../Assets/designingpage-images/videoanimationpage/videoanimationabout.webp";
import WordPressPerformanceSection from "../../components/WordPressPerformanceSection";
import Ourservices from "../../components/ourservices/Index";
import PixelPerfectSec from "../../components/PixelPerfectSec";
import pixleperfectimg1 from "../../Assets/designingpage-images/videoanimationpage/animatepixelone.webp";
import pixleperfectimg2 from "../../Assets/designingpage-images/videoanimationpage/animatepixeltwo.webp";
import pixleperfectimg3 from "../../Assets/designingpage-images/videoanimationpage/animatepixelthree.webp";
import pixleperfectimg4 from "../../Assets/designingpage-images/videoanimationpage/animatepixelfour.webp";
import pixleperfectimg5 from "../../Assets/designingpage-images/videoanimationpage/animatepixelfive.webp";
import pixleperfectimg6 from "../../Assets/designingpage-images/videoanimationpage/animatepixelsix.webp";
import readyAnimate from "../../Assets/designingpage-images/videoanimationpage/readyanimate.webp"
import clientTrust from "../../Assets/designingpage-images/videoanimationpage/caliclienttrust.webp"
import ContactForm from "../../components/readytocheat";
import SinglePricingPlan from "../../components/SinglePricingPlan";
import FrequentQuestions from "../../components/FrequentQuestions";
import { faqHomeData } from "../Designing";
import Loader from "../../components/Loader";
import BlogSection from "../../components/blogPosts";
import Lightbox from "yet-another-react-lightbox";
import { wordpressWebsitePricingPlansData } from "../../data";


const VideoAnimation = () => {

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
        bgImage={videoAnimationBanner}
        btnClass="theme-light mt-3"
        title="Bring Your Ideas to Life with Stunning Video Animation"
        description="We design high-converting landing pages tailored to your business goals. From product launches to lead generation campaigns, our designs are built to maximize engagement and drive measurable results."
        btnText="Get A Free Animation Quote"
      />

      <WordPressPerformanceSection
        reverse
        minihead="About Company"
        miniheadclass="shorttop-head"
        secTitle1="Creative Animations Built by Experts"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        image={videoAnimationAbout}
        TouchBtn="d-none"
        btntext="Learn More About Us"
        learnmorebtn="aboutus-call"
        phoneNumber="+1 619-798-9688"
      />

      <Ourservices
        serviceminihead="Our Services"
        serviceEndName="Video Animation"
        serviceMainHeadcom="Services We Offer"
        allservicelink="View All Services"
        serviceCountOne="01"
        firstServiceName="Explainer Videos"
        firstServicePara="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        serviceCountTwo="02"
        secondServiceName="2D & 3D Animation"
        secondServicePara="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        serviceCountThird="03"
        thirdServiceName="Logo Animation"
        thirdServicePara="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      />

        <PixelPerfectSec
        secTitle="Recent Animation Projects"
        secDescription="Explore our latest animated videos and motion graphics that have helped brands tell their stories with impact."
        projectsData={webDesignPortfolioData}
        onImageClick={handleImageClick}
      />


        <WordPressPerformanceSection
        reverse
        wordpresssecclass="letstogether-sec"
        miniheadclass="shorttop-head"
        secTitle1="Ready to Animate Your Vision?"
        description="With over 3 billion active devices, Android dominates the global market. Our team builds Android apps that combine innovation, intuitive UI, and powerful functionality to maximize engagement and growth."
        image={readyAnimate}
        listClass="aboutCompanylist"
        TouchBtn="d-none"
        btntext="Let's Talk With Us"
        learnmorebtn="aboutus-call"
        phoneNumber="+1 619-798-9688"
      />

      <WordPressPerformanceSection
        miniheadclass="shorttop-head"
        secTitle1="Why Clients Trust "
        secTitle2="California Web Coders"
        description="A landing page isn’t just another web page—it’s your first impression, your sales pitch, and your conversion funnel all in one."
        designpointheadline="At California Web Coders, we focus on:"
        landingList="landing-design-points"
        landingListItems={[
          "Experienced Animators",
          "Custom Storytelling",
          "On-Time Delivery",
          "Full-Service Support",
        ]}
        image={clientTrust}
        TouchBtn="d-none"
        btntext="Let’s Create Something Amazing"
        learnmorebtn="aboutus-call"
      />


        <ContactForm
        secTitle="Discuss Your Video Animation Project"
        secDescription="Tell us about your idea and get a free consultation. We’ll help you choose the perfect animation style for your brand."
      />

      <SinglePricingPlan
        secTitle="Flexible Video Animation Packages"
        secDescription="Every project is unique. Our pricing is transparent and tailored to your needs. Choose a package or request a custom quote."
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

export default VideoAnimation;
