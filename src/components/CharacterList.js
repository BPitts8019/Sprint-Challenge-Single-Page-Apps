import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
   // TODO: Add useState to track data from useEffect
   const [pageInfo, setPageInfo] = useState();
   const [charList, setCharList] = useState();

   useEffect(() => {
      // TODO: Add API Request here - must run in `useEffect`
      //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
      axios
         .get('https://rickandmortyapi.com/api/character')
         .then(response => {
            setPageInfo(response.data.info);
            setCharList(response.data.results);
         })
         .catch(error => {
            console.error('Server Error', error);
         });
   }, []);

   return (
      <section className="character-list grid-view">
         {
            (charList && charList.length > 0)
            ? charList.map((character, index) => <CharacterCard key={index} character={character} />)
            : <span>Loading...</span>
         }
      </section>
   );
}
