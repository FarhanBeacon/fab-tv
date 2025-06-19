import React, { useContext } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import ChannelUI from "../components/ChannelUI";
import Loader from "../components/Loader";

const WebSeriesPage = () => {
  const { seriesData } = useLoaderData();
  const { loading } = useContext(AuthContext);

  return (
    <div>
      <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {loading ? (
          <Loader />
        ) : (
          seriesData?.map((data, index) => (
            <ChannelUI
              key={index}
              type={"WebSeries"}
              chId={data._id}
              name={data.title}
              image={data.image}
              navLink={`/seriesDetails/${data.seriesId}`}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default WebSeriesPage;
