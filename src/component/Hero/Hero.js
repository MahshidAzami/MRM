import React from "react";

const Hero = ({ hero }) => {
  const { heading, subHeading } = hero;
  return (
    <div class="banner-bg2">
      <div class="banner-info bg3 inner">
        <h3>{heading}</h3>
        <p>{subHeading}</p>
      </div>
    </div>
  );
};
export default Hero;
