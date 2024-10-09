import React, { useState } from "react";
import { useJsApiLoader } from "@react-google-maps/api";
import MapComponent from "./MapComponent";
import DirectionsComponent from "./DirectionsComponent";
import './Map.css';

const Map = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_MAP_API, // Ensure your API key is correct
  });

  const [showDirections, setShowDirections] = useState(false); // State to track visibility of directions

  if (!isLoaded) {
    return <div>Loading...</div>; // Show a loading message until the map is loaded
  }

  return (
    <section className="map-container">
      <div className="map-name">
        <span style={{ color: "#E0B973", fontWeight: "bold", letterSpacing: "1px" }}>LUXURY HOTEL</span> LOCATION
      </div>
      <div className="iframe-container">
        {showDirections ? <DirectionsComponent /> : <MapComponent />}
      </div>
      <div className="map-buttons">
        <button onClick={() => setShowDirections(false)}>Show Location</button>
        <button onClick={() => setShowDirections(true)}>Show Directions</button>
      </div>
    </section>
  );
};

export default Map;
