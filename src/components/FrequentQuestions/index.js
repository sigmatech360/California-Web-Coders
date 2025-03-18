import React, { useState } from "react";
import "./index.css";

import smartcard from "../../Assets/smart.svg";
import cartified from "../../Assets/Certified.svg";
import prfreesional from "../../Assets/Professiona.svg";
import primium from "../../Assets/Premium.svg";

import Accordion from "react-bootstrap/Accordion";

const FrequentQuestions = (props) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const [activeTab, setActiveTab] = useState("Basic");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      id: 1,
      question: "How Much Does Data Analytics Cost?",
      answer:
        "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500S.",
    },
    {
      id: 2,
      question: "What Kind Of Data Is Needed For Analysis?",
      answer:
        "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500S.",
    },
    {
      id: 3,
      question: "Dedicated IT Solution?",
      answer:
        "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500S.",
    },
    {
      id: 4,
      question: "IT Industry Expertise?",
      answer:
        "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500S.",
    },
    {
      id: 5,
      question: "What Kind Of Data Is Needed For Analysis?",
      answer:
        "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500S.",
    },
    {
      id: 6,
      question: "Will I Need A Credit Check?",
      answer:
        "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500S.",
    },
    {
      id: 7,
      question: "Digital Performance And Skills?",
      answer:
        "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500S.",
    },
    {
      id: 8,
      question: "What Kind Of Data Is Needed For Analysis?",
      answer:
        "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500S.",
    },
    {
      id: 9,
      question: "IT Industry Expertise?",
      answer:
        "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500S.",
    },
  ];

  return (
    <>
      {/* <section className={`${props?.FrequentQuestions}  py-5`}>
        {props?.title && (
          <div className="container py-5">
            <div className="row align-items-center">
              
              <div className="col-lg-6 feeleverything">
                <h2 className="everythingtitle  mb-3">
                  Express everything and feel everything.
                </h2>
                <p className="everythingpara  text-white">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type.
                </p>
                <div className="mb-3">
                  <span>Design Graphics & 3D Design</span>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "87%" }}
                      aria-valuenow="87"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      87%
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <span>Marketing</span>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "72%" }}
                      aria-valuenow="72"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      72%
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <span>Animations</span>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "80%" }}
                      aria-valuenow="80"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      80%
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <span>Programming</span>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "92%" }}
                      aria-valuenow="92"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      92%
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="card frequentlysmartcard text-white text-center p-3 h-100">
                      <div className="smart mb-2 d-flex align-items-center justify-content-center">
                        <img
                          src={smartcard}
                          alt="smartcard"
                          className="img-fluid smartcard"
                        />
                      </div>

                      <h5 className="">Smart & Secure System</h5>
                      <p className="text-white-50">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card frequentlysmartcard text-white text-center p-3 h-100">
                      <div className="smart mb-2 d-flex align-items-center justify-content-center">
                        <img
                          src={cartified}
                          alt="smartcard"
                          className="img-fluid smartcard"
                        />
                      </div>
                      <h5 className="">Certified Expert</h5>
                      <p className="text-white-50">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card frequentlysmartcard text-white text-center p-3 h-100">
                      <div className="smart mb-2 d-flex align-items-center justify-content-center">
                        <img
                          src={prfreesional}
                          alt="smartcard"
                          className="img-fluid smartcard"
                        />
                      </div>
                      <h5 className="">Professional Team</h5>
                      <p className="text-white-50">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card frequentlysmartcard text-white text-center p-3 h-100">
                      <div className="smart mb-2 d-flex align-items-center justify-content-center">
                        <img
                          src={primium}
                          alt="smartcard"
                          className="img-fluid smartcard"
                        />
                      </div>
                      <h5 className="">24/7 Premium Support</h5>
                      <p className="text-white-50">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="container py-4">
          <div className="row">
            <div className="col-md-6">
              <p className="homeFrequentQuestionspara">FAQS</p>
              <p className="homeFrequentQuestionspara2">
                You Will Find Our Client's Frequent Questions
              </p>

              <div className="container my-4">
                <div className="faq-item">
                  <div className="faq-question" onClick={() => handleToggle(0)}>
                    How Much Does Data Analytics Cost?
                    <span className={`icon ${activeIndex === 0 ? "open" : ""}`}>
                      •
                    </span>
                  </div>
                  {activeIndex === 0 && (
                    <div className="faq-answer">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s.
                    </div>
                  )}
                </div>

                <div className="faq-item">
                  <div className="faq-question" onClick={() => handleToggle(1)}>
                    What Kind Of Data Is Needed For Analysis?
                    <span className={`icon ${activeIndex === 1 ? "open" : ""}`}>
                      •
                    </span>
                  </div>
                  {activeIndex === 1 && (
                    <div className="faq-answer">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s.
                    </div>
                  )}
                </div>

                <div className="faq-item">
                  <div className="faq-question" onClick={() => handleToggle(2)}>
                    Dedicated IT Solution?
                    <span className={`icon ${activeIndex === 2 ? "open" : ""}`}>
                      +
                    </span>
                  </div>
                  {activeIndex === 2 && (
                    <div className="faq-answer">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s.
                    </div>
                  )}
                </div>

                <div className="faq-item">
                  <div className="faq-question" onClick={() => handleToggle(3)}>
                    IT Industry Expertise?
                    <span className={`icon ${activeIndex === 3 ? "open" : ""}`}>
                      +
                    </span>
                  </div>
                  {activeIndex === 3 && (
                    <div className="faq-answer">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s.
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="industrytab d-flex justify-content-around tab-nav">
                {["Basic", "Service", "Price", "Benefits"].map((tab) => (
                  <div
                    key={tab}
                    className={`tab-item ${activeTab === tab ? "active" : ""}`}
                    onClick={() => handleTabClick(tab)}
                  >
                    {tab}
                  </div>
                ))}
              </div>

              <div className="faq-section">
                {faqItems.map((item, index) => (
                  <div className="faq-item" key={index}>
                    <div
                      className="faq-question"
                      onClick={() => handleToggle(index)}
                    >
                      {item.question}
                      <span
                        className={`icon ${
                          activeIndex === index ? "open" : ""
                        }`}
                      >
                        +
                      </span>
                    </div>
                    {activeIndex === index && (
                      <div className="faq-answer">{item.answer}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section className="faqs-sec">
        <div className="container">
          <div className="row align-items-end mb-4">
            <div className="col-lg-6">
              <div className="sec-head">
                <p className="sec-head-tag colorBleu">FAQS</p>
                <h2>You Will Find Our Client's Frequent Questions</h2>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="faqs-tabs-btns d-flex justify-content-evenly">
                <button className="faqs-tabs-btn">Basic</button>
                <button className="faqs-tabs-btn">Service</button>
                <button className="faqs-tabs-btn">Price</button>
                <button className="faqs-tabs-btn">Benefits</button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <Accordion defaultActiveKey="0">
                {faqData
                  .slice(0, Math.ceil(faqData.length / 2))
                  .map((item, index) => (
                    <Accordion.Item eventKey={index.toString()} key={item.id}>
                      <Accordion.Header>{item.question}</Accordion.Header>
                      <Accordion.Body>{item.answer}</Accordion.Body>
                    </Accordion.Item>
                  ))}
              </Accordion>
            </div>

            <div className="col-lg-6">
              <Accordion>
                {faqData
                  .slice(Math.ceil(faqData.length / 2))
                  .map((item, index) => (
                    <Accordion.Item
                      eventKey={(index + faqData.length / 2).toString()}
                      key={item.id}
                    >
                      <Accordion.Header>{item.question}</Accordion.Header>
                      <Accordion.Body>{item.answer}</Accordion.Body>
                    </Accordion.Item>
                  ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FrequentQuestions;
