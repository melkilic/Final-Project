
import React,  { useState, useEffect } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Navbar from "./Navbar";
import Chart from 'chart.js'
import { Bar, Line, Pie, Doughnut} from "react-chartjs-2";
import Button from '@material-ui/core/Button'
import { Jumbotron, Container } from "react-bootstrap";

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
            "#c9daa4",
           "#bcc9b8",
           "#8bb590",
           "#d9e8d3"
          // '#f7fffa',
          // '#d2efb9',
          // '#dcd364',
          // '#e3be54'
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
          labels: labels,
          borderWith:0,
          datasets: [
            {
              label: "US Current Info",
              data: wholeArr,
              backgroundColor: colors
            }
          ],
          
        });
        })
       
      }
     
    
  

useEffect(()=>{
getCurrent();
},[])

let style={
  textAlign:"center",
  position: "relative",
  color: "white",
  marginTop: "25px",
  padding: 0}

  return (
    <div >
      
       <Navbar/>
    
       {/* <h1 className= "current" >
         US Current Covid-19 Data
       </h1> */}

       <div className="pie">
       <Pie
        data={state}
        options={{
          cutoutPercentage: 30,
          responsive: true,
          aspectRatio: 1,
        
          title: { 
              text: "US Current COVID-19 Data", 
              display: true,
              fontSize: 35,
            fontColor: "#e6e8eb",
             
            }
        }}
      /> 
      </div> 

      <Jumbotron fluid className="jumbotron1">
        <Container>
          <p>The Covid Tracking Project API has been used on this page.</p>
        </Container>
      </Jumbotron>
    </div>
  )
  }
