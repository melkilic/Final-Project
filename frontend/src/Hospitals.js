/** @format */

import React, { useState, useEffect } from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";
import Navbar from "./Navbar";
import mapStyles from "./mapStyles";
import Search from "./Search";

function Hospitals(props) {
  const [searchTerm, setSearchTerm] = useState('');

  const [searchResults, setSearchResults] = useState([]);

  let [selectedHospital, setSelectedHospital]= useState(null)
    let [arrayOfHospitals,setHospitals]= useState([])



    useEffect(() => {
        
        fetch("https://opendata.arcgis.com/datasets/1044bb19da8d4dbfb6a96eb1b4ebf629_0.geojson")
        .then(response => {
          return response.json()
        })
        .then(hospital => {
    
        let workingHospitals= []
        hospital.features.forEach(h=>{
            if( h.geometry !== null  && h.properties.COUNTY_NAME !==null){
                workingHospitals.push(h)
            }
           
        })
     
      setHospitals(workingHospitals)
      
    });
    
},[])


  const handleChange = (e) => {
     
    setSearchTerm(e.target.value);
  };
 

  useEffect(() => {
    const results = arrayOfHospitals.filter((h) =>{
       h.properties.COUNTY_NAME.toLowerCase().startsWith(searchTerm.toLowerCase())
       setSearchResults(results);
      }, [searchTerm]);
    }
    );



    // setHospitals(results)
    // setSearchResults(results);
//   }, [searchTerm]);

  return (
    <div>
       <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) =>{ handleChange(e)}}
      />

      <GoogleMap
        defaultZoom={10}
        defaultCenter={{ lat: 29.7604, lng: -95.3698 }}
        defaultOptions={{ styles: mapStyles }}
      >
     {
        searchResults.map(hospital=>
          <Marker
          key={hospital.properties.FID}
          position={{
            lat: hospital.geometry.coordinates[1],
            lng: hospital.geometry.coordinates[0]
          }}
          onClick={() => {
           setSelectedHospital(hospital);
          }}
          />
        )
      }
      </GoogleMap>
    </div>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Hospitals));
export default function Location() {
  return (
    <div>
      <Navbar />
      <div
        style={{
          width: "100vh",
          height: "100vh",
          margin: "auto",
          marginTop: "75px",
        }}
      >
        <WrappedMap
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCFs-QDwnIOUJAzb2rGEK5p5V0n9pTJ884`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `500px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    </div>
  );
}
