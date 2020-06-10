/** @format */

import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { BrowserRouter, Route } from "react-router-dom";
import ReactMap from "./ReactMap";
import ShowState from "./ShowState";
import Navbar from "./Navbar";
import Signup from "./Signup";
import { Login } from "./Login";
import UsDaily from "./UsDaily";
import UsCurrent from "./UsCurrent";
import About from "./About";
import Profile from "./Profile";
import "./App.css";
import "./App.scss";

class App extends React.Component {
  state = {
    isLogginActive: true,
  };

  componentDidMount() {
    //Add .right by default
    this.rightSide.classList.add("right");
  }

  changeState() {
    const { isLogginActive } = this.state;

    if (isLogginActive) {
      this.rightSide.classList.remove("right");
      this.rightSide.classList.add("left");
    } else {
      this.rightSide.classList.remove("left");
      this.rightSide.classList.add("right");
    }
    this.setState((prevState) => ({
      isLogginActive: !prevState.isLogginActive,
    }));
  }

  render() {
    const { isLogginActive } = this.state;
    const current = isLogginActive ? "Sign Up" : "Login";
    const currentActive = isLogginActive ? "Login" : "Sign Up";

    return (
      <div className="App">
        <div className="login">
          <div className="container" ref={(ref) => (this.container = ref)}>
            {isLogginActive && (
              <Login containerRef={(ref) => (this.current = ref)} />
            )}
            {!isLogginActive && (
              <Signup containerRef={(ref) => (this.current = ref)} />
            )}
          </div>
          <RightSide
            current={current}
            currentActive={currentActive}
            containerRef={(ref) => (this.rightSide = ref)}
            onClick={this.changeState.bind(this)}
          />
        </div>

        <BrowserRouter>
         {/* <Navbar/> */}
          <Route exact path={"/current"} component={UsCurrent} />
          <Route exact path={"/home"} component={ReactMap} />
          <Route exact path={"/show"} component={ShowState} />
          <Route exact path={"/daily"} component={UsDaily} />
          <Route exact path={"/about"} component={About} />
          <Route exact path={"/profile"} component={Profile} />
        </BrowserRouter>
       

        {/* <Route exact path={"/signup"} component={Signup}/> */}
        {/* <Route exact path={"/"} component={Login}/> */}
      </div>
    );
  }
}
const RightSide = (props) => {
  return (
    <div
      className="right-side"
      ref={props.containerRef}
      onClick={props.onClick}
    >
      <div className="inner-container">
        <div className="text">{props.current}</div>
      </div>
    </div>
  );
};

export default App;
