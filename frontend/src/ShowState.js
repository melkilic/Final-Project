import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux'
import Navbar from "./Navbar";
 export default function ShowState(){

 const [stateInfo, setStateInfo]= useState([])

    useEffect(()=>{ 
       async function fetchData(){
         setStateInfo(
      await fetch('https://covidtracking.com/api/states/info')
     .then(response =>response.json())
       .then(data=> console.log(data))
        )
    }
 fetchData();
  }
  ,[] )
    
 

     let showState= useSelector(state=> state.mapState.state)
     return(
       
     
         <div >
             <Navbar/>
             <div className="show">
          <h2>{ showState.state} </h2>
          <h3>Data Quality Grade:{showState.dataQualityGrade}</h3>
          <h3>Fips: {showState.fips}</h3>
          <h3> Death Increase: {showState.deathIncrease}</h3>
          <h3>Cumulative Hospitalizations: {showState.hospitalizedCumulative}</h3>
          <h3>Hospitalized Currently: {showState.hospitalizedCurrently}</h3>
          <h3>Hospitalized Increase: {showState.hospitalizedIncrease}</h3>
          <h3> Positive Increase: {showState.positiveIncrease}</h3>
          <h3>Negative Increase: {showState.negativeIncrease}</h3>
          <h3>Total Test Results: {showState.totalTestResults}</h3>
          <h3>Total Test Results Increase: {showState.totalTestResultsIncrease}</h3>
          <h3>Last Update: {showState.lastUpdateEt}</h3>
          </div>
         </div>
         
     )



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