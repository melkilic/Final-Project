/** @format */

import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Navbar from "./Navbar";
import { Jumbotron, Container } from "react-bootstrap";
export default function ShowState() {
  const [stateInfo, setStateInfo] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setStateInfo(
        await fetch(
          "https://covidtracking.com/api/states/info"
        ).then((response) => response.json())
        //  .then(data=> console.log(data))
      );
    }
    fetchData();
  }, []);

  let showState = useSelector((state) => state.mapState.state);
  return (
    <div>
      <Navbar />
      <h2 id="states">{showState.state} </h2>
      <table id="info">
        <tr>
          <th>Data Quality Grade:</th>
          <td>{showState.dataQualityGrade}</td>
          </tr>
          <tr>
          <th>Death Increase:</th>
          <td> {showState.deathIncrease}</td>
          </tr>
          <tr>
          <th>Cumulative Hospitalizations:</th>
          {showState.hospitalizedCumulative !==null ? 
          <td> {showState.hospitalizedCumulative}</td>
          :
          <td>No Current Info</td>
}
          </tr>
          <tr>
          <th>Hospitalized Currently:</th>
          {showState.hospitalizedCurrently !==null ?
          <td> {showState.hospitalizedCurrently}</td>
          :
          <td>No Current Info</td>
}
          </tr>
          <tr>
          <th>Hospitalized Increase:</th>
          <td> {showState.hospitalizedIncrease}</td>
          </tr>

          <tr>
          <th>Positive Increase:</th>
          <td> {showState.positiveIncrease}</td>
          </tr>
          <tr>
          <th>Negative Increase:</th>
          <td> {showState.negativeIncrease}</td>
          </tr>
          <tr>
          <th>Total Test Results: </th>
          <td>{showState.totalTestResults}</td>
          </tr>
          <tr>
          <th>Total Test Results Increase:</th>
          <td> {showState.totalTestResultsIncrease}</td>
          </tr>
          <tr>
          <th>Last Update: </th>
          <td>{showState.lastUpdateEt}</td>
          </tr>
      
      </table>

      <Jumbotron fluid className="jumbotron">
        <Container>
          {/* <h2>Fluid jumbotron</h2> */}
          <p>This page is updated regularly.</p>
        </Container>
      </Jumbotron>
    </div>
  );
}

//   let getStateInfo=()=> {
//     fetch('https://covidtracking.com/api/states/info')
//   .then(response =>response.json())
//     .then(response=> {console.log("State Info:", response)})
// }
//  getStateInfo()

// let getUsCurrent=()=>{
//   fetch('http://covidtracking.com/api/us')
// .then(response =>response.json())
// // .then(response=> {console.log("US Current:", response)})
// }

// getUsCurrent()

//   let getUsDaily=()=>{
//     fetch('https://covidtracking.com/api/us/daily')
//   .then(response =>response.json())
//   // .then(response=> {console.log("US Daily:", response)})
//   }

//   let getStateInfo=()=> {
//     fetch('https://covidtracking.com/api/states/info')
//   .then(response =>response.json())
//     .then(response=> {console.log("State Info:", response)})
// }
//  getStateInfo()
