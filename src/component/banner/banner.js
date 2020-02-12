import React from "react";

const Banner = ({ banner }) => (
  <div id="JiSlider" className="jislider">
    <ul>
      {banner.map((b, i) => (
        <li key={i}>
          <div className={`banner-top banner-top${i + 1}`}>
            <div className="container">
              <div className="banner-info info2">
                <h3>{b.heading}</h3>
                <p>{b.text}</p>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export default Banner;
