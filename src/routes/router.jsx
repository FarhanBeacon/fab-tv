import { createBrowserRouter } from "react-router";
import App from "../App";
import HomePage from "../layouts/HomePage";
import ErrorPage from "../layouts/ErrorPage";
import ChannelsTv from "../components/ChannelsTv.jsx";
import Somoy from "../tv/Somoy.jsx";
import Jamuna from "../tv/Jamuna.jsx";
import Ekhon from "../tv/Ekhon.jsx";
import Rtv from "../tv/Rtv.jsx";
import Independent from "../tv/Independent.jsx";
import AtnNews from "../tv/AtnNews.jsx";
import Channeli from "../tv/Channeli.jsx";
import Channel24 from "../tv/Channel24.jsx";
import Ekattor from "../tv/Ekattor.jsx";
import NTV from "../tv/NTV.jsx";
import DeshTv from "../tv/DeshTv.jsx";
import News24 from "../tv/News24.jsx";
import DbcNews from "../tv/DbcNews.jsx";
import NatGeo from "../tv/NatGeo.jsx";
import DiscoveryRex from "../tv/DiscoveryRex.jsx";
import AlJazeera from "../tv/AlJazeera.jsx";
import DWNews from "../tv/DWNews.jsx";
import ABCNews from "../tv/ABCNews.jsx";
import DisneyXD from "../tv/DisneyXD.jsx";
import CN from "../tv/CN.jsx";
import France24 from "../tv/France24.jsx";
import Wion from "../tv/Wion.jsx";
import Cgtn from "../tv/Cgtn.jsx";
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
        path: "/channelsTv",
        element: <ChannelsTv />,
      },
      {
        path: "/webSeries",
        element: <PrivateRoute><WebSeriesPage /></PrivateRoute>,
        loader: async () => {
          const res = await fetch("https://fab-tv-server.vercel.app/webseries");
          const seriesData = await res.json();
          return { seriesData };
        },
      },
      {
        path: "/seriesDetails/:seriesId",
        element: <PrivateRoute><SeriesDetails /></PrivateRoute>,
        loader: async ({params}) => {
          const res = await fetch(`https://fab-tv-server.vercel.app/episodes/${params.seriesId}`);
          const episodesData = await res.json();
          return { episodesData };
        },
      },
      {
        path: "/jamuna",
        element: (
          <PrivateRoute>
            <Jamuna />
          </PrivateRoute>
        ),
      },
      {
        path: "/somoy",
        element: (
          <PrivateRoute>
            <Somoy />
          </PrivateRoute>
        ),
      },
      {
        path: "/ekhon",
        element: (
          <PrivateRoute>
            <Ekhon />
          </PrivateRoute>
        ),
      },
      {
        path: "/rtv",
        element: (
          <PrivateRoute>
            <Rtv />
          </PrivateRoute>
        ),
      },
      {
        path: "/independent",
        element: (
          <PrivateRoute>
            <Independent />
          </PrivateRoute>
        ),
      },
      {
        path: "/atn",
        element: (
          <PrivateRoute>
            <AtnNews />
          </PrivateRoute>
        ),
      },
      {
        path: "/channeli",
        element: (
          <PrivateRoute>
            <Channeli />
          </PrivateRoute>
        ),
      },
      {
        path: "/channel24",
        element: (
          <PrivateRoute>
            <Channel24 />
          </PrivateRoute>
        ),
      },
      {
        path: "/ekattor",
        element: (
          <PrivateRoute>
            <Ekattor />
          </PrivateRoute>
        ),
      },
      {
        path: "/ntv",
        element: (
          <PrivateRoute>
            <NTV />
          </PrivateRoute>
        ),
      },
      {
        path: "/alJazeera",
        element: (
          <PrivateRoute>
            <AlJazeera />
          </PrivateRoute>
        ),
      },
      {
        path: "/france24",
        element: (
          <PrivateRoute>
            <France24 />
          </PrivateRoute>
        ),
      },
      {
        path: "/wion",
        element: (
          <PrivateRoute>
            <Wion />
          </PrivateRoute>
        ),
      },
      {
        path: "/dwNews",
        element: (
          <PrivateRoute>
            <DWNews />
          </PrivateRoute>
        ),
      },
      {
        path: "/cgtn",
        element: (
          <PrivateRoute>
            <Cgtn />
          </PrivateRoute>
        ),
      },
      {
        path: "/abcNews",
        element: (
          <PrivateRoute>
            <ABCNews />
          </PrivateRoute>
        ),
      },
      {
        path: "/natGeo",
        element: (
          <PrivateRoute>
            <NatGeo />
          </PrivateRoute>
        ),
      },
      {
        path: "/discoveryRex",
        element: (
          <PrivateRoute>
            <DiscoveryRex />
          </PrivateRoute>
        ),
      },
      {
        path: "/deshTv",
        element: (
          <PrivateRoute>
            <DeshTv />
          </PrivateRoute>
        ),
      },
      {
        path: "/news24",
        element: (
          <PrivateRoute>
            <News24 />
          </PrivateRoute>
        ),
      },
      {
        path: "/dbcNews",
        element: (
          <PrivateRoute>
            <DbcNews />
          </PrivateRoute>
        ),
      },
      {
        path: "/disneyXD",
        element: (
          <PrivateRoute>
            <DisneyXD />
          </PrivateRoute>
        ),
      },
      {
        path: "/cN",
        element: (
          <PrivateRoute>
            <CN />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/episodeDerails/:seriesId/:episode",
    element: <PrivateRoute><EpisodeDetails /></PrivateRoute>,
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
