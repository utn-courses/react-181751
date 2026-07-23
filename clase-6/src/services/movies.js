const API_BASE = "http://localhost:3000"

const fetchingFilms = async () => {
  try {
    const response = await fetch(`${API_BASE}/movies`, {
      method: "GET"
    })

    if (response.ok) {
      const data = await response.json()
      return data
    }
  } catch (e) {
    return false
  }
}

const addFilm = () => { }

const changeFavoriteState = () => { }

const deleteFilms = () => { }

export { fetchingFilms }