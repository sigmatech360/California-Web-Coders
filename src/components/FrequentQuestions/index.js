import React , {useState} from "react";
import "./index.css";

import Accordion from "react-bootstrap/Accordion";

const FrequentQuestions = () => {
    const [activeIndex, setActiveIndex] = useState(null);

 


    const [activeTab, setActiveTab] = useState('Basic');
 
  
    const handleTabClick = (tab) => {
      setActiveTab(tab);
    };
  
    const handleToggle = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
    };
  
    const faqItems = [
      { question: 'IT Industry Expertise?', answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
      { question: 'What Kind Of Data Is Needed For Analysis?', answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
      { question: 'Will I Need A Credit Check?', answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
      { question: 'Digital Performance And Skills?', answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
      { question: 'What Kind Of Data Is Needed For Analysis?', answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
    ];
  
  return (
    <section className="FrequentQuestions  py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p className="para">FAQS</p>
            <p className="para2">
              You Will Find Our Client's Frequent Questions
            </p>

            <div className="container my-4">
      <div className="faq-item">
        <div
          className="faq-question"
          onClick={() => handleToggle(0)}
        >
          How Much Does Data Analytics Cost?
          <span className={`icon ${activeIndex === 0 ? 'open' : ''}`}>•</span>
        </div>
        {activeIndex === 0 && (
          <div className="faq-answer">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </div>
        )}
      </div>

      <div className="faq-item">
        <div
          className="faq-question"
          onClick={() => handleToggle(1)}
        >
          What Kind Of Data Is Needed For Analysis?
          <span className={`icon ${activeIndex === 1 ? 'open' : ''}`}>•</span>
        </div>
        {activeIndex === 1 && (
          <div className="faq-answer">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </div>
        )}
      </div>

      <div className="faq-item">
        <div
          className="faq-question"
          onClick={() => handleToggle(2)}
        >
          Dedicated IT Solution?
          <span className={`icon ${activeIndex === 2 ? 'open' : ''}`}>+</span>
        </div>
        {activeIndex === 2 && (
          <div className="faq-answer">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </div>
        )}
      </div>

      <div className="faq-item">
        <div
          className="faq-question"
          onClick={() => handleToggle(3)}
        >
          IT Industry Expertise?
          <span className={`icon ${activeIndex === 3 ? 'open' : ''}`}>+</span>
        </div>
        {activeIndex === 3 && (
          <div className="faq-answer">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </div>
        )}
      </div>
    </div>
          </div>
          <div className="col-md-6">


          <div className="industrytab d-flex justify-content-around tab-nav">
        {['Basic', 'Service', 'Price', 'Benefits'].map((tab) => (
          <div
            key={tab}
            className={`tab-item ${activeTab === tab ? 'active' : ''}`}
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
              <span className={`icon ${activeIndex === index ? 'open' : ''}`}>+</span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
          </div>
        </div>
     
    </section>
  );
};

export default FrequentQuestions;
