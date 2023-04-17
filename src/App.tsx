import React from "react";
import { GoogleMapsProvider } from "@ubilabs/google-maps-react-hooks";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router";

function App() {
  return (
    <GoogleMapsProvider
      googleMapsAPIKey={import.meta.env.VITE_MAPS_API_KEY}
      libraries={["places"]}
    >
      <React.StrictMode>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </React.StrictMode>
    </GoogleMapsProvider>
  );
}

export default App;
