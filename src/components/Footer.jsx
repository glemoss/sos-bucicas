import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {

  return (
    <div className="bg-yellow-500 py-10 text-white">
      <div className="sm:container mx-auto flex">
        <div className="flex flex-col justify-between gap-2 text-lg">
          <a href="#" className="hover:opacity-75">Como colaborar</a>
          <a href="#" className="hover:opacity-75">Fale conosco</a>
          <a href="#" className="hover:opacity-75">Relatórios</a>
          <a href="#" className="hover:opacity-75">Novidades</a>
          <a href="#" className="hover:opacity-75">Quem somos</a>
        </div>
        <div className="flex-1"></div>
        <div className="self-end">
          <div className="flex justify-around gap-5">
            <a href="#">
              <FaInstagram
                size={40}
                className="cursor-pointer text-white hover:opacity-75"
              />
            </a>
            <a href="#">
              <FaFacebook
                size={40}
                className="cursor-pointer text-white hover:opacity-75"
              />
            </a>
            <a href="#">
              <FaLinkedin
                size={40}
                className="cursor-pointer text-white hover:opacity-75"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
