import React, { Component } from "react";
import data from "./websiteData";
import "./App.css";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import MainNav from "./component/MainNav/MainNav";
import LandingPage from "./Pages/LandingPage/LandingPage";
import TopNav from "./component/TopNav/TopNav";
class App extends Component {
  constructor() {
    super();
    this.state = { data };
  }
  componentDidMount() {
    console.log(this.state);
  }
  render() {
    const { companyDetails, navbarItems } = this.state.data;
    return (
      <div className="App">
        <BrowserRouter>
          <TopNav companyDetails={companyDetails} />
          <MainNav navbarItems={navbarItems} />
          <Switch>
            <Route
              path="/"
              render={() => <LandingPage data={this.state.data} />}
              exact
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
