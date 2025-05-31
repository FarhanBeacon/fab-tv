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
        path: "/jamuna",
        element: <Jamuna />,
      },
      {
        path: "/somoy",
        element: <Somoy />,
      },
      {
        path: "/ekhon",
        element: <Ekhon />,
      },
      {
        path: "/rtv",
        element: <Rtv />,
      },
      {
        path: "/independent",
        element: <Independent />,
      },
      {
        path: "/atn",
        element: <AtnNews />,
      },
      {
        path: "/channeli",
        element: <Channeli />,
      },
      {
        path: "/channel24",
        element: <Channel24 />,
      },
      {
        path: "/ekattor",
        element: <Ekattor />,
      },
      {
        path: "/ntv",
        element: <NTV />,
      },
      {
        path: "/alJazeera",
        element: <AlJazeera />,
      },
      {
        path: "/france24",
        element: <France24 />,
      },
      {
        path: "/wion",
        element: <Wion />,
      },
      {
        path: "/dwNews",
        element: <DWNews />,
      },
      {
        path: "/cgtn",
        element: <Cgtn />,
      },
      {
        path: "/abcNews",
        element: <ABCNews />,
      },
      {
        path: "/natGeo",
        element: <NatGeo />,
      },
      {
        path: "/discoveryRex",
        element: <DiscoveryRex />,
      },
      {
        path: "/deshTv",
        element: <DeshTv />,
      },
      {
        path: "/news24",
        element: <News24 />,
      },
      {
        path: "/dbcNews",
        element: <DbcNews />,
      },
      {
        path: "/disneyXD",
        element: <DisneyXD />,
      },
      {
        path: "/cN",
        element: <CN />,
      },
    ],
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
