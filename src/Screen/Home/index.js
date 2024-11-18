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
// import Perfection from '../../components/Perfection'
function Home() {
  return (
    <Layout>
  <section className="hero">
  <div className="container">
    <div className="heroinner">
      <div className="row justify-content-center align-items-cener">
        {/* Left Column */}
        <div className="col-lg-6 col-12 text-center text-md-start">
          <h2 className="title">
            Your <span>trusted</span> web design agency.
          </h2>
          <p className="para">
            <span>California Web Coders</span> creates stunning, fast and
            effective websites for new and established businesses.
          </p>
          <button className="herobtn">View Our Work</button>
          <div className="google-review mt-4">
            <img
              src={heroimg2} /* Replace with actual Google logo path */
              alt="Google Logo"
              className="google-logo"
            />
           </div>
        </div>

        {/* Right Column */}
        <div className="col-lg-6 col-12 text-center">
          <img
            src={heroimg} /* Replace with the main hero image path */
            alt="Responsive Design Showcase"
            className="heroimg"
          />
        </div>
      </div>
    </div>
  </div>
</section>


      <Growyourbusiness />

      <Digitalagency />
      <Designsolutions />

      <FeatureProject />

      <Servies />

     {/*   <LogoDesignServices />

      <Mobileworld />
      <FrequentQuestions /> */}
      {/* <BlogSection /> */}
      {/* <Perfection/> */}
    </Layout>
  );
}

export default Home;
