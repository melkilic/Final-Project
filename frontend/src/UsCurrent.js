
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
           let totalArr=[]
           let positiveArr=[]
           let recoveredArr=[]
           let totalTestResultsArr=[]
           let labels=["hospitalized","death", "confirmed cases", "recovered","total test results"]
           let colors=["#97c9a5","#bec997","#e0bfad","#e36868","#e4a8f0","#6e1239"]
           let wholeArr=[]

        fetch('http://covidtracking.com/api/us')
      .then(response =>response.json())
      .then(response=> { 
        hospitalizedArr.push(response[0].hospitalized)
        deathArr.push(response[0].death)
        totalArr.push(response[0].total)
        positiveArr.push(response[0].positive)
        recoveredArr.push(response[0].recovered)
        totalTestResultsArr.push(response[0].totalTestResults)
        wholeArr.push(deathArr, hospitalizedArr, positiveArr,recoveredArr, totalTestResultsArr)
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
              fontSize: 25,
              backgroundColor: '#97c9a5'
            }
        }}
      />  
      </div>

      
    </div>
  )
  }
