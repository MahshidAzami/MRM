import React from "react";
import { Redirect } from "react-router-dom";
import ServicesList from "../../component/ServicesList/ServicesList";
import Banner from "../../component/banner/banner";
import BannerForm from "../../component/BannerForm/BannerForm";
import ServicePanel from "../../component/ServicePanel/ServicePanel";
import WhyUs from "../../component/WhyUs/WhyUs";

const LandingPage = ({ data }) => {
  const {
    landingPage: { banner, bannerForm, servicePanel, whyUs },
    servicesSection
  } = data;

  return (
    <div className="banner-silder">
      <Banner banner={banner} />
      <div className="banner-btm">
        <div className="container">
          <div className="banner-bottom-main">
            <BannerForm bannerForm={bannerForm} />
            <ServicePanel servicePanel={servicePanel} />
            <div className="clearfix"></div>
          </div>
        </div>
      </div>
      <WhyUs whyUs={whyUs} />
    </div>
  );
};

export default LandingPage;
