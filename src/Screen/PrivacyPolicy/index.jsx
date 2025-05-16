import React from "react";
import Layout from "../../components/layout";
import HeroSection from "../../components/Herosection";
import bannerBgImage from "../../Assets/privacyPolicy-banner-bg.png";
import Pricingplanheroimg from "../../Assets/Pricingplanheroimg.png";

// export const privacyPolicySections = [
//   {
//     id: 1,
//     title: "Terms & Conditions",
//     paragraphs: [
//       "At California Web Coders, we hold the privacy of our clients in the highest regard on nywebexperts.com. We treat their information with the same care as our own. While we do gather information from our clients, its purpose is solely to enhance our customer services. We acknowledge our responsibility to maintain and utilize our clients’ information appropriately. We want to assure you that we never rent or sell the information provided by our clients online.",
//       "This policy outlines how we collect, use, and safeguard personal information obtained from our clients. It also describes the options available to you regarding the collection and use of your information.",
//     ],
//   },
//   {
//     id: 2,
//     title: "Collection of Personal Information",
//     paragraphs: [
//       "We collect details such as the client’s name, email, mailing address, and phone number. These pieces of information are provided by the client during the ordering process or when saving their information with us. Additionally, email addresses and mailing addresses obtained through forms like our Contact Us Form might be used to respond to comments and queries.",
//       "We also maintain records of past items that interested our clients and their online purchases.",
//     ],
//   },
//   {
//     id: 3,
//     title: "Use of Collected Data",
//     paragraphs: [
//       "The information we gather serves various purposes. It's used to process client orders, and we send confirmation emails for these orders. Our customer services may contact clients by phone, mailing address, or email for any inquiries related to their orders.",
//       "Clients might receive updates about our site and services, including newsletters and promotional information. Moreover, the information about clients’ interests and purchases helps us enhance our website design and improve the overall purchasing experience.",
//     ],
//   },
//   {
//     id: 4,
//     title: "Newsletter Opt-out",
//     paragraphs: [
//       "If you no longer wish to receive our newsletters and promotional communications, you can opt out by following the instructions provided in each communication. Alternatively, you can contact us via email at support@californiawebcoders.com or call us at +1 619-798-9688",
//     ],
//   },
//   {
//     id: 5,
//     title: "Social Media and Widgets",
//     paragraphs: [
//       "Our website includes Social Media Features and Widgets, such as the Facebook Like button. These features may collect your IP address and page visits for proper functionality. Interactions with these features are subject to the privacy policies of the respective companies.",
//     ],
//   },
//   {
//     id: 6,
//     title: "Third-Party Sharing",
//     paragraphs: [
//       "We do not share personal information with third parties unless described in this policy. We never sell personal information to third parties. We use trusted companies for services like credit card processing and live customer support chat.",
//     ],
//   },
//   {
//     id: 7,
//     title: "Security of Personal Information",
//     paragraphs: [
//       "We prioritize the security of client information. We use Secure Sockets Layer (SSL) Software for encryption during transmission. While we strive for industry-standard security measures, no method of online data transmission is entirely foolproof.",
//     ],
//   },
//   {
//     id: 8,
//     title: "Access to Registered Accounts",
//     paragraphs: [
//       "Clients can access their registered accounts by signing in on our homepage. This provides access to previous lists and submitted information. Users can update their information through the “My Account” section.",
//     ],
//   },
//   {
//     id: 9,
//     title: "Changing & Deleting Accounts",
//     paragraphs: [
//       "Clients can request account cancellation or personal information deletion by emailing us. This will stop further email communication related to online orders.",
//     ],
//   },
//   {
//     id: 10,
//     title: "Cookies and Clear Gifs",
//     paragraphs: [
//       "Cookies, or alphanumeric identifiers, are used to enhance the user experience. Clear gifs help manage site content effectively. We maintain IP address logs for site diagnostics and broad demographic data, without tying it to personally identifiable information.",
//     ],
//   },
//   {
//     id: 11,
//     title: "Testimonials",
//     paragraphs: [
//       "With consent, we may post testimonials along with names. Removal requests are honored.",
//     ],
//   },
//   {
//     id: 12,
//     title: "Links to Other Websites",
//     paragraphs: [
//       "Linked websites have different privacy practices. Personal information submitted to those sites is governed by their privacy statements.",
//     ],
//   },
//   {
//     id: 13,
//     title: "Changes to Privacy Policy",
//     paragraphs: [
//       "We may modify this policy and will communicate changes through various means. Review this policy periodically for updates.",
//     ],
//   },
// ];

// export const privacyPolicySections = [
//   {
//     id: 1,
//     paragraphs: [
//       "At California Web Coders, we value your privacy and are fully committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, store, and disclose your information when you interact with our website and services. It also outlines your rights and choices under applicable United States privacy laws, including the California Consumer Privacy Act (CCPA), where applicable.",
//     ],
//   },
//   {
//     id: 2,
//     title: "1. Information We Collect",
//     beforeSubtitle: [
//       "We may collect the following categories of information:"
//     ],
//     subTite: "a. Personal Information",
//     paragraphs: [
//       "When you voluntarily provide it through our website, contact forms, or services, we may collect:",
//     ],
//     list: [
//       "Full name",
//       "Email address",
//       "Phone number",
//       "Company name",
//       "Mailing or billing address",
//       "Any other details you choose to provide",
//     ]
//   },
//   {
//     id: 3,
//     title: "Use of Collected Data",
//     paragraphs: [
//       "The information we gather serves various purposes. It's used to process client orders, and we send confirmation emails for these orders. Our customer services may contact clients by phone, mailing address, or email for any inquiries related to their orders.",
//       "Clients might receive updates about our site and services, including newsletters and promotional information. Moreover, the information about clients’ interests and purchases helps us enhance our website design and improve the overall purchasing experience.",
//     ],
//   },
//   {
//     id: 4,
//     title: "Newsletter Opt-out",
//     paragraphs: [
//       "If you no longer wish to receive our newsletters and promotional communications, you can opt out by following the instructions provided in each communication. Alternatively, you can contact us via email at support@californiawebcoders.com or call us at +1 619-798-9688",
//     ],
//   },
//   {
//     id: 5,
//     title: "Social Media and Widgets",
//     paragraphs: [
//       "Our website includes Social Media Features and Widgets, such as the Facebook Like button. These features may collect your IP address and page visits for proper functionality. Interactions with these features are subject to the privacy policies of the respective companies.",
//     ],
//   },
//   {
//     id: 6,
//     title: "Third-Party Sharing",
//     paragraphs: [
//       "We do not share personal information with third parties unless described in this policy. We never sell personal information to third parties. We use trusted companies for services like credit card processing and live customer support chat.",
//     ],
//   },
//   {
//     id: 7,
//     title: "Security of Personal Information",
//     paragraphs: [
//       "We prioritize the security of client information. We use Secure Sockets Layer (SSL) Software for encryption during transmission. While we strive for industry-standard security measures, no method of online data transmission is entirely foolproof.",
//     ],
//   },
//   {
//     id: 8,
//     title: "Access to Registered Accounts",
//     paragraphs: [
//       "Clients can access their registered accounts by signing in on our homepage. This provides access to previous lists and submitted information. Users can update their information through the “My Account” section.",
//     ],
//   },
//   {
//     id: 9,
//     title: "Changing & Deleting Accounts",
//     paragraphs: [
//       "Clients can request account cancellation or personal information deletion by emailing us. This will stop further email communication related to online orders.",
//     ],
//   },
//   {
//     id: 10,
//     title: "Cookies and Clear Gifs",
//     paragraphs: [
//       "Cookies, or alphanumeric identifiers, are used to enhance the user experience. Clear gifs help manage site content effectively. We maintain IP address logs for site diagnostics and broad demographic data, without tying it to personally identifiable information.",
//     ],
//   },
//   {
//     id: 11,
//     title: "Testimonials",
//     paragraphs: [
//       "With consent, we may post testimonials along with names. Removal requests are honored.",
//     ],
//   },
//   {
//     id: 12,
//     title: "Links to Other Websites",
//     paragraphs: [
//       "Linked websites have different privacy practices. Personal information submitted to those sites is governed by their privacy statements.",
//     ],
//   },
//   {
//     id: 13,
//     title: "Changes to Privacy Policy",
//     paragraphs: [
//       "We may modify this policy and will communicate changes through various means. Review this policy periodically for updates.",
//     ],
//   },
// ];

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
                <p
                  data-aos="fade-right"
                  data-aos-duration="2000"
                  data-aos-offset="0"
                >
                  At California Web Coders, we value your privacy and are fully
                  committed to protecting the personal information you share
                  with us. This Privacy Policy explains how we collect, use,
                  store, and disclose your information when you interact with
                  our website and services. It also outlines your rights and
                  choices under applicable United States privacy laws, including
                  the California Consumer Privacy Act (CCPA), where applicable.
                </p>
                <h2
                  data-aos="fade-right"
                  data-aos-duration="2000"
                  data-aos-offset="0"
                >
                  1. Information We Collect
                </h2>
                <p
                  data-aos="fade-right"
                  data-aos-duration="2000"
                  data-aos-offset="0"
                >
                  When you voluntarily provide it through our website, contact
                  forms, or services, we may collect:
                </p>
                <h3
                  data-aos="fade-right"
                  data-aos-duration="2000"
                  data-aos-offset="0"
                >
                  a. Personal Information
                </h3>
                <ul
                  data-aos="fade-right"
                  data-aos-duration="2000"
                  data-aos-offset="0"
                >
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
                <h3
                  data-aos="fade-right"
                  data-aos-duration="2000"
                  data-aos-offset="0"
                >
                  b. Usage Data
                </h3>

                <p
                  data-aos="fade-right"
                  data-aos-duration="2000"
                  data-aos-offset="0"
                >
                  Collected automatically when you interact with our website,
                  including:
                </p>
                <ul
                  data-aos="fade-right"
                  data-aos-duration="2000"
                  data-aos-offset="0"
                >
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

                <h3
                  data-aos="fade-right"
                  data-aos-duration="2000"
                  data-aos-offset="0"
                >
                  c. Cookies and Tracking Technologies
                </h3>

                <p
                  data-aos="fade-right"
                  data-aos-duration="2000"
                  data-aos-offset="0"
                >
                  We use cookies, web beacons, pixels, and similar technologies
                  to:
                </p>
                <ul
                  data-aos="fade-right"
                  data-aos-duration="2000"
                  data-aos-offset="0"
                >
                  {[
                    "Enhance user experience",
                    "Analyze site traffic",
                    "Remember user preferences",
                    "Serve targeted advertisements (with your consent, where applicable)",
                  ].map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <p
                  data-aos="fade-right"
                  data-aos-duration="2000"
                  data-aos-offset="0"
                >
                  You may modify your cookie preferences through your browser
                  settings.
                </p>

                <h3
                  data-aos="fade-right"
                  data-aos-duration="2000"
                  data-aos-offset="0"
                >
                  2. How We Use Your Information
                </h3>

                <p
                  data-aos="fade-right"
                  data-aos-duration="2000"
                  data-aos-offset="0"
                >
                  We use the information we collect for the following purposes:
                </p>
                <ul
                  data-aos="fade-right"
                  data-aos-duration="2000"
                  data-aos-offset="0"
                >
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

                <h2
                  data-aos="fade-right"
                  data-aos-duration="2000"
                  data-aos-offset="0"
                >
                  3. Sharing Your Information
                </h2>
                <p
                  data-aos="fade-right"
                  data-aos-duration="2000"
                  data-aos-offset="0"
                >
                  We do not sell your personal information. We may share your
                  data under the following circumstances:
                </p>

                <ul
                  data-aos="fade-right"
                  data-aos-duration="2000"
                  data-aos-offset="0"
                >
                  {[
                    "With service providers who perform services on our behalf (e.g., hosting, email marketing), under confidentiality agreements",
                    "When legally required, such as in response to subpoenas, court orders, or legal processes",
                    "To protect the rights, property, or safety of California Web Coders, our users, or the public",
                    "During business transfers, such as a merger, acquisition, or sale of assets, where your data may be part of the transferred assets",
                  ].map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>

                <h2
                  data-aos="fade-right"
                  data-aos-duration="2000"
                  data-aos-offset="0"
                >
                  4. Data Security
                </h2>
                <p
                  data-aos="fade-right"
                  data-aos-duration="2000"
                  data-aos-offset="0"
                >
                  We take appropriate administrative, technical, and physical
                  security measures to protect your information, including:
                </p>
                <ul
                  data-aos="fade-right"
                  data-aos-duration="2000"
                  data-aos-offset="0"
                >
                  {[
                    "Secure servers and encryption protocols",
                    "Restricted access to personal information",
                    "Regular security audits and updates",
                  ].map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <p
                  data-aos="fade-right"
                  data-aos-duration="2000"
                  data-aos-offset="0"
                >
                  However, no method of transmission over the Internet is 100%
                  secure. While we strive to protect your data, we cannot
                  guarantee absolute security.
                </p>

                <h2
                  data-aos="fade-right"
                  data-aos-duration="2000"
                  data-aos-offset="0"
                >
                  5. Your Privacy Rights
                </h2>
                <p
                  data-aos="fade-right"
                  data-aos-duration="2000"
                  data-aos-offset="0"
                >
                  Depending on your jurisdiction, especially if you are a
                  California resident, you may have the following rights:
                </p>

                <ul
                  data-aos="fade-right"
                  data-aos-duration="2000"
                  data-aos-offset="0"
                >
                  {[
                    "Right to access: Request details on the personal information we have collected about you.",
                    "Right to correction: Request updates or corrections to inaccurate data.",
                    "Right to deletion: Request deletion of your personal data, subject to certain exceptions.",
                    "Right to opt-out: Request not to receive marketing emails or to stop the sale of personal data (although we do not sell personal data).",
                    "Right to non-discrimination: You will not be discriminated against for exercising your privacy rights.",
                  ].map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <p
                  data-aos="fade-right"
                  data-aos-duration="2000"
                  data-aos-offset="0"
                >
                  To exercise any of these rights, please contact us at the
                  details provided at the end of the page.
                </p>
                <h2
                  data-aos="fade-right"
                  data-aos-duration="2000"
                  data-aos-offset="0"
                >
                  6. Third-Party Links
                </h2>
                <p
                  data-aos="fade-right"
                  data-aos-duration="2000"
                  data-aos-offset="0"
                >
                  Our website may contain links to third-party websites or
                  services not operated by us. We are not responsible for the
                  privacy practices of these external sites and encourage you to
                  review their policies independently.
                </p>

                <h3
                  data-aos="fade-right"
                  data-aos-duration="2000"
                  data-aos-offset="0"
                >
                  7. Children’s Privacy
                </h3>
                <p
                  data-aos="fade-right"
                  data-aos-duration="2000"
                  data-aos-offset="0"
                >
                  Our services are not intended for individuals under the age of
                  13. We do not knowingly collect personal information from
                  children. If we learn that we have collected such information,
                  we will delete it promptly.
                </p>

                <h3
                  data-aos="fade-right"
                  data-aos-duration="2000"
                  data-aos-offset="0"
                >
                  8. Changes to This Privacy Policy
                </h3>
                <p
                  data-aos="fade-right"
                  data-aos-duration="2000"
                  data-aos-offset="0"
                >
                  We may revise this Privacy Policy from time to time. When we
                  do, we will update the “Effective Date” above. We encourage
                  you to review this policy regularly to stay informed about how
                  we are protecting your data.
                </p>

                <h3
                  data-aos="fade-right"
                  data-aos-duration="2000"
                  data-aos-offset="0"
                >
                  9. Contact Us
                </h3>
                <p
                  data-aos="fade-right"
                  data-aos-duration="2000"
                  data-aos-offset="0"
                >
                  If you have any questions or concerns about this Privacy
                  Policy or wish to exercise your rights, please contact us at:
                </p>
                {/* ================================== */}
                <h3
                  data-aos="fade-right"
                  data-aos-duration="2000"
                  data-aos-offset="0"
                ></h3>
                <p
                  data-aos="fade-right"
                  data-aos-duration="2000"
                  data-aos-offset="0"
                ></p>
              </div>

              {/* {privacyPolicySections.map((item, index) => (
                <div className="privacy-policy-content" key={index}>
                  {section.title && (
                    <h2
                      data-aos="fade-right"
                      data-aos-duration="2000"
                      data-aos-offset="0"
                    >
                      {section.title}
                    </h2>
                  )}
                  {section.paragraphs.map((para, i) => (
                    <p
                      key={i}
                      data-aos="fade-right"
                      data-aos-duration="2000"
                      data-aos-offset="0"
                    >
                      {para}
                    </p>
                  ))}
                </div>
                
              ))} */}
            </div>
            <div className="col-md-12">
              <div className="privacy-policy-content mb-0">
                <h3
                  data-aos="fade-right"
                  data-aos-duration="2000"
                  data-aos-offset="0"
                >
                  California Web Coders
                </h3>
                <p
                  className="mb-0"
                  data-aos="fade-right"
                  data-aos-duration="2000"
                  data-aos-offset="0"
                >
                  <span className="fw-bold">Phone: </span>{" "}
                  <a href="tel:+16197989688">+1 619-798-9688</a>
                </p>
                <p
                  className="mb-0"
                  data-aos="fade-right"
                  data-aos-duration="2000"
                  data-aos-offset="0"
                >
                  <span className="fw-bold">Email: </span>{" "}
                  <a href="mailto:info@californiabookpublishers.com">
                    info@californiabookpublishers.com
                  </a>
                </p>
                <p
                  className="mb-0"
                  data-aos="fade-right"
                  data-aos-duration="2000"
                  data-aos-offset="0"
                >
                  <span className="fw-bold">Website: </span>{" "}
                  <a href="mailto:www.californiawebcoders.com">
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
