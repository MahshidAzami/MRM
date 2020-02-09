import React from "react";
import { NavLink } from "react-router-dom";

const DropDown = props => {
  const { nav } = props;
  const navItems = props.nav.subMenu.map((item, i) => {
    return (
      <NavLink key={i} to={nav.link + "/" + item} className="dropdown-item">
        {item}
      </NavLink>
    );
  });
  return (
    <li className="nav-item dropdown mx-5">
      <NavLink
        className="nav-link dropdown-toggle"
        id="dropdown01"
        to={nav.link}
      >
        {nav.name}
      </NavLink>

      <div
        className="dropdown-menu dropdown-content m-0 p-0"
        // onClick={props.clickHandler}
      >
        <div className="dropdown__column">{navItems}</div>
      </div>
    </li>
  );
};

export default DropDown;
