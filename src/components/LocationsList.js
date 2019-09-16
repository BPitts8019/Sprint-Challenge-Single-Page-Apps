import React, { useEffect, useState } from "react";
import axios from "axios";
import LocationCard from "./LocationCard";

export default function LocationsList() {
   // const [pageInfo, setPageInfo] = useState();
   const [locList, setLocList] = useState();

   useEffect(() => {
      axios
         .get("https://rickandmortyapi.com/api/location")
         .then(response => {
            // setPageInfo(response.data.info);
            setLocList(response.data.results);
         })
         .catch(error => {
            console.error('Server Error', error);
         });
   });

   return (
      <section className="character-list grid-view">
         {
            (locList && locList.length > 0)
            ? locList.map(location => <LocationCard key={location.id} {...location} />)
            : <span>Loading...</span>
         }
      </section>
   );
}
