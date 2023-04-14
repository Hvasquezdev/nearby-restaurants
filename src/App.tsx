import React from "react";
import { GoogleMapsProvider } from "@ubilabs/google-maps-react-hooks";
import PlacesWrapper from "./components/PlacesWrapper/PlacesWrapper";
import "./App.css";

function App() {
  return (
    <div className="App">
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
