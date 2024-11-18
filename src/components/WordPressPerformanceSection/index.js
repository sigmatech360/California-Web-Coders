import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import performence from "../../Assets/performence.png";
import "./index.css"
const WordPressPerformanceSection = () => {
  return (
    <section className="WordPressPerformanceSection py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Content */}
          <div className="col-12 col-lg-6">
            <h1 className="title">
              Beautiful <span className=" ">WordPress</span> <br />
              websites built to perform.
            </h1>
            <p className="para mt-3">
              With more than 10 years in the web design industry, building
              hundreds of WordPress websites across numerous industries, Octave
              Agency have a tried and tested process to achieve maximum results
              which is why our clients love our WordPress web design services.
            </p>
            <p className="para">
              We understand that your website is your most effective marketing
              tool and that it is quite often your customer’s first point of
              contact with you. With this in mind, all our websites are built
              with strategic techniques for maximum lead conversion.
            </p>
            <button className="intouch btn   btn-lg mt-3">
              Get In Touch
            </button>
          </div>

          {/* Right Content */}
          <div className="col-12 col-lg-6 text-center mt-4 mt-lg-0">
            <img
              src={performence} // Replace with actual image URL
              alt="Laptop Display"
              className="img-fluid workpressimges"
              style={{ transform: "rotate(-5deg)" }} // Optional rotation for angle effect
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WordPressPerformanceSection;
