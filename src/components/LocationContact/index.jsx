import React, { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { LiaPinterestP } from "react-icons/lia";
import contactimg from "../../Assets/locationpages/mba-los-angeles/contact-follow.webp"
import { toast } from "react-toastify";

const LocationContact = (props) => {


   const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    website: "",
    email: "",
    phone: "",
    service: "",
    hearAbout: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
       toast.success("Your query has been submitted successfully, we will contact you shortly")
    console.log("Form Data:", formData);
  };

  return (
    <section className="location-contact-sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="location-contact-txt">
              <h6>{props.miniHead}</h6>
              <h3>{props.mainHead}</h3>
              <p>{props.secPara}</p>
              <div className="connect-sm-icons justify-content-start" data-aos="fade-right" data-aos-duration="1000" data-aos-offset="50">
                <a href="https://www.facebook.com/people/California-Web-Coders/61560871757077/" className="facebook-icon" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <FaFacebookF />
                </a>
                <a
                  href="https://www.instagram.com/californiawebcoders1" className="instagram-icon" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <FaInstagram />
                </a>
                <a
                  href="https://www.linkedin.com/company/california-web-coders/" className="linkedin-icon" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>
                <a href="https://www.youtube.com/@CaliforniaWebCoders-e8v"className="youtube-icon" target="_blank" rel="noopener noreferrer" aria-label="Youtube">
                  <FaYoutube />
                </a>
                <a href="https://x.com/californiawebco"  className="twitter-icon" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <FaTwitter />
                </a>
                <a href="https://www.pinterest.com/californiawebcoders/" className="pinterest-icon" target="_blank" rel="noopener noreferrer" aria-label="Pinterest" >
                  <LiaPinterestP />
                </a>
              </div>
              <img src={contactimg} alt="img" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="location-contact-form">
                 <form className="form" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="location-form-field">
                      <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="location-form-field">
                      <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="location-form-field">
                      <input
                        type="text"
                        name="company"
                        placeholder="Company / Organization"
                        value={formData.company}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="location-form-field">
                      <input
                        type="text"
                        name="website"
                        placeholder="Website"
                        value={formData.website}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="location-form-field">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="location-form-field">
                      <input
                        type="text"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="location-form-field">
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                      >
                        <option value="">Select Your Services</option>
                        <option value="Web Development">Web Development</option>
                        <option value="App Development">App Development</option>
                        <option value="UI/UX Design">UI/UX Design</option>
                        <option value="SEO Optimization">SEO Optimization</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="location-form-field">
                      <input
                        type="text"
                        name="hearAbout"
                        placeholder="How Did You Hear About California Web Coders?"
                        value={formData.hearAbout}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="location-form-field">
                      <textarea
                        name="message"
                        placeholder="Tell Us About Your Business"
                        value={formData.message}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="location-form-btn">
                      <button type="submit">Get In Touch</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationContact;
