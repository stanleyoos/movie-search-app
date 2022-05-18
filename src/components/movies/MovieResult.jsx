import { useEffect, useState } from 'react'
import Spinner from '../layout/Spinner'
import MovieItem from './MovieItem'
//const axios = require('axios')

const MovieResult = () => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchMovies()
  }, [])

  const fetchMovies = async () => {
    const response = await fetch(
      'http://www.omdbapi.com?apikey=56769d04&s=toy story'
    )
    const data = await response.json()
    setMovies(data.Search)
    setLoading(false)
  }
  if (loading) {
    return <Spinner />
  } else {
    return (
      <div className="mt-10 grid grid-cols-1 gap-20 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1">
        {movies.map((movie) => (
          <MovieItem key={movie.imdbID} movie={movie} />
        ))}
      </div>
    )
  }
}

export default MovieResult
