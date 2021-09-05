import React from 'react'
import {NavLink} from 'react-router-dom'

const DogDeeds = ({dog}) => {
  return (
    <div>
    <li>
     <NavLink to={`/dog/${dog.id}`} > {dog.name}</NavLink>
    </li>
    </div>
  )
}

export default DogDeeds
