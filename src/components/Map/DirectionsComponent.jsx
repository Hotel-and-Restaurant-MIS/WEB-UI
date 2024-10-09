/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useJsApiLoader, GoogleMap, Marker, DirectionsRenderer } from "@react-google-maps/api";
import markerIcon from '../../images/hotelicon.png'; // Adjust the path to your image

const center = {
  lat: 6.9, // Latitude for hotel
  lng: 79.8737, // Longitude for hotel
};

const DirectionsMap = () => {

  const [userLocation, setUserLocation] = useState(null);
  const [directions, setDirections] = useState(null);

  // Load the Google Maps API
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_MAP_API, // Ensure your API key is correct
  });

  // Fetch the user's current location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ lat: latitude, lng: longitude });
        },
        () => {
          console.error("Geolocation permission denied or unavailable");
        }
      );
    }
  }, []);

  // Fetch directions when user location is set
  useEffect(() => {
    if (userLocation) {
      const directionsService = new window.google.maps.DirectionsService();
      directionsService.route(
        {
          origin: userLocation,
          destination: center,
          travelMode: window.google.maps.TravelMode.DRIVING,
        },
        (result, status) => {
          if (status === window.google.maps.DirectionsStatus.OK) {
            setDirections(result);
          } else {
            console.error(`Error fetching directions: ${status}`);
          }
        }
      );
    }
  }, [userLocation, center]);

  if (!isLoaded) {
    return <div>Loading...</div>; // Show a loading message until the map is loaded
  }

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMap
        center={center}
        zoom={10}
        mapContainerStyle={{ width: "100%", height: "100%" }}
      >
        {/* Marker for the hotel location */}
        <Marker
          position={center}
          title="Luxury Hotel Location" // Tooltip text
          icon={{
            url: markerIcon, // Use the imported local image as the icon
            scaledSize: new window.google.maps.Size(40, 40), // Custom size of the marker
          }}
        />

        {/* Render directions if available */}
        {directions && <DirectionsRenderer directions={directions} />}
      </GoogleMap>
    </div>
  );
};

export default DirectionsMap;
