import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import ChannelUI from "../components/ChannelUI";
import Loader from "../components/Loader";

const HomePage = () => {
  const { channelsData, loading } = useContext(AuthContext);
  return (
    <div>
      <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {loading ? (
          <Loader />
        ) : (
          channelsData?.map((channel, index) => (
            <ChannelUI
              key={index}
              type={"LiveTV"}
              chId={channel._id}
              name={channel.name}
              image={channel.image}
              navLink={channel.navLink}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default HomePage;
