import Layout from "../../components/layout";
import "./index.css";
import Growyourbusiness from "../../components/growyourbusiness";
import Digitalagency from "../../components/Digitalagency";
import Designsolutions from "../../components/designsolutions";
import FeatureProject from "../../components/featureproject";
import Servies from "../../components/services";
import LogoDesignServices from "../../components/logoDesignServices";
import Mobileworld from "../../components/mobileworld";
import FrequentQuestions from "../../components/FrequentQuestions";
import BlogSection from "../../components/blogPosts";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import PricePlanCard from "../../components/PricePlanCard";
import MainBanner from "../../components/mainBanner";

const pricingPlanData = [
  {
    id: 1,
    name: "Startup Wordpress Package",
    price: {
      actualPrice: 699,
      disountPrice: 249,
    },
    servicesList: [
      "5 Stock Photos",
      "5 Page Website",
      "3 Banner Design",
      "1 jQuery Slider Banner",
      "FREE Google Friendly Sitemap",
      "Complete W3C Certified HTML",
      "48 to 72 hours TAT",
      "5 Stock Photos",
      "5 Page Website",
      "3 Banner Design",
      "1 jQuery Slider Banner",
      "FREE Google Friendly Sitemap",
      "Complete W3C Certified HTML",
      "48 to 72 hours TAT",
    ],
    number: `+1 619-798-9688`,
  },
  {
    id: 2,
    name: "Startup Wordpress Package",
    price: {
      actualPrice: 699,
      disountPrice: 249,
    },
    servicesList: [
      "5 Stock Photos",
      "5 Page Website",
      "3 Banner Design",
      "1 jQuery Slider Banner",
      "FREE Google Friendly Sitemap",
      "Complete W3C Certified HTML",
      "48 to 72 hours TAT",
      "5 Stock Photos",
      "5 Page Website",
      "3 Banner Design",
      "1 jQuery Slider Banner",
      "FREE Google Friendly Sitemap",
      "Complete W3C Certified HTML",
      "48 to 72 hours TAT",
    ],
    number: `+1 619-798-9688`,
  },
  {
    id: 3,
    name: "Startup Wordpress Package",
    price: {
      actualPrice: 699,
      disountPrice: 249,
    },
    servicesList: [
      "5 Stock Photos",
      "5 Page Website",
      "3 Banner Design",
      "1 jQuery Slider Banner",
      "FREE Google Friendly Sitemap",
      "Complete W3C Certified HTML",
      "48 to 72 hours TAT",
      "5 Stock Photos",
      "5 Page Website",
      "3 Banner Design",
      "1 jQuery Slider Banner",
      "FREE Google Friendly Sitemap",
      "Complete W3C Certified HTML",
      "48 to 72 hours TAT",
    ],
    number: `+1 619-798-9688`,
  },
];


const faqData = [
  {
    id: 1,
    question: "1. What industries does California Web Coders specialize in?",
    answer:
      "We specialize in eCommerce, tech startups, real estate, and service-based businesses seeking high-performance digital solutions.",
  },
  {
    id: 2,
    question:
      "2. Can you redesign my existing website without losing SEO rankings?",
    answer:
      "Yes, we use SEO-friendly web design techniques to ensure smooth transitions and preserve your existing rankings.",
  },
  {
    id: 3,
    question: "3. Do you offer custom features for mobile apps?",
    answer:
      "Absolutely. Our mobile app developers in California build fully customized features tailored to your business goals and user needs.",
  },
  {
    id: 4,
    question: "4. How long does a typical web project take?",
    answer:
      "Most websites are completed in 3–6 weeks, depending on scope and complexity. We prioritize quality with fast turnaround.",
  },
  {
    id: 5,
    question: "5. Do your logo designs include source files and revisions?",
    answer:
      "Yes, all logo packages include flexible files, full ownership rights, and multiple rounds of revisions.",
  },
  {
    id: 6,
    question:
      "6. What makes your SEO services different from others in California?",
    answer:
      "We focus on long-term results through data-driven strategy, content optimization, and tailored keyword targeting, not just temporary ranking boosts.",
  },
  {
    id: 7,
    question: "7. Do you provide support after launch?",
    answer:
      "Yes, we offer post-launch support plans including updates, troubleshooting, and ongoing optimization for your site or app.",
  },
  {
    id: 8,
    question: "8. Is your CMS development beginner-friendly?",
    answer:
      "Yes, definitely, we build CMS interfaces that are intuitive and easy to manage, with no coding skills required.",
  },
  {
    id: 9,
    question: "9. Can you match the design with my existing branding?",
    answer:
      "Yes, we ensure consistency by aligning every design element with your current branding, tone, and visual identity.",
  },
  {
    id: 10,
    question:
      "10. Do you offer scalable pricing for startups or small businesses?",
    answer:
      "Yes, we do. Our pricing plans are flexible and scalable to fit early-stage budgets while still delivering expert results.",
  },
];

function Home() {
  return (
    <Layout>
      <MainBanner />

      <Growyourbusiness
        title1="Grow Your Business Online, Beyond Ordinary"
        title2="Expectations"
      />

      <Digitalagency />
      <Designsolutions />

      <FeatureProject
        titleclass="featuretitle"
        paraclass="para"
        mainclass="FeatureProject"
        title2="Featured projects"
        para="Sleek, smart, and fast. Our digital projects are designed for impact. At California Web Coders, we turn concepts into clean, high-performance websites and applications that speak your brand’s language. Every project we take is a chance to create something meaningful, modern, and made to last."
        viewbtn="viewbtn"
        btntitle="View All Projects"
      />

      <Servies />
      <LogoDesignServices />

      <Mobileworld
        title="Affordable Solutions For Your Next Web Design Or Mobile App Development"
        description="Affordable doesn’t mean average. Our pricing plans are built for ambitious businesses ready to grow. From standout websites to powerful mobile apps, we deliver high-quality work with honest pricing. No hidden fees. No nonsense. Just digital solutions that look good, work fast, and help your business win online without blowing your budget."
      >
        <div className="col-lg-12">
          <Tabs
            defaultActiveKey="seo-tab"
            className="brand-tabs justify-content-center my-4 mb-xl-5 border-0"
            data-aos="fade-up"
            data-aos-duration="3000"
            data-aos-offset="0"
          >
            <Tab eventKey="seo-tab" title="SEO">
              <div
                className="row justify-content-center"
                data-aos="fade-up"
                data-aos-duration="3000"
                data-aos-offset="0"
              >
                {pricingPlanData.map((item, index) => (
                  <div className="col-lg-4 col-md-7 mb-4 mb-lg-0" key={index}>
                    <PricePlanCard
                      name={item.name}
                      actualPrice={item.price.actualPrice}
                      discountPrice={item.price.disountPrice}
                      servicesList={item.servicesList}
                      number={item.number}
                    />
                  </div>
                ))}
              </div>
            </Tab>
            <Tab eventKey="logo-design" title="Logo Design">
              Logo Design
            </Tab>
            <Tab eventKey="web-design" title="Web Design">
              Web Design
            </Tab>
            <Tab eventKey="nft-design" title="NFT Design">
              NFT Design
            </Tab>
            <Tab eventKey="eCommerce-website" title="E Commerce Website">
              E Commerce Website
            </Tab>
            <Tab eventKey="video-animation" title="Video Animation">
              Video Animation
            </Tab>
            <Tab eventKey="smm-tab" title="SMM">
              SMM
            </Tab>
          </Tabs>
        </div>
      </Mobileworld>

      <FrequentQuestions
        FrequentQuestions="homeFrequentQuestions"
        faqData={faqData}
      />
      <BlogSection />
    </Layout>
  );
}

export default Home;
