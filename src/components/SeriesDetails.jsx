import React from "react";
import { useLoaderData } from "react-router";
import EpisodeIcon from "./EpisodeIcon";

const SeriesDetails = () => {
  const { episodesData } = useLoaderData();
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Episodes</h1>
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
