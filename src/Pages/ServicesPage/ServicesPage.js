import React from "react";
import Banner from "../../component/banner/banner";
import Hero from "../../component/Hero/Hero";

const ServicesPage = ({ data }) => {
  return (
    <React.Fragment>
      <Hero hero={data.hero} />
      {/* hardcoded breadcomb */}
      <div className="breadcrumbs-w3l">
        <div className="container">
          <span className="breadcrumbs">
            <a href="index.html">Home</a> |<span> Services</span>
          </span>
        </div>
      </div>
      {/* services section  */}
      <div className="services w3ls-section">
        <div className="container">
          <h4 className="main-title">{data.heading}</h4>
          <div className="services-main">
            <div className="col-md-4 serv-grid1">
              <h4 className="sub1">{data.subHeading}</h4>
            </div>
            <div className="clearfix"> </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ServicesPage;
