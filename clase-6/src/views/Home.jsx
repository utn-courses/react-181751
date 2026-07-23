import { useState, useEffect, useMemo } from "react"
// import { useLocalStorage } from "./hooks/useLocalStorage.js"

import { Header } from "../components/Header.jsx"
import { movies } from "../data/mock.js"
import { Footer } from "../components/Footer.jsx"
import { Film } from "../components/Film.jsx"
import { Form } from "../components/Form.jsx"
import { fetchingFilms } from "../services/movies.js"

const Home = () => {
  const [showForm, setShowForm] = useState(false)
  // const [listFilms, setListFilms] = useLocalStorage("movies", movies)
  const [listFilms, setListFilms] = useState([])
  const [search, setSearch] = useState("")

  const serviceFilms = async () => {
    const moviesData = await fetchingFilms()
    if (moviesData) {
      setListFilms(moviesData)
    } else {
      alert("Error al traer las peliculas")
      setListFilms([])
    }
  }

  useEffect(() => {
    serviceFilms()
  }, [])

  const handleClick = () => {
    setShowForm(!showForm)
  }

  const addFilm = (dataFilm) => {
    setListFilms([{ id: listFilms.length + 1, ...dataFilm }, ...listFilms])
  }

  const toggleFavorite = (id) => {
    setListFilms(listFilms.map(movie => movie.id === id
      ? { ...movie, favorite: !movie.favorite }
      : movie
    ))
  }

  useEffect(() => {
    document.title = `Peliculas totales: ${listFilms.length}`
  }, [listFilms])

  const filteredFilms = useMemo(() => {
    return listFilms.filter(movie => movie.title.includes(search))
  }, [search, listFilms])

  return (
    <section>
      <Header />
      <div className="actions">
        <button onClick={handleClick}>Mostrar Formulario</button>

        <input
          className="search"
          type="text"
          placeholder="Buscar pelicula..."
          onChange={(e) => setSearch(e.target.value)}
        />

        {
          showForm && <Form addFilm={addFilm} />
        }
      </div>
      <main>
        {
          filteredFilms.map((movie) => {
            return <Film key={movie.id} movie={movie} toggleFavorite={toggleFavorite} />
          })
        }
      </main>
      <Footer />
    </section>
  )
}

export { Home }