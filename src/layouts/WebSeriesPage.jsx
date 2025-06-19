import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import ChannelUI from "../components/ChannelUI";
import Loader from "../components/Loader";
import { IoHomeOutline } from "react-icons/io5";

const WebSeriesPage = () => {
  const { seriesData } = useLoaderData();
  const { loading } = useContext(AuthContext);

  return (
    <div className="relative">
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
      {/* Floating Home Button */}
      <div className="sticky bottom-4 flex justify-end p-4">
        <Link to={"/"}>
          <button className="w-12 h-12 flex justify-center items-center text-2xl font-bold text-white bg-black border rounded-full transition transform hover:bg-gray-800 active:scale-90">
            <IoHomeOutline />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default WebSeriesPage;
