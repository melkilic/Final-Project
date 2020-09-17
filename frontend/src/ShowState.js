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
      );
    }
    fetchData();
  }, []);

  let showState = useSelector((state) => state.mapState.state);
  return (
    <div>
      <Navbar />
      <table id="info">
        <tr id="states">{showState.state} </tr>
        <tr>
          <th>Data Quality Grade:</th>
          {showState.dataQualityGrade !== null ? (
            <td>{showState.dataQualityGrade}</td>
          ) : (
            <td>No Current Info</td>
          )}
        </tr>
        <tr>
          <th>Mortality Increase:</th>
          {showState.deathIncrease !== null ? (
            <td> {showState.deathIncrease}</td>
          ) : (
            <td>No Current Info</td>
          )}
        </tr>

        <tr>
          <th>Cumulative Hospitalizations:</th>
          {showState.hospitalizedCumulative !== null ? (
            <td> {showState.hospitalizedCumulative}</td>
          ) : (
            <td>No Current Info</td>
          )}
        </tr>
        <tr>
          <th>Currently Hospitalized:</th>
          {showState.hospitalizedCurrently !== null ? (
            <td> {showState.hospitalizedCurrently}</td>
          ) : (
            <td>No Current Info</td>
          )}
        </tr>
        <tr>
          <th>Hospitalization Increase:</th>
          {showState.hospitalizedIncrease !== null ? (
            <td> {showState.hospitalizedIncrease}</td>
          ) : (
            <td>No Current Info</td>
          )}
        </tr>

        <tr>
          <th>Confirmed Cases Increase:</th>
          {showState.positiveIncrease !== null ? (
            <td> {showState.positiveIncrease}</td>
          ) : (
            <td>No Current Info</td>
          )}
        </tr>

        <tr>
          <th>Negative Cases Increase:</th>
          {showState.negativeIncrease !== null ? (
            <td> {showState.negativeIncrease}</td>
          ) : (
            <td>No Current Info</td>
          )}
        </tr>

        <tr>
          <th>Total Test Results: </th>
          {showState.totalTestResults !== null ? (
            <td>{showState.totalTestResults}</td>
          ) : (
            <td>No Current Info</td>
          )}
        </tr>
        <tr>
          <th>Total Test Results Increase:</th>
          {showState.totalTestResultsIncrease !== null ? (
            <td> {showState.totalTestResultsIncrease}</td>
          ) : (
            <td>No Current Info</td>
          )}
        </tr>
        <tr>
          <th>Last Updated At: </th>
          {showState.lastUpdateEt !== null ? (
            <td>{showState.lastUpdateEt}</td>
          ) : (
            <td>No Current Info</td>
          )}
        </tr>
      </table>

      <Jumbotron fluid className="jumbotron">
        <Container>
          <p>The Covid Tracking Project API has been used on this page.</p>
        </Container>
      </Jumbotron>
    </div>
  );
}
