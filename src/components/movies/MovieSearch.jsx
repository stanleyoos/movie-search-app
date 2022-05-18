import { useState, useContext } from 'react'
import MoviesContext from '../../context/movies/MoviesContext'

const MovieSearch = () => {
  const { movies, searchMovies, clearMovies } = useContext(MoviesContext)
  const [text, setText] = useState('')

  const handleChange = (e) => {
    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    searchMovies(text)
  }
  const handleClear = () => {
    clearMovies()
    setText('')
  }
  return (
    <div className="grid grid-cols-1   gap-18 mx-40">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input
                type="text"
                className="w-full px-auto bg-gray-200 input input-lg text-black"
                placeholder="Search"
                value={text}
                onChange={handleChange}
              />
              <button
                type="submit"
                className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg"
              >
                Go
              </button>
            </div>
          </div>
        </form>
      </div>
      {movies.length > 0 && (
        <div className="btn btn-ghost btn-lg">
          <button onClick={handleClear}>Clear</button>
        </div>
      )}
    </div>
  )
}

export default MovieSearch
