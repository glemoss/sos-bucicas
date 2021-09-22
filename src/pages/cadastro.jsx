import { useState } from 'react'
import axios from 'axios'
import { useHistory} from 'react-router-dom'


import { Navbar, Footer } from '../components'

export default function Cadastro() {
  const [name, nameSet] = useState("")
  const [species, speciesSet] = useState("")
  const [status, statusSet] = useState("")
  const [location, locationSet] = useState("")
  const [foundAt, foundAtSet] = useState(new Date())
  const [loading, loadingSet] = useState(false)
  const [errors, errorsSet] = useState({
    name: false,
    species: false,
    status: false,
    location: false,
    foundAt: false
  })
  const history = useHistory();

  function validateForm() {
    errorsSet({
      name: !name,
      species: !species,
      status: !status,
      location: !location,
      foundAt: !foundAt
    })

    return Object.values(errors).some(e => !e)
  }

  async function handleSubmit(e) {
    e.preventDefault()

    if (!validateForm()) return
    loadingSet(true)

    await axios.post(
      process.env.REACT_APP_SERVER_URL,
      {name,species,status,location,foundAt}
    )
    return history.push("/animais")
  }

  return (
    <main>
      <Navbar />
      <div className="my-14">
        <form className="flex flex-col items-center w-96 mx-auto gap-4">
          <div className="flex flex-col w-full gap-2">
            <label className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name">
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              value={name}
              onChange={e => nameSet(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
        {errors.name && <p className="text-red-500 text-xs italic">Nome inválido.</p>}
          </div>
          <div className="flex flex-col w-full gap-2">
            <label className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="animal">
              Espécie
              do animal</label>
            <select
              name="animal"
              required
              value={species}
              onChange={e => speciesSet(e.target.value)}
              className="block w-full bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
              <option value="" disabled hidden>Selecione</option>
              <option value="gato">Gato</option>
              <option value="cachorro">Cachorro</option>
            </select>
        {errors.species && <p className="text-red-500 text-xs italic">Espécie inválida.</p>}
          </div>
          <div className="flex flex-col w-full gap-2">
            <label className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="status">
              Status
            </label>
            <select name="status"
              className="block w-full bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              value={status}
              onChange={e => statusSet(e.target.value)}
            >
              <option value="" disabled hidden>Selecione</option>
              <option value="perdido">Perdido</option>
              <option value="resgatado">Resgatado</option>
              <option value="adotado">Adotado</option>
            </select>
        {errors.status && <p className="text-red-500 text-xs italic">Status inválido.</p>}
          </div>
          <div className="flex flex-col w-full gap-2">
            <label className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="location">
              Região
            </label>
            <input
              type="text"
              name="location"
              value={location}
              onChange={e => locationSet(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
    {errors.location && <p className="text-red-500 text-xs italic">Localização inválida.</p>}
          </div>
          <div className="flex flex-col w-full gap-2">
            <label className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="found">
              Achado em
            </label>
            <input
              type="date"
              name="found"
              value={foundAt}
              onChange={e => foundAtSet(e.target.value)}
              className="block w-full bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            />
    {errors.foundAt && <p className="text-red-500 text-xs italic">Data inválida.</p>}
          </div>
          <div>
            <button
              className="font-bold curor-pointer bg-yellow-500 text-white py-2 px-4 hover:bg-yellow-400 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              onClick={e => handleSubmit(e)}
              disabled={loading}
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
