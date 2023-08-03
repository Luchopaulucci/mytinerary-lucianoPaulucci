import React from "react";
import Anchord from "./Anchord";

const Navbar = () => {
  const links = [
    { title: "Home", to: "/home" },
    { title: "Cities", to: "/cities" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-10 bg-black bg-opacity-50 ">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <img className="h-7" src="/public/nombre-azul.png" alt="Mytinerary" />
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav className="hidden md:inline items-center">
              {links.map((anchord) => (<Anchord key={anchord.to} title={anchord.title} to={anchord.to} />))}
            </nav>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <a
                  className="rounded-md bg-7 px-5 py-2.5 text-sm font-medium text-white shadow"
                  href="/"
                >
                  Login
                </a>

                <div className="hidden sm:flex">
                  <a
                    className="rounded-md bg-7 px-5 py-2.5 text-sm font-medium text-white shadow"
                    href="/"
                  >
                    Register
                  </a>
                </div>
              </div>

              <div className="block md:hidden">
                <button className="rounded bg-7 p-2 text-gray-700 transition hover:bg-6">
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
        </div>
      </div>
    </header>
  );
};

export default Navbar;
