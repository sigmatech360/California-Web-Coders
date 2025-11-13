import React, { useState } from "react";
import { toast } from "react-toastify";

const BookConsultation = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    referral: "",
    businessDetails: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Your query has been submitted successfully, we will contact you shortly")
    console.log("Form Data:", formData);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      service: "",
      referral: "",
      businessDetails: "",
    });
  };

  return (
    <section className="book-consultation-sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="book-consultation-box">
              <h3>Book A Free Consultation</h3>
              <div className="book-consultation-form">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="book-input-field">
                        <input
                          type="text"
                          name="firstName"
                          placeholder="First Name"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="book-input-field">
                        <input
                          type="text"
                          name="lastName"
                          placeholder="Last Name"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="book-input-field">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="book-input-field">
                        <input
                          type="text"
                          name="phone"
                          placeholder="Phone Number"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="book-input-field">
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                        >
                          <option value="">Select Your Service</option>
                          <option value="Web Development">Web Development</option>
                          <option value="Mobile App Development">Mobile App Development</option>
                          <option value="UI/UX Design">UI/UX Design</option>
                          <option value="Digital Marketing">Digital Marketing</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-lg-4">
                      <div className="book-input-field">
                        <input
                          type="text"
                          name="referral"
                          placeholder="How Did You Hear About CWC?"
                          value={formData.referral}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-lg-8">
                      <div className="book-input-field">
                        <input
                          type="text"
                          name="businessDetails"
                          placeholder="Tell Us About Your Business"
                          value={formData.businessDetails}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="book-form-btn">
                        <button type="submit">Submit Your Request</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookConsultation;
