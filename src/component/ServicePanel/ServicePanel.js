import React from "react";
import { Link } from "react-router-dom";

const ServicePanel = props => {
  const { firstCol, secondCol } = props.servicePanel;
  return (
    <div className="col-md-8 banner-btm-grid2">
      {Panel(firstCol)}
      {Panel(secondCol)}
    </div>
  );
};

const Panel = array => (
  <div className="col-md-4 banner-grid2">
    {array.map((item, i) => (
      <div key={i} className="banner-subg1">
        <h3>{item.heading}</h3>
        <p>{item.text}</p>
        <span className={item.icon} aria-hidden="true"></span>
        <div className="read-btn">
          <Link to={item.link}>view more</Link>
        </div>
      </div>
    ))}
  </div>
);

export default ServicePanel;
