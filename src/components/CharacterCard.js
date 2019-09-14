import React from "react";

export default function CharacterCard ({character}) {
   return (
      <div className="card ui">
         <h2>{character.name}</h2>
         <ul>
            <li>Species: {character.species}</li>
            <li>Gender: {character.gender}</li>
            <li>Status: {character.status}</li>
         </ul>
      </div>
   );
}
