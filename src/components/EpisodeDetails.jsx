import React, { useEffect, useState } from 'react';
import TVUI from './TVUI';
import { useParams } from 'react-router';
import Loader from './Loader';

const EpisodeDetails = () => {
    const [ seriesData, setSeriesData ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    const { seriesId, episode } = useParams();

    // Fetch SeriesData
    useEffect(()=>{
        fetch(`https://fab-tv-server.vercel.app/episodes/${seriesId}`)
        .then(res=> res.json())
        .then(result=>{
            setSeriesData(result);
            setLoading(false);
        })
    },[seriesId]);

    
    if(loading){
        return <Loader />
    }

    const currentEpisode = seriesData.find(series=> series.seriesId === seriesId && series.episode === episode);
    
    const otherEpisode = seriesData.filter(series=> series.seriesId === seriesId && series.episode != episode);

    const seriesTitle = currentEpisode?.title +" "+ currentEpisode?.session +" "+ currentEpisode.episode;

    return (<div>
      <TVUI
        type={"WebSeries"}
        otherChannel={otherEpisode}
        chName={seriesTitle}
        chUrl={currentEpisode?.source}
      />
    </div>);
};

export default EpisodeDetails;