import React from 'react';
import {Card, Image} from 'semantic-ui-react';

const FollowerCard = (props) =>{
  return(
    <Card>
      <Image src={props.photo} />
      <Card.Content>
        <Card.Header>{props.name}</Card.Header>
        <Card.Meta>{props.location}</Card.Meta>
        <Card.Description>{props.bio}</Card.Description>
      </Card.Content>
    </Card>
  )
}

export default FollowerCard;