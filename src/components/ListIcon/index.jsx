import React from "react";
import { CiCircleCheck } from "react-icons/ci";

const ListIcon = ({text}) => {
  return (
    <div className="price-plan-list-item">
      <div className="price-plan-list-icon">
        <CiCircleCheck />{" "}
      </div>
      <p>{text}</p>
    </div>
  );
};

export default ListIcon;
