import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import creativethoughsec from "../../Assets/creativethoughsec.png";

const Creativitythrough = () => {
  return (
    <section className="Creativitythrough">
      <div className="container">
        <div className="row Creativitythrough-row">
          <div className="col-xxl-4 col-lg-5">
            <div className="creativitythrough-content pt-lg-3 pt-0">
              <h1
                className="title"
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-offset="0"
              >
                Creativity through <span className=" ">web and graphics.</span>{" "}
                <br />
              </h1>
              <p
                className="para mt-3"
                data-aos="fade-right"
                data-aos-duration="2000"
                data-aos-offset="0"
              >
                we put a lot of work into being on trend with design as well as
                ensuring the websites we produce are performance led for SEO
                purposes. This means that whilst focusing on making you look
                good, we can make sure you stand the best chance of getting in
                front of your audience and ultimately convert leads into paying
                customers.
              </p>
              <p
                className="para"
                data-aos="fade-right"
                data-aos-duration="2000"
                data-aos-offset="0"
              >
                View our latest work to see how we’ve helped businesses
                transform their digital presence.
              </p>
              <button
                className="intouch btn   btn-lg mt-3"
                data-aos="fade-right"
                data-aos-duration="3000"
                data-aos-offset="0"
              >
                View Our Latest Work
              </button>
            </div>
          </div>

          <div className="col-xxl-8 col-lg-7">
            <div
              className="creativitythrough-content"
              data-aos="fade-left"
              data-aos-duration="2000"
              data-aos-offset="0"
            >
              <img
                src={creativethoughsec}
                alt="Laptop Display"
                className="img-fluid workpressimges"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Creativitythrough;
