import React, {Component} from 'react';
import './App.css';
import axios from 'axios';

export default class App extends Component {

  constructor(){
    super();
    this.state = {
      userData: [],
      userFollowers: []
    };
  }

  componentDidMount(){
    this.getUsers();
    this.getFollowers();
  };

  getUsers = () =>{
    axios
      .get('https://api.github.com/user/jsoderborg7')
      .then(res => this.setState({userData: res.data}))
      .catch(error => {console.log(error);});
  };

  getFollowers = () =>{
    axios
      .get('https://api.github.com/user/jsoderborg7/followers')
      .then(res => this.setState({userFollowers: res.data}))
      .catch(error => {console.log(error);});
  };

  render() {
    return (
      <div className="App">
        
      </div>
    )
  }
}
