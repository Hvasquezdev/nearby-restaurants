import React, { useRef, useState } from "react";
import { useAutocomplete } from "@ubilabs/google-maps-react-hooks";
import BaseInput from "../BaseInput/BaseInput";
import "./PlacesAutocompleteInput.scss";

const PlacesAutocompleteInput = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [inputValue, setInputValue] = useState("");
  const [selectedPlace, setSelectedPlace] =
    useState<google.maps.places.PlaceResult | null>(null);

  const onPlaceChanged = (place: google.maps.places.PlaceResult) => {
    if (place) {
      setSelectedPlace(place);

      const formattedAddress = place.formatted_address;
      const { name } = place;

      if (!formattedAddress || !name) {
        return;
      }

      setInputValue(formattedAddress || name);
      inputRef.current?.focus();
    }
  };

  useAutocomplete({
    inputField: inputRef && inputRef.current,
    onPlaceChanged,
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

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
