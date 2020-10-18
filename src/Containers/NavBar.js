import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NavBar extends Component {
    render() {
        return (
            <div className="viness-menu">
                <nav role="navigation">
                    <div id="menuToggle">

                        <input type="checkbox" />


                        <span></span>
                        <span></span>
                        <span></span>


                        <ul id="menu">
                        <li name='home'><Link to="/home" ><button>Home</button></Link></li>
                        <li name='recommendations'><Link to="/recommendations" ><button>Get Recommendation</button></Link></li>
                        <li name='recommendations'><Link to="/wine_pairing" ><button>Get Wine Pairing</button></Link></li>
                        <li name='recommendations'><Link to="/food_pairing" ><button>Get Food Pairing</button></Link></li>
                        </ul>
                    </div>
                    {/* <ul className='menuItems'>
                        <li name='home'><Link to="/home" >Home</Link></li>
                        <li name='recommendations'><Link to="/recommendations" >Get Recommendation</Link></li>
                        <li name='recommendations'><Link to="/wine_pairing" >Get Wine Pairing</Link></li>
                        <li name='recommendations'><Link to="/food_pairing" >Get Food Pairing</Link></li>
                    </ul> */}
                </nav>
            </div>
        )
    }
}

