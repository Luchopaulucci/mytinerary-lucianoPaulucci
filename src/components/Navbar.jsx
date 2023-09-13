import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { user_logout } from "../store/actions/userActions";

const Navbar = () => {

  const dispatch = useDispatch()

  const links = [
    { title: "Home", to: "/" },
    { title: "Cities", to: "/cities" },
  ];
  const [slideOpen, setSlideOpen] = useState(false);

  const user = useSelector(store => store.userReducer.user)

  const defaultPhoto = "../../../public/guest.webp"

  const toggleSlide = () => {
    setSlideOpen(!slideOpen);
  };

  const closeSlide = () => {
    setSlideOpen(false);
  };

  const handleLinkClick = () => {
    closeSlide();
  };

  const handleLogOut = () => {
      dispatch(user_logout());
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-10 bg-black bg-opacity-50">
      <div className="mx-auto max-w-screen-xl py-4 flex justify-evenly h-16">

        <div className="md:flex md:items-center">
          <img className="h-7" src="/public/nombre-azul.png" alt="Mytinerary" />
        </div>

        <nav className="hidden md:inline items-center space-x-4">
          {links.map((link) => (
            <Link key={link.to} to={link.to} className="text-white text-xl">
              {link.title}
            </Link>
          ))}
        </nav>

        <div className="md:flex md:items-center">
          <div className="flex items-center">
            {user
              ?
              (<a onClick={handleLogOut} href="/" className="rounded-md bg-7 px-5 py-2.5 text-sm font-medium text-white shadow">
                SignOut
              </a>)
              :
              (<div className="sm:flex">
                <Link to="/signin" className="rounded-md bg-7 px-5 py-2.5 text-sm font-medium text-white shadow">
                  Login
                </Link>
                <div className="hidden sm:flex px-2">
                  <Link to="/signup" className="rounded-md bg-7 px-5 py-2.5 text-sm font-medium text-white shadow">
                    Sing Up
                  </Link>
                </div>
              </div>)
            }

            <div
              className={`fixed top-0 right-0 h-screen w-1/2 bg-gray-800 transform ${slideOpen ? "translate-x-0" : "translate-x-full"
                } transition-transform ease-in-out duration-300`}
            >
              <div className="p-4 flex justify-center">
                <ul className="space-y-4">
                  <li className="mt-2">
                    <Link to="/" className="text-white text-xl" onClick={handleLinkClick}>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/cities" className="text-white text-xl" onClick={handleLinkClick}>
                      Cities
                    </Link>
                  </li>
                  <li>
                    <button onClick={closeSlide} className="bg-gray-300 rounded mt-4 p-1">
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
            src={user ? user.photo : defaultPhoto}
            className="h-10 w-10 rounded-full object-cover"
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
