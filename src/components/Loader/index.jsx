import React from "react";

import loaderGif from "../../Assets/loader.gif";

const Loader = () => {
  return (
    <div className="loader-div">
      <img src={loaderGif} alt="Loader" />
    </div>
  );
};

export default Loader;
