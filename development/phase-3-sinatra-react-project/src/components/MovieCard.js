import React from 'react'
import {NavLink} from 'react-router-dom'

const MovieCard = ({movie, director, deleteMovie}) => {

  return (
    <li>
      <NavLink to={`/movies/${movie.id}`} >{ movie.title}</NavLink> - {movie.genre} - <button onClick={ () => deleteMovie(movie.id)} >Delete</button>
    </li>
  )
}

export default MovieCard