/** @format */

import React, { useState, useEffect } from "react";
import Plot from "react-plotly.js";
import { Bar, Line, Pie } from "react-chartjs-2";

export default function UsDaily() {
  const [chartData, setChartData] = useState({});
  const [death, setDeath] = useState([]);
  const [date, setDate] = useState([]);

  const chart = () => {
    let deathArr = [];
    let dateArr = [];
    let colorArr=["rgba(128,0,0)", "rgba(75, 192, 192, 0.6)", "rgba(47,79,79)"];
    fetch("https:covidtracking.com/api/us/daily")
      .then((res) => res.json())
      .then((r) => {
        r.forEach((element) => {
        //   console.log(element);
          let deathCount =
            element.death === null ? (element.death = 0) : element.death;
          deathArr.push(deathCount);
          dateArr.push(element.date);
          colorArr.push(dateArr)
        });
        dateArr.reverse()
        deathArr.reverse()
        // console.log(deathArr);
        // setDeath(deathArr)

        // console.log(dateArr)
        setChartData({
            labels: dateArr,
            datasets: [
              {
                label: "death",
                data: deathArr,
                backgroundColor: colorArr
              }
            ],
          });
      });
      

    
   

    //    console.log(death, date);
  };
  
  console.log(chartData)
  useEffect(() => {
    chart();
  }, []);

  return (
    <div className="chart" >
        
      <Bar
        style= "display: block; height: 200px; width: 1113px;"
        data={chartData}
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

      <Line
       style= "display: block; height: 300px; width: 1780px;"
        data={chartData}
        options={{
          responsive: true,
           maintainAspectRatio: false,
          title: { 
              text: "Something Else", 
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

      <Pie
       style= "display: block; height: 300px; width: 1113px;"
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
  );
}

//   const [death, setDeath] = useState({});
//   const [date, setDate] = useState(null);
//   const [positive, setPositive] = useState(null);
//   useEffect(() => {
//     fetch("https://covidtracking.com/api/us/daily")
//       .then((response) => response.json())
//       .then((response) => {
//           let date= response.map(response=> response.date)
//             // console.log(date)
//             let death= response.map(response=> response.death)
//             // console.log(death)
//             let positive= response.map(response=> response.positive)
//             // console.log(positive)
//             setDate(date)
//             setDeath(death)
//             setPositive(positive)
//       });

//   }, []);
// console.log("date", date, "death", death, "positive", positive)
//   return (

//    <Plot data={[{
//        x: [1],
//        y:[1],
//        z:[1],
//        type: 'surface'
//    }]}>

//    </Plot>
//   );
