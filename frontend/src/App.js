import React, {useState, useEffect} from 'react';
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import {BrowserRouter, Route} from 'react-router-dom'
import ReactMap from './ReactMap'
import ShowState from './ShowState'


function App() {
  
  return (
    
    <div>
      <BrowserRouter>
      <Route exact path={"/"} component={ReactMap}/>
      <Route exact path={"/show"} component={ShowState}/>
      </BrowserRouter>
    </div>
  );
}

export default App;