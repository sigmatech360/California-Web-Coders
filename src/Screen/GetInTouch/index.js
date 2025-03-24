import React from "react";
import "./index.css";
import Layout from "../../components/layout";

import ContactForm from "../../components/readytocheat";
import HeroSection from "../../components/Herosection";

import Pricingplanheroimg from "../../Assets/Pricingplanheroimg.png";

import Intouch from "../../components/intouch";
const Getintouch = () => {
  return (
    <Layout>
      <HeroSection
        title="Insights on tech news and trends"
        para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since."
        heroimg={Pricingplanheroimg}
      />
      <Intouch />
      <ContactForm />

      <section className="getTouchMap mb-4">
        <div className="container">
          <div className="col-md-12">
            <div style={{ width: "100%", height: "400px" }}>
              <iframe
                title="California Map"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423286.2742347859!2d-118.69193073579997!3d34.02073048963344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c7b2c3b4a3f3%3A0xbaa14b7faeb7bc01!2sCalifornia%2C%20USA!5e0!3m2!1sen!2sin!4v1648454754173!5m2!1sen!2sin"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Getintouch;
