import React, { Component } from "react";
import data from "./websiteData";
import "./App.css";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import MainNav from "./component/MainNav/MainNav";

class App extends Component {
  constructor() {
    super();
    this.state = { data };
  }
  componentDidMount() {
    console.log(this.state);
  }
  render() {
    const { navbarItems } = this.state.data;
    return (
      <div className="App">
        <BrowserRouter>
          <MainNav navbarItems={navbarItems} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
