import starImage from "./../../assets/favorite.svg";
import "./Rating.scss"

interface RatingProps {
  rating: number;
}

const Rating = (props: RatingProps) => {
  return (
    <div className="rating">
      {props.rating}{" "}
      <img
        className="star-icon"
        src={starImage}
        alt="Rating star"
        width={14}
        height={14}
      />
    </div>
  );
};

export default Rating;
