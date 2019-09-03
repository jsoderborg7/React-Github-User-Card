import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import UserCard from './components/UserCard';
import FollowerCard from './components/FollowerCard';
import styled from 'styled-components';

export default class App extends Component {

  constructor(){
    super();
    this.state = {
      userData: [],
      userFollowers: []
    }
  }

  componentDidMount(){
    this.getUser();
    this.getFollowers();
  };

  getUser = () =>{
    axios
      .get(`https://api.github.com/users/jsoderborg7`)
      .then(res =>{
        console.log(res.data);
        const userData = res.data;
        this.setState({userData})
      })
      .catch(err =>{
        console.log(err);
      })
  }

  getFollowers = () =>{
    axios
      .get(`https://api.github.com/users/jsoderborg7/followers`)
      .then(res =>{
        console.log(res.data);
        const userFollowers = res.data;
        this.setState({userFollowers})
      })
      .catch(err =>{
        console.log(err);
      })
  }

  render() {
    return (
      <StyledApp>
        <div className="App">
          <div className="userCard">
            <UserCard user={this.state.userData} />
          </div>
          <div className="followerCards">
            {this.state.userFollowers.map(follower =>{
              return <FollowerCard
              name={follower.login}
              photo={follower.avatar_url}
              location={follower.location}
              key={follower.id}
            />
            })}
          </div>
        </div>
      </StyledApp>
    );
  }
}

const StyledApp = styled.div `
  display: flex;
  flex-direction: column;

  .userCard{
    width: 50%;
    margin: auto;
  }

  .followerCards{
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }
`;
