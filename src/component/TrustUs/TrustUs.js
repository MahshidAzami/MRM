import React from "react";
import { Link } from "react-router-dom";

const TrustUs = ({ trustUs }) => (
  <div className="w3ls-section">
    <div className="container">
      <div className="main-bottom">
        <div className="col-md-6 col-sm-6 mb-left"></div>
        <div className="col-md-6 col-sm-6 mb-right">
          <h4>{trustUs.heading}</h4>
          <p>{trustUs.subHeading}</p>
          <Link to={trustUs.link}>view all services</Link>
        </div>
      </div>
    </div>
  </div>
);

export default TrustUs;
