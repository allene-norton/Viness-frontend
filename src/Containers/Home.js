import React, { Component } from 'react'
import Logout from '../Components/Logout'

class Home extends Component {
  render() {
    return (
      <div className="home">
        <h2>Viness Home Page</h2>
        {/* <h3>{JSON.parse(localStorage.getItem('user')).name}</h3> */}
        <Logout />
      </div>
    );
  }
}

export default Home;
