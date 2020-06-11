/** @format */

import React, { useState, useEffect } from "react";
import Plot from "react-plotly.js";
import { Bar, Line, Pie } from "react-chartjs-2";
import Navbar from "./Navbar";
export default function UsDaily() {
  const [chartData, setChartData] = useState({});
  const [death, setDeath] = useState([]);
  const [date, setDate] = useState([]);
  const [positive,setPositive]= useState([])
  const [negative,setNegative]=useState([])

  const chart = () => {
    let deathArr = [];
    let dateArr = [];
    let positiveArr=[];
    let negativeArr=[];
    let totalTestResults=[]
    let colorArr=["rgba(47,79,79)"];
    fetch("https:covidtracking.com/api/us/daily")
      .then((res) => res.json())
      .then((r) => {
        r.forEach((element) => {
          console.log(element.totalTestResults);
          let deathCount = element.death === null ? (element.death = 0) : element.death;
          let negativeCases= element.negative ===null ? (element.negative=0) : element.negative;
          deathArr.push(deathCount);
          dateArr.push(element.date);
          positiveArr.push(element.positive)
          negativeArr.push(negativeCases)
          totalTestResults.push(element.totalTestResults)
          colorArr.push(dateArr)
        });
        dateArr.reverse()
        deathArr.reverse()
        positiveArr.reverse()
        negativeArr.reverse()
        totalTestResults.reverse()
        console.log(totalTestResults)
        setDeath({
            labels: dateArr,
            datasets: [
              {
                label: "death",
                data: deathArr,
                backgroundColor: colorArr
              }
            ],
          });
          setPositive({
            labels: totalTestResults,
            datasets: [
              {
                label: "positive",
                data: positiveArr,
                backgroundColor: colorArr
              }
            ],
          });
          // setNegative({
          //   labels: negativeArr,
          //   datasets: [
          //     {
          //       label: "negative",
          //       data: positiveArr,
          //       backgroundColor: colorArr
          //     }
          //   ],
          // });

      });
      
  };
  

  useEffect(() => {
    chart();
  }, []);

  return (
      
    <div className="chart" >
       <Navbar/>
       <div style={{display: 'block', height: '300px', width: '1600px' }}>
      <Bar 
        data={death}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          title: { 
              text: "COVID-19 Death-Date Ratio", 
              display: true,
              fontSize: 25 
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
                },
                gridLines: {
                  display: false,
                },
              },
            ],
            xAxes: [
              {
                gridLines: {
                  display: false,
                },
              },
            ],
          },
        }}
      /> 
</div>
<div style={{display: 'block', height: '300px', width: '1600px' }}>
       <Line
        data={positive}
        options={{
          responsive: true,
           maintainAspectRatio: false,
          title: { 
              text: "Positive Test vs Total Test Results", 
              display: true,
              fontSize: 25 
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
                },
                gridLines: {
                  display: false,
                },
              },
            ],
            xAxes: [
              {
                gridLines: {
                  display: false,
                },
              },
            ],
          },
        }}
      />
</div>
 <div style={{display: 'block', height: '300px', width: '1113px' }}>
     <Pie
        data={chartData}
        options={{
          responsive: true,
           maintainAspectRatio: false,
          title: { 
              text: "Another one", 
              display: true,
              fontSize: 25 
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
                },
                gridLines: {
                  display: false,
                },
              },
            ],
            xAxes: [
              {
                gridLines: {
                  display: false,
                },
              },
            ],
          },
        }}
      />  
      </div>
    </div>
  );
}

