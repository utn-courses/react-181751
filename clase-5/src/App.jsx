import { useState, useEffect, useMemo } from "react"

import { Header } from "./components/Header.jsx"
import { movies } from "./data/mock.js"
import { Footer } from "./components/Footer.jsx"
import { Film } from "./components/Film.jsx"
import { Form } from "./components/Form.jsx"

const App = () => {
  const [showForm, setShowForm] = useState(false)
  const [listFilms, setListFilms] = useState(JSON.parse(localStorage.getItem("movies")) || movies)
  const [search, setSearch] = useState("")

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

  // Despues de que se renderice el componente voy a ejecutar una función con un efecto secundario que no está relacionado con la visual
  useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(listFilms))
  }, [listFilms])

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

export { App }