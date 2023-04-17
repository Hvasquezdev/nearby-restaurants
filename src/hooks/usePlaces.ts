import { usePlacesService } from "@ubilabs/google-maps-react-hooks";
import { useCallback, useEffect, useMemo, useState } from "react";

interface UsePlacesProps {
  location: google.maps.LatLngLiteral | null;
  type: string;
  searchRadius?: number;
}

export const usePlaces = ({
  location,
  type,
  searchRadius = 500,
}: UsePlacesProps) => {
  const [placeResults, setPlaceResults] = useState<
    google.maps.places.PlaceResult[]
  >([]);
  const [isLoading, setIsLoading] = useState(false);

  const divContainer = useMemo(() => document.createElement("div"), []);
  const service = usePlacesService({ divElement: divContainer });

  const handleOnNearbySearch = useCallback(
    (
      results: google.maps.places.PlaceResult[] | null,
      status: google.maps.places.PlacesServiceStatus
    ) => {
      if (status !== google.maps.places.PlacesServiceStatus.OK || !results) {
        console.error(status);
      } else {
        const restaurants = results
          .slice(0, 10)
          .sort((a, b) => (b.rating || 0) - (a.rating || 0));

        setPlaceResults(restaurants);
      }

      setIsLoading(false);
    },
    []
  );

  useEffect(() => {
    if (!service || !location) {
      return;
    }

    const request = {
      location,
      radius: searchRadius,
      type,
    };

    setIsLoading(true);
    service.nearbySearch(request, handleOnNearbySearch);
  }, [Boolean(service), location]);

  return {
    placeResults,
    isLoading,
  };
};
