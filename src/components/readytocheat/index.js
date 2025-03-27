import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";


const ContactForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    company_name: "",
    data_message: "",
  });
  const apiUrl = process.env.REACT_APP_API_BASE_URL;
  console.log("apiUrl", apiUrl);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${apiUrl}/submit-query`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      console.log(result);
      alert("Form Submitted Successfully");

      setFormData({
        username: "",
        email: "",
        phone: "",
        company_name: "",
        data_message: "",
      });
    } catch (error) {
      console.log(`Error submitting form:`, error);
      alert("Submission failed. Please try again.");
    }
  };

  return (
    <section className="ContactForm text-white py-5">
      <div className="container">
        <div className="innercontainer">
          <div className="text-center mb-4">
            <h2 className="title">Ready to chat about your project?</h2>
            <p className="lead">
              Get in touch today to see how we can help your business achieve
              its full potential online.
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <div class="row justify-content-center">
              <div class="col-xl-8">
                <div className="row g-3">
                  <div className="col-12 col-md-6">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Name"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-12 col-md-6">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Company Name"
                      name="company_name"
                      value={formData.company_name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-12 col-md-6">
                    <input
                      type="email"
                      className="form-control form-control-lg"
                      placeholder="Email Address"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-12 col-md-6">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Phone Number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-12">
                    <textarea
                      className="form-control form-control-lg"
                      rows="5"
                      placeholder="Write Your Message..."
                      name="data_message"
                      value={formData.data_message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                </div>
                <div className="text-center mt-4">
                  <button type="submit" className="sendmessage btn   btn-lg">
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
