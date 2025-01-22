import React, { useEffect, useRef } from "react";
import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";
import codeIcon from "@/assets/svg/code.svg"; // Adjust the path as necessary
import { center } from "./contant";
import { Skeleton } from "@/components/ui/skeleton";
const containerStyle = {
  width: "100%",
  height: "35vh",
};

const Map: React.FC = () => {
  const mapRef = useRef<google.maps.Map | null>(null);

  useEffect(() => {
    // Remove previous Google Maps API script if it exists
    const googleMapsScript = document.querySelector(
      'script[src*="maps.googleapis.com"]'
    );
    if (googleMapsScript) {
      googleMapsScript.remove();
    }
  }, []);

  return (
    <div className="flex justify-center">
      <LoadScript
        googleMapsApiKey={`${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}`}
        loadingElement={<Skeleton className="w-full h-[40vh]" />}
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={14}
          onLoad={(map) => {
            mapRef.current = map;
          }}
        >
          <MarkerF position={center} icon={codeIcon} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Map;
