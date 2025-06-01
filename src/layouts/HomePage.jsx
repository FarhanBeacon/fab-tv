import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Banner from "../components/Banner";
import ChannelUI from "../components/ChannelUI";
import Navbar from "../components/Navbar";

const HomePage = () => {
  const { channelsData, user } = useContext(AuthContext);
  const name = user?.displayName?.split(" ")[0];
  return (
    <div>
      <Banner />
      {user ? (
        <div className="w-full flex justify-between items-center px-4">
          <div>
            <h3 className="text-3xl font-semibold">
              Hello!{" "}
              <span className="text-blue-400">
                {name?.charAt(0).toUpperCase() + name?.slice(1)}
              </span>
            </h3>
            <p className="text-gray-600">Welcome To Fab TV</p>
          </div>
          <Navbar />
        </div>
      ) : (
        <div className="w-fit mx-auto">
          <Navbar />
        </div>
      )}
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
