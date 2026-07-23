import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "../views/Home"
import { Login } from "../views/Login"
// /login → <Login />
// / → <Home />

const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<h1>No se encuentra la página - 404</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export { RouterApp }
