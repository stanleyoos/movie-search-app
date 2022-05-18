import { PropTypes } from 'prop-types'
import { Link } from 'react-router-dom'

const MovieItem = ({ movie: { Title, Poster, Year, imdbID } }) => {
  return (
    <div className=" shadow-2xl card card-side bg-base-100 px-5  ">
      <figure>
        <img className="mx-5 rounded " src={Poster} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{Title}</h2>
        <p>{Year}</p>
        <div className="card-actions justify-end">
          <Link to={`/movies/${imdbID}`}>
            <button className="btn btn-ghost">Info</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

MovieItem.propTypes = {
  movie: PropTypes.object.isRequired,
}

export default MovieItem
