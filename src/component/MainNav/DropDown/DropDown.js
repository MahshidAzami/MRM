import React from "react";
import { NavLink } from "react-router-dom";

const DropDown = props => {
  const navItems = props.item.subMenu.map((item, i) => {
    return (
      <NavLink key={i} to={"/@" + item} className="dropdown-item">
        {item}
      </NavLink>
    );
  });
  return (
    <li className="nav-item dropdown">
      <NavLink
        className="nav-link dropdown-toggle"
        id="dropdown01"
        to={props.item.link}
      >
        {props.item.name}
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
