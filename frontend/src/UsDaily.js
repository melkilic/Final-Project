/** @format */

import React, { useState, useEffect } from "react";
import Plot from "react-plotly.js";
// import 'plotly.min'

export default function UsDaily() {
  const [death, setDeath] = useState({});
  const [date, setDate] = useState(null);
  const [positive, setPositive] = useState(null);
  useEffect(() => {
    fetch("https://covidtracking.com/api/us/daily")
      .then((response) => response.json())
      .then((response) => {
          let date= response.map(response=> response.date)
            // console.log(date)
            let death= response.map(response=> response.death)
            // console.log(death)
            let positive= response.map(response=> response.positive)
            // console.log(positive)
            setDate(date)
            setDeath(death)
            setPositive(positive)
      });

  }, []);
console.log("date", date, "death", death, "positive", positive)
  return (
      
   <Plot data={[{
       x: [1],
       y:[1],
       z:[1],
       type: 'surface'
   }]}>

   </Plot>

    // <html>
    // <head>
    // <meta http-equiv="content-type" content="text/html; charset=UTF-8" />

    // </head>
    // <body>
    //     <div id="chart">
    //         <script>
    //     Plotly.newPlot('chart', [{
    //         {x: death},
    //         {y: date},
    //         {z: positive},
    //         {type: 'surface'}
    //  }])
    //  </script>
    //  </div>
    //  </body>
    //  </html>
  );
}
