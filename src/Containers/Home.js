import React, { Component } from 'react'
import Logout from '../Components/Logout'

class Home extends Component {
  render() {
    let user = JSON.parse(localStorage.getItem('user'))
    return (
      <div className="home">
        <h2>Viness Home Page</h2>
        <h3>{user.name}</h3>
        <img src={user.imageUrl} alt={user.name} />
        <div className='saved-wines'>
          <h3>My saved wines:</h3>
        </div>
        <Logout />
      </div>
    );
  }
}

export default Home;
