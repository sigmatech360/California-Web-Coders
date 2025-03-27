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

export default function UserRouter() {
  return (
    <BrowserRouter basename="/california-web-coders">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Webdesignservices />} />
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
