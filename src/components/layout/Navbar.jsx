import PropTypes from 'prop-types'
import { BiMoviePlay } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const Navbar = ({ title }) => {
  return (
    <nav className="navbar mb-15 shadow-lg bg-gray-700 text-neutral-content">
      <div className="container mx-auto">
        <div className="flex-none px-2 mx-2">
          <BiMoviePlay className="inline pr-2 text-3xl" />
          <Link to="/" className="text-lg font-bold align-middle">
            {title}
          </Link>
        </div>

        <div className="flex-1 px-2 mx-2">
          <div className="flex justify-end">
            <Link to="/" className="btn btn-ghost btn-sm rounded-btn">
              Home
            </Link>
            <Link to="/about" className="btn btn-ghost btn-sm rounded-btn">
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

Navbar.defaultProps = {
  title: 'Movie search',
}

Navbar.propTypes = {
  title: PropTypes.string,
}

export default Navbar
