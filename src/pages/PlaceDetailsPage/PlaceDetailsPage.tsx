import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import BaseButton from "../../components/BaseButton/BaseButton";
import BaseTitle from "../../components/BaseTitle/BaseTitle";
import Rating from "../../components/Rating/Rating";
import ReviewCard from "../../components/ReviewCard/ReviewCard";
import { usePlaceDetails } from "../../hooks/usePlaceDetails";
import "./PlaceDetailsPage.scss";

const PlaceDetailsPage = () => {
  const { placeId } = useParams();
  const { placeDetails, isLoading } = usePlaceDetails(placeId || "");
  const navigate = useNavigate();

  return (
    <div className="place-details-page">
      <BaseButton onClick={() => navigate("/")}>Back to home page</BaseButton>

      {isLoading && <BaseTitle>Loading details...</BaseTitle>}

      {!!(!isLoading && !placeDetails) && (
        <BaseTitle>There are no details to show</BaseTitle>
      )}

      {!!(!isLoading && placeDetails) && (
        <>
          <div className="place-details-page__header">
            <div className="place-details-page__title">
              <BaseTitle>{placeDetails.name}</BaseTitle>
              <Rating rating={placeDetails.rating || 0} />
            </div>

            <p className="place-details-page__type">
              {placeDetails.types?.[0] || "-"}
            </p>

            <p className="place-details-page__address">
              {placeDetails.formatted_address}
            </p>
          </div>

          <div className="place-details-page__reviews">
            {(placeDetails?.reviews || []).slice(0, 5).map((review, index) => (
              <ReviewCard
                author={review.author_name}
                authorPhoto={review.profile_photo_url}
                rating={review.rating || 0}
                timeDescription={review.relative_time_description}
                description={review.text}
                key={`${index}-${review.time}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default PlaceDetailsPage;
