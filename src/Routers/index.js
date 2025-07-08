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
import BlogDetail from "../Screen/BlogDetail";
import CategoryPage from "../Screen/CategoryPage";
import NotFound from "../Screen/NotFound";
import ScrollToTop from "../components/ScrollToTop";



export default function UserRouter() {
  return (
    <BrowserRouter>
      {/* <Suspense fallback={<Loader />}> */}
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          {/* <Route path="/services" element={<Webdesignservices />} /> */}
          <Route path="/web-design" element={<WebDesign />} />
          <Route path="/cms-development" element={<CMSDevelopment />} />
          <Route path="/digital-marketing" element={<DigitalMarketing />} />
          <Route
            path="/social-media-marketing"
            element={<SocialMediaMarketing />}
          />
          <Route
            path="/custom-web-development"
            element={<CustomWebDevelopment />}
          /> 
          <Route path="/search-engine-optimization" element={<SEO />} />
          <Route path="/logo-design" element={<LogoDesign />} />
          <Route
            path="/mobile-app-development"
            element={<MobileAppDevelopment />}
          />

          <Route path="/our-work" element={<OurWork />} />
          <Route path="/pricing-plan" element={<PricingPlan />} />

          {/* Blogs Routes */}
          <Route path="/blog" element={<NewsandTrends />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route
            path="/blog/category/:categorySlug"
            element={<CategoryPage />}
          />
          {/* <Route path="/blogs/:categorySlug/:slug" element={<BlogDetail />} /> */}
          {/* <Route path="/posts/:categorySlug/:slug" element={<BlogDetail />} /> */}
          {/* Blogs Routes */}

          <Route path="/get-intouch" element={<Getintouch />} />
          <Route
            path="/terms-and-conditions"
            element={<TermsAndConditions />}
          />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />

          <Route path="/*" element={<NotFound />} />
        </Routes>
      {/* </Suspense> */}
    </BrowserRouter>
  );
}
