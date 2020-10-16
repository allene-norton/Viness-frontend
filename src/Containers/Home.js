import React, { Component } from 'react'
import Logout from '../Components/Logout'
import { GoogleLogout } from 'react-google-login';
import SavedContainer from './SavedContainer'
const clientId = '278233718971-h98g350r0u4bcu0at4blpjmaf42crgiv.apps.googleusercontent.com'
class Home extends Component {

  onSuccess = () => {
    console.log('logged out')
    alert('Logout made sucessfully!')
    sessionStorage.setItem('isLoggedIn', false)
    sessionStorage.setItem('user', null)
    sessionStorage.setItem('saved', null)
    window.location.href = '/'
  }

  onFailure = () => {
    console.log('logout failed')
  }

  logout = () => {
    if (window.gapi) {
      const auth2 = window.gapi.auth2.getAuthInstance();
      auth2.signOut().then(() => {
        auth2.disconnect().then(() => {
          console.log('logged out');
        });
        alert('Logout made sucessfully!')
        sessionStorage.setItem('isLoggedIn', false)
        sessionStorage.setItem('user', null)
        sessionStorage.setItem('saved', null)
        window.location.href = '/'
      });
    } else {
      console.log('connected')
    }
  };

  render() {
    let user = this.props.currentUser
    return (
      <div className="home">
        <h2>Viness Home Page</h2>
        <h3>{user.display_name}</h3>
        <img src={user.image} alt={user.display_name} />
        <div className='saved-wines'>
          <SavedContainer postComment={this.props.postComment} saved={this.props.saved} deleteWine={this.props.deleteWine} />
        </div>
        <div>
          <Logout />
          {/* <button onClick={this.logout}>Log Out</button> */}
          {/* <GoogleLogout
            clientId={clientId}
            buttonText="Logout"
            onLogoutSuccess={this.onSuccess}
            onFailure={this.onFailure}
          // onClick={onSuccess}
          >
          </GoogleLogout> */}
        </div>
      </div>
    );
  }
}

export default Home;
