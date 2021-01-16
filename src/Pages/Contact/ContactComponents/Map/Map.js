import React, { Component } from 'react';
import './Map.css';
import {GoogleMap, useLoadScript, Marker, InfoWindow} from "@react-google-maps/api";
import MapStyle from "./mapStyle";
import PhoneIcon from "../../../../Content/Icon/PhoneBlue.png"
import DirectionIcon from "../../../../Content/Icon/DirectionBlue.png"
import DragonCave from "../../../../Content/Icon/LocationMarker.png"

require("dotenv").config();

//Google Maps Settings
const mapContainerStyle = {
  width: "100%",
  height: "50vh",
};
const location = {
  lat: 3.1260633630959784,
  lng: 101.63728769898198,
};
const center = {
  lat: 3.1260633630959784,
  lng: 101.63728769898180,
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
      center={center}
      options={options}
      >
        <Marker 
          position={location} 
          icon={{
            url: DragonCave,
            scaledSize: new window.google.maps.Size(30, 30),
            origin: new window.google.maps.Point(0, 0),
            anchor: new window.google.maps.Point(15, 15),
          }}
          onClick={() => this.handleToggleOpen()}
        >
          <InfoWindow options={{}}>
            <span class="InfoWindow">
              <h4>Dragon Cave</h4>
              <p>
                7, Jalan 17/54,       <br/>
                Seksyen 17,           <br/>
                46400 Petaling Jaya,  <br/>
                Selangor,             <br/>
                Malaysia
              </p>
              <a href="tel:+60124276181" class="InfoWindowButton">
                <img src={PhoneIcon} class="InfoWindowButtonImage"/>
              </a>
              <a href="https://goo.gl/maps/m3GhgA7cNvPrTw7v8" class="InfoWindowButton" target="_blank">
                <img src={DirectionIcon} class="InfoWindowButtonImage"/>
              </a>
            </span>
          </InfoWindow>
        </Marker>
      </GoogleMap>
    </div>
  );
}

