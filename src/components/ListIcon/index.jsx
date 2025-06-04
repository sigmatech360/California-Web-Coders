import React from "react";
import { CiCircleCheck, CiCircleRemove } from "react-icons/ci";

const ListIcon = ({ text, included }) => {
  return (
    <div className={`price-plan-list-item ${included === false ? "disabled" : ""}`}>
      <div className="price-plan-list-icon">
        {included ? <CiCircleCheck /> : <CiCircleRemove />}
      </div>
      <p>{text}</p>
    </div>
  );
};

export default ListIcon;
