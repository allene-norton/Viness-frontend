import React, { Component } from 'react'
import { GoogleLogout } from 'react-google-login'

const client_id = '278233718971-h98g350r0u4bcu0at4blpjmaf42crgiv.apps.googleusercontent.com'

class Logout extends Component {

    onSuccess = () => {
        alert('Logout made sucessfully!')
        sessionStorage.setItem('isLoggedIn', false)
        sessionStorage.setItem('user', null)
        sessionStorage.setItem('saved', null)
        window.location.href = '/'
    }

    onFailure = () => {
        console.log('logout failed')
    }



    render() {

        return (
            <div>
                <GoogleLogout
                    clientId={client_id}
                    buttonText="Logout"
                    onLogoutSuccess={this.onSuccess}
                    onFailure={this.onFailure}
                    render={renderProps => (
                        <button onClick={renderProps.onClick} disabled={renderProps.disabled}>
                            sign out
                        </button>
                    )}
                ></GoogleLogout>
            </div>
        )
    }
}

export default Logout

