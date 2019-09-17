import React from "react";
import {Card, Image, Icon, Label} from "semantic-ui-react";

export default function CharacterCard ({name, image, species, status, location, episode, origin}) {
   return (
      <Card>
         <Image src={image} wrapped ui={false} />
         <Card.Content>
            <Card.Header>{name}</Card.Header>
            <Card.Meta>{species}: {status}</Card.Meta>
            <Card.Description>Location: {location.name}</Card.Description>
            <Card.Description>Origin: {origin.name}</Card.Description>
         </Card.Content>
         <Card.Content extra className="right aligned">
            <Label>
               <Icon className="video" />
               {episode.length}
            </Label>
         </Card.Content>
      </Card>
      // <div className="card ui">
      //    <h2>{name}</h2>
      //    <ul>
      //       <li>Species: {species}</li>
      //       <li>Gender: {gender}</li>
      //       <li>Status: {status}</li>
      //    </ul>
      // </div>
   );
}
