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
      <div className="w-fit mx-auto flex justify-center items-center gap-3 bg-base-200 p-2 rounded shadow-sm">
        <Link to={"/login"} className="btn border-2 border-blue-400">
          Login
        </Link>
        <Link to={"/register"} className="btn border-2 border-black">
          Register
        </Link>
      </div>
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
