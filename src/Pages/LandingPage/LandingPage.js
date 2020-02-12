import React from "react";
import { Redirect } from "react-router-dom";
import ServicesList from "../../component/ServicesList/ServicesList";
import Banner from "../../component/banner/banner";
import BannerForm from "../../component/BannerForm/BannerForm";
import ServicePanel from "../../component/ServicePanel/ServicePanel";

const LandingPage = ({ data }) => {
  const { landingPage, servicesSection } = data;

  return (
    <div className="banner-silder">
      <Banner banner={landingPage.banner} />
      <div className="banner-btm">
        <div className="container">
          <div className="banner-bottom-main">
            <BannerForm bannerForm={landingPage.bannerForm} />
            <ServicePanel servicePanel={landingPage.servicePanel} />
            <div className="clearfix"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
