import { usePlacesService } from "@ubilabs/google-maps-react-hooks";
import { useCallback, useEffect, useMemo, useState } from "react";

export const usePlaceDetails = (placeId: string) => {
  const [placeDetails, setPlaceDetails] = useState<
    google.maps.places.PlaceResult | null
  >(null);
  const [isLoading, setIsLoading] = useState(false);

  const divContainer = useMemo(() => document.createElement("div"), []);
  const service = usePlacesService({ divElement: divContainer });

  const handleDetailsRequest = useCallback(    (
    place: google.maps.places.PlaceResult | null,
    status: google.maps.places.PlacesServiceStatus
  ) => {
    if (status !== google.maps.places.PlacesServiceStatus.OK || !place) {
      console.error(status);
    } else {
      setPlaceDetails(place);
    }

    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (!service || !placeId) {
      return;
    }

    setIsLoading(true);
    service.getDetails({ placeId }, handleDetailsRequest)
  }, [Boolean(service), placeId]);

  return {
    placeDetails,
    isLoading,
  };
};
