import { Navbar, Footer } from '../components'

export default function Cadastro() {
  return (
    <main>
      <Navbar />
      <div className="my-10">
        <form className="flex flex-col items-center w-96 mx-auto gap-4">
          <div className="flex flex-col w-full gap-2">
            <label className="block text-gray-700 text-sm font-bold mb-2"
              for="name">
              Name
            </label>
            <input
              type="text"
              name="name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
          </div>
          <div className="flex flex-col w-full gap-2">
            <label className="block text-gray-700 text-sm font-bold mb-2"
              for="animal">
              Espécie
              do animal</label>
            <select
              name="animal"
              required
              className="block w-full bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
              <option value="" selected disabled hidden>Selecione</option>
              <option value="gato">Gato</option>
              <option value="cachorro">Cachorro</option>
            </select>
          </div>
          <div className="flex flex-col w-full gap-2">
            <label className="block text-gray-700 text-sm font-bold mb-2"
              for="status">
              Status
            </label>
            <select name="status" required
              className="block w-full bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
              <option value="" selected disabled hidden>Selecione</option>
              <option value="perdido">Perdido</option>
              <option value="resgatado">Resgatado</option>
              <option value="adotado">Adotado</option>
            </select>
          </div>
          <div className="flex flex-col w-full gap-2">
            <label className="block text-gray-700 text-sm font-bold mb-2"
              for="region">
              Região
            </label>
            <input type="text" name="region" required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
          </div>
          <div className="flex flex-col w-full gap-2">
            <label className="block text-gray-700 text-sm font-bold mb-2"
              for="found">
              Achado em
            </label>
            <input
              type="date"
              name="found"
              className="block w-full bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            />
          </div>
          <div>
            <button
              className="font-bold curor-pointer bg-yellow-500 text-white py-2 px-4 hover:bg-yellow-400 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </main>
  )
}
