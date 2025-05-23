import { Hero } from "./_components/hero"
import { Navbar } from "./_components/navbar"
import { Sobre } from "./_components/sobre"
import { Categorias } from "./_components/categorias"
import { Contato } from "./_components/contato"
import { Footer } from "./_components/footer"



export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Sobre />
      <Categorias />
      <Contato />
      <Footer />
    </main>
  )
}

