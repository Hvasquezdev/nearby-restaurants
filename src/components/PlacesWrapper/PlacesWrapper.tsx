import { usePlaces } from "../../hooks/usePlaces";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import PlaceCard from "../PlaceCard/PlaceCard";
import EmptyState from "../EmptyState/EmptyState";
import "./PlacesWrapper.scss";

const PlacesWrapper = () => {
  const locationLatLng = useSelector(
    ({ location }: RootState) => location.locationLatLng
  );
  const { placeResults, isLoading } = usePlaces({
    location: locationLatLng,
    type: "restaurant",
  });

  return (
    <div className="places-wrapper">
      {isLoading || !placeResults.length ? (
        <EmptyState
          description={
            isLoading
              ? "Loading restaurants nearby"
              : "Search a location to see nearby restaurants"
          }
        />
      ) : null}

      {!isLoading &&
        placeResults.map((place, index) => (
          <PlaceCard
            iconUrl={place.icon || ""}
            name={place.name || "N/A"}
            direction={place.vicinity || "N/A"}
            rating={place.rating || 0}
            placeId={place.place_id || ""}
            key={`${index}-${place.place_id}`}
          />
        ))}
    </div>
  );
};

export default PlacesWrapper;
