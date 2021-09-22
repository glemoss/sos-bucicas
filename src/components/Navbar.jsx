import React, { useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";

const NavLink = ({href, value}) => (
  <a href={href}>
    <span className="mt-2 sm:mt-0 hover:bg-primary hover:shadow-md px-2 py-1 rounded cursor-pointer block">
      {value}
    </span>
  </a>
);

const Navbar = () => {
  const [openMenu, openMenuSet] = useState(false);

  return (
    <header
      className={`text-gray-800 py-5 px-2 sm:mx-auto lg:container ${
        openMenu ? "bg-white" : "bg-transparent"
      }`}
    >
      <div className=" md:flex md:items-center md:justify-between ">
        <div className="flex justify-between items-center p-2 ">
          <div>
            <h2 className="hover:text-cool-gray-600 focus:text-cool-gray-600 text-xl font-bold">
              <a href="/">SOS Bucica</a>
            </h2>
          </div>
          <div className="md:hidden">
            <button
              type="button"
              onClick={openMenu => openMenuSet(!openMenu)}
              className="block hover:text-cool-gray-600 focus:text-cool-gray-600 outline-none w-6 h-6"
            >
              {openMenu ? <MdClose /> : <MdMenu />}
            </button>
          </div>
        </div>
        <div
          className={`${
            openMenu ? "block" : "hidden"
          } md:flex items-center gap-2`}
        >
          <NavLink href="#/animais" value="Animais" />
          <NavLink href="#/cadastro" value="Cadastrar animal" />
          <NavLink href="#/servicos" value="Doações" />
          <NavLink href="#/contato" value="Contato" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
