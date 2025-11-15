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
import FrontendDevelopment from "../Screen/InnerChildPages/FrontendDevelopment";
import ReactDevelopment from "../Screen/InnerChildPages/ReactDevelopment";
import AngularDevelopment from "../Screen/InnerChildPages/AngularDevelopment";
import BackendDevelopment from "../Screen/InnerChildPages/BackendDevelopment";
import LaravelDevelopment from "../Screen/InnerChildPages/LaravelDevelopment";
import NodejsDevelopment from "../Screen/InnerChildPages/NodejsDevelopment";
import SmartAIIntegration from "../Screen/InnerChildPages/SmartAIIntegration";
import PythonDevelopment from "../Screen/InnerChildPages/PythonDevelopment";
import Web3Development from "../Screen/InnerChildPages/Web3Development";
import BlockChainDevelopment from "../Screen/InnerChildPages/BlockChainDevelopment";
import MERNStackDevelopment from "../Screen/InnerChildPages/MERNStackDevelopment";
import IOSAppDevelopment from "../Screen/InnerChildPages/IOSAppDevelopment";
import AndroidAppDevelopment from "../Screen/InnerChildPages/AndroidAppDevelopment";
import WebAppDevelopment from "../Screen/InnerChildPages/WebAppDevelopment";
import FullStackAppDevelopment from "../Screen/InnerChildPages/FullStackAppDevelopment";
import Designing from "../Screen/Designing";
import LandingPageDesign from "../Screen/InnerChildPages/LandingPageDesign";
import VideoAnimation from "../Screen/InnerChildPages/VideoAnimation";
import VideoEditing from "../Screen/InnerChildPages/VideoEditing";
import ProductPackagingDesign from "../Screen/InnerChildPages/ProductPackagingDesign";
import NewsLetterDesign from "../Screen/InnerChildPages/NewsLetterDesign";
import CreativeAds from "../Screen/InnerChildPages/CreativeAds";
import BrandStrategy from "../Screen/InnerChildPages/BrandStrategy";
import BrandVoice from "../Screen/InnerChildPages/BrandVoice";
import BrandIdentityDesign from "../Screen/InnerChildPages/BrandIdentityDesign";
import Merchandising from "../Screen/InnerChildPages/Merchandising";
import BrandPositioning from "../Screen/InnerChildPages/BrandPositioning";
import DomainRegistration from "../Screen/InnerChildPages/DomainRegistration";
import DomainTransfer from "../Screen/InnerChildPages/DomainTransfer";
import ManagedWebHosting from "../Screen/InnerChildPages/ManagedWebHosting";
import WebsiteMigration from "../Screen/InnerChildPages/WebsiteMigration";
import VPSDedicatedServers from "../Screen/InnerChildPages/VPSDedicatedServers";
import EmailHosting from "../Screen/InnerChildPages/EmailHosting";
import SSLCertificates from "../Screen/InnerChildPages/SSLCertificates";
import ServerManagement from "../Screen/InnerChildPages/ServerManagement";
import DevOpsServices from "../Screen/InnerChildPages/DevOpsServices";
import MobileAppDevelopmentLA from "../Screen/LocationPages/MobileAppDevelopmentLA";
import WordpressDevelopmentLA from "../Screen/LocationPages/WordpressDevelopmentLA";

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
          <Route path="/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/social-media-marketing" element={<SocialMediaMarketing />}/>
          <Route path="/search-engine-optimization" element={<SEO />} />
          <Route path="/our-work" element={<OurWork />} />
          <Route path="/pricing-plan" element={<PricingPlan />} />
          {/* Blogs Routes */}
          <Route path="/blog" element={<NewsandTrends />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="/blog/category/:categorySlug"element={<CategoryPage />}/>
          {/* <Route path="/blogs/:categorySlug/:slug" element={<BlogDetail />} /> */}
          {/* <Route path="/posts/:categorySlug/:slug" element={<BlogDetail />} /> */}
          {/* Blogs Routes */}
          <Route path="/get-intouch" element={<Getintouch />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />}/>
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />




            {/* Designing & Inner Pages */}
          <Route path="/designing" element={<Designing />} />
          <Route path="/logo-design" element={<LogoDesign />} />
          <Route path="/web-design" element={<WebDesign />} />
          <Route path="/landing-page-design" element={<LandingPageDesign />} />
          <Route path="/video-animation" element={<VideoAnimation />} />
          <Route path="/video-editing" element={<VideoEditing />} />
          <Route path="/product-packaging-design" element={<ProductPackagingDesign />} />
          <Route path="/newsletter-design" element={<NewsLetterDesign />} />
          <Route path="/creative-ads" element={<CreativeAds />} />
        

            {/* CMS Development & Inner Pages*/}
          <Route path="/cms-development" element={<CMSDevelopment />} />
          <Route path="/cms-solution" element={<CmsSolutions />} />
          <Route path="/shopify-development" element={<ShopifyDevelopment />} />
          <Route path="/eCommerce-development" element={<ECommerceDevelopment />}/>
          <Route path="/wordpress-development" element={<WordPressDevelopment />}/>
          <Route path="/wix-development" element={<WixDevelopment />} />
          <Route path="/squarespace-development" element={<SquarespaceDevelopment />}/>
          <Route path="/website-maintenance" element={<WebsiteMaintenance />} />
          <Route path="/website-revamp" element={<WebsiteRevamp />} />
          <Route path="/webflow" element={<WebFlow />} /> {/* No design */}
          <Route path="/*" element={<NotFound />} />


            {/* Custom Website Development Inner Pages */}
          <Route path="/custom-web-development" element={<CustomWebDevelopment />}/>
            {/* Frontend Development */}
          <Route path="/frontend-development" element={<FrontendDevelopment />} />
          <Route path="/react-development" element={<ReactDevelopment />} />
          <Route path="/angular-development" element={<AngularDevelopment />} />
            {/* Backend Development */}
          <Route path="/backend-development" element={<BackendDevelopment />} />
          <Route path="/laravel-development" element={<LaravelDevelopment />} />
          <Route path="/nodejs-development" element={<NodejsDevelopment />} />
          <Route path="/ai-integration" element={<SmartAIIntegration />} />
          <Route path="/python-development" element={<PythonDevelopment />} />
          <Route path="/web3-development" element={<Web3Development />} />
          <Route path="/blockchain-development" element={<BlockChainDevelopment />} />
          <Route path="/mern-stack-development" element={<MERNStackDevelopment />} />


            {/* App Development & Inner Pages */}
          <Route path="/app-development" element={<FullStackAppDevelopment />} />
          <Route path="/webapp-development" element={<WebAppDevelopment />} />
          <Route path="/mobile-app-development" element={<MobileAppDevelopment />}/>
          <Route path="/ios-app-development" element={<IOSAppDevelopment />} />
          <Route path="/android-app-development" element={<AndroidAppDevelopment />} />


            {/* Branding & Inner Pages */}
          <Route path="/brand-strategy" element={<BrandStrategy />} />
          <Route path="/brand-voice" element={<BrandVoice  />} />
          <Route path="/brand-identity-design" element={<BrandIdentityDesign />} />
          <Route path="/merchandising" element={<Merchandising />} />
          <Route path="/brand-positioning" element={<BrandPositioning />} />


            {/* Hosting & Domain Services  */}
          <Route path="/domain-registration" element={<DomainRegistration />} />
          <Route path="/domain-transfer" element={<DomainTransfer />} />
          <Route path="/manage-web-hosting" element={<ManagedWebHosting />} />
          <Route path="/website-migration" element={<WebsiteMigration />} />
          <Route path="/vps-dedicated-servers" element={<VPSDedicatedServers />} />
          <Route path="/email-hosting" element={<EmailHosting />} />
          <Route path="/ssl-certiicates" element={<SSLCertificates />} />
          <Route path="/server-management" element={<ServerManagement />} />
          <Route path="/devop-services" element={<DevOpsServices />} />


            {/* Mobile App Developement Location Pages */}
          <Route path="/mobile-app-development-los-angeles" element={<MobileAppDevelopmentLA />} />
          <Route path="/wordpress-development-los-angeles" element={<WordpressDevelopmentLA />} />


        </Routes>
      </BrowserRouter>
    </>
  );
}
