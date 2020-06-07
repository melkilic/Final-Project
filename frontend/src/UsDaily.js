import React,  { useState, useEffect } from 'react';

export default function UsDaily(){
     useEffect(()=>{
    fetch('https://covidtracking.com/api/us/daily')
  .then(response =>response.json())
  .then(response=> {console.log("US Daily:", response)})
  }
     )
    return(
        <div>
            hi
        </div>
    )
}

