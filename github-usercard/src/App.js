import React from 'react';
import axios from 'axios';
import './App.css';
import 'typeface-roboto';

import UserCard from './components/UserCard.jsx';
import FollowerCard from './components/FollowerCard.jsx';
import Divider from '@material-ui/core/Divider';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: 'seabayley',
      apiUrl: 'https://api.github.com/users/',
      userData: null,
      followerData: null,
    }
  }

  componentDidMount() {
    this.getUserData();
    this.getFollowerData();
  }

  getUserData() {
    let url = (this.state.apiUrl + this.state.userName);
    axios.get(url)
      .then(res => {
        this.setState({ userData: res.data })
      })
      .catch(err => {
        console.log(err)
      })
  }

  getFollowerData() {
    let url = (this.state.apiUrl + this.state.userName + '/followers')
    axios.get(url)
      .then(res => {
        this.setState({ followerData: res.data })
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return !this.state.userData || !this.state.followerData ? <p>Loading...</p> :
      (
        <div>
          <UserCard data={this.state.userData} />
          <Divider />
          {this.state.followerData.map(follower => {
            return <FollowerCard data={follower} />
          })}
        </div>
      );
  }
}

export default App;
