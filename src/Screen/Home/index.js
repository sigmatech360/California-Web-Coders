import Layout from "../../components/layout";
import "./index.css";
import heroimg from '../../Assets/heroimg.jpg'
import heroimg2 from '../../Assets/heroimg2.jpg'
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
              <div> <img src={heroimg2}/></div>
            </div>

            <div className="col-md-6">
              <img src={heroimg} />
            </div>
          </div>
        </div></div>
      </section>
    </Layout>
  );
}

export default Home;
