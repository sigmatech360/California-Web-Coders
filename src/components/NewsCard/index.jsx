import React from "react";

const NewsCard = (props) => {
  return (
    <div className="news-card">
      <img src={props.image} className="img-fluid rounded mb-2" />
      {props.description && (
        <div className="news-card-content">
          <p className="projectpara mb-0">{props.description}</p>
        </div>
      )}
    </div>
  );
};

export default NewsCard;
