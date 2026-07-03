const Film = ({ movie }) => {
  const { id, title, year, genre, rating } = movie
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>ID: {id} - Year: {year}</p>
      <p>Genre: {genre}</p>
      <p>Rating: {rating}</p>
    </div>
  )
}

export { Film }