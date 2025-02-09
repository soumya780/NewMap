import React, { useState, useEffect, useRef } from "react";
import {
  GoogleMap,
  LoadScript,
  Autocomplete,
  Marker,
} from "@react-google-maps/api";
import { FiSearch } from "react-icons/fi";
import layerImage from "./layerImg.png";

const mapContainerStyle = {
  width: "70%",
  height: "550px",
};

const defaultCenter = {
  lat: 12.95018984056107,
  lng: 77.7152470150009,
};

// Updated imageBounds for the new overlay location
const imageBounds = {
  // mid point of the photo
  north: 13.120013632526961, // Northern boundary
  south: 13.066013632526961, // Southern boundary
  east: 77.61033270322493, // Eastern boundary
  west: 77.55483270322493, // Western boundary
  
  // mid point of the photo
  //  north: 13.09312690648424 + (4.09 / 111),
  // south: 13.09312690648424 - (4.09 / 111),
  // east: 77.5833507782988 + (5.22 / (111 * Math.cos((13.09312690648424 * Math.PI) / 180))),
  // west: 77.5833507782988 - (5.22 / (111 * Math.cos((13.09312690648424 * Math.PI) / 180))),
};

const GoogleMapComponent = () => {
  const [mapCenter, setMapCenter] = useState(defaultCenter);
  const [markerPosition, setMarkerPosition] = useState(defaultCenter);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const [isMarkerVisible] = useState(true);
  const overlayRef = useRef(null);
  const mapRef = useRef(null);
  const [autocomplete, setAutocomplete] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const userLocation = { lat: latitude, lng: longitude };
          setMapCenter(userLocation);
          setMarkerPosition(userLocation);
        },
        () => {
          console.error("Error getting geolocation. Using default location.");
        }
      );
    }
  }, []);

  const handlePlaceChanged = () => {
    if (autocomplete) {
      const place = autocomplete.getPlace();
      setTimeout(() => {
        if (place.geometry) {
          const { lat, lng } = place.geometry.location.toJSON();
          const newLocation = { lat, lng };
          setMapCenter(newLocation);
          setMarkerPosition(newLocation);
          mapRef.current.setZoom(15);
        } else {
          console.error("Place geometry not found.");
        }
      }, 750);
    }
  };

  const handleMapClick = (e) => {
    const lat = e.latLng.lat();
    const lng = e.latLng.lng();
    setMarkerPosition({ lat, lng });
  };

  const toggleOverlay = () => {
    if (overlayRef.current) {
      if (isOverlayVisible) {
        overlayRef.current.setMap(null);
      } else {
        overlayRef.current.setMap(mapRef.current);
        mapRef.current.setZoom(15);
      }
      setIsOverlayVisible(!isOverlayVisible);
    }
  };

  const handleSearchClick = () => {
    handlePlaceChanged();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <LoadScript
        googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
        libraries={["places"]}
      >
        <div className="relative w-11/12 max-w-md mb-8">
          <Autocomplete
            onLoad={(autoC) => setAutocomplete(autoC)}
            onPlaceChanged={handlePlaceChanged}
          >
            <input
              type="text"
              placeholder="Search for a location"
              className="w-full px-5 py-3 rounded-lg border border-gray-300 bg-white text-gray-800 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </Autocomplete>
          <FiSearch
            onClick={handleSearchClick}
            className="absolute -right-16 top-1/2 transform -translate-y-1/2 border border-gray-300 p-2 text-gray-500 text-[40px] rounded-xl cursor-pointer"
          />
        </div>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={mapCenter}
          zoom={12}
          onLoad={(map) => {
            mapRef.current = map;
            overlayRef.current = new window.google.maps.GroundOverlay(
              layerImage,
              imageBounds,
              { opacity: 0.7 }
            );
          }}
          onClick={handleMapClick}
        >
          {isMarkerVisible && <Marker position={markerPosition} />}{" "}
          {/* Always render marker */}
        </GoogleMap>
        <button
          onClick={toggleOverlay}
          className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none"
        >
          {isOverlayVisible ? "Hide Overlay" : "Show Overlay"}
        </button>
      </LoadScript>
    </div>
  );
};

export default GoogleMapComponent;
