import React from 'react';
import {Card, Image} from 'semantic-ui-react';

const UserCard = (props) =>{
  return(
    <Card>
      <Card.Header>{props.user.name}</Card.Header>
    </Card>
  )
}

export default UserCard;