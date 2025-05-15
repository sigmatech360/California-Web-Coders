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
                7-Day refund policy for all paid plans and packages
              </h3>
              <p
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                If you're not fully satisfied within the first 7 days of project
                initiation, we’ll issue a full refund. No hard feelings, no
                hassle. Your trust matters to us, and we believe in starting
                every partnership with fairness, transparency, and confidence.
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-12">
          <div
            className="rf-pay-logos"
            data-aos="fade-up"
            data-aos-duration="3000"
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
