import React from "react";
import { useLoaderData } from "react-router";
import EpisodeIcon from "./EpisodeIcon";

const SeriesDetails = () => {
  const { episodesData } = useLoaderData();
  return (
    <div className="p-2 md:p-4">
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
    </div>
  );
};

export default SeriesDetails;
