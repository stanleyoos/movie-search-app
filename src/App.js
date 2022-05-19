import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { MoviesProvider } from './context/movies/MoviesContext'
import { AlertProvider } from './context/alert/AlertContext'
import Alert from './components/layout/Alert'
import Movie from './pages/Movie'
import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'

function App() {
  return (
    <MoviesProvider>
      <AlertProvider>
        <Router>
          <div className="flex flex-col justify-between h-screen">
            <Navbar />
            <Alert />
            <main className="container mx-auto px-3 pb-12">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/movie/:id" element={<Movie />} />
                <Route path="/notfound" element={<NotFound />} />
              </Routes>
            </main>

            <Footer />
          </div>
        </Router>
      </AlertProvider>
    </MoviesProvider>
  )
}

export default App
