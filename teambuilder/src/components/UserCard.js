import React from 'react';
import {Card, Image} from 'semantic-ui-react';
import styled from 'styled-components';

const UserCard = (props) =>{
  return(
    <StyledUserCard>
      <div>
        <Card className="cardContainer">
          <Image className="pic" src={props.user.avatar_url}  />
          <Card.Content>
            <Card.Header className="name">{props.user.name}</Card.Header>
            <Card.Meta>{props.user.location}</Card.Meta>
            <Card.Description>{props.user.bio}</Card.Description>
          </Card.Content>
        </Card>
      </div>
    </StyledUserCard>
  )
}

const StyledUserCard = styled.div `
.cardContainer{
  margin: 5%;
  box-shadow: 0 0 2px 2px;
  padding: 5%;
  background-color: #583c75;
  border-radius: 10px; 
  font-size: 1.8rem;
  color: #02b1b5;
}

.pic{
  width: 90%;
  margin: auto;
  border-radius: 10px;
}

.name{
  font-weight: bold;
  font-size: 4rem;
}
`;

export default UserCard;