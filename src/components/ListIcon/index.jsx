import React from "react";
import { CiCircleCheck, CiCircleRemove } from "react-icons/ci";

import bluecheck from "../../Assets/blue-check.webp"
import graycheck from "../../Assets/gray-check.webp"

const ListIcon = ({ text, included }) => {
  return (
    <div className={`price-plan-list-item ${included === false ? "disabled" : ""}`}>
      <div className="price-plan-list-icon">
        {/* {included ? <CiCircleCheck /> : <CiCircleRemove />} */}
        {included ? <img src={bluecheck} alt="Check" /> : <img src={graycheck} alt="Cross" />}
      </div>
      <p>{text}</p>
    </div>
  );
};

export default ListIcon;
