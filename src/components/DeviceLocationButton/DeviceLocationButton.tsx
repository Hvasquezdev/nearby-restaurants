import { useState } from "react";
import { useGeocoding } from "../../hooks/useGeocoding";
import BaseButton from "../BaseButton/BaseButton";

const DeviceLocationButton = () => {
  const [location, setLocation] = useState<google.maps.LatLngLiteral | null>(
    null
  );
  const [isLoadingLocation, setIsLoadingLocation] = useState(false);
  const { formattedAddress, isLoadingAddress } = useGeocoding(location);

  const handleSuccessDeviceLocation = (position: GeolocationPosition) => {
    setIsLoadingLocation(false);
    setLocation({
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    });
  };

  const handleErrorDeviceLocation = () => {
    setIsLoadingLocation(false);
  };

  const handleRequestDeviceLocation = () => {
    setIsLoadingLocation(true);
    navigator.geolocation.getCurrentPosition(
      handleSuccessDeviceLocation,
      handleErrorDeviceLocation
    );
  };

  return (
    <BaseButton
      onClick={handleRequestDeviceLocation}
      disabled={isLoadingLocation || isLoadingAddress}
    >
      Use device location
    </BaseButton>
  );
};

export default DeviceLocationButton;
