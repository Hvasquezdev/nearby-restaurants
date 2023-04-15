import React from "react";
import starImage from "./../../assets/favorite.svg";
import "./PlaceCard.scss";

interface PlaceCardProps {
  iconUrl: string;
  direction: string;
  name: string;
  rating: number;
  placeId: string;
  onClick?: (placeId: string) => void;
}

const PlaceCard = (props: PlaceCardProps) => {
  return (
    <div className="place-card" onClick={() => props?.onClick?.(props.placeId)}>
      <div className="place-card__icon">
        <img src={props.iconUrl} alt="Place icon" width={24} height={24} />
      </div>

      <div className="place-card__content">
        <div className="place-details">
          <h3 className="place-details__name">{props.name}</h3>
          <p className="place-details__direction">{props.direction}</p>
        </div>

        <div className="place-rating">
          Rating: {props.rating}
          <img
            className="star-icon"
            src={starImage}
            alt="Rating star"
            width={16}
            height={16}
          />
        </div>
      </div>
    </div>
  );
};

export default PlaceCard;
