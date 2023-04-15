import React from "react";
import { GoogleMapsProvider } from "@ubilabs/google-maps-react-hooks";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import PlaceDetailsPage from "./pages/PlaceDetailsPage/PlaceDetailsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: '/place/:placeId',
    element: <PlaceDetailsPage />
  }
]);

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
