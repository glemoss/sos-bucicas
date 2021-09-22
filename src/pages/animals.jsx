import { useState, useEffect } from 'react'
import axios from 'axios'
import { Navbar, Footer } from '../components'

export default function Animals() {
  const [animals, animalsSet] = useState([
    {
      id: 1,
      name: "Ruby",
      foundAt: "2021-03-04T03:00:00.000Z",
      status: "adotado",
      location: "sp",
      species: "cat",
    }
  ])

  useEffect(() => {
    axios.get(process.env.REACT_APP_SERVER_URL).then(({data: {animals}}) => {
      animalsSet(animals)
    })
  },[])

  return (
    <main>
      <Navbar />
      <div className="flex flex-col p-10 mx-auto">

        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Nome
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
    Encontrado em
  </th>
  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
    Status
  </th>
  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
    Localicação
  </th>
  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
    Espécie
  </th>
  <th scope="col" className="relative px-6 py-3">
    <span className="sr-only">Edit</span>
  </th>
  <th scope="col" className="relative px-6 py-3">
    <span className="sr-only">Delete</span>
  </th>
</tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
    {animals.map(animal => (
      <tr key={animal.id}>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="flex items-center">
            <div className="ml-4">
              <div className="text-sm font-medium text-gray-900">
      {animal.name}
    </div>
  </div>
</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{animal.foundAt}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                 ${animal.status === 'adotado' && "bg-green-100 text-green-800"}
                 ${animal.status === 'perdido' && "bg-red-100 text-red-800"}
                 ${animal.status === 'resgatado' && "bg-yellow-100 text-yellow-800"}
                  `}>
      {animal.status}
    </span>
  </td>
  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
      {animal.location}
    </td>
  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
      {animal.species}
    </td>
    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
      <a href="#" className="text-indigo-600 hover:text-indigo-900">Edit</a>
    </td>
    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
      <a href="#" className="text-red-600 hover:text-red-900">Delete</a>
    </td>
  </tr>

    ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
<Footer />
    </main>
  )
}
