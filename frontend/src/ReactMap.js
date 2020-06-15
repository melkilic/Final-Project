/** @format */

import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import * as states from "./states.json";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { e0f2f1 } from "@material-ui/core/colors";
import Icon from "@material-ui/core/Icon";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { handleStateChange } from "./Action/MapAction";
import Navbar from "./Navbar";
import "./icons8-coronavirus-50.png";

function ReactMap() {
  let dispatch = useDispatch();
  let viewState = useSelector((state) => state.mapState.state);
  // console.log(viewState)
  let history = useHistory();
  let [total, setTotal] = useState({
    death: 0,
    confirmed: 0,
    recovered: 0,
  });

  useEffect(() => {
    fetch("https://covidtracking.com/api/states")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // console.log(data)
        let deathCount = 0;
        let recoveredCount = 0;
        let confirmedCount = 0;

        data.forEach((state) => {
          deathCount = state.death + deathCount;
          recoveredCount = state.recovered + recoveredCount;
          confirmedCount = state.positive + confirmedCount;
        });
        console.log(deathCount, recoveredCount, confirmedCount);
        setTotal({
          death: deathCount,
          recovered: recoveredCount,
          confirmed: confirmedCount,
        });
      });
  }, []);
  console.log(total);

  const [viewport, setViewport] = useState({
    latitude: 39.381266,
    longitude: -97.922211,
    width: "80vw",
    height: "100vh",
    frameborder: "0",
    scrolling: "no",
    marginheight: "0",
    marginwidth: "0",
    zoom: 3,
  });

  let [selectedState, setSelectedState] = useState(null);

  useEffect(() => {
    fetch("https://covidtracking.com/api/states")
      .then((response) => {
        return response.json();
      })

      .then((data) => {
        if (selectedState !== null) {
          let state = data.filter((d) => d.state === selectedState.state);

          dispatch(handleStateChange(state[0]));
          console.log(state[0]);
          //the same thing with the above code
          // dispatch({
          //     type: "CHANGE_LOCATION",
          //     currentLocation: state[0]
          // })
        }

        // data.forEach(state=>console.log(state.death, state.recovered, state.positive, state.negative))
      });
  }, [selectedState]);

  let REACT_APP_MAPBOX_TOKEN =
    "pk.eyJ1IjoibWVsa2lsaWMiLCJhIjoiY2tiZHZxNjVpMGZ6MjJ6bXVnYWZxbnEzOSJ9.IP_IrNqwNLG6yar2f9d6Qw";

  const virus = require("./icons8-coronavirus-16.png");
  return (
    <div>
      <Navbar />
      <div className="table">
        <p>Total Confirmed: {total.confirmed}</p>
        <p>Recovered Cases: {total.recovered}</p>
        <p>Total Deaths: {total.death}</p>
      </div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={REACT_APP_MAPBOX_TOKEN}
        mapStyle="mapbox://styles/melkilic/ckbdrfn9516m01iry6d8v2w0o"
        onViewportChange={(viewport) => {
          setViewport(viewport);
        }}
      >
        {states.features.map((state) => (
          <Marker key={state.id} latitude={state.lat} longitude={state.long}>
            <button
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                width: "10px",
                height: "10px",
              }}
              onMouseOver={(e) => {
                e.preventDefault();
                setSelectedState(state);
              }}
            >
              {/* <img src={virus} all=""></img> */}
              <img src="https://img.icons8.com/ios-filled/30/000000/coronavirus.png" />
            </button>

            {/* <Icon style={{ color: green[500] }} className="far fa-viruses"/> */}
          </Marker>
        ))}
        {selectedState ? (
          <Popup
            latitude={selectedState.lat}
            longitude={selectedState.long}
            onClose={() => {
              setSelectedState(null);
            }}
          >
            <div onClick={() => history.push("/show")}>
              <h2>{viewState.state}</h2>
              {viewState.positive !== null ? (
                <h4>Positive Cases: {viewState.positive}</h4>
              ) : (
                <h4>Positive Cases: No current info</h4>
              )}
              {viewState.negative !== null ? (
                <h4>Negative Cases: {viewState.negative}</h4>
              ) : (
                <h4> Negative Cases: No current info</h4>
              )}
              {viewState.death !== null ? (
                <h4>Death:{viewState.death}</h4>
              ) : (
                <h4> Death: No current info</h4>
              )}
              {viewState.recovered !== null ? (
                <h4>Recovered:{viewState.recovered}</h4>
              ) : (
                <h4> Recovered: No current info</h4>
              )}
              {viewState.lastUpdateEt !== null ? (
                <h4> Last Update: {viewState.lastUpdateEt}</h4>
              ) : (
                <h4> Last Update: No current info </h4>
              )}
            </div>
          </Popup>
        ) : null}
      </ReactMapGL>
      
    </div>
  );
}

export default ReactMap;
