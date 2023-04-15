import React, { useEffect, useRef, useState } from "react";
import BaseInput from "../BaseInput/BaseInput";
import { useAutocompleteLocation } from "../../hooks/useAutocompleteLocation";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import {
  setLocationAddress,
  setLocationLatLng,
} from "../../store/locationSlice";
import "./PlacesAutocompleteInput.scss";

const PlacesAutocompleteInput = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [inputValue, setInputValue] = useState("");

  const locationAddress = useSelector(
    ({ location }: RootState) => location.locationAddress
  );
  const dispatch = useDispatch();

  const handlePlaceSelected = (place: google.maps.places.PlaceResult) => {
    const location = {
      lat: Number(place.geometry?.location?.lat()),
      lng: Number(place.geometry?.location?.lng()),
    };

    dispatch(setLocationAddress(place.formatted_address || ""));
    dispatch(setLocationLatLng(location.lat && location.lng ? location : null));
  };

  useAutocompleteLocation({
    inputEl: inputRef?.current,
    onUpdateInputValue: setInputValue,
    onPlaceSelected: handlePlaceSelected,
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    setInputValue(locationAddress);
  }, [locationAddress]);

  return (
    <BaseInput
      type="text"
      className="places-autocomplete-input"
      placeholder="Enter a location"
      innerRef={inputRef}
      value={inputValue}
      onChange={handleInputChange}
    />
  );
};

export default PlacesAutocompleteInput;
