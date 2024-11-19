import React from "react";

import "./index.css";

const RefundPolicy = () => {
  return (
    <section className="RefundPolicy">
      <div className="  text-white text-center py-5">
        <div className="container">
          <h3 className="mb-3">
            7-Day refund policy across all our paid plans.
          </h3>
          <p className="RefundPolicypara mb-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since.
          </p>
          <div className="d-flex flex-wrap gap-3 justify-content-center">
  <div className="paymentway">
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Visa_Logo.png"
      alt="Visa"
      className="img-fluid paymentwayimg"
    />
  </div>
  <div className="paymentway">
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
      alt="PayPal"
      className="img-fluid paymentwayimg"
    />
  </div>
  <div className="paymentway">
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png"
      alt="MasterCard"
      className="img-fluid paymentwayimg"
    />
  </div>
  <div className="paymentway">
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/c/cb/Maestro_logo.svg"
      alt="Maestro"
      className="img-fluid paymentwayimg"
    />
  </div>
</div>

        </div>
      </div>
    </section>
  );
};

export default RefundPolicy;
