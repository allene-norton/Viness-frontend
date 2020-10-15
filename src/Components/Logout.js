import React, { Component } from 'react'
import { GoogleLogout } from 'react-google-login'

const clientId = '278233718971-h98g350r0u4bcu0at4blpjmaf42crgiv.apps.googleusercontent.com'

class Logout extends Component {
    // state = {
    //     loggedOut: false
    // }
    onSuccess = () => {
        alert('Logout made sucessfully!')
        sessionStorage.setItem('isLoggedIn', false)
        sessionStorage.setItem('user', null)
        // sessionStorage.setItem('saved', null)
        window.location.href = '/'
    }

    onFailure = () => {
        console.log('logout failed')
    }

    render() {
        // if (this.state.loggedOut) {
        //     return <Redirect to='/' />
        // }
        return (
            <div>
                <GoogleLogout
                    clientId={clientId}
                    buttonText="Logout"
                    onLogoutSuccess={this.onSuccess}
                    onFailure={this.onFailure}
                ></GoogleLogout>
            </div>
        )
    }
}

export default Logout
