import React from "react";
import "./index.css";
import { CiCircleCheck } from "react-icons/ci";

const Mobileworld = () => {
  return (
    <section>
      <div className="Mobileworld">
        <div className="container">
          <div className="row mb-4 mb-5">
            <div className="col-md-6">
              <p className="para0">Pricing Plans</p>
              <h2 className="title">
                Delivering business solutions for the web and mobile world.
              </h2>
            </div>
            <div className="col-md-6">
              <div className="d-flex gap-4">
                <div className=" align-content-center justify-content-center">
                  {" "}
                  <p className="para1">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting,{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className=" d-flex flex-wrap gap-4   align-content-center ">
            <button className="servicesbtn">SEO</button>

            <button className="servicesbtn">Logo Design</button>
            <button className="servicesbtn">Web Design</button>
            <button className="servicesbtn">NFT Design</button>
            <button className="servicesbtn">E Commerce Website</button>
            <button className="servicesbtn">Video Animation</button>
            <button className="servicesbtn">SMM</button>
          </div>

          <div className="Mobileworld">
  <div className="d-flex flex-wrap gap-4 ">
    <div className="mbsersicesblk">
      <div>
        <p className="titlewp">Startup Wordpress Package</p>
        <p>$699 ONLY</p>
        <h3 className="servicesrs">$249</h3>
        <div className="mt-4 scroll-container">
          <p className="stock align-item-center">
            <span className="icon"><CiCircleCheck /> </span>5 Stock Photos
          </p>
          <p className="stock align-item-center">
            <span className="icon"><CiCircleCheck /> </span>5 Page Website
          </p>
          <p className="stock align-item-center">
            <span className="icon"><CiCircleCheck /> </span>3 Banner Design
          </p>
          <p className="stock align-item-center">
            <span className="icon"><CiCircleCheck /> </span>1 jQuery Slider Banner
          </p>
          <p className="stock align-item-center">
            <span className="icon"><CiCircleCheck /> </span>FREE Google Friendly Sitemap
          </p>
          <p className="stock align-item-center">
            <span className="icon"><CiCircleCheck /> </span>Complete W3C Certified HTML
          </p>
          <p className="stock align-item-center">
            <span className="icon"><CiCircleCheck /> </span>48 to 72 hours TAT
          </p>
        </div>
        <button className="orderbtn">Order Now</button>
        <p className="shareidea mt-4">Share your idea?</p>
        <p className="numb">+1 619-798-9688</p>
      </div>
    </div>

    {/* Repeat the .mbsersicesblk for other items */}
    <div className="mbsersicesblk">
      <div>
        <p className="titlewp">Startup Wordpress Package</p>
        <p>$699 ONLY</p>
        <h3 className="servicesrs">$249</h3>
        <div className="mt-4 scroll-container">
          <p className="stock align-item-center">
            <span className="icon"><CiCircleCheck /> </span>5 Stock Photos
          </p>
          <p className="stock align-item-center">
            <span className="icon"><CiCircleCheck /> </span>5 Page Website
          </p>
          <p className="stock align-item-center">
            <span className="icon"><CiCircleCheck /> </span>3 Banner Design
          </p>
          <p className="stock align-item-center">
            <span className="icon"><CiCircleCheck /> </span>1 jQuery Slider Banner
          </p>
          <p className="stock align-item-center">
            <span className="icon"><CiCircleCheck /> </span>FREE Google Friendly Sitemap
          </p>
          <p className="stock align-item-center">
            <span className="icon"><CiCircleCheck /> </span>Complete W3C Certified HTML
          </p>
          <p className="stock align-item-center">
            <span className="icon"><CiCircleCheck /> </span>48 to 72 hours TAT
          </p>
        </div>
        <button className="orderbtn">Order Now</button>
        <p className="shareidea mt-4">Share your idea?</p>
        <p className="numb">+1 619-798-9688</p>
      </div>
    </div>
    <div className="mbsersicesblk">
      <div>
        <p className="titlewp">Startup Wordpress Package</p>
        <p>$699 ONLY</p>
        <h3 className="servicesrs">$249</h3>
        <div className="mt-4 scroll-container">
          <p className="stock align-item-center">
            <span className="icon"><CiCircleCheck /> </span>5 Stock Photos
          </p>
          <p className="stock align-item-center">
            <span className="icon"><CiCircleCheck /> </span>5 Page Website
          </p>
          <p className="stock align-item-center">
            <span className="icon"><CiCircleCheck /> </span>3 Banner Design
          </p>
          <p className="stock align-item-center">
            <span className="icon"><CiCircleCheck /> </span>1 jQuery Slider Banner
          </p>
          <p className="stock align-item-center">
            <span className="icon"><CiCircleCheck /> </span>FREE Google Friendly Sitemap
          </p>
          <p className="stock align-item-center">
            <span className="icon"><CiCircleCheck /> </span>Complete W3C Certified HTML
          </p>
          <p className="stock align-item-center">
            <span className="icon"><CiCircleCheck /> </span>48 to 72 hours TAT
          </p>
        </div>
        <button className="orderbtn">Order Now</button>
        <p className="shareidea mt-4">Share your idea?</p>
        <p className="numb">+1 619-798-9688</p>
      </div>
    </div>
  </div>
</div>


{/* want to show 3 in one line */}



        </div>
      </div>
    </section>
  );
};

export default Mobileworld;
