// import React from "react";
// import ListIcon from "../ListIcon";

// const PricePlanCard = (props) => {
//   return (
//     <div className="price-plan-card">
//       <div className="price-plane-head">
//         <p className="price-plane-head-title">
//           {props.name}
//         </p>
//         <p className="price-card-discount">${props.actualPrice} ONLY</p>
//       </div>
//       <h3 className="price-plane-price">${props.discountPrice}</h3>
//       <div className="price-plan-list">
//         {props.servicesList.map((item, index) => (
//           <ListIcon text={item} key={index} />
//         ))}
//       </div>
//       <button type="button" className="price-card-btn">
//         Order Now
//       </button>
//       <div className="price-card-footer">
//         <p className="shareidea">Share your idea?</p>
//         <p className="price-card-num">{props.number}</p>
//       </div>
//     </div>
//   );
// };

// export default PricePlanCard;

import React, { useState } from "react";
import ListIcon from "../ListIcon";
import { Modal, Button } from "react-bootstrap";

const PricePlanCard = (props) => {
  const [orderModal, setOrderModal] = useState(false);
  const handleShow = () => setOrderModal(true);
  const handleClose = () => setOrderModal(false);
  return (
    <>
      <div className="price-plan-card">
        <div className="price-plane-head">
          <p className="price-plane-head-title">{props.name}</p>
          <p className="price-card-discount">
            <span>${props.actualPrice}</span> ONLY
          </p>
        </div>

        <h3 className="price-plane-price">${props.discountPrice}</h3>

        <div className="price-plan-list-section">
          {props.servicesList.map((section, sectionIndex) => (
            <div className="price-plan-list-section-content" key={sectionIndex}>
              {/* Conditionally render section title if available */}
              {section.title && (
                <h6 className="price-plan-section-title">{section.title}</h6>
              )}

              {/* Render each item in the section */}
              <div className="price-plan-list">
                {section.items.map((item, itemIndex) => (
                  <ListIcon
                    key={itemIndex}
                    text={item.name}
                    included={item.included}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        <button 
        type="button" 
        className="price-card-btn" 
        // onClick={handleShow}
        >
          Order Now
        </button>

        <div className="price-card-footer">
          <p className="shareidea">Share your idea?</p>
          <p className="price-card-num">{props.number}</p>
        </div>
      </div>

      <Modal show={orderModal} onHide={handleClose} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Place Your Order</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* You can place your form or content here */}
          <p>Order form or details go here...</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Submit Order
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PricePlanCard;
