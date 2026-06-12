// Variables
let edad = 31
const apellido = "Alberini"

edad = 32

console.log(edad)

// apellido = "Perez"

for (let i = 0; i < 2; i++) {
  // const nombre = prompt("Ingrese su nombre:")
}

// Datos primitivos → unidad de información
// string
// number
// boolean
// undefined
// null

// Datos complejos / compuestos
// object
// array

const colores = ["rojo", "azul", "amarillo"]

colores.push("violeta")

// colores = "zapato"

console.log(colores)

console.log("---------------")

// const dato = Number(prompt("Ingrese un dato:"))
// console.log(dato + 1)

console.log(Number("1000"))

console.log(String(1000))

// Truthy y Falsy
console.log(Boolean(0), "<- número")

const usuario = ""

console.log(Boolean(usuario), "<- usuario")

if (usuario) {
  console.log("Hay usuario")
}

console.log(Boolean([]), "<- lista (array)")

const helados = ["vainilla", "frutilla"]
helados[2] = "dulce de leche"
console.log(helados[2])

// Operadores aritméticos
// + - * / % **
console.log(2 ** 10)
console.log(9 % 3)

// Operadores de comparación
// Todas las comparaciónes me da como resultado un valor booleano
// < → menor que
// <= → menor o igual que
// > → mayor que
// >= → mayor o igual que
// === → igual
// !== → diferente
// let userPass = prompt("Ingrese la contraseña:")
// let pass = 9876123

// if (userPass === pass) {
//   console.log("✅ Usuario logeado")
// } else {
//   console.log("❌ Acceso denegado")
// }

// Operadores lógicos
// && → AND
// || → OR

let edadCliente = 17
let permiso = true

// if (edadCliente >= 18) {
//   console.log("Puedes pasar")
// } else {
//   if (permiso) {
//     console.log("Puedes pasar porque tenes permiso")
//   } else {
//     console.log("No puede puedes pasar")
//   }
// }

// if (edadCliente >= 18 || permiso) {
//   console.log("Puedes pasar")
// } else {
//   console.log("No puedes pasar")
// }

const carnet = true
const multas = true
const edadConductor = 45

if (carnet && !multas && edadConductor >= 18) {
  console.log("Puedes conducir")
} else {
  console.log("No puedes conducir")
}

