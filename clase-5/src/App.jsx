import { useState } from "react"

import { Header } from "./components/Header.jsx"
import { movies } from "./data/mock.js"
import { Footer } from "./components/Footer.jsx"
import { Film } from "./components/Film.jsx"
import { Form } from "./components/Form.jsx"

const App = () => {
  const [showForm, setShowForm] = useState(false)
  const [listFilms, setListFilms] = useState(movies)

  const handleClick = () => {
    setShowForm(!showForm)
  }

  const addFilm = (dataFilm) => {
    console.log("Pelicula recibida", dataFilm)
    setListFilms([{ id: listFilms.length + 1, ...dataFilm }, ...listFilms])
  }

  return (
    <section>
      <Header />
      <div className="actions">
        <button onClick={handleClick}>Mostrar Formulario</button>
        {
          showForm && <Form addFilm={addFilm} />
        }
      </div>
      <main>
        {
          listFilms.map((movie) => {
            return <Film movie={movie} />
          })
        }
      </main>
      <Footer />
    </section>
  )
}

export { App }