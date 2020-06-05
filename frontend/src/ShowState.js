import React, { Component } from 'react';
import {useSelector} from 'react-redux'

 export default function ShowState(){
     let showState= useSelector(state=> state.mapState.state)
     return(
         <div>
          { showState.state}
         </div>
     )

//   let getStateInfo=()=> {
//     fetch('https://covidtracking.com/api/states/info')
//   .then(response =>response.json())
//     .then(response=> {console.log("State Info:", response)})
// }
//  getStateInfo()

 }



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