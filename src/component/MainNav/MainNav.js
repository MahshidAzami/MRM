import React, { Component } from "react";
import { Link } from "react-router-dom";
import DropDown from "./DropDown/DropDown";

// import "./MainNav.css";
// import DropDown from "./DropDown/DropDown";

class MainNavigation extends Component {
  constructor(props) {
    super(props);
  }

  offcanvassHandler = () => {
    document.getElementById("navbarsExampleDefault").classList.toggle("open");
  };

  render() {
    const { navbarItems } = this.props;
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">
            Expand at lg
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarsExample05"
            aria-controls="navbarsExample05"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarsExample05">
            <ul className="navbar-nav mr-auto">
              {navbarItems.map(item =>
                item.subMenu ? (
                  <DropDown item={item} />
                ) : (
                  <li className="nav-item active">
                    <Link className="nav-link" to={item.link}>
                      {item.name}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default MainNavigation;
