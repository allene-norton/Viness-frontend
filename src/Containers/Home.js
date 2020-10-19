import React, { Component } from 'react'
// import Logout from '../Components/Logout'
import SavedContainer from './SavedContainer'
class Home extends Component {


  render() {
    let user = this.props.currentUser
    return (
      <div className="home">
        {/* <h2>Viness Home Page</h2> */}
        {/* <div className='profile'>
          <div className='profile-info'>
            <h3>{user.display_name}</h3>
            <img src={user.image} alt={user.display_name} />
          </div>
        </div> */}
        <div className='saved-wines'>
          <SavedContainer
            postComment={this.props.postComment} 
            saved={this.props.saved} 
            deleteWine={this.props.deleteWine}
            setWineInfo={this.props.setWineInfo} 
            />
        </div>
        {/* <div>
          <Logout />
        </div> */}
      </div>
    );
  }
}

export default Home;
