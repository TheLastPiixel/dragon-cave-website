import React, { Component } from 'react';
import './Map.css';
import {GoogleMap, useLoadScript, Marker, InfoWindow} from "@react-google-maps/api";
import MapStyle from "./mapStyle";

require("dotenv").config();

//Google Maps Settings
const mapContainerStyle = {
  width: "100%",
  height: "50vh",
};
const location = {
  lat: 3.109131964053435, 
  lng: 101.63709308941017,
};
const options = {
  styles: MapStyle,
  disableDefaultUI: true,
  zoomControl: false,
}

export default function Map() {
  const {isLoaded} = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_API_KEY
  })

  if (!isLoaded) return "Loading Map...";

  return (
    <div>
      <GoogleMap 
      mapContainerStyle={mapContainerStyle} 
      zoom={15} 
      center={location}
      options={options}
      >
        <Marker position={location} />
      </GoogleMap>
    </div>
  );
}

