import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import HomePage from "./components/HomePage/HomePage.jsx";
import Somoy from "./components/Somoy/Somoy.jsx";
import Jamuna from "./components/Jamuna/Jamuna.jsx";
import Ekhon from "./components/Ekhon/Ekhon.jsx";
import Rtv from "./components/Rtv/Rtv.jsx";
import Independent from "./components/Independent/Independent.jsx";
import AtnNews from "./components/AtnNews/AtnNews.jsx";
import Channeli from "./components/Channeli/Channeli.jsx";
import Channel24 from "./components/Channel24/Channel24.jsx";
import Ekattor from "./components/Ekattor/Ekattor.jsx";
import NTV from "./components/NTV/NTV.jsx";
import TSports from "./components/TSports/TSports.jsx";
import DeshTv from "./components/DeshTv/DeshTv.jsx";
import News24 from "./components/News24/News24.jsx";
import DbcNews from "./components/DbcNews/DbcNews.jsx";
import NatGeo from "./components/NatGeo/NatGeo.jsx";
import DiscoveryRex from "./components/DiscoveryRex/DiscoveryRex.jsx";
import PowerOfficial from "./components/PowerOfficial/PowerOfficial.jsx";
import AlJazeera from "./components/AlJazeera/AlJazeera.jsx";
import DWNews from "./components/DWNews/DWNews.jsx";
import ABCNews from "./components/ABCNews/ABCNews.jsx";
import DisneyXD from "./components/DisneyXD/DisneyXD.jsx";
import CN from "./components/CN/CN.jsx";
import France24 from "./components/France24/France24.jsx";
import Wion from "./components/Wion/Wion.jsx";
import Cgtn from "./components/Cgtn/Cgtn.jsx";
import ChannelsTv from "./components/ChannelsTv/ChannelsTv.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: () => fetch("/data.json"),
    children: [
      {
        path: "/",
        element: <HomePage />,
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
        path: "/channelsTv",
        element: <ChannelsTv />,
      },
      {
        path: "/tSports",
        element: <TSports />,
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
      {
        path: "/powerOfficial",
        element: <PowerOfficial />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
