import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "../Screen/Home";
import About from "../Screen/about";
import Webdesignservices from "../Screen/webdesignservices";
import OurWork from "../Screen/ourWork";
import PricingPlan from "../Screen/Pricingplan";
import NewsandTrends from "../Screen/newsandtrends";
import Getintouch from "../Screen/GetInTouch";
import TermsAndConditions from "../Screen/TermsAndConditions";
import PrivacyPolicy from "../Screen/PrivacyPolicy";

import WebDesign from "../Screen/webdesignservices/WebDesign";
import CMSDevelopment from "../Screen/webdesignservices/CMSDevelopment";
import DigitalMarketing from "../Screen/webdesignservices/DigitalMarketing";
import SocialMediaMarketing from "../Screen/webdesignservices/SocialMediaMarketing";
import CustomWebDevelopment from "../Screen/webdesignservices/CustomWebDevelopment";
import SEO from "../Screen/webdesignservices/SEO";
import LogoDesign from "../Screen/webdesignservices/LogoDesign";
import MobileAppDevelopment from "../Screen/webdesignservices/MobileAppDevelopment";


export default function UserRouter() {
  return (
    <BrowserRouter basename="/california-web-coders">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        
        
        <Route path="/services" element={<Webdesignservices />} />
        <Route path="/services/web-design" element={<WebDesign />} />
        <Route path="/services/cms-development" element={<CMSDevelopment />} />
        <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/services/social-media-marketing" element={<SocialMediaMarketing />} />
        <Route path="/services/custom-web-development" element={<CustomWebDevelopment />} />
        <Route path="/services/seo" element={<SEO />} />
        <Route path="/services/logo-design" element={<LogoDesign />} />
        <Route path="/services/mobile-app-development" element={<MobileAppDevelopment />} />
        


        <Route path="/our-work" element={<OurWork />} />
        <Route path="/pricing-plan" element={<PricingPlan />} />
        <Route path="/news-trends" element={<NewsandTrends />} />
        <Route path="/get-intouch" element={<Getintouch />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </BrowserRouter>
  );
}
