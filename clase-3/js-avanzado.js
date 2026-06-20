// Desestructuración (Destructuring)
// La desestructuración permite extraer valores de objetos y arrays de forma sencilla.
const personaje = {
  id: 6,
  name: "Abadango Cluster Princess",
  status: "Alive",
  species: "Alien",
  type: "",
  gender: "Female",
  origin: {
    name: "Abadango",
    url: "https://rickandmortyapi.com/api/location/2"
  },
  location: {
    name: "Abadango",
    url: "https://rickandmortyapi.com/api/location/2"
  },
  image: "https://rickandmortyapi.com/api/character/avatar/6.jpeg",
  episode: [
    "https://rickandmortyapi.com/api/episode/27"
  ],
  url: "https://rickandmortyapi.com/api/character/6",
  created: "2017-11-04T19:50:28.250Z"
};

// Destructuring en objeto
const { id: idPersonaje, gender, status, image, episode } = personaje
console.log(`El personaje ID: ${idPersonaje} es ${gender}`)

// Destructuring en array
const [primerEpisodio] = episode
console.log(primerEpisodio)

const id = 2

// Spread Operator (...)
// El operador spread permite expandir los elementos de un array o las propiedades de un objeto.

const aula1 = ["Juan", "Pepe", "Martín"]
const aula2 = ["María", "German"]

const aula3 = [...aula1, ...aula2]

console.log(aula3)

const celular = {
  color: "Negro",
  marca: "Samsung"
}

const celular2 = {
  ...celular,
  disponible: true
}

// ----------------------------------------

const alumnos = [
  { id: 1, nombre: "Juan Pérez", nota: 8 },
  { id: 2, nombre: "María Gómez", nota: 7 },
  { id: 3, nombre: "Pedro Sánchez", nota: 9 },
  { id: 4, nombre: "Lucía Fernández", nota: 6 },
  { id: 5, nombre: "Martín López", nota: 10 },
  { id: 6, nombre: "Sofía Rodríguez", nota: 8 },
  { id: 7, nombre: "Nicolás Díaz", nota: 5 },
  { id: 8, nombre: "Valentina Romero", nota: 9 },
  { id: 9, nombre: "Tomás González", nota: 7 },
  { id: 10, nombre: "Camila Herrera", nota: 6 },
  { id: 11, nombre: "Mateo Torres", nota: 8 },
  { id: 12, nombre: "Emma Castro", nota: 9 },
  { id: 13, nombre: "Benjamín Ruiz", nota: 4 },
  { id: 14, nombre: "Olivia Acosta", nota: 10 },
  { id: 15, nombre: "Joaquín Medina", nota: 7 },
  { id: 16, nombre: "Isabella Vega", nota: 8 },
  { id: 17, nombre: "Santiago Rojas", nota: 6 },
  { id: 18, nombre: "Mía Navarro", nota: 9 },
  { id: 19, nombre: "Felipe Cabrera", nota: 5 },
  { id: 20, nombre: "Renata Molina", nota: 8 },
  { id: 21, nombre: "Franco Giménez", nota: 7 },
  { id: 22, nombre: "Julieta Peralta", nota: 10 },
  { id: 23, nombre: "Thiago Silva", nota: 6 },
  { id: 24, nombre: "Catalina Ponce", nota: 9 },
  { id: 25, nombre: "Agustín Ibarra", nota: 8 },
  { id: 26, nombre: "Lola Suárez", nota: 7 },
  { id: 27, nombre: "Bruno Aguirre", nota: 5 },
  { id: 28, nombre: "Josefina Arias", nota: 9 },
  { id: 29, nombre: "Dylan Benítez", nota: 6 },
  { id: 30, nombre: "Martina Quiroga", nota: 10 },
  { id: 31, nombre: "Bautista Luna", nota: 8 },
  { id: 32, nombre: "Victoria Sosa", nota: 7 },
  { id: 33, nombre: "Lautaro Campos", nota: 4 },
  { id: 34, nombre: "Abril Ferreyra", nota: 9 },
  { id: 35, nombre: "Ian Domínguez", nota: 6 },
  { id: 36, nombre: "Antonella Leiva", nota: 8 },
  { id: 37, nombre: "Máximo Cardozo", nota: 7 },
  { id: 38, nombre: "Milagros Villalba", nota: 10 },
  { id: 39, nombre: "Facundo Pereyra", nota: 5 },
  { id: 40, nombre: "Aitana Godoy", nota: 9 },
  { id: 41, nombre: "Alan Núñez", nota: 8 },
  { id: 42, nombre: "Guadalupe Cejas", nota: 6 },
  { id: 43, nombre: "Kevin Mendez", nota: 7 },
  { id: 44, nombre: "Bianca Farias", nota: 10 },
  { id: 45, nombre: "Lucas Correa", nota: 8 },
  { id: 46, nombre: "Malena Toledo", nota: 9 },
  { id: 47, nombre: "Enzo Bustos", nota: 5 },
  { id: 48, nombre: "Candela Salinas", nota: 7 },
  { id: 49, nombre: "Ramiro Escobar", nota: 6 },
  { id: 50, nombre: "Zoe Márquez", nota: 10 }
];

// FILTER ES UN BUCLE
const aprobados = alumnos.filter((alumno) => alumno.nota >= 7)

const infoCatalina = alumnos.find((alumno) => alumno.nombre.startsWith("Catalina"))
console.log(infoCatalina)

// ---------------------------------------

// https://rickandmortyapi.com/api/character

const traerPersonajes = async () => {
  const respuesta = await fetch("https://rickandmortyapi.com/api/character")
  if (respuesta.ok === true) {
    const data = await respuesta.json()
    console.log(data.results)

    const personajesVivos = data.results.filter((personaje) => personaje.status === "Alive")

    console.log(personajesVivos)
  }
}

traerPersonajes()

console.log("Probando")