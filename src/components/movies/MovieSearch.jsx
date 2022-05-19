import { useState, useContext } from 'react'
import MoviesContext from '../../context/movies/MoviesContext'
import AlertContext from '../../context/alert/AlertContext'
import { searchMovies } from '../../context/movies/MoviesActions'

const MovieSearch = () => {
  const { movies, dispatch } = useContext(MoviesContext)
  const { setAlert } = useContext(AlertContext)
  const [text, setText] = useState('')

  const handleChange = (e) => {
    setText(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (text === '') {
      setAlert('Please type something', 'error')
    } else {
      dispatch({ type: 'SET_LOADING' })
      const movies = await searchMovies(text)
      dispatch({ type: 'GET_MOVIES', payload: movies })
      setText('')
    }
  }
  const handleClear = () => {
    dispatch({ type: 'CLEAR_MOVIES' })
    setText('')
  }
  return (
    <div className="grid grid-cols-1   gap-18 mx-20">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className=" relative">
              <input
                type="text"
                className="w-full px-auto bg-gray-200 input input-lg text-black"
                placeholder="Search"
                value={text}
                onChange={handleChange}
              />
              <button
                type="submit"
                className="absolute top-0 right-0 rounded-l-none w-30 btn btn-lg"
              >
                Search
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
