import React from "react";

const WhyUs = ({ whyUs: { right, left } }) => {
  const WhyLeft = () => (
    <div className="col-md-4 about-left">
      <div className="about-main-bg text-center">
        <h4 className="about-title">{left.heading}</h4>
        <h4 className="sub">{left.subHeading}</h4>
      </div>
    </div>
  );

  const WhyRight = () => (
    <div className="col-md-8 about-bottom-g1">
      <h4>One Stop Solution for your Complete Home Maintenance</h4>
      <div className="about-grid">
        {right.list.map((item, i) => (
          <div key={i} className="about-bottom-right">
            <div className="abouthome-grid">
              <span className={`hi-icon hi-icon-archive ${item.icon}`}> </span>
            </div>
            <div className="about-bottom">
              <h5>{item.heading}</h5>
              <p>{item.text}</p>
            </div>
            <div className="clearfix"> </div>
          </div>
        ))}
      </div>
      <div className="abt-img">
        <img
          src={right.image.src}
          alt={right.image.alt}
          className="img-responsive"
        />
      </div>
      <div className="clearfix" />
    </div>
  );
  return (
    <div className="agile-about-main">
      <WhyLeft />
      <WhyRight />
      <div className="clearfix" />
    </div>
  );
};

export default WhyUs;
