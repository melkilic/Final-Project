import React, {useState, useEffect} from 'react';
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import * as states from './states.json';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { e0f2f1 } from '@material-ui/core/colors';
import Icon from '@material-ui/core/Icon';
import {useDispatch, useSelector} from 'react-redux'
import {useHistory} from 'react-router'
import {handleStateChange} from './Action/MapAction'



function ReactMap() {
  
    let dispatch=useDispatch()
    let viewState= useSelector(state=> state.mapState.state)
    // console.log(viewState)
    let history= useHistory()

  const [viewport, setViewport]=useState({
    latitude: 39.381266,
    longitude: -97.922211,
    width: '100vw',
    height: '100vh',
    zoom: 3
   
  })

 let [selectedState, setSelectedState]= useState(null);

useEffect(()=>{
  fetch('https://covidtracking.com/api/states')
  .then(response =>{
    return response.json()
  })

  .then(data => {
    
    if(selectedState!==null){
      let state= data.filter(d=> d.state === selectedState.state)
      
      dispatch(handleStateChange(state[0]))
      //the same thing with the above code
      // dispatch({
      //     type: "CHANGE_LOCATION",
      //     currentLocation: state[0]
      // })
    }
    
    // data.forEach(state=>console.log(state.death, state.recovered, state.positive, state.negative))
    })
  
}, [selectedState]
)


  let REACT_APP_MAPBOX_TOKEN= 
  "pk.eyJ1IjoibWVsa2lsaWMiLCJhIjoiY2theXJjNXNjMDdrbDJ2bW92bTdvZ29nZiJ9.D1KFp9vf33oCdJRSIhCc9g"


  return (
    <div>
      
   <ReactMapGL {...viewport} mapboxApiAccessToken={REACT_APP_MAPBOX_TOKEN} 
   mapStyle="mapbox://styles/melkilic/ckb1candc02r41ipe62zxyus3"  
   onViewportChange={viewport => {
          setViewport(viewport);
        }}>
   {states.features.map(state => (
          <Marker
            key={state.id}
            latitude={state.lat}
            longitude={state.long}
          >
            <button style={{
            "background":"none", 
            "border":"none", 
            "cursor":"pointer", 
            "width":"10px", 
            "height":"10px"}} 
            
            onMouseOver={e=> {
              e.preventDefault();
              setSelectedState(state)
            }}>
           <Icon style={{ "color": "#e0f2f1"}}> <span className="material-icons">
           maps_ugc
</span></Icon>
</button>
            
           {/* <Icon style={{ color: green[500] }} className="far fa-viruses"/> */}
            
    </Marker>
   ))}
   {selectedState ? (
     <Popup
        latitude= {selectedState.lat}
        longitude={selectedState.long} 
        onClose={() => {
          setSelectedState(null);
        }}>

        <div  >
         <h2 style={{"color": "dark-blue"}} onClick={()=> history.push('/show')}>{viewState.state}</h2>
          {viewState.positive !== null ?  <h4>Positive Cases: {viewState.positive}</h4> : <h4>Positive Cases: No current info</h4>}
          {viewState.negative !==null ?  <h4>Negative Cases: {viewState.negative}</h4> : <h4> Negative Cases: No current info</h4> }
          {viewState.death !== null ?  <h4>Death:{viewState.death}</h4> : <h4> Death: No current info</h4>}
         {viewState.recovered!==null ? <h4>Recovered:{viewState.recovered}</h4> : <h4> Recovered: No current info</h4> }
   {viewState.lastUpdateEt !== null ? <h4> Last Update: {viewState.lastUpdateEt}</h4> : <h4> Last Update: No current info </h4>}
          
        </div>
        
     </Popup>
   ): null
   
   }
  

   </ReactMapGL> 
   </div>
  );
}

export default ReactMap;