import React, { useState } from "react";
import Link from "../components/Link";
import { useSelector } from "react-redux";

const Navbar = () => {
  const links = [
    { title: "Home", to: "/" },
    { title: "Cities", to: "/cities" },
  ];

  const [slideOpen, setSlideOpen] = useState(false);

  const photo = useSelector(store => store.userReducer.photo)

  const toggleSlide = () => {
    setSlideOpen(!slideOpen);
  };

  const closeSlide = () => {
    setSlideOpen(false);
  };

  const handleLinkClick = () => {
    closeSlide();
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-10 bg-black bg-opacity-50">
      <div className="mx-auto max-w-screen-xl py-4 flex justify-evenly h-16">

        <div className="md:flex md:items-center">
          <img className="h-7" src="/public/nombre-azul.png" alt="Mytinerary" />
        </div>

        <nav className="hidden md:inline items-center">
          {links.map((link) => (
            <Link key={link.to} title={link.title} to={link.to} />
          ))}
        </nav>

        <div className="md:flex md:items-center">
          <div className="flex items-center">
            <div className="sm:flex">
              <a
                className="rounded-md bg-7 px-5 py-2.5 text-sm font-medium text-white shadow"
                href="/login"
              >
                Login
              </a>

              <div className="hidden sm:flex px-2">
                <a
                  className="rounded-md bg-7 px-5 py-2.5 text-sm font-medium text-white shadow"
                  href="/signup"
                >
                  Sing Up
                </a>
              </div>
            </div>

            <div
              className={`fixed top-0 right-0 h-screen w-1/2 bg-gray-800 transform ${slideOpen ? "translate-x-0" : "translate-x-full"
                } transition-transform ease-in-out duration-300`}
            >
              <div className="p-4 flex justify-center">
                <ul className="space-y-4">
                  <li className="mt-2">
                    <a
                      className="text-white text-xl"
                      href="/"
                      onClick={handleLinkClick}
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-white text-xl"
                      href="/cities"
                      onClick={handleLinkClick}
                    >
                      Cities
                    </a>
                  </li>
                  <li>
                    <button
                      onClick={closeSlide}
                      className="bg-gray-300 rounded mt-4 p-1"
                    >
                      Close
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            <div className="block md:hidden mx-2">
              <button
                onClick={toggleSlide}
                className="rounded bg-7 p-2 text-gray-700 transition hover:bg-6"
              >
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
            </div>
          </div>
        </div>
        <div href="#" className="block shrink-0">
          <span className="sr-only">Profile</span>
          <img
            alt="Man"
            src={photo}
            className="h-10 w-10 rounded-full object-cover"
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
