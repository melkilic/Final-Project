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
  // const [searchTerm, setSearchTerm] = useState('');

  // const [searchResults, setSearchResults] = useState([]);

  let [selectedHospital, setSelectedHospital] = useState(null);
  let [arrayOfHospitals, setHospitals] = useState([]);

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

  return (
    <div>
      <h1>
        Hospitals{" "}
        <span role="img" aria-label="hospital">
          🏥
        </span>
      </h1>
      <GoogleMap
        defaultZoom={10}
        defaultCenter={{ lat: 29.7604, lng: -95.3698 }}
        defaultOptions={{ styles: mapStyles }}
      >
        {/* {
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
      } */}
      </GoogleMap>
      <Search />
    </div>
  );
}

function Search() {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      location: { lat: () => 29.7604, lng: () => -95.3698 },
      radius: 100 * 1000,
    },
  });

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();

    try {
      const results = await getGeocode({ address });
      const { lat, lng } = await getLatLng(results[0]);
      // panTo({ lat, lng });
    } catch (error) {
      console.log("😱 Error: ", error);
    }
  };

  return (
    <div className="search">
      <Combobox
        onSelect={async (address) => {
          try {
            const results = await getGeocode({ address });
            const { lat, lng } = await getLatLng(results[0]);
            console.log(lat, lng);
          } catch (error) {
            console.log("error");
          }
          console.log(address);
        }}
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
