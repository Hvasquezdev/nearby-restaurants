import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGeocoding } from "../../hooks/useGeocoding";
import {
  setLocationAddress,
  setLocationLatLng,
} from "../../store/locationSlice";
import { RootState } from "../../store/store";
import BaseButton from "../BaseButton/BaseButton";

const DeviceLocationButton = () => {
  const savedLocationAddress = useSelector((state: RootState) => state.location.locationAddress)
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
    if (formattedAddress) {
      dispatch(setLocationLatLng(location));
      dispatch(setLocationAddress(formattedAddress));
    }
  }, [formattedAddress]);

  useEffect(() => {
    if (savedLocationAddress !== formattedAddress) {
      setLocation(null);
    }
  }, [savedLocationAddress]);

  return (
    <BaseButton
      onClick={handleRequestDeviceLocation}
      disabled={isLoadingLocation || isLoadingAddress || !!formattedAddress}
    >
      Use device location
    </BaseButton>
  );
};

export default DeviceLocationButton;
