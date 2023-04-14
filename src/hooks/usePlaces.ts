import { usePlacesService } from "@ubilabs/google-maps-react-hooks";
import { useEffect, useMemo, useState } from "react";

interface PlacesProps {
  location: google.maps.LatLngLiteral;
  type: string;
  searchRadius?: number;
}

export const usePlaces = ({
  location,
  type,
  searchRadius = 800,
}: PlacesProps) => {
  const [placeResults, setPlaceResults] = useState<
    google.maps.places.PlaceResult[]
  >([]);
  const [isLoading, setIsLoading] = useState(false);

  const divContainer = useMemo(() => document.createElement('div'), []);
  const service = usePlacesService({ divElement: divContainer });

  useEffect(() => {
    if (!service) {
      return;
    }

    const request = {
      location,
      radius: searchRadius,
      type,
    };

    function callback(
      results: google.maps.places.PlaceResult[] | null,
      status: google.maps.places.PlacesServiceStatus
    ) {
      if (status !== google.maps.places.PlacesServiceStatus.OK || !results) {
        console.error(status);
        setIsLoading(false);
        return;
      }

      setPlaceResults(results);
      setIsLoading(false);
    }

    setIsLoading(true);
    service.nearbySearch(request, callback);
  }, [Boolean(service)]);

  return {
    placeResults,
    isLoading
  };
};
