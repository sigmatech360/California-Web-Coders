import React from "react";
import ListIcon from "../ListIcon";

const PricePlanCard = (props) => {
  return (
    <div className="price-plan-card">
      <div className="price-plane-head">
        <p className="price-plane-head-title">
          {props.name}
        </p>
        <p className="price-card-discount">${props.actualPrice} ONLY</p>
      </div>
      <h3 className="price-plane-price">${props.discountPrice}</h3>
      <div className="price-plan-list">
        {props.servicesList.map((item, index) => (
          <ListIcon text={item} key={index} />
        ))}
      </div>
      <button type="button" className="price-card-btn">
        Order Now
      </button>
      <div className="price-card-footer">
        <p className="shareidea">Share your idea?</p>
        <p className="price-card-num">{props.number}</p>
      </div>
    </div>
  );
};

export default PricePlanCard;
