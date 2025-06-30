import React from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

const ReactHelmet = ({
  title = "California Web Coders",
  description = "This is the default description of the website.",
  keywords = "web, development, seo, react",
  baseUrl = "https://californiawebcoders.com",
}) => {

  
  const location = useLocation();
  const fullUrl = `${baseUrl}${location.pathname}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph Meta */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content="website" />

      {/* Twitter Meta */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};

export default ReactHelmet;
