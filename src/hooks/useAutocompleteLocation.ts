import { useState } from "react";
import { useAutocomplete } from "@ubilabs/google-maps-react-hooks";

interface useAutocompleteLocationProps {
  inputEl: HTMLInputElement | null;
  onUpdateInputValue: (value: string) => void;
  onPlaceSelected?: (place: google.maps.places.PlaceResult) => void;
}

export const useAutocompleteLocation = (
  props: useAutocompleteLocationProps
) => {
  const onPlaceChanged = (place: google.maps.places.PlaceResult) => {
    if (place) {
      props?.onPlaceSelected?.(place);

      const formattedAddress = place.formatted_address;
      const { name } = place;

      if (!formattedAddress || !name) {
        return;
      }

      props.onUpdateInputValue(formattedAddress || name);
      props.inputEl?.focus();
    }
  };

  useAutocomplete({
    inputField: props.inputEl,
    onPlaceChanged,
  });
};
