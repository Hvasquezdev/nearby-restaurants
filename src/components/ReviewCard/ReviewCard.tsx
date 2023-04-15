import Rating from "../Rating/Rating";
import "./ReviewCard.scss";

interface ReviewCardProps {
  author: string;
  authorPhoto: string;
  rating: number;
  timeDescription: string;
  description?: string;
}

const ReviewCard = (props: ReviewCardProps) => {
  return (
    <div className="review-card">
      <div className="review-card__head">
        <div className="review-card__media">
          <img
            src={props.authorPhoto}
            alt={props.author}
            width={40}
            height={40}
            className="author-image"
          />
        </div>

        <div className="review-card__author">
          <h4 className="author-name">{props.author}</h4>

          <div className="rating-details">
            <b>Rating: </b>
            <Rating rating={props.rating} /> - {props.timeDescription}
          </div>
        </div>
      </div>

      {props.description ? (
        <p className="review-card__description">{props.description}</p>
      ) : null}
    </div>
  );
};

export default ReviewCard;
