import React, {useEffect, useState} from 'react'
import MovieCard from './MovieCard'

const MovieList = () => {
  
  const [ movies, setMovies ] = useState([])
  const [ loading, setLoading ] = useState(true)

  useEffect(async () => {
    const resp = await fetch('http://localhost:9393/movies')
    const data = await resp.json();
    setMovies(data);
    setLoading(false);
  }, [])

  const deleteMovie = async id => {
    const resp = await fetch(`http://localhost:9393/movies/${id}`, {method: "DELETE"} )
    const data = await resp.json();

    removeMovie(id)
  }
  
  const removeMovie = id => {
    setMovies([...movies.filter(movie => movie.id != id)])

  }

  const movieCards = movies.map((movie, index) => <MovieCard key={index} movie={movie} director={movie.director} deleteMovie={deleteMovie} />)

return (
  <div>
    <h1>Movies</h1>
    <p>Create Movie</p>
    {movieCards}
  </div>
)
}


export default MovieList
