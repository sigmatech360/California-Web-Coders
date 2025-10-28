import React from 'react'
import blockchain1 from "../../Assets/newChildPagesAssets/blockchaindevelopment/speedsvg.svg"
import blockchain2 from "../../Assets/newChildPagesAssets/blockchaindevelopment/awardsvg.svg"
import blockchain3 from "../../Assets/newChildPagesAssets/blockchaindevelopment/maintaincesettingsvg.svg"
import blockchaincalifornia from "../../Assets/newChildPagesAssets/blockchaindevelopment/blockchain-californa.webp"



const BlockchainChoose = () => {
  return (
    <section className='blockchain-choose-us'>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-10">
                    <div className="blockchain-choose-head">
                        <h6>Why Choose Us</h6>
                        <h2>Why Choose Web <span>California Web Coders</span></h2>
                        <p>See how we’ve helped clients build cutting-edge, high-performance React applications.Having the right website design company in the USA is what matters. As a custom web development agency, we blend creative thinking with expert execution to build and design custom websites. At Web Design Mechanic, your brand is handled by experienced web designers and developers who are passionate about performance, precision, and impact.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="blockchain-choose-allpoints">
                        <div className="blockchain-choose-point">
                            <img src={blockchain1} alt="img" />
                            <div className="blockchain-point-txt">
                                <h4>24/7 Expert Customer Support</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                            </div>
                        </div>
                           <div className="blockchain-choose-point">
                            <img src={blockchain2} alt="img" />
                            <div className="blockchain-point-txt">
                                <h4>99.9% Uptime Guarantee</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                            </div>
                        </div>
                           <div className="blockchain-choose-point">
                            <img src={blockchain3} alt="img" />
                            <div className="blockchain-point-txt">
                                <h4>Easy-to-Use Control Panel</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                            </div>
                        </div>
                           <div className="blockchain-choose-point">
                            <img src={blockchain1} alt="img" />
                            <div className="blockchain-point-txt">
                                <h4>24/7 Expert Customer Support</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="blockchain-california-img">
                        <img src={blockchaincalifornia} alt="Blockchain California Img" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default BlockchainChoose