import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import PlaceDetailsPage from "./pages/PlaceDetailsPage/PlaceDetailsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/place/:placeId",
    element: <PlaceDetailsPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
