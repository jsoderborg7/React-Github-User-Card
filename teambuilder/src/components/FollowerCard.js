import React from 'react';
import {Card, Image} from 'semantic-ui-react';
import styled from 'styled-components';

const FollowerCard = (props) =>{
  return(
    <StyledFollowerCard>
      <div>
        <Card className="cardContainer">
          <Image className="pics" src={props.photo} />
          <Card.Content>
            <Card.Header className="name">{props.name}</Card.Header>
            <Card.Meta>{props.location}</Card.Meta>
          </Card.Content>
        </Card>
      </div>
    </StyledFollowerCard>
  )
}

const StyledFollowerCard = styled.div `
.cardContainer{
  margin: 5%;
  box-shadow: 0 0 2px 2px;
  padding: 5%;
  background-color: #02b1b5;
  border-radius: 10px; 
  font-size: 3rem;
  font-weight: bold;
  color: #583c75;
}

.pics{
  width: 90%;
  margin: auto;
  border-radius: 10px;
}
`;

export default FollowerCard;