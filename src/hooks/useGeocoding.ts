import { useGeocodingService } from "@ubilabs/google-maps-react-hooks";
import { useEffect, useState } from "react";

export const useGeocoding = (location: google.maps.LatLngLiteral | null) => {
  const [formattedAddress, setFormattedAddress] = useState("");
  const [isLoadingAddress, setIsLoadingAddress] = useState(false);

  const geocoder = useGeocodingService();

  const handleGeocodingRequest = () => {
    if (isLoadingAddress) return;

    setIsLoadingAddress(true);

    geocoder?.geocode(
      { location },
      (
        results: google.maps.GeocoderResult[] | null,
        status: google.maps.GeocoderStatus
      ) => {
        if (status !== "OK" || !results) {
          console.error(
            `Geocoding was not successful for the following reason: ${status}`
          );

          setIsLoadingAddress(false);
          return;
        }

        setFormattedAddress(results[0].formatted_address);
        setIsLoadingAddress(false);
      }
    );
  };

  useEffect(() => {
    if (location && "lat" in location) {
      handleGeocodingRequest();
    }
  }, [location]);

  return {
    formattedAddress,
    isLoadingAddress,
  };
};
