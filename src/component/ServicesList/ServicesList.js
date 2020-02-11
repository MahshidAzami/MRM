import React from "react";
import { Link } from "react-router-dom";

const ServicesList = ({ services }) => (
  <div className="container marketing mt-5">
    <h1 className="text-center m-4">{services.heading}</h1>
    <div className="d-flex flex-wrap">
      {services.category.map((service, i) => (
        <div key={i} className="col-6 col-xl-4  px-0 mb-4 d-flex">
          <div className="card mx-2">
            <Link to={`/services/${service.link}`}>
              <img
                className="card-img-top height-inherit"
                src={service.image.src}
                alt={service.image.alt}
              />
              <div className="card-body text-center">
                <h5 className="d-none card-title d-sm-inline">
                  {service.name}
                </h5>
                <p className="card-title d-sm-none">{service.name}</p>
              </div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default ServicesList;
