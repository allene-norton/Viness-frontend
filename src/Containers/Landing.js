import React, { Component } from 'react'
import vid from '../images/wine_seq2.mp4'
import vlogo from '../images/vlogo.png'

class Landing extends Component {


    render() {
        return (
            <div className="landing">
                <div className="videoContainer">
                    <div className="overlay"></div>
                    <video autoPlay loop muted>
                        <source src={vid} type="video/mp4"></source>
                        {/* <source src="http://inserthtml.com/demos/javascript/background-videos/flowers.webm" type="video/webm" /> */}
                    </video>
                    <div className='logo'>
                        <img src={vlogo} alt='logo' />
                    </div>
                </div>
            </div>
        );
    }
}

export default Landing;
