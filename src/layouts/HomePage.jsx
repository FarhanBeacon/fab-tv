import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Banner from "../components/Banner";
import ChannelUI from "../components/ChannelUI";
import { Link } from "react-router";

const HomePage = () => {
  const { channelsData } = useContext(AuthContext);
  return (
    <div>
      <Banner />
      <nav className="navbar w-fit mx-auto flex justify-center items-center gap-3 p-2 bg-base-200 rounded drop-shadow-[0_0_3px_rgba(0,0,0,0.25)] m-2">
        <Link to={"/login"} className="btn shadow-none border-2 border-blue-400">
          Login
        </Link>
        <Link to={"/register"} className="btn shadow-none border-2 border-black">
          Register
        </Link>
      </nav>
      <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {channelsData.map((channel, index) => (
          <ChannelUI
            key={index}
            name={channel.name}
            image={channel.image}
            navLink={channel.navLink}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
