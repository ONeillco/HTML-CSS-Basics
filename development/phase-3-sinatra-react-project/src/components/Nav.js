import React from 'react'
import { NavLink } from 'react-router-dom'


const Nav = () => {
  return (
    <div>
      <ul>
        <li><NavLink to="">Home</NavLink></li>
        <li><NavLink to="/movies">Movies</NavLink></li>
        <li><NavLink to="/directors">Directors</NavLink></li>
        <li><NavLink to="/directors/new">Create Director</NavLink></li>
      </ul>
    </div>
  )
}

export default Nav
