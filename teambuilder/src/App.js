import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import UserCard from './components/UserCard';

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
      <div className="App">
        <UserCard user={this.state.userData} />
      </div>
    )
  }
}
