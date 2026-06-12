// Manupulación del DOM
// En tiempo de ejecución podemos modificar lo que renderiza el HTML

const boton = document.querySelector("button")

boton.addEventListener("click", () => {

  if (document.body.style.backgroundColor === "black") {
    document.body.style.backgroundColor = "yellowgreen"
  } else {
    document.body.style.backgroundColor = "black"
  }
})