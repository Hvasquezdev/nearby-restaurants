import React from "react";
import BaseTitle from "../../components/BaseTitle/BaseTitle";
import DeviceLocationButton from "../../components/DeviceLocationButton/DeviceLocationButton";
import PlacesAutocompleteInput from "../../components/PlacesAutocompleteInput/PlacesAutocompleteInput";
import PlacesWrapper from "../../components/PlacesWrapper/PlacesWrapper";
import "./HomePage.scss";

const HomePage = () => {
  return (
    <div className="home-page">
      <BaseTitle>Search nearby restaurants</BaseTitle>

      <PlacesAutocompleteInput />
      <DeviceLocationButton />
      <PlacesWrapper />
    </div>
  );
};

export default HomePage;
