import React from "react";
import { Link } from "react-router-dom";

const TopNav = ({ companyDetails }) => (
  <div className="w3layouts-header">
    <div className="container">
      <div className="logo-nav-agileits">
        <div className="logo-nav-left">
          <h1>
            <Link to="/">
              <span className="fa fa-home" />
              {companyDetails.name}
              <span className="logo-title">home services</span>
            </Link>
          </h1>
        </div>
        <div className="header-grid-left-wthree">
          <div className="h3-title">
            <h3>contact us</h3>
            <br />
            <ul>
              <li>
                <h2>
                  <span className="fa fa-phone" aria-hidden="true" />
                  {companyDetails.phone}
                </h2>
              </li>
            </ul>
          </div>
          <div className="clearfix"> </div>
        </div>
        <div className="clearfix"> </div>
      </div>
    </div>
  </div>
);

export default TopNav;
