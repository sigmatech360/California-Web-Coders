import React from "react";
import performence from "../../Assets/performence.webp";
import "./index.css";
import { Link } from "react-router-dom";
import { SiTicktick } from "react-icons/si";
import { FaCheckCircle, FaPhoneAlt } from "react-icons/fa";
import whychoose1 from "../../Assets/newChildPagesAssets/web3development/web-whychoose-1.svg";
import whychoose2 from "../../Assets/newChildPagesAssets/web3development/web-whychoose-2.svg";
import whychoose3 from "../../Assets/newChildPagesAssets/web3development/web-whychoose-3.svg";

const WordPressPerformanceSection = (props) => {
  const isReversed = props.reverse;

  const rowClasses = isReversed
    ? "row align-items-center flex-lg-row-reverse flex-column-reverse"
    : "row align-items-center flex-lg-row flex-column-reverse";

  const textAos = isReversed ? "fade-left" : "fade-right";
  const imageAos = isReversed ? "fade-right" : "fade-left";

  return (
    <section
      className={props.wordpresssecclass || "WordPressPerformanceSection"}
    >
      <div className="container">
        <div className={props.afterConainerClass}>
          <div className={rowClasses}>
            <div className={props.leftCol || "col-lg-6"}>
              <div className={props.textClassbox || "abouttxt-data"}>
                <h6 className={props.miniheadclass}>{props.minihead}</h6>
                <h2 className="title" data-aos={textAos} data-aos-offset="50">
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
                <h6
                  data-aos={textAos}
                  data-aos-duration="1000"
                  data-aos-offset="50"
                >
                  {props.designpointheadline}
                </h6>
                <ul className="web-whychoose-list">
                  <li>
                    <img src={whychoose1} alt="img" /> 24/7 Expert Customer
                    Support
                  </li>
                  <li>
                    <img src={whychoose2} alt="img" /> 99.9% Uptime Guarantee
                  </li>
                  <li>
                    <img src={whychoose3} alt="img" /> Easy-to-Use Control Panel
                  </li>
                </ul>
                <div className={props.anotherFlexClass}>
                  <div className={props.alllistdata}>
                    <ul
                      className={props.listClass || ""}
                      data-aos={textAos}
                      data-aos-duration="1000"
                      data-aos-offset="50"
                    >
                      {props.listItems &&
                        props.listItems.map((item, index) => (
                          <li key={index}>
                            <SiTicktick /> {item}
                          </li>
                        ))}
                    </ul>
                    <div className={props.listFlex}>
                      <ul
                        className={props.landingList || ""}
                        data-aos={textAos}
                        data-aos-duration="1000"
                        data-aos-offset="50"
                      >
                        {props.landingListItems &&
                          props.landingListItems.map((item, index) => (
                            <li key={index}>
                              <FaCheckCircle /> {item}
                            </li>
                          ))}
                      </ul>
                      <ul
                        className={props.landingList || ""}
                        data-aos={textAos}
                        data-aos-duration="1000"
                        data-aos-offset="50"
                      >
                        {props.AngularChooseListItems &&
                          props.AngularChooseListItems.map((item, index) => (
                            <li key={index}>
                              <FaCheckCircle /> {item}
                            </li>
                          ))}
                      </ul>
                    </div>
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
                      <Link to={props.aboutbtnlink || "/about"}>{props.btntext}</Link>
                      {(props.phoneNumber || props.phoneLink) && (
                        <div className="about-number">
                          <span>
                            <FaPhoneAlt />
                          </span>
                          <p>{props.phoneNumber || "+1 619-798-9688"}</p>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className={props.aboutSmall || "overall-small-about"}>
                    <img
                      src={props.aboutSmallImg}
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

            <div className={props.rightCol || "col-lg-6"}>
              <div className={props.serviceImg || "services__about-img"}>
                <img
                  src={props.image}
                  alt="Service About"
                  className="img-fluid"
                  data-aos={imageAos}
                  data-aos-duration="1000"
                  data-aos-offset="50"
                />
                <video
                  src={props.videoSrc}
                  autoPlay
                  muted
                  loop
                  className="w-100"
                ></video>
              </div>
              <div className="service-all-points">
                <div className="mern-service-point">
                  <h6>01</h6>
                  <div className="service-point-txt">
                    <h5>Customized Solutions to Reflect Your Brand</h5>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer.
                    </p>
                  </div>
                </div>
                 <div className="mern-service-point">
                  <h6>02</h6>
                  <div className="service-point-txt">
                    <h5>Performance That Drives Growth</h5>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer.
                    </p>
                  </div>
                </div>
                 <div className="mern-service-point">
                  <h6>03</h6>
                  <div className="service-point-txt">
                    <h5>Growth, Scalability for Longevity</h5>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WordPressPerformanceSection;
