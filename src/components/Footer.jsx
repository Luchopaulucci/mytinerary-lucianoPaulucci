import React from 'react'
import Link from "./Link";

const Footer = () => {
  const links = [
    { title: "Home", to: "/" },
    { title: "Cities", to: "/cities" },
  ];

  return (
    <footer className="bottom-0 left-0 right-0 bg-gray-800	 bg-opacity-50 md:mt-0 sm:mt-4">
      <div className="mx-auto max-w-screen-xl px-4 py-4 sm:px-6 lg:px-8 flex justify-between h-16">
        <nav className="hidden md:inline items-center">
          {links.map((link) => (<Link key={link.to} title={link.title} to={link.to} />))}
        </nav>
        <div className="md:flex md:items-center md:gap-12">
            <img className="h-7" src="/public/nombre-azul.png" alt="Mytinerary" />
        </div>
        <div className='text-center'>
          <p className='font-semibold text-2xl'>Mindhub TM-04</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer