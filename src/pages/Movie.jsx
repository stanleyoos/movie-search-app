import { useContext, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import MoviesContext from '../context/movies/MoviesContext'
import Spinner from '../components/layout/Spinner'
import { getMovie } from '../context/movies/MoviesActions'

const Movie = () => {
  const { movie, loading, dispatch } = useContext(MoviesContext)
  const params = useParams()

  const {
    Title,
    Year,
    Released,
    Runtime,
    Genre,
    Director,
    Awards,
    Poster,
    Metascore,
    imdbRating,
    BoxOffice,
  } = movie

  useEffect(() => {
    const getMovieData = async () => {
      dispatch({ type: 'SET_LOADING' })
      const movie = await getMovie(params.id)
      dispatch({ type: 'GET_MOVIE', payload: movie })
    }
    getMovieData()
  }, [dispatch, params.id])
  //
  if (loading) {
    return <Spinner />
  } else {
    return (
      <div className="w-full mx-auto lg:w-10/12">
        <div className="mb-4 ml-10 mt-10">
          <Link to="/" className="btn btn-ghost">
            Back To Search
          </Link>
        </div>

        <div className=" mt-10 grid grid-cols-1 gap-10 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1">
          <figure>
            <img className="mx-5 rounded " src={Poster} alt="Movie" />
          </figure>
          <div className=" shadow-2xl card card-side bg-base-100 px-5  ">
            <div className="card-body">
              <h1 className="card-title">{Title}</h1>
              <p>{Year}</p>
              <p>Genre: {Genre}</p>
              <p>Released: {Released}</p>
              <p>Director: {Director}</p>
              <p>Runtime: {Runtime}</p>
            </div>
          </div>
          <div className=" shadow-2xl card card-side bg-base-100 px-5  ">
            <div className="card-body">
              <h2 className="card-title">{Awards}</h2>
            </div>
          </div>
          <div className=" shadow-2xl card card-side bg-base-100 px-5  ">
            <div className="card-body">
              <p>Metascore: {Metascore}</p>
              <p>imdbRating: {imdbRating}</p>
              <p>BoxOffice: {BoxOffice}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Movie
