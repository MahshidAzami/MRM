import React from "react";

const BannerForm = ({ bannerForm }) => (
  <div className="col-md-4 banner-btmg1">
    <div className="form-text">
      <h3>{bannerForm.heading}</h3>
      <p>{bannerForm.subHeading}</p>
      <img src={bannerForm.image.src} alt={bannerForm.image.alt} />
    </div>
    <form action="#" method="post" className="banner_form">
      {bannerForm.form.inputs.map((input, i) => (
        <div key={i} className="sec-left">
          <label className="contact-form-text">{input.name}</label>
          <input
            placeholder={input.placeholder}
            name={input.name}
            type={input.type}
            required
          />
        </div>
      ))}
      <div className="form-select sec-right">
        <label className="contact-form-text">Select Service</label>
        <select>
          {bannerForm.form.services.map((service, i) => (
            <option key={i} value={i}>
              {service}
            </option>
          ))}
        </select>
      </div>
      <input type="submit" defaultValue="Submit" />
    </form>
  </div>
);

export default BannerForm;
