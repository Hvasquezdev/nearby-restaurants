import { useState } from "react";
import { useAutocomplete } from "@ubilabs/google-maps-react-hooks";

interface useAutocompleteLocationProps {
  inputEl: HTMLInputElement | null;
  onUpdateInputValue: (value: string) => void;
}

export const useAutocompleteLocation = (
  props: useAutocompleteLocationProps
) => {
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

      props.onUpdateInputValue(formattedAddress || name);
      props.inputEl?.focus();
    }
  };

  useAutocomplete({
    inputField: props.inputEl,
    onPlaceChanged,
  });

  return {
    selectedPlace,
  };
};
