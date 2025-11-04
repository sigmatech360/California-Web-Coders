import React from "react";

const CustomCustomerCard = ({ cardsData }) => {
  return (
    <section className="custom-customer-sec">
      <div className="container">
        <div className="row">
          {cardsData.map((card, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="custom-customer-card">
                <span>{card.icon}</span>
                <h4>{card.cardTitle}</h4>
                <p>{card.cardPara}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomCustomerCard;
