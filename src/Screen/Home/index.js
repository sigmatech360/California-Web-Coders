import Layout from "../../components/layout";
import "./index.css";
import heroimg from "../../Assets/heroimg.jpg";
import heroimg2 from "../../Assets/heroimg2.jpg";
import Growyourbusiness from "../../components/growyourbusiness";
import Digitalagency from "../../components/Digitalagency";
import Designsolutions from "../../components/designsolutions";
import FeatureProject from "../../components/featureproject";
import Servies from "../../components/services";
// import Perfection from '../../components/Perfection'
function Home() {
  return (
    <Layout>
      <section className="hero">
        <div className="container">
          <div className="heroinner">
            <div className="row justify-content-center align-content-center ">
              <div className="col-md-6">
                <h2 className="title align-content-center justify-content-center">
                  Your <span> trusted</span> web design agency.
                </h2>
                <p className="para">
                  <span>California Web Coders</span> creates stunning, fast and
                  effective websites for new and established businesses.
                </p>
                <button className="herobtn">View Our Work</button>
                <div>
                  {" "}
                  <img src={heroimg2} className="herologo" />
                </div>
              </div>

              <div className="col-md-6">
                <img src={heroimg} className="heroimg" />
              </div>
            </div>
          </div>
        </div>
      </section>

<Growyourbusiness/>


<Digitalagency/>
<Designsolutions/>


<FeatureProject/>



<Servies/>
{/* <Perfection/> */}
    </Layout>
  );
}

export default Home;
