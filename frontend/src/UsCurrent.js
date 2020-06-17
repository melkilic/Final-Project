
import React,  { useState, useEffect } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Navbar from "./Navbar";
import Chart from 'chart.js'
import { Bar, Line, Pie, Doughnut} from "react-chartjs-2";
import Button from '@material-ui/core/Button'

export default function UsCurrent(){
  
        const [state, setState] = useState([])

         const getCurrent=()=>{
           let hospitalizedArr=[]
           let deathArr=[]
           let totalArr=[]
           let positiveArr=[]
           let recoveredArr=[]
           let totalTestResultsArr=[]
           let labels=["hospitalized","death", "confirmed cases", "recovered"]
           let colors=[
            "#83af70",
           "#d3cc96",
           "#ceb192",
           "#ffd291"
          ]
           let wholeArr=[]

        


// #f1f1f1
// #f0b8b8

// #d43d51

        fetch('http://covidtracking.com/api/us')
      .then(response =>response.json())
      .then(response=> { 
        hospitalizedArr.push(response[0].hospitalized)
        deathArr.push(response[0].death)
        totalArr.push(response[0].total)
        positiveArr.push(response[0].positive)
        recoveredArr.push(response[0].recovered)
        totalTestResultsArr.push(response[0].totalTestResults)
        wholeArr.push(deathArr, hospitalizedArr, positiveArr,recoveredArr)
        console.log(response[0])
      
        //  console.log(response[0].hospitalized)
        setState({
         
          datasets: [
            {
              label: "US Current Info",
              data: wholeArr,
              backgroundColor: colors
            }
          ],
          labels: labels,
          borderWith:10
        });
        })
       
      }
     
    
  

useEffect(()=>{
getCurrent();
},[])

  return (
    <div className="chart" >
      
       <Navbar/>
       <h1 style={{textAlign:"center", marginTop:0,marginLeft: 'auto',
    marginRight: 'auto', fontSize: "50px"}}>
         US Current Covid-19 Data
       </h1>
       <div className="pie">
       <Pie
        data={state}
        options={{
          cutoutPercentage: 30,
          responsive: true,
           maintainAspectRatio: false,
         
          title: { 
              text: "", 
              display: true,
              fontSize: 25,
            
             
            }
        }}
      />  
      </div> 
    </div>
  )
  }
