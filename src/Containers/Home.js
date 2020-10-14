import React, { Component } from 'react'
import Logout from '../Components/Logout'
import SavedContainer from './SavedContainer'

class Home extends Component {

  render() {
    let user = JSON.parse(sessionStorage.getItem('user'))
    return (
      <div className="home">
        <h2>Viness Home Page</h2>
        <h3>{user.name}</h3>
        <img src={user.imageUrl} alt={user.name} />
        <div className='saved-wines'>
          <SavedContainer saved={this.props.saved} />
        </div>
        <Logout />
      </div>
    );
  }
}

export default Home;
