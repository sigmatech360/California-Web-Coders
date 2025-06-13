import React from "react";
import Layout from "../../components/layout";
import HeroSection from "../../components/Herosection";
import bannerBgImage from "../../Assets/privacyPolicy-banner-bg.png";
import Pricingplanheroimg from "../../Assets/Pricingplanheroimg.png";

const PrivacyPolicy = () => {
  return (
    <Layout>
      <HeroSection
        leftCol="col-lg-6"
        rightCol="col-lg-6"
        bgImage={bannerBgImage}
        title="Privacy Policy"
        para="We are committed to protecting your personal information. All data is securely stored and used solely to enhance service quality, communication, and project experience."
        // heroimg={Pricingplanheroimg}
      />

      <section className="privacy-policy-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="privacy-policy-content">
                <p>
                  At <span className="fw-bold">California Web Coders</span>, we
                  value your privacy and are fully committed to protecting the
                  personal information you share with us. This Privacy Policy
                  explains how we collect, use, store, and disclose your
                  information when you interact with our website and services.
                  It also outlines your rights and choices under applicable
                  United States privacy laws, including the California Consumer
                  Privacy Act (CCPA), where applicable.
                </p>
                <h2>1. Information We Collect</h2>
                <p>We may collect the following categories of information:</p>
                <h3>a. Personal Information</h3>
                <p>
                  When you voluntarily provide it through our website, contact
                  forms, or services, we may collect:
                </p>
                <ul>
                  {[
                    "Full name",
                    "Email address",
                    "Phone number",
                    "Company name",
                    "Mailing or billing address",
                    "Any other details you choose to provide",
                  ].map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>

                <h3>b. Usage Data</h3>
                <p>
                  Collected automatically when you interact with our website,
                  including:
                </p>
                <ul>
                  {[
                    "IP address",
                    "Browser type and version",
                    "Device type",
                    "Operating system",
                    "Referring website",
                    "Pages visited and time spent on our site",
                    "Clickstream data",
                  ].map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>

                <h3>c. Cookies and Tracking Technologies</h3>

                <p>
                  We use cookies, web beacons, pixels, and similar technologies
                  to:
                </p>
                <ul>
                  {[
                    "Enhance user experience",
                    "Analyze site traffic",
                    "Remember user preferences",
                    "Serve targeted advertisements (with your consent, where applicable)",
                  ].map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <p>
                  You may modify your cookie preferences through your browser
                  settings.
                </p>

                <h2>2. How We Use Your Information</h2>

                <p>
                  We use the information we collect for the following purposes:
                </p>
                <ul>
                  {[
                    "To provide, operate, and maintain our services",
                    "To respond to inquiries or customer service requests",
                    "To personalize your user experience",
                    "To send newsletters, updates, or marketing communications (with your consent)",
                    "To analyze and improve the performance of our website",
                    "To comply with legal obligations",
                    "To detect and prevent fraud, abuse, or security threats",
                  ].map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>

                <h2>3. Sharing Your Information</h2>
                <p>
                  We do <span className="fw-600">not sell</span> your personal
                  information. We may share your data under the following
                  circumstances:
                </p>

                <ul>
                  {[
                    {
                      boldTextt: "With service providers",
                      description:
                        "who perform services on our behalf (e.g., hosting, email marketing), under confidentiality agreements",
                    },
                    {
                      boldTextt: "When legally required,",
                      description:
                        "such as in response to subpoenas, court orders, or legal processes",
                    },
                    {
                      boldTextt: "To protect the rights,",
                      description:
                        "property, or safety of California Web Coders, our users, or the public",
                    },
                    {
                      boldTextt: "During business transfers,",
                      description:
                        "such as a merger, acquisition, or sale of assets, where your data may be part of the transferred assets",
                    },
                  ].map((item, i) => (
                    <li key={i}>
                      <span className="fw-bold">{item.boldTextt}</span>{" "}
                      {item.description}
                    </li>
                  ))}
                </ul>

                <h2>4. Data Security</h2>
                <p>
                  We take appropriate administrative, technical, and physical
                  security measures to protect your information, including:
                </p>
                <ul>
                  {[
                    "Secure servers and encryption protocols",
                    "Restricted access to personal information",
                    "Regular security audits and updates",
                  ].map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <p>
                  However, no method of transmission over the Internet is 100%
                  secure. While we strive to protect your data, we cannot
                  guarantee absolute security.
                </p>

                <h2>5. Your Privacy Rights</h2>
                <p>
                  Depending on your jurisdiction, especially if you are a
                  California resident, you may have the following rights:
                </p>

                <ul>
                  {[
                    {
                      boldTextt: "Right to access:",
                      description:
                        "Request details on the personal information we have collected about you.",
                    },
                    {
                      boldTextt: "Right to correction:",
                      description:
                        "Request updates or corrections to inaccurate data.",
                    },
                    {
                      boldTextt: "Right to deletion:",
                      description:
                        "Request deletion of your personal data, subject to certain exceptions.",
                    },
                    {
                      boldTextt: "Right to opt-out:",
                      description:
                        "Request not to receive marketing emails or to stop the sale of personal data (although we do not sell personal data).",
                    },
                    {
                      boldTextt: "Right to non-discrimination:",
                      description:
                        "You will not be discriminated against for exercising your privacy rights.",
                    },
                  ].map((item, i) => (
                    <li key={i}>
                      <span className="fw-bold">{item.boldTextt}</span>{" "}
                      {item.description}
                    </li>
                  ))}
                </ul>
                <p>
                  To exercise any of these rights, please contact us at the
                  details provided at the end of the page.
                </p>
                <h2>6. Third-Party Links</h2>
                <p>
                  Our website may contain links to third-party websites or
                  services not operated by us. We are not responsible for the
                  privacy practices of these external sites and encourage you to
                  review their policies independently.
                </p>

                <h2>7. Children’s Privacy</h2>
                <p>
                  Our services are not intended for individuals under the age of
                  13. We do not knowingly collect personal information from
                  children. If we learn that we have collected such information,
                  we will delete it promptly.
                </p>

                <h2>8. Changes to This Privacy Policy</h2>
                <p>
                  We may revise this Privacy Policy from time to time. When we
                  do, we will update the “Effective Date” above. We encourage
                  you to review this policy regularly to stay informed about how
                  we are protecting your data.
                </p>

                <h2>9. Contact Us</h2>
                <p>
                  If you have any questions or concerns about this Privacy
                  Policy or wish to exercise your rights, please contact us at:
                </p>
                {/* ================================== */}
              </div>
            </div>
            <div className="col-md-12">
              <div className="privacy-policy-content mb-0">
                <h3>California Web Coders</h3>
                <p className="mb-0">
                  <span className="fw-bold">Phone: </span>{" "}
                  <a href="tel:+12818458498">+1 (281) 845-8498</a>
                </p>
                <p className="mb-0">
                  <span className="fw-bold">Email: </span>{" "}
                  <a href="mailto:info@californiabookpublishers.com">
                    info@californiabookpublishers.com
                  </a>
                </p>
                <p className="mb-0">
                  <span className="fw-bold">Website: </span>{" "}
                  <a
                    href="https://www.californiawebcoders.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.californiawebcoders.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPolicy;
