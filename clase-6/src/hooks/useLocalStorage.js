// centralizar como se utiliza el localStorage → generar una funcionalidad reutilizable
// useState, useEffect
import { useState, useEffect } from "react";


// useLocalStorage("user", {id: 1, name: "pepito", email: "pepe@gmail.com"})
// useLocalStorage("movies", movies)

const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    const item = localStorage.getItem(key)
    return item ? JSON.parse(item) : initialValue
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue]
}

export { useLocalStorage }