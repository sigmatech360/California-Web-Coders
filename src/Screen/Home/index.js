import Layout from "../../components/layout";
import "./index.css";
import heroimg from "../../Assets/heroimg.jpg";
import heroimg2 from "../../Assets/heroimg2.jpg";
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

function Home() {
  return (
    <Layout>
      <section className="hero">
        <div className="container">
          <div className="heroinner">
            <div className="row justify-content-center  align-items-cener">
              {/* Left Column */}
              <div className="col-lg-6 text-center text-lg-start">
                <div className="hero-content">
                  <div>
                    <h2 className="title">
                      Your <span>trusted</span> web design agency.
                    </h2>
                    <p className="para me-lg-5 me-0 pe-lg-5 pe-0">
                      <span>California Web Coders</span> creates stunning, fast
                      and effective websites for new and established businesses.
                    </p>
                    <button className="herobtn">View Our Work</button>
                  </div>
                  <div className="google-review mt-4">
                    <img
                      src={heroimg2} /* Replace with actual Google logo path */
                      alt="Google Logo"
                      className="google-logo"
                    />
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="col-lg-6">
                <div className="hero-img-right">
                  <img
                    src={heroimg} /* Replace with the main hero image path */
                    alt="Responsive Design Showcase"
                    className="heroimg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Growyourbusiness />
      <Digitalagency />
      <Designsolutions />

      <FeatureProject
        titleclass="featuretitle"
        paraclass="para"
        mainclass="FeatureProject"
        title2="Featured projects"
        para="At California Web Coders, we bring visions to life with innovative web design, custom software development, and seamless digital solutions. From sleek eCommerce platforms to powerful business apps, our portfolio showcases diverse projects tailored to meet our clients' unique needs. Every project reflects our commitment to creativity, quality, and cutting-edge technology."
        viewbtn="viewbtn"
        btntitle="View All Projects"
      />

      <Servies />
      <LogoDesignServices />

      <Mobileworld
        title="Delivering business solutions for the web and mobile world."
        description="Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting,"
      >
        <div className="col-lg-12">
          <Tabs
            defaultActiveKey="seo-tab"
            className="brand-tabs justify-content-center my-4 mb-xl-5 border-0"
          >
            <Tab eventKey="seo-tab" title="SEO">
              <div className="row justify-content-center">
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

      <FrequentQuestions FrequentQuestions="homeFrequentQuestions" />
      <BlogSection />
    </Layout>
  );
}

export default Home;
