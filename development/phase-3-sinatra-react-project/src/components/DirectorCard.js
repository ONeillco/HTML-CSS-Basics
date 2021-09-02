import React from 'react'
import {NavLink} from 'react-router-dom'

const DirectorCard = ({director}) => {
  return (
    <li>
      <NavLink to={`/directors/${director.id}`} >{ director.name}</NavLink>
    </li>
  )
}

export default DirectorCard
