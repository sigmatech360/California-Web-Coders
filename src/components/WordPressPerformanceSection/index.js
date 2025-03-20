import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import performence from "../../Assets/performence.png";
import "./index.css";
const WordPressPerformanceSection = () => {
  return (
    <section className="WordPressPerformanceSection">
      <div className="container">
        <div className="row align-items-center flex-lg-row flex-column-reverse">
          <div className="col-lg-6">
            <h1 className="title">
              Beautiful <span className=" ">WordPress</span> <br />
              websites built to perform.
            </h1>
            <p >
              With more than 10 years in the web design industry, building
              hundreds of WordPress websites across numerous industries, Octave
              Agency have a tried and tested process to achieve maximum results
              which is why our clients love our WordPress web design services.
            </p>
            <p >
              We understand that your website is your most effective marketing
              tool and that it is quite often your customer’s first point of
              contact with you. With this in mind, all our websites are built
              with strategic techniques for maximum lead conversion.
            </p>
            <button className="btn-theme">Get In Touch</button>
          </div>

          <div className="col-lg-6">
            <img
              src={performence} 
              alt="Laptop Display"
              className="img-fluid workpressimges"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WordPressPerformanceSection;
