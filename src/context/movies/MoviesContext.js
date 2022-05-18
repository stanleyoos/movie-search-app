import { createContext, useReducer } from 'react'
import moviesReducer from './MoviesReducer'

const MoviesContext = createContext()

export const MoviesProvider = ({ children }) => {
  const initialState = {
    movies: [],
    loading: false,
  }

  const [state, dispatch] = useReducer(moviesReducer, initialState)

  // search movies
  const searchMovies = async (text) => {
    setLoading()
    const params = new URLSearchParams({
      apikey: '56769d04',
      s: text,
    })
    const response = await fetch(`http://www.omdbapi.com?${params}`)
    const { Search } = await response.json()
    dispatch({
      type: 'GET_MOVIES',
      payload: Search,
    })
  }

  const clearMovies = () => {
    dispatch({ type: 'CLEAR_MOVIES' })
  }

  // set loading
  const setLoading = () => dispatch({ type: 'SET_LOADING' })

  return (
    <MoviesContext.Provider
      value={{
        movies: state.movies,
        loading: state.loading,
        searchMovies,
        clearMovies,
      }}
    >
      {children}
    </MoviesContext.Provider>
  )
}

export default MoviesContext
