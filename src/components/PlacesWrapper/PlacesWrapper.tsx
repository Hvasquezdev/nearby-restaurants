import { placeAutocompleteMock, placesMock } from "../../mocks/placesMock";
import { usePlaces } from "../../hooks/usePlaces";
import PlaceCard from "../PlaceCard/PlaceCard";
import "./PlacesWrapper.scss";

const PlacesWrapper = () => {
  const { placeResults } = usePlaces({
    location: {
      lat: -34.5075009,
      lng: -58.4794951,
    },
    type: "restaurant",
  });

  return (
    <div className="places-wrapper">
      {placeResults.map((place) => (
        <PlaceCard
          iconUrl={place.icon || ""}
          name={place.name || "N/A"}
          direction={place.vicinity || "N/A"}
          rating={place.rating || 0}
          placeId={place.place_id || ""}
        />
      ))}
    </div>
  );
};

export default PlacesWrapper;
