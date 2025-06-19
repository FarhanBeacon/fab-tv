import React from "react";
import { Link, useLoaderData } from "react-router";
import EpisodeIcon from "./EpisodeIcon";
import { IoHomeOutline } from "react-icons/io5";

const SeriesDetails = () => {
  const { episodesData } = useLoaderData();
  return (
    <div className="relative p-2 md:p-4">
      <h1 className="text-2xl md:text-3xl font-bold font-rancho mb-4">Watch All The Episodes Here</h1>
      <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-4">
        {episodesData.map((episode, index) => (
          <EpisodeIcon
            key={index}
            seriesId={episode.seriesId}
            episode={episode.episode}
            image={episode.image}
            title={episode.title}
            session={episode.session}
          />
        ))}
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

export default SeriesDetails;
