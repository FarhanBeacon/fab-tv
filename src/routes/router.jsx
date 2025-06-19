import { createBrowserRouter } from "react-router";
import App from "../App";
import HomePage from "../layouts/HomePage";
import ErrorPage from "../layouts/ErrorPage";
import ChannelDetails from "../components/ChannelDetails.jsx";
import Register from "../layouts/Register.jsx";
import Login from "../layouts/Login.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
import WebSeriesPage from "../layouts/WebSeriesPage.jsx";
import SeriesDetails from "../components/SeriesDetails.jsx";
import EpisodeDetails from "../components/EpisodeDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/webSeries",
        element: (
          <PrivateRoute>
            <WebSeriesPage />
          </PrivateRoute>
        ),
        loader: async () => {
          const res = await fetch("https://fab-tv-server.vercel.app/webseries");
          const seriesData = await res.json();
          return { seriesData };
        },
      },
      {
        path: "/seriesDetails/:seriesId",
        element: (
          <PrivateRoute>
            <SeriesDetails />
          </PrivateRoute>
        ),
        loader: async ({ params }) => {
          const res = await fetch(
            `https://fab-tv-server.vercel.app/episodes/${params.seriesId}`
          );
          const episodesData = await res.json();
          return { episodesData };
        },
      },
    ],
  },
  {
    path: "/ChannelDetails/:chId",
    element: <ChannelDetails />,
  },
  {
    path: "/episodeDerails/:seriesId/:episode",
    element: (
      <PrivateRoute>
        <EpisodeDetails />
      </PrivateRoute>
    ),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default router;
