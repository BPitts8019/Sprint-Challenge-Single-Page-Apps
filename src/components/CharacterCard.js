import React from "react";

export default function CharacterCard ({name, species, gender, status}) {
   return (
      <div className="card ui">
         <h2>{name}</h2>
         <ul>
            <li>Species: {species}</li>
            <li>Gender: {gender}</li>
            <li>Status: {status}</li>
         </ul>
      </div>
   );
}
