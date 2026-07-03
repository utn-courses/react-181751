// hooks → Un Hook es una función especial de React que permite agregar funcionalidades a un componente
import { useState } from "react"

const Film = ({ movie }) => {
  // los hooks se definen dentro del componente arriba de todo

  const db = JSON.parse(localStorage.getItem("count"))

  const [favorites, setFavorites] = useState(db)
  const { id, title, year, genre, rating } = movie

  const addFavorite = () => {
    setFavorites(favorites + 1)
    localStorage.setItem("count", JSON.stringify(favorites + 1))
  }

  return (
    <div className="card">
      <h2>{title}</h2>
      <p>ID: {id} - Year: {year}</p>
      <p>Genre: {genre}</p>
      <p>Rating: {rating}</p>
      <button onClick={addFavorite}>Favorites: {favorites}</button>
    </div>
  )
}

export { Film }