import { useState, useRef, useEffect } from "react"

const Form = (props) => {
  const [title, setTitle] = useState("")
  const [year, setYear] = useState("")
  const [genre, setGenre] = useState("")
  const [rating, setRating] = useState("")

  const inputTitleFilm = useRef(null)

  useEffect(() => {
    inputTitleFilm.current.focus()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()

    props.addFilm({ title: title, year: Number(year), genre: genre, rating: Number(rating) })
    setYear("")
    setGenre("")
    setRating("")
    setTitle("")
    inputTitleFilm.current.focus()
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
        ref={inputTitleFilm}
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