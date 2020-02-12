import React from "react";
import { Redirect } from "react-router-dom";
import ServicesList from "../../component/ServicesList/ServicesList";

const LandingPage = ({ data }) => {
  const { landingPage, servicesSection } = data;
  return (
    <div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          {/* <img
            className="d-block w-100 banner"
            src={landingPage.banner.src}
            alt={landingPage.banner.alt}
          /> */}
        </div>
        <div className="container hero-text">
          <h1 className="text-center m-5"> {landingPage.heroText}</h1>
        </div>
      </div>
      <ServicesList services={servicesSection} />
    </div>
  );
};

export default LandingPage;
