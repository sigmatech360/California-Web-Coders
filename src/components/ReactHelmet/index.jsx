import React from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

import heroimgMobile from "../../Assets/heroimg-320.webp";
import heroimgTablet from "../../Assets/heroimg-480.webp";
import heroimgDesktop from "../../Assets/heroimg-636.webp";

const ReactHelmet = ({
  title = "California Web Coders",
  description = "This is the default description of the website.",
  keywords = "web, development, seo, react",
  baseUrl = "https://californiawebcoders.com",
  // baseUrl = "https://www.californiawebcoders.com",
}) => {
  // const location = useLocation();
  // const fullUrl = `${baseUrl}${location.pathname}`;
  // console.log("fullUrl", fullUrl)

  // another solution remove base url from default parameter and use it
  // const location = useLocation();
  // const fullUrl = `${window.location.origin}${location.pathname}`;

  // console.log("baseUrl", baseUrl);

  return (
    <Helmet>
      <link
        rel="preload"
        as="image"
        href={heroimgMobile} // Yahan Webpack hashed path automatically lagayega
        fetchpriority="high"
      />
      <link
        rel="preload"
        as="image"
        href={heroimgTablet} // Yahan Webpack hashed path automatically lagayega
        fetchpriority="high"
      />
      <link
        rel="preload"
        as="image"
        href={heroimgDesktop} // Yahan Webpack hashed path automatically lagayega
        fetchpriority="high"
      />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={baseUrl} />

      {/* Open Graph Meta */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={baseUrl} />
      <meta property="og:type" content="website" />

      {/* Twitter Meta */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};

export default ReactHelmet;
