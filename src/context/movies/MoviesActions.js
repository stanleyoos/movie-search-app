// search movies
// return data and dispatch it from MovieSearch Component
export const searchMovies = async (text) => {
  const params = new URLSearchParams({
    apikey: '56769d04',
    s: text,
  })
  const response = await fetch(`http://www.omdbapi.com?${params}`)
  const { Search } = await response.json()
  return Search
}

// get movie data
// return data and dispatch it from Movie Component
export const getMovie = async (id) => {
  const params = new URLSearchParams({
    apikey: '56769d04',
    i: id,
  })
  const response = await fetch(`http://www.omdbapi.com?${params}`)
  const data = await response.json()
  return data
}

// functions in Context are re created every time the state changed
//
