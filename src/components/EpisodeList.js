import React, { useEffect, useState } from "react";
import axios from "axios";
import EpisodeCard from "./EpisodeCard.js";

export default function CharacterList() {
   // const [pageInfo, setPageInfo] = useState();
   const [episodeList, setEpisodeList] = useState();

   useEffect(() => {
      axios
         .get("https://rickandmortyapi.com/api/episode")
         .then(response => {
            // setPageInfo(response.data.info);
            setEpisodeList(response.data.results);
         })
         .catch(error => {
            console.error('Server Error', error);
         });
   }, []);

   return (
      // <section className="character-list grid-view">
      <section className="grid-view">
         {
            (episodeList && episodeList.length > 0)
            ? episodeList.map(episode => <EpisodeCard key={episode.id} {...episode} />)
            : <span>Loading...</span>
         }
      </section>
   );
}
