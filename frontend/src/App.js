/** @format */

import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import ReactMap from "./ReactMap";
import ShowState from "./ShowState";
import UsDaily from "./UsDaily";
import UsCurrent from "./UsCurrent";
import About from "./About";
import Hospitals from "./Hospitals";
import "./App.css";
import "./App.scss";
import "./about.css";
import Form from "./Form";

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Route exact path={"/current"} component={UsCurrent} />
          <Route exact path={"/home"} component={ReactMap} />
          <Route exact path={"/show"} component={ShowState} />
          <Route exact path={"/daily"} component={UsDaily} />
          <Route exact path={"/hospitals"} component={Hospitals} />
          <Route exact path={"/about"} component={About} />
          <Route exact path={"/"} component={Form} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
