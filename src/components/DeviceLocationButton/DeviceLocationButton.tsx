import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useGeocoding } from "../../hooks/useGeocoding";
import {
  setLocationAddress,
  setLocationLatLng,
} from "../../store/locationSlice";
import BaseButton from "../BaseButton/BaseButton";

const DeviceLocationButton = () => {
  const [location, setLocation] = useState<google.maps.LatLngLiteral | null>(
    null
  );
  const [isLoadingLocation, setIsLoadingLocation] = useState(false);
  const { formattedAddress, isLoadingAddress } = useGeocoding(location);
  const dispatch = useDispatch();

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

  useEffect(() => {
    dispatch(setLocationLatLng(location));
    dispatch(setLocationAddress(formattedAddress));
  }, [formattedAddress]);

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
