import React from "react";
import {Card, Icon, Image, Label} from "semantic-ui-react";

export default function LocationCard({ name, type, dimension, residents }) {
   return (
      <Card>
         <Card.Content>
            <Card.Header>{name}</Card.Header>
            <Card.Description>{type} - {dimension}</Card.Description>
         </Card.Content>
         <Card.Content className="extra right aligned">
            <Label>
               <Icon className="user" />
               {residents.length}
            </Label>
         </Card.Content>
      </Card>


      // <div className="card ui">
      //    <h3 className="ui">{name}</h3>
      //    <h5></h5>
      // </div>
   );
}
