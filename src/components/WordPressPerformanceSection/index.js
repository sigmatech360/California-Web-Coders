import React from "react";
import performence from "../../Assets/performence.webp";
import "./index.css";
import { Link } from "react-router-dom";
import { SiTicktick } from "react-icons/si";
import { FaCheckCircle, FaPhoneAlt } from "react-icons/fa";

const WordPressPerformanceSection = (props) => {
  const isReversed = props.reverse;

  const rowClasses = isReversed
    ? "row align-items-center flex-lg-row-reverse flex-column-reverse"
    : "row align-items-center flex-lg-row flex-column-reverse";

  const textAos = isReversed ? "fade-left" : "fade-right";
  const imageAos = isReversed ? "fade-right" : "fade-left";

  return (
    <section className={props.wordpresssecclass || "WordPressPerformanceSection"}>
      <div className="container">
        <div className={rowClasses}>
          <div className="col-lg-6">
            <div className={props.textClassbox || "abouttxt-data"}>
              <h6 className={props.miniheadclass}>{props.minihead}</h6>
              <h2
                className="title"
                data-aos={textAos}
                // data-aos-duration="500"
                data-aos-offset="50"
              >
                {props.secTitle1}{" "}
                {props.secTitle2 && <span>{props.secTitle2}</span>}{" "}
                {props.secTitle3 && props.secTitle3}
              </h2>
              <p
                data-aos={textAos}
                data-aos-duration="1000"
                data-aos-offset="50"
              >
                {props.description}
              </p>
               <p
                data-aos={textAos}
                data-aos-duration="1000"
                data-aos-offset="50"
              >
                {props.descriptiontwo}
              </p>
              <h6 data-aos={textAos} data-aos-duration="1000" data-aos-offset="50">{props.designpointheadline}</h6>
              <ul
                className={props.listClass || ""}
                data-aos={textAos}
                data-aos-duration="1000"
                data-aos-offset="50"
              >
                {props.listItems &&
                  props.listItems.map((item, index) => (
                    <li key={index}><SiTicktick /> {item}</li>
                  ))}
              </ul>
              <ul
                className={props.landingList || ""}
                data-aos={textAos}
                data-aos-duration="1000"
                data-aos-offset="50"
              >
                {props.landingListItems &&
                  props.landingListItems.map((item, index) => (
                    <li key={index}><FaCheckCircle /> {item}</li>
                  ))}
              </ul>
              {props.description2 && (
                <p
                  data-aos={textAos}
                  data-aos-duration="1000"
                  data-aos-offset="50"
                >
                  {props.description2}
                </p>
              )}
              <Link
                to={"/pricing-plan"}
                className={props.TouchBtn || "btn-theme"}
                data-aos={textAos}
                data-aos-duration="1000"
                data-aos-offset="50"
              >
                {props.btnText || `Get In Touch`}
              </Link>
              <div className={props.learnmorebtn}>
                  <Link to="#">{props.btntext}</Link>
                   {(props.phoneNumber || props.phoneLink) && (
                    <div className="about-number">
                      <span><FaPhoneAlt /></span>
                      <p>{props.phoneNumber || "+1 619-798-9688"}</p>
                    </div>
                  )}
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="services__about-img">
              <img
                src={props.image}
                alt="Service About"
                className="img-fluid"
                data-aos={imageAos}
                data-aos-duration="1000"
                data-aos-offset="50"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WordPressPerformanceSection;
