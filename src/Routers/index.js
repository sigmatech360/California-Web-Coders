import { Route, Routes, BrowserRouter, useLocation } from "react-router-dom";

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

// New Inner Child Pages
import CmsSolutions from "../Screen/InnerChildPages/CmsSolutions";
import ShopifyDevelopment from "../Screen/InnerChildPages/ShopifyDevelopment";
import ECommerceDevelopment from "../Screen/InnerChildPages/ECommerceDevelopment";
import WordPressDevelopment from "../Screen/InnerChildPages/WordPressDevelopment";
import WixDevelopment from "../Screen/InnerChildPages/WixDevelopment";
import SquarespaceDevelopment from "../Screen/InnerChildPages/SquarespaceDevelopment";
import WebsiteMaintenance from "../Screen/InnerChildPages/WebsiteMaintenance";
import WebFlow from "../Screen/InnerChildPages/WebFlow";
import WebsiteRevamp from "../Screen/InnerChildPages/WebsiteRevamp";

export default function UserRouter() {
  return (
    <>
      {/* <BrowserRouter basename="/california-web-coders"> */}
      <BrowserRouter>
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
          {/* New Inner Child Pages */}
          <Route path="/cms-solution" element={<CmsSolutions />} />

          
          <Route path="/shopify-development" element={<ShopifyDevelopment />} />
          <Route
            path="/eCommerce-development"
            element={<ECommerceDevelopment />}
          />
          <Route
            path="/wordpress-development"
            element={<WordPressDevelopment />}
          />
          <Route path="/wix-development" element={<WixDevelopment />} />
          <Route
            path="/squarespace-development"
            element={<SquarespaceDevelopment />}
          />
          <Route path="/website-maintenance" element={<WebsiteMaintenance />} />
          <Route path="/website-revamp" element={<WebsiteRevamp />} />
          <Route path="/webflow" element={<WebFlow />} /> {/* No design */}
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
