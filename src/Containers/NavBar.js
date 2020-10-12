import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NavBar extends Component {
    render() {
        return (
            <div className="viness-menu">
                <nav>
                    <ul className='menuItems'>
                    <li name='home'><Link to="/home" >Home</Link></li>
                    <li name='recommendations'><Link to="/recommendations" >Get Recommendation</Link></li>
                    <li name='recommendations'><Link to="/wine_pairing" >Get Wine Pairing</Link></li>
                    <li name='recommendations'><Link to="/food_pairing" >Get Food Pairing</Link></li>
                    </ul>
                </nav>
            </div>
        )
    }
}