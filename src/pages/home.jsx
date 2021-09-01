import { Hero, Navbar, About, Gallery, News } from '../components'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />

    <div
      className="lg:container mx-auto flex flex-col items-center gap-16"
      style={{maxWidth: "95%"}}>
      <div className="grid sm:grid-cols-8 grid-flow-row">
        <div className="sm:col-span-6 p-4">
          <About />
        </div>
        <div className="sm:col-span-2">
          <Gallery />
        </div>
      </div>

      <div>
        <News />
      </div>
    </div>
    </main>
  )
}
