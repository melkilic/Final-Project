
import React,  { useState, useEffect } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Navbar from "./Navbar";
import { Radar} from "react-chartjs-2";
import Chart from 'chart.js'
import { Bar, Line, Pie } from "react-chartjs-2";
export default function UsCurrent(){
  
        const [state, setState] = useState([])

         const radar=()=>{
        fetch('http://covidtracking.com/api/us')
      .then(response =>response.json())
      .then(response=> { 
         let hospitalized= response[0].hospitalized
        // console.log(response[0])
      
        //  console.log(response[0].hospitalized)
        setState({
          labels: response[0].total,
          datasets: [
            {
              label: "hospitalized",
              data: hospitalized,
              backgroundColor:"rgba(75, 192, 192, 0.6)"
            }
          ],
        });
        })
       
      }
     
    
  

useEffect(()=>{
radar();
},[])
// const CHART= document.getElementById("lineChart")
//   Chart.defaults.scale.ticks.beginAtZero=true;
//   let barChart= new Chart(CHART,{
//     type:'radar',
//     data:{
//       labels:"hospitalized",
//       datasets:[
//         {
//         label: "hospitalized",
//         backgroundColor: 'rgba(00,255,00,0.1)',
//         borderColor: '#00FF00',
//         borderWidth: 2,
//         data: {state}
//         }
//       ]
//     },
//     options: {
//       animation:{
//         animateScale:true
//       },
//       scale: {
//           angleLines: {
//               display: false
//           },
//           ticks: {
//               suggestedMin: 50,
//               suggestedMax: 100
//           }
//       }
//   }
       
//   })
  return (
    <div className="chart" >
      
       <Navbar/>
       <div style={{display: 'block', height: '300px', width: '1600px'}}>
       <Pie
        data={state}
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
      
 

           <h1> {state.dateChecked}</h1>
             
{/*            
          <StyledTableCell align="right"> {state.death}</StyledTableCell>
              <StyledTableCell align="right"> {state.positive}</StyledTableCell>
              <StyledTableCell align="right"> {state.negative}</StyledTableCell>
              <StyledTableCell align="right"> {state.total}</StyledTableCell>
              <StyledTableCell align="right"> {state.deathIncrease}</StyledTableCell>
              <StyledTableCell align="right"> {state.hospitalized}</StyledTableCell>
              <StyledTableCell align="right"> {state.hospitalizedCurrently}</StyledTableCell>
              <StyledTableCell align="right">  {state.hospitalizedIncrease}</StyledTableCell>
              <StyledTableCell align="right"> {state.lastModified}</StyledTableCell>
              <StyledTableCell align="right">  {state.negativeIncrease}</StyledTableCell>
              <StyledTableCell align="right">  {state.recovered}</StyledTableCell>
              <StyledTableCell align="right"> {state.totalTestResults}</StyledTableCell>
              <StyledTableCell align="right">  {state.totalTestResultsIncrease}</StyledTableCell> 
             */}
      
    </div>
  )
  }
