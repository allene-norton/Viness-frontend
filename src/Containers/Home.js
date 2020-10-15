import React, { Component } from 'react'
import Logout from '../Components/Logout'
import SavedContainer from './SavedContainer'

class Home extends Component {

  render() {
    let user = this.props.currentUser
    return (
      <div className="home">
        <h2>Viness Home Page</h2>
        <h3>{user.display_name}</h3>
        <img src={user.image} alt={user.display_name} />
        <div className='saved-wines'>
          <SavedContainer saved={this.props.saved} />
        </div>
        <Logout />
      </div>
    );
  }
}

export default Home;
