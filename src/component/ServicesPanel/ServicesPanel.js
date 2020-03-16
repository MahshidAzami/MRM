import React from "react";
import { Link } from "react-router-dom";

const ServicesPanel = ({ category }) => {
  return (
    <div className="col-md-8 serv-grid2">
      {category.map((service, i) => (
        <div key={i} className="col-md-4 serv-sub1">
          <Link to={"services/" + service.link}>
            <img src={service.image.src} alt={service.image.alt} />
            <h5>{service.name}</h5>
          </Link>
        </div>
      ))}
      <div className="clearfix"> </div>
    </div>
  );
};

export default ServicesPanel;
