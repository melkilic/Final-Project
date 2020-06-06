import React, {useState, useEffect} from 'react';
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import {BrowserRouter, Route} from 'react-router-dom'
import ReactMap from './ReactMap'
import ShowState from './ShowState'
import Navbar from './Navbar'
import Signup from './Signup'
import {Login} from './Login'
import UsDaily from './UsDaily';

function App() {
  
  return (
    
    <div>
      <Navbar/>
      <BrowserRouter>
      <Route exact path={"/"} component={ReactMap}/>
      <Route exact path={"/show"} component={ShowState}/>
      <Route exact path={"/signup"} component={Signup}/>
      <Route exact path={"/login"} component={Login}/>
      <Route exact path={"/daily"} component={UsDaily}/>
      </BrowserRouter>
    </div>
  );
}

export default App;