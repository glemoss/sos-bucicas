import { Hero, Navbar, About, Gallery } from '../components'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <div className="container mx-auto grid sm:grid-cols-8 grid-flow-row">
        <div className="sm:col-span-6 p-4">
          <About />
        </div>
        <div className="sm:col-span-2">
          <Gallery />
        </div>
      </div>
    </main>
  )
}
