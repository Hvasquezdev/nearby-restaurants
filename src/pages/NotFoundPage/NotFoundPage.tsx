import React from "react";
import { useNavigate } from "react-router-dom";
import NotFoundImage from "../../assets/images/404-artwork.svg";
import BaseButton from "../../components/BaseButton/BaseButton";
import BaseTitle from "../../components/BaseTitle/BaseTitle";
import "./NotFoundPage.scss";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="not-found-page">
      <BaseTitle>Not found page</BaseTitle>

      <img
        className="not-found-page__image"
        src={NotFoundImage}
        alt="Not found image"
        width={342}
        height={322}
      />

      <BaseButton onClick={() => navigate("/")}>Go back to home</BaseButton>
    </div>
  );
};

export default NotFoundPage;
