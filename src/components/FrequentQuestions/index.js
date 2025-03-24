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
      <section className="faqs-sec">
        <div className="container">
          <div className="row align-items-end mb-4">
            <div className="col-lg-6">
              <div className="sec-head">
                <p className="sec-head-tag colorBlue">FAQS</p>
                <h2 data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-offset="0">You Will Find Our Client's Frequent Questions</h2>
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
