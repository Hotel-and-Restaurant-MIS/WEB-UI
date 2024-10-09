import React from "react";
import { useJsApiLoader, GoogleMap, Marker } from "@react-google-maps/api";
import markerIcon from '../../images/hotelicon.png'; // Adjust the path to your image

const LocationMap = () => {
  const center = {
    lat: 6.9, // Latitude for map center
    lng: 79.8737, // Longitude for map center
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_MAP_API, // Ensure your API key is correct
  });

  if (!isLoaded) {
    return <div>Loading...</div>; // Show a loading message until the map is loaded
  }

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMap
        center={center}
        zoom={13}
        mapContainerStyle={{ width: "100%", height: "100%" }}
      >
        {/* Add a Marker to display the center point */}
        <Marker
          position={center}
          title="Luxury Hotels Location" // Tooltip text
          icon={{
            url: markerIcon, // Use the imported local image as the icon
            scaledSize: new window.google.maps.Size(40, 40), // Custom size of the marker
          }}
        />
      </GoogleMap>
    </div>
  );
};

export default LocationMap;
