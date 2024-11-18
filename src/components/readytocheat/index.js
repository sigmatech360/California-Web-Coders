import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ContactForm = () => {
  return (
    <section className="bg-dark text-white py-5">
      <div className="container">
        <div className="text-center mb-4">
          <h2 className="fw-bold">Ready to chat about your project?</h2>
          <p className="lead">
            Get in touch today to see how we can help your business achieve its full potential online.
          </p>
        </div>
        <form>
          <div className="row g-3">
            {/* Name Input */}
            <div className="col-12 col-md-6">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Name"
                required
              />
            </div>
            {/* Company Name Input */}
            <div className="col-12 col-md-6">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Company Name"
                required
              />
            </div>
            {/* Email Address Input */}
            <div className="col-12 col-md-6">
              <input
                type="email"
                className="form-control form-control-lg"
                placeholder="Email Address"
                required
              />
            </div>
            {/* Phone Number Input */}
            <div className="col-12 col-md-6">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Phone Number"
                required
              />
            </div>
            {/* Message Input */}
            <div className="col-12">
              <textarea
                className="form-control form-control-lg"
                rows="5"
                placeholder="Write Your Message..."
                required
              ></textarea>
            </div>
          </div>
          <div className="text-center mt-4">
            <button type="submit" className="btn btn-primary btn-lg">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
