import { Hero, Navbar, About, Gallery, News, Socials, Footer } from '../components'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />

    <div
      className="md:container mx-auto flex flex-col items-center gap-16 mb-16"
      style={{maxWidth: "95%"}}>
      <div className="grid sm:grid-cols-8 grid-flow-row">
        <div className="sm:col-span-6 p-4">
          <About />
        </div>
        <div className="sm:col-span-2">
          <Gallery />
        </div>
      </div>

      <News />
    </div>

    <Socials />
    <Footer />
    </main>
  )
}
