import React, { Component } from 'react'
import { GoogleLogout } from 'react-google-login'

const client_id = '278233718971-h98g350r0u4bcu0at4blpjmaf42crgiv.apps.googleusercontent.com'

class Logout extends Component {
    // state = {
    //     loggedOut: false
    // }

    // forceMyOwnLogout = (response) => {
    //     // cookie.remove('MyGoogleID', { path: '/' })
    //     if (window.gapi) {
    //         const auth2 = window.gapi.auth2.getAuthInstance()
    //         if (auth2 != null) {
    //             auth2.signOut().then(
    //                 auth2.disconnect().then(this.props.onLogoutSuccess)
    //             )
    //         }
    //     }
    //     this.forceUpdate()
    // }
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

    // signOut() {
    //     const auth2 = window.gapi.auth2.getAuthInstance()
    //     if (auth2 != null) {
    //         auth2.signOut().then(
    //             auth2.disconnect().then(this.props.onLogoutSuccess)
    //         )
    //     }
    //     else {
    //         this.props.onLogoutFailure()
    //     }
    // }

    // logout = () => {
    //     if (window.gapi) {
    //         const auth2 = window.gapi.auth2.getAuthInstance();
    //         auth2.signOut().then(() => {
    //             auth2.disconnect().then(() => {
    //                 console.log('logged out');
    //             });
    //             alert('Logout made sucessfully!')
    //             sessionStorage.setItem('isLoggedIn', false)
    //             sessionStorage.setItem('user', null)
    //             sessionStorage.setItem('saved', null)
    //             window.location.href = '/'
    //         });
    //     } else {
    //         console.log('connected')
    //         alert('Logout made sucessfully!')
    //         sessionStorage.setItem('isLoggedIn', false)
    //         sessionStorage.setItem('user', null)
    //         sessionStorage.setItem('saved', null)
    //         window.location.href = '/'
    //     }
    // };

    render() {
        // if (this.state.loggedOut) {
        //     return <Redirect to='/' />
        // }
        return (
            <div>
                <GoogleLogout
                    clientId={client_id}
                    buttonText="Logout"
                    onLogoutSuccess={this.onSuccess}
                    onFailure={this.onFailure}
                // onClick={this.signOut}
                ></GoogleLogout>
                {/* <button onClick={this.logout}>Log Out</button> */}
            </div>
        )
    }
}

export default Logout



// import React, { Component } from 'react'
// import { GoogleLogout } from 'react-google-login';

// const clientId = '278233718971-h98g350r0u4bcu0at4blpjmaf42crgiv.apps.googleusercontent.com'

// export default function Logout() {
//     const onSuccess = () => {
//         console.log('logged out')
//                 // alert('Logout made sucessfully!')
//                 // sessionStorage.setItem('isLoggedIn', false)
//                 // sessionStorage.setItem('user', null)
//                 // sessionStorage.setItem('saved', null)
//                 // window.location.href = '/'
//             }
//         return (<GoogleLogout
//             clientId={clientId}
//             buttonText="Logout"
//             onLogoutSuccess={onSuccess}
//             // onClick={onSuccess}
//         >
//         </GoogleLogout>)
// }