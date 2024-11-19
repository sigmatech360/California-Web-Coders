import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import performence from "../../Assets/performence.png";
import "./index.css";
import creativethoughsec from '../../Assets/creativethoughsec.png'
const Creativitythrough = () => {
  return (
    <section className="Creativitythrough py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Content */}
          <div className="col-12 col-lg-6">
            <h1 className="title">
              Creativity through <span className=" ">web and graphics.</span>{" "}
              <br />
            </h1>
            <p className="para mt-3">
              we put a lot of work into being on trend with design as well as
              ensuring the websites we produce are performance led for SEO
              purposes. This means that whilst focusing on making you look good,
              we can make sure you stand the best chance of getting in front of
              your audience and ultimately convert leads into paying customers.
            </p>
            <p className="para">
              View our latest work to see how we’ve helped businesses transform
              their digital presence.
            </p>
            <button className="intouch btn   btn-lg mt-3">View Our Latest Work</button>
          </div>

          {/* Right Content */}
          <div className="col-12 col-lg-6 text-center mt-4 mt-lg-0">
            <img
              src={creativethoughsec} // Replace with actual image URL
              alt="Laptop Display"
              className="img-fluid workpressimges"
           // Optional rotation for angle effect
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Creativitythrough;
