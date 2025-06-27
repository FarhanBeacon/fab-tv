import React from "react";
import { Link } from "react-router";

const EpisodeIcon = ({
  seriesId,
  title,
  session,
  episode,
  image,
  episodeId,
}) => {
  return (
    <div className="border rounded-lg p-2 shadow-md transition duration-300  active:scale-85 cursor-pointer">
      <Link to={`/episodeDerails/${seriesId}/${episodeId}`}>
        <div className="relative">
          <img
            src={image}
            alt={title}
            className="w-full h-fit object-cover rounded-md"
          />
          <div>
            {episode?.length > 0 ? (
              <span className="absolute top-6 right-1 bg-white text-black text-xs font-semibold px-2 py-1 rounded">
                {episode}
              </span>
            ) : (
              ""
            )}
          </div>
        </div>
        <h3 className="text-xs md:text-lg font-semibold mt-2">
          {title} {session}
        </h3>
      </Link>
    </div>
  );
};

export default EpisodeIcon;
