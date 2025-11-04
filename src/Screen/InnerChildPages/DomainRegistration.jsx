import React from "react";
import Layout from "../../components/layout";
import herobanner from "../../Assets/newChildPagesAssets/domainregistration/domain-register-herobanner.webp";
import aboutCompany from "../../Assets/newChildPagesAssets/domainregistration/about-domain-register.webp";
import serviceimg1 from "../../Assets/newChildPagesAssets/domainregistration/service-img-1.webp";
import serviceimg2 from "../../Assets/newChildPagesAssets/domainregistration/service-img-2.webp";
import serviceimg3 from "../../Assets/newChildPagesAssets/domainregistration/service-img-3.webp";
import trustpartner from "../../Assets/newChildPagesAssets/domainregistration/select-domain-img.webp";
import ServiceBanner from "../../components/ServiceBanner";
import ReactHelmet from "../../components/ReactHelmet";
import WordPressPerformanceSection from "../../components/WordPressPerformanceSection";
import DomainService from "../../components/DomainService";

const DomainRegistration = () => {
  return (
    <>
      <ReactHelmet
        title="Domain Registration Services | California Web Coders"
        description="Secure your online identity with our domain registration services. California Web Coders helps you find and register the perfect domain for your business or brand."
        keywords="domain registration, buy domain, register domain, website domain, domain name services, California Web Coders"
        baseUrl="https://californiawebcoders.com/domain-registration"
      />

      <Layout>
        <ServiceBanner
          leftCol="col-lg-6"
          bgImage={herobanner}
          btnClass="theme-light mt-3"
          title="Claim Your Perfect Domain Name Now"
          description="Secure your perfect domain name with California Web Coders and give your brand a powerful start online."
          btnText="Claim Your Domain"
        />


      <WordPressPerformanceSection
        reverse
        minihead="About"
        miniheadclass="shorttop-head"
        secTitle1="Establish Authority with a"
        secTitle2="Verified Domain"
        description="At California Web Coders, we make domain registration easy, secure, and hassle-free. Our services include domain search, registration, renewal, transfer support, and every web support that comes beyond. We ensure your business owns a credible online identity. Get full domain ownership with multiple benefits and stress-free management at California Web Coders!"
        descriptiontwo="Why Businesses Choose CWC:"
        landingList="landing-design-points domain-register-list"
        landingListItems={[
          "Instant Domain Activation",
          "Full Ownership Guarantee",
          "Protected Data Privacy",
        ]}
        TouchBtn="d-none"
        btntext="Register Your Domain Now"
        aboutbtnlink="/get-intouch"
        learnmorebtn="aboutus-call"
        phoneNumber="+1 619-798-9688"
        image={aboutCompany}
      />


        <DomainService
          domainserviceminihead="Our Services:"
          domainservicelargehead="Your Starter Kit to Go Online"
          serviceImgone={serviceimg1}
          shorthead="Web Hosting"  
          bighead="Managed Web Hosting"
          servicepara="Our managed hosting ensures your website stays fast, secure, and optimized, so your online presence is always stable and accessible."
          btntext="Learn more"
          serviceImgtwo={serviceimg2}
          shortheadtwo="Server "
          bigheadtwo="Server Management"
          serviceparatwo="We provide end-to-end server support to keep your hosting environment performing at its peak, minimizing downtime and maximizing reliability."
          btntwotxt="Learn more"
          serviceImgthree={serviceimg3}
          shortheadthree=""
          bigheadthree=""
          serviceparathree=""
          btnthreetxt=""
        />


        <WordPressPerformanceSection
        reverse
        minihead="California Web Coders:"
        miniheadclass="shorttop-head"
        secTitle1="Your Trusted Partner for"
        secTitle2="Domain Registration"
        description="Selecting the right domain name is more than just a URL; it’s your digital identity. Our experts help you choose a name that reflects your brand, guide you through availability checks, and ensure a safe registration process. With California Web Coders, your domain is secured, managed, and protected at every step."
        descriptiontwo=""
        TouchBtn="d-none"
        btntext="Find My Domain"
        aboutbtnlink="/get-intouch"
        learnmorebtn="aboutus-call"
        image={trustpartner}
      />

      </Layout>
    </>
  );
};

export default DomainRegistration;
