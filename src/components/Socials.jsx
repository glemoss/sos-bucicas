import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Socials() {
  return (
    <div className="w-full bg-yellow-200">
      <div className="flex justify-around md:container mx-auto h-24">
        <div className="flex justify-center items-center ">
            <a href="#">
              <FaInstagram
                size={40}
                className="cursor-pointer text-white hover:opacity-75"
              />
            </a>

        </div>
        <div className="flex justify-center items-center ">

            <a href="#">
              <FaFacebook
                size={40}
                className="cursor-pointer text-white hover:opacity-75"
              />
            </a>

        </div>
        <div className=" flex justify-center items-center">

            <a href="#">
              <FaLinkedin
                size={40}
                className="cursor-pointer text-white hover:opacity-75"
              />
            </a>

        </div>
      </div>
    </div>
  )
}
