import React from 'react'
import {NavLink} from 'react-router-dom'

const Nav = () => {
  return (
    <div>
      <ul>
        <li><NavLink to="/" >Dog House</NavLink></li>
        <li><NavLink to="/dogs" >Dogs</NavLink></li>
        <li><NavLink to="/deeds" >Deeds</NavLink></li>
        <li><NavLink to="/dogs/add" >Dog Sign Up!</NavLink></li>
      </ul>
    </div>
  )
}

export default Nav
