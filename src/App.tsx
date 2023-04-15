import React from "react";
import { GoogleMapsProvider } from "@ubilabs/google-maps-react-hooks";
import PlacesWrapper from "./components/PlacesWrapper/PlacesWrapper";
import PlacesAutocompleteInput from "./components/PlacesAutocompleteInput/PlacesAutocompleteInput";
import DeviceLocationButton from "./components/DeviceLocationButton/DeviceLocationButton";
import "./App.scss";

function App() {
  return (
    <div className="app-wrapper">
      <h1 className="app-wrapper__title">Search nearby restaurants</h1>

      <GoogleMapsProvider
        googleMapsAPIKey={import.meta.env.VITE_MAPS_API_KEY}
        libraries={["places"]}
      >
        <React.StrictMode>
          <PlacesAutocompleteInput />
          <DeviceLocationButton />
          <PlacesWrapper />
        </React.StrictMode>
      </GoogleMapsProvider>
    </div>
  );
}

export default App;
