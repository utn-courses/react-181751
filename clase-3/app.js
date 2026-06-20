import { calcularArea } from "./operaciones.js";

// invocación → ejecutar el código del scope de una función
// argumento → valor que nutre el parametro
const area = calcularArea(1)
const areaCirculo2 = calcularArea(10)

console.log(`El area del circulo es: ${area}`)
console.log(`El area del circulo 2 es: ${areaCirculo2}`)