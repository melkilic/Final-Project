/** @format */

import React, { useState, useEffect } from "react";
import Plot from "react-plotly.js";
import { Bar, Line, Pie } from "react-chartjs-2";
import Navbar from "./Navbar";
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button'
import { Jumbotron, Container } from "react-bootstrap";
export default function UsDaily() {
  const [chartData, setChartData] = useState({});
  const [death, setDeath] = useState([]);
  const [date, setDate] = useState([]);
  const [positive, setPositive] = useState([]);
  

  const chart = () => {
    let deathArr = [];
    let dateArr = [];
    let positiveArr = [];

    let totalTestResults = [];
    let deathColor= "#646d5a"
    let positiveColor="#859d87"

    fetch("https:covidtracking.com/api/us/daily")
      .then((res) => res.json())
      .then((r) => {
        r.forEach((element) => {
          console.log(element);
          let deathCount =
            element.death === null ? (element.death = 0) : element.death;
  
          deathArr.push(deathCount);
          dateArr.push(element.date);
          positiveArr.push(element.positive);
    
          totalTestResults.push(element.totalTestResults);

        });

        dateArr.reverse();
        deathArr.reverse();
        positiveArr.reverse();
        totalTestResults.reverse();
        // console.log(totalTestResults);
        
        dateArr= dateArr.map(r=>{
        let year= r.toString().slice(0,4)
        let month= r.toString().slice(4,6)
        let day= r.toString().slice(6,8)
        return `${month}/${day}/${year}`
        })
      

        setDeath({
          labels: dateArr,
          datasets: [
            {
              label: "death",
              data: deathArr,
              backgroundColor: deathColor,
            },
          ],
        });
        setPositive({
          labels: totalTestResults,
          datasets: [
            {
              label: "confirmed",
              data: positiveArr,
              backgroundColor: positiveColor,
            },
          ],
        });
      });
  };

  useEffect(() => {
    chart();
  }, []);

  let divStyle={ display: "block", height: "300px", width: "1425px" }
  return (
    <div className="chart">
      <Navbar />
      <div style={divStyle}>
        <Bar
          data={death}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            title: {
              text: "Mortality Rate",
              display: true,
              fontSize: 25,
              fontColor: '#e6e8eb'
            },
            legend: {
              display: true,
              position: "right",
             
            },
            scales: {
              yAxes: [
                {
                  ticks: {
                    autoSkip: true,
                    maxTicksLimit: 10,
                    beginAtZero: true,
                    fontColor: "white"
                  },
                  gridLines: {
                    display: false,
                  },
                },
              ],
              xAxes: [
                { 
                  ticks:{
                    fontColor: "white"
                  },
                  gridLines: {
                    display: false,
                    
                  },
                },
              ],
            },
          }}
        />
      </div>
    
    <br></br>
    <br></br>
      <div style={divStyle}>
        <Line
          data={positive}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            title: {
              text: "Confirmed Cases & Total Test Results",
              display: true,
              fontSize: 25,
              fontColor: '#e6e8eb'
            },
            legend: {
              display: true,
              position: "right",
            },
            scales: {
              yAxes: [
                {
                  ticks: {
                      fontColor: "white",
                    autoSkip: true,
                    maxTicksLimit: 10,
                    beginAtZero: true,
                  },
                  gridLines: {
                    display: false,
                  },
                },
              ],
              xAxes: [
                {
                  ticks:{
                    fontColor: "white"
                  },
                  gridLines: {
                    display: false,
                  },
                },
              ],
            },
          }}
        />
      </div>
      <Jumbotron fluid className="jumbotron">
        <Container>
          <p>The Covid Tracking Project API has been used on this page.</p>
        </Container>
      </Jumbotron>
    </div>
  );
}
