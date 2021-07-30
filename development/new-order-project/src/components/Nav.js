import React from 'react'
import {NavLink} from 'react-router-dom'
import '../App.css';

const Nav = () => {
const navStyle = {
color: 'black'
}

    return (
        <nav>
            <h3>Logo</h3>
            <ul className="nav-links">
                <NavLink style={navStyle} to='/home'>
                <li>Home</li>
                </NavLink>
                
                <NavLink style={navStyle} to='/about'>
                <li>About</li>
                </NavLink>

                <NavLink style={navStyle} to='/recipes' >
                <li>Recipes</li>
                </NavLink>

            </ul>
        </nav>
    )
}

export default Nav
