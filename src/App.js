import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { MoviesProvider } from './context/movies/MoviesContext'
import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'
import Home from './pages/Home'
import About from './pages/About'

function App() {
  return (
    <MoviesProvider>
      <Router>
        <div className="flex flex-col justify-between h-screen">
          <Navbar />

          <main className="container mx-auto px-3 pb-12">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </Router>
    </MoviesProvider>
  )
}

export default App
