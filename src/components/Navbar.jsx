import React, { useState } from "react";
import Link from "../components/Link";
import SliderMenu from "./SliderMenu";

const Navbar = () => {
  const links = [
    { title: "Home", to: "/" },
    { title: "Cities", to: "/cities" },
  ];

  const [slideOpen, setSlideOpen] = useState(false);

  const toggleSlide = () => {
    setSlideOpen(!slideOpen);
  };

  const closeSlide = () => {
    setSlideOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-10 bg-black bg-opacity-50">
      <div className="mx-auto max-w-screen-xl px-4 py-4 sm:px-6 lg:px-8 flex justify-between h-16">
        
          <div className="md:flex md:items-center">
            <img className="h-7" src="/public/nombre-azul.png" alt="Mytinerary" />
          </div>
          
          <nav className="hidden md:inline items-center">
            {links.map((link) => (<Link key={link.to} title={link.title} to={link.to} />))}
          </nav>

          <div className="md:flex md:items-center">  
            <div className="flex items-center">
              <div className="sm:flex px-2">
                <a
                  className="rounded-md bg-7 px-5 py-2.5 text-sm font-medium text-white shadow"
                  href="/login"
                >
                  Login
                </a>

                <div className="hidden px-2 sm:flex">
                  <a
                    className="rounded-md bg-7 px-5 py-2.5 text-sm font-medium text-white shadow"
                    href="/signup"
                  >
                    Sing Up
                  </a>
                </div>
              </div>

              <div className="block md:hidden">
                <button onClick={toggleSlide} className="rounded bg-7 p-2 text-gray-700 transition hover:bg-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
                <SliderMenu isOpen={slideOpen} onClose={closeSlide} />
              </div>
            </div>
          </div>
      </div>
    </header>
  );
};

export default Navbar;
