import React, {useEffect, useState} from 'react'
import {useParams, NavLink} from 'react-router-dom'
import MovieCard from './MovieCard'

const DirectorDetails = () => {
  const [director, setDirector] = useState(null)
  const [ loading, setLoading ] = useState(true)
  const {id} = useParams()

  useEffect(async () => {
    const resp = await fetch(`http://localhost:9393/directors/${id}`)
    const data = await resp.json()
    setDirector(data)
    setLoading(false)
  }, [])

  if(loading) {
    return <h1>Loading...</h1>
  } else {

    const deleteMovie = async id => {
      const resp = await fetch(`http://localhost:9393/movies/${id}`, {method: "DELETE"} )
      const data = await resp.json();
  
      removeMovie(id)
    }
    
    const removeMovie = id => {
      setDirector({
        ...director, 
        movies: director.movies.filter(movie => movie.id != id)
      })
  
    }

    const movieCards = director.movies.map((movie, index) => <MovieCard key={index} movie={movie} director={director} deleteMovie={deleteMovie} />)
    return (
      <div>
        <h1>{director.name}</h1>
        <p><NavLink to={`/directors/${director.id}/edit`} >Edit Author</NavLink></p>
        <p><NavLink to={`/directors/${director.id}/movies/new`} >Create Movie</NavLink></p>
        {movieCards}
      </div>
    )
  }

}

export default DirectorDetails
