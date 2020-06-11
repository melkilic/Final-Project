/** @format */

import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { BrowserRouter, Route } from "react-router-dom";
import ReactMap from "./ReactMap";
import ShowState from "./ShowState";
import Navbar from "./Navbar";
import Signup from "./Signup";
import PickOne  from "./Login";
import UsDaily from "./UsDaily";
import UsCurrent from "./UsCurrent";
import About from "./About";
import Counties from "./Counties"
import "./App.css";
import "./App.scss";
import './about.css'
import Form from './Form'
class App extends React.Component {


  render() {
   

    return (
     
<div>
        <BrowserRouter>
          {/* <Navbar/> */}
          
          <Route exact path={"/current"} component={UsCurrent} />
          <Route exact path={"/home"} component={ReactMap} />
          <Route exact path={"/show"} component={ShowState} />
          <Route exact path={"/daily"} component={UsDaily} />
          <Route exact path={"/about"} component={About} />
          <Route exact path={"/"} component={Form}/>
        </BrowserRouter>
       

    

      </div>
    );
  }
}

export default App;
