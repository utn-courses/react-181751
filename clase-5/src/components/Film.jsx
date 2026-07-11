// hooks → Un Hook es una función especial de React que permite agregar funcionalidades a un componente
import { useState } from "react"

const Film = ({ movie, toggleFavorite }) => {
  const { id, title, year, genre, rating, favorite } = movie

  return (
    <div className="card">
      <h2>{title}</h2>
      <p>ID: {id} - Year: {year}</p>
      <p>Genre: {genre}</p>
      <p>Rating: {rating}</p>
      <button onClick={() => toggleFavorite(id)}>{favorite ? "🧡 Favorita" : "🤍 Marcar como favorita"}</button>
    </div>
  )
}

export { Film }