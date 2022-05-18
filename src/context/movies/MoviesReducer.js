const moviesReducer = (state, action) => {
  switch (action.type) {
    case 'GET_MOVIES':
      return {
        ...state,
        movies: action.payload,
        loading: false,
      }
    case 'SET_LOADING':
      return {
        ...state,
        loading: true,
      }
    case 'CLEAR_MOVIES':
      return {
        ...state,
        movies: [],
      }
    default:
      return state
  }
}

export default moviesReducer
