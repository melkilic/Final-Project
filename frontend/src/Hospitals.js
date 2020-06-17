/** @format */

import React, { useState, useEffect } from "react";
import Icon from '@material-ui/core/Icon';
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
import { useLoadScript} from '@react-google-maps/api'
import {Popup} from 'react-map-gl'
import Navbar from "./Navbar";
import mapStyles from "./mapStyles";
// import Search from "./Search";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import { formatRelative } from "date-fns";

import "@reach/combobox/styles.css";

function Hospitals(props) {
  let [arrayOfHospitals, setHospitals] = useState([]);
  let [center,setCenter]= useState({ lat: 29.7604, 
    lng: -95.3698 })
let [selectedHospital, setSelectedHospital]= useState(null)

const mapContainerStyle = {
  height: "100vh",
  width: "100vw",
};
const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};
// const center = {
//   lat: 29.7604, 
//   lng: -95.3698 
// };

  useEffect(() => {
    fetch(
      "https://opendata.arcgis.com/datasets/1044bb19da8d4dbfb6a96eb1b4ebf629_0.geojson"
    )
      .then((response) => {
        return response.json();
      })
      .then((hospital) => {
        let workingHospitals = [];
        hospital.features.forEach((h) => {
          if (h.geometry !== null && h.properties.COUNTY_NAME !== null) {
            workingHospitals.push(h);
          }
        });

        setHospitals(workingHospitals);
      });
  }, []);

  // const { isLoaded, loadError } = useLoadScript({
  //   googleMapsApiKey: "AIzaSyCFs-QDwnIOUJAzb2rGEK5p5V0n9pTJ884",
  //   libraries,
  // });


  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.center = map;
  }, []);

  const panTo = React.useCallback(({ lat, lng }) => {
    mapRef.center.panTo({ lat, lng });
    mapRef.center.setZoom(14);
  }, []);

  // if (loadError) return "Error";
  // if (!isLoaded) return "Loading...";

// console.log(center)
let [zoom,setZoom]=useState(8)

  return (
    <div>
      <h3>
        Hospitals{" "}
        <span role="img" aria-label="hospital">
          🏥
        </span>
      </h3>
      <GoogleMap
        zoom={zoom}
        center={center}
        mapContainerStyle={mapContainerStyle}
        defaultOptions={options}
        onLoad={onMapLoad}
       
      >

      
        {arrayOfHospitals.map(hospital=>
        hospital.geometry!==null 
        && hospital.properties.HQ_ADDRESS1 !==null
     && hospital.properties.NUM_ICU_BEDS!==null 
   && hospital.properties.BED_UTILIZATION!== null 
       && hospital.properties.NUM_STAFFED_BEDS !==null 
       && hospital.properties.NUM_LICENSED_BEDS !==null 
    && hospital.properties.AVG_VENTILATOR_USAGE !==null 
       && hospital.properties.PEDI_ICU_BEDS !==null 
         && hospital.properties.STATE_NAME !==null 
       && hospital.properties.HQ_STATE!==null 
        ?
          <Marker
          // icon={{url:"https://img.icons8.com/doodle/30/000000/drop-of-blood.png"}}
          key={hospital.properties.FID}
          position={{
            lat: hospital.geometry.coordinates[1],
            lng: hospital.geometry.coordinates[0]
          }}
          onClick={() => {
           setSelectedHospital(hospital);
          }}
          >
          
            </Marker>
       : null )
      }
      {selectedHospital && (
        <InfoWindow
          onCloseClick={() => {
            setSelectedHospital(null);
          }}
          position={{
            lat: selectedHospital.geometry.coordinates[1],
            lng: selectedHospital.geometry.coordinates[0]
          }}
        >
         
          <div>
         
            <h3>Hospital Name: {selectedHospital.properties.HOSPITAL_NAME}</h3>
            <h3>Hospital Type: {selectedHospital.properties.HOSPITAL_TYPE}</h3>
        <h3>Hospital Address: {selectedHospital.properties.HQ_ADDRESS}, {selectedHospital.properties.HQ_CITY} {selectedHospital.properties.HQ_STATE} {selectedHospital.properties.HQ_ZIP_CODE}</h3>
            <h3>Adult ICU Beds: {selectedHospital.properties.ADULT_ICU_BEDS}</h3>
            <h3>Average Ventilator Usage: {selectedHospital.properties.AVG_VENTILATOR_USAGE}</h3>
            <h3>Number of Licensed Beds: {selectedHospital.properties.NUM_LICENSED_BEDS}</h3>
            <h3>Number of Staffed Beds: {selectedHospital.properties.NUM_STAFFED_BEDS}</h3>
            <h3>Pediatric ICU Beds: {selectedHospital.properties.PEDI_ICU_BEDS}</h3>
            <h3>Potential Increase in Bed Capacity: {selectedHospital.properties.Potential_Increase_In_Bed_Capac}</h3>
            <h3>Bed Utilization: {selectedHospital.properties.BED_UTILIZATION}</h3>
          </div>
        </InfoWindow>
      )}
        {console.log(selectedHospital)}
      </GoogleMap>
      <Search 
      panTo={panTo} 
      setCenter={setCenter}
      setZoom={setZoom} />
    </div>
  );
}

function Search(props) {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      location: { lat: () => 39.381266, lng: () => -97.922211 },
      radius: 200 * 1000,
    },
  });

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();
    props.setZoom(12)
    // address.setZoom(14)

    try {
      const results = await getGeocode({ address });
      const { lat, lng } = await getLatLng(results[0]);
      props.setCenter({
      lat, lng
      })

      // console.log(lat,lng)
      // props.panTo({ lat, lng });
    } catch (error) {
      console.log("😱 Error: ", error);
    }
  };

  return (
    <div className="search">
      <Combobox
        onSelect={handleSelect}
      >
        <ComboboxInput
          value={value}
          onChange={handleInput}
          disabled={!ready}
          placeholder="Search your location"
        />
        <ComboboxPopover>
          <ComboboxList>
            {status === "OK" &&
              data.map(({ id, description }) => (
                <ComboboxOption key={id} value={description} />
              ))}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
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
          width: "100vw",
          height: "100vh",
        }}
      >
        <WrappedMap
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCFs-QDwnIOUJAzb2rGEK5p5V0n9pTJ884`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `1000px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    </div>
  );
}
