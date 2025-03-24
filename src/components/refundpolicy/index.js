import React from "react";

import "./index.css";

import visaLogo from "../../Assets/visa-logo.png";
import paypalLogo from "../../Assets/paypal-logo.png";
import mastercardLogo from "../../Assets/mastercard-logo.png";
import maestroLogo from "../../Assets/maestro-logo.png";

const RefundPolicy = () => {
  return (
    <section className="RefundPolicy">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div class="RefundPolicy-content">
              <h3
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-offset="0"
              >
                7-Day refund policy across all our paid plans.
              </h3>
              <p
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-offset="0"
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since.
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-12">
          <div
            className="rf-pay-logos"
            data-aos="fade-up"
            data-aos-duration="3000"
            data-aos-offset="0"
          >
            <div className="paymentway">
              <img src={visaLogo} alt="Visa" />
            </div>
            <div className="paymentway">
              <img src={paypalLogo} alt="PayPal" />
            </div>
            <div className="paymentway">
              <img src={mastercardLogo} alt="MasterCard" />
            </div>
            <div className="paymentway">
              <img src={maestroLogo} alt="Maestro" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RefundPolicy;
