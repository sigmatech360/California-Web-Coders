import React from "react";

const DomainChooseCard = ({ cards }) => {
  return (
    <section className="domainchoose-card-sec">
      <div className="container">
        <div className="row">
          {cards.map((card, index) => (
            <div className="col-lg-6" key={index}>
              <div className="domain-choose-card">
                <img src={card.icon} alt={card.head} />
                <h5>{card.head}</h5>
                <p>{card.para}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DomainChooseCard;
