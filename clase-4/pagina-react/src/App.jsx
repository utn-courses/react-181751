import { Header } from "./components/Header.jsx"
import { movies } from "./data/mock.js"
import { Footer } from "./components/Footer.jsx"
import { Film } from "./components/Film.jsx"

const App = () => {
  return (
    <section>
      <Header />
      <main>
        {
          movies.map((movie) => {
            return <Film movie={movie} />
          })
        }
      </main>
      <Footer />
    </section>
  )
}

export { App }