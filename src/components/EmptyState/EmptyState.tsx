import emptyState from "../../assets/images/location-empty.svg";
import "./EmptyState.scss";

const EmptyState = ({ description = "" }) => {
  return (
    <div className="empty-state">
      <img
        className="empty-state__image"
        src={emptyState}
        alt="Location list empty"
        width={280}
        height={245}
      />
      <p className="empty-state__description">{description}</p>
    </div>
  );
};

export default EmptyState;
