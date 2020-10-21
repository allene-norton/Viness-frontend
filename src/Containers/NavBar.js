import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Logout from '../Components/Logout'
import vlogo from '../images/vlogo_small_1.png'


export default class NavBar extends Component {
    handleClick = () => {
        this.props.getUserWines()
    }
    render() {
        let user = this.props.currentUser
        return (
            <div className="viness-menu">
                    <div id="menuToggle">
                    <img src={vlogo} width='165px'/>
                        <ul id="menu">
                            <li>{user.display_name}</li>
                            <li><img src={user.image} alt={user.display_name} /></li>
                        <li name='home'><Link to="/home" ><button onClick={this.handleClick}>home</button></Link></li>
                        <li name='recommendations'><Link to="/recommendations" ><button>wine recommendation</button></Link></li>
                        <li name='recommendations'><Link to="/wine_pairing" ><button>wine pairing</button></Link></li>
                        <li name='recommendations'><Link to="/food_pairing" ><button>meal pairing</button></Link></li>
                        <li name='recommendations'><Logout /></li>
                        </ul>
                    </div>
                    {/* <ul className='menuItems'>
                        <li name='home'><Link to="/home" >Home</Link></li>
                        <li name='recommendations'><Link to="/recommendations" >Get Recommendation</Link></li>
                        <li name='recommendations'><Link to="/wine_pairing" >Get Wine Pairing</Link></li>
                        <li name='recommendations'><Link to="/food_pairing" >Get Food Pairing</Link></li>
                    </ul> */}
            </div>
        )
    }
}

