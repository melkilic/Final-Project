
import React,  { useState, useEffect } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Navbar from "./Navbar";
import Chart from 'chart.js'
import { Bar, Line, Pie, Doughnut} from "react-chartjs-2";

export default function UsCurrent(){
  
        const [state, setState] = useState([])

         const getCurrent=()=>{
           let hospitalizedArr=[]
           let deathArr=[]
           let total=[]
           let labels=["hospitalized","death", "total", "positive", "recovered","totalTestResults"]
           let colors=["#97c9a5","#bec997","#e0bfad","#e36868","#e4a8f0","#6e1239"]

        fetch('http://covidtracking.com/api/us')
      .then(response =>response.json())
      .then(response=> { 
        hospitalizedArr.push(response[0].hospitalized)
        deathArr.push(response[0].death)
        total.push(response[0].total)

        console.log(response[0])
      
        //  console.log(response[0].hospitalized)
        setState({
          labels: labels,
          datasets: [
            {
              // label: labels,
              data: hospitalizedArr,deathArr,
              backgroundColor: colors
            }
          ],
        });
        })
       
      }
     
    
  

useEffect(()=>{
getCurrent();
},[])

  return (
    <div className="chart" >
      
       <Navbar/>
       <div style={{display: 'block', height: '500px', width: '1600px'}}>
       <Pie
        data={state}
        options={{
          cutoutPercentage: 30,
          responsive: true,
           maintainAspectRatio: false,
          title: { 
              text: "US Current COVID-19 Data", 
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
  )
  }
