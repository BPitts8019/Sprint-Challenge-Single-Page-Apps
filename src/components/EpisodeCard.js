import React from "react";

export default function EpisodeCard ({name, air_date, epidsode, characters}) {
   return (
      <div className="card ui">
         <h2>{name}</h2>
         <ul>
            <li>Air Date: {air_date}</li>
            <li>Code: {epidsode}</li>
            <li>Characters: {characters.length}</li>
         </ul>
      </div>
   );
}
