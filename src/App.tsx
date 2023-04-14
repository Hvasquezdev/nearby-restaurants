import React from "react";
import { GoogleMapsProvider } from "@ubilabs/google-maps-react-hooks";
import PlacesWrapper from "./components/PlacesWrapper/PlacesWrapper";
import BaseInput from "./components/BaseInput/BaseInput";
import "./App.scss";

function App() {
  return (
    <div className="app-wrapper">
      <h1 className="app-wrapper__title">
        Search nearby restaurants
      </h1>

      <BaseInput placeholder="Type your location" />

      <GoogleMapsProvider
        googleMapsAPIKey={import.meta.env.VITE_MAPS_API_KEY}
        libraries={["places"]}
      >
        <React.StrictMode>
          <PlacesWrapper />
        </React.StrictMode>
      </GoogleMapsProvider>
    </div>
  );
}

export default App;
