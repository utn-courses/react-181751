import { useState } from "react"

const Form = (props) => {
  const [title, setTitle] = useState("")
  const [year, setYear] = useState(0)
  const [genre, setGenre] = useState("")
  const [rating, setRating] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault()

    props.addFilm({ title: title, year: year, genre: genre, rating: rating })
  }

  const handleTitle = (e) => {
    setTitle(e.target.value)
  }

  const handleYear = (e) => {
    setYear(e.target.value)
  }

  const handleGenre = (e) => {
    setGenre(e.target.value)
  }

  const handleRating = (e) => {
    setRating(e.target.value)
  }

  return (
    <form className="card" onSubmit={handleSubmit}>

      <input
        type="text"
        placeholder="Ingrese el título"
        onChange={(e) => handleTitle(e)}
        value={title}
      />

      <input
        type="number"
        placeholder="Ingrese el año de estreno"
        onChange={(e) => handleYear(e)}
        value={year}
      />

      <input
        type="text"
        placeholder="Ingrese el género de la película"
        onChange={(e) => handleGenre(e)}
        value={genre}
      />

      <input
        type="number"
        placeholder="Ingrese el rating"
        onChange={(e) => handleRating(e)}
        value={rating}
      />

      <button>Agregar</button>
    </form>
  )
}

export { Form }