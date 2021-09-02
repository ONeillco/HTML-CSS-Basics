import React, {useEffect, useState} from 'react'
import {useParams, NavLink} from 'react-router-dom'


const MovieDetails = () => {
  const [movie, setMovie] = useState(null)
  const [ loading, setLoading ] = useState(true)
  const {id} = useParams()

  useEffect(async () => {
    const resp = await fetch(`http://localhost:9393/movies/${id}`)
    const data = await resp.json()
    setMovie(data)
    setLoading(false)
  }, [])

  if(loading) {
    return <h1>Loading...</h1>
  } else {

    return (
      <div>
        <h1>{movie.title}</h1>
       <p>By: <NavLink to={movie.director.id} >{movie.director}</NavLink></p>
       <p>Genre: {movie.genre} </p>
      </div>
    )
  }

}

export default MovieDetails