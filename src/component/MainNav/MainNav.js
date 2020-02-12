import React, { Component } from "react";
import { Link } from "react-router-dom";
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
  offcanvassHandler = () => {
    document.getElementById("bs-megadropdown-tabs").classList.toggle("open");
  };
  render() {
    const { navbarItems } = this.props;
    return (
      <div className="w3layouts-header">
        <div className="container">
          <div className="clearfix"> </div>
          <div className="logo-nav-left1">
            <nav className="navbar navbar-default">
              <div className="navbar-header">
                <button
                  type="button"
                  className="navbar-toggle collapsed navbar-toggle1"
                  data-toggle="collapse"
                  data-target="#bs-megadropdown-tabs"
                >
                  Menu
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
              </div>
              <div
                className="collapse navbar-collapse"
                id="bs-megadropdown-tabs"
              >
                <ul className="nav navbar-nav">
                  {navbarItems.map((nav, i) => (
                    <React.Fragment key={i}>
                      {nav.subMenu ? (
                        <DropDown
                          nav={nav}
                          clickHandler={this.offcanvassHandler}
                        />
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
                  <li className="s-bar">
                    <div className="search-w3_agileits">
                      <input
                        className="search_box"
                        type="checkbox"
                        id="search_box"
                      />
                      <label className="icon-search" htmlFor="search_box">
                        <span className="fa fa-search" aria-hidden="true" />
                      </label>
                      <div className="search_form">
                        <form action="#" method="post">
                          <input type="search" name="Search" placeholder=" " />
                          <input type="submit" defaultValue="Search" />
                        </form>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <div className="clearfix"> </div>
        </div>
      </div>
    );
  }
}

export default MainNavigation;
