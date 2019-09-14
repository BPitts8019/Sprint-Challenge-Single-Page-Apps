import React from "react";

export default function LocationCard({ name, type, dimension, residents }) {
   return (
      <div className="card ui">
         <h2>{name}</h2>
         <ul>
            <li>Type: {type}</li>
            <li>Dimension: {dimension}</li>
            <li>Residents: {residents.length}</li>
         </ul>
      </div>
   );
}
