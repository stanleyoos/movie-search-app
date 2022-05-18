import { useContext } from 'react'
import MoviesContext from '../../context/movies/MoviesContext'
import Spinner from '../layout/Spinner'
import MovieItem from './MovieItem'
//const axios = require('axios')

const MovieResult = () => {
  const { movies, loading } = useContext(MoviesContext)

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
