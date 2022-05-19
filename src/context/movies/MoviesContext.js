import { createContext, useReducer } from 'react'
import moviesReducer from './MoviesReducer'

const MoviesContext = createContext()
// functions in Context are re created every time the state changed
// that's why theye were moved to MovieActions.js
export const MoviesProvider = ({ children }) => {
  const initialState = {
    movies: [],
    movie: {},
    loading: false,
  }

  const [state, dispatch] = useReducer(moviesReducer, initialState)

  //  ...state is the same as
  //movies: state.movies,
  // loading: state.loading,
  // user: state.user,
  // movie: state.movie,
  return (
    <MoviesContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </MoviesContext.Provider>
  )
}

export default MoviesContext
