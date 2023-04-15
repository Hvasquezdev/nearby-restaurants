import React, { useRef, useState } from "react";
import BaseInput from "../BaseInput/BaseInput";
import { useAutocompleteLocation } from "../../hooks/useAutocompleteLocation";
import "./PlacesAutocompleteInput.scss";

const PlacesAutocompleteInput = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [inputValue, setInputValue] = useState("");
  
  // TODO: save selected place in a Redux store
  const { selectedPlace } = useAutocompleteLocation({
    inputEl: inputRef?.current,
    onUpdateInputValue: setInputValue
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
