import React from "react";
import { Link } from "react-router-dom";

import webslide1 from "../../Assets/newChildPagesAssets/web3development/web3-slide-1.webp";
import webslide2 from "../../Assets/newChildPagesAssets/web3development/web3-slide-2.webp";
import webslide3 from "../../Assets/newChildPagesAssets/web3development/web3-slide-3.webp";
import webslide4 from "../../Assets/newChildPagesAssets/web3development/web3-slide-4.webp";
import webslide5 from "../../Assets/newChildPagesAssets/web3development/web3-slide-5.webp";
import webslide6 from "../../Assets/newChildPagesAssets/web3development/web3-slide-6.webp";
import webslide7 from "../../Assets/newChildPagesAssets/web3development/web3-slide-7.webp";
import webslide8 from "../../Assets/newChildPagesAssets/web3development/web3-slide-8.webp";

const Web3herobanner = () => {

  return (
    <section className="web3-hero-banner">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="web3-hero-banner-txt">
              <h2>Next-Gen Web 3.0 Development Services</h2>
              <p>
                We design and develop Web3.0 solutions that leverage blockchain,
                decentralized Applications (dApps), and smart contracts to
                empower the future of the internet.
              </p>
              <Link to="">Get A Free React Quote</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="web3images-flex">
              <img src={webslide1} alt="img" />
              <img src={webslide2} alt="img" />
              <img src={webslide3} alt="img" />
              <img src={webslide4} alt="img" />
              <img src={webslide5} alt="img" />
              <img src={webslide6} alt="img" />
              <img src={webslide7} alt="img" />
              <img src={webslide8} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Web3herobanner;
