import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./MainNav.css";
import DropDown from "./DropDown/DropDown";

class MainNavigation extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   rooflights: null,
    //   windows: null,
    //   doors: null,
    //   otherProducts: null,
    //   isLoading: true
    // };
  }

  componentDidMount() {
    console.log(this.props);
  }
  offcanvassHandler = () => {
    document.getElementById("navbarsExampleDefault").classList.toggle("open");
  };

  render() {
    const { navbarItems } = this.props;
    return (
      <nav className="navbar navbar-expand-lg bg-black fixed-top" id="navbar">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img
              src="/xray-logo.jpg"
              alt="MVM Maintenance"
              className="brand"
              id="logo"
            />
          </Link>

          <button
            id="offcanvas"
            className="navbar-toggler navbar-dark"
            type="button"
            data-toggle="offcanvas"
            onClick={this.offcanvassHandler}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="navbar-collapse offcanvas-collapse"
            id="navbarsExampleDefault"
          >
            <ul className="navbar-nav mr-auto container justify-content-end">
              {navbarItems.map((nav, i) => (
                <React.Fragment key={i}>
                  {nav.subMenu ? (
                    <DropDown nav={nav} clickHandler={this.offcanvassHandler} />
                  ) : (
                    <li
                      key={i}
                      className="nav-item mx-5"
                      onClick={this.offcanvassHandler}
                    >
                      <Link className="nav-link" to={nav.link}>
                        {nav.name}
                      </Link>
                    </li>
                  )}
                </React.Fragment>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default MainNavigation;
