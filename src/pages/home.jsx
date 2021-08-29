import { Hero, Navbar, About, Gallery } from '../components'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <div className="flex  justify-between">
        <About />
        <Gallery />
      </div>
    </main>
  )
}
