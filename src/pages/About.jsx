const About = () => {
  return (
    <>
      <h1 className="text-6xl mb-4">Movie Search</h1>
      <p className="mb-4 text-2xl font-light">
        A React app to search movies from OMDB API made by{' '}
        <strong>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/stanleyoos"
          >
            {' '}
            stanleyoos
          </a>
        </strong>
      </p>
      <p className="text-lg text-gray-400">
        Version <span className="text-white">1.0.0</span>
      </p>
      <p className="text-lg text-gray-400">
        Layout By:
        <a className="text-white" href="https://twitter.com/hassibmoddasser">
          Hassib Moddasser
        </a>
      </p>
    </>
  )
}

export default About
