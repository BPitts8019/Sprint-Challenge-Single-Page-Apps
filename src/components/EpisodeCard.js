import React from "react";
import {Card, Label, Icon} from "semantic-ui-react";

export default function EpisodeCard ({name, air_date, episode, characters}) {
   return (
      <Card>
         <Card.Content>
            <Card.Header>{name}</Card.Header>
            <Card.Meta className="date">{air_date}</Card.Meta>
            <Card.Meta>{episode}</Card.Meta>
         </Card.Content>
         <Card.Content extra className="right aligned">
            <Label>
               <Icon className="user" />
               {characters.length}
            </Label>
         </Card.Content>
      </Card>
   );
}
