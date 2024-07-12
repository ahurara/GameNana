import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="bg-gradient-to-l from-black via-black to-orange-300 py-2">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded={isMenuOpen}
                onClick={toggleMenu}
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>
                <svg
                  className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                <svg
                  className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
             
            </div>
            <div className="flex flex-shrink-0 items-center ml-10 sm:ml-0 md:ml-0">
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                  alt="Your Company"
                />
              </div>
            <div className="flex flex-1 items-start justify-start sm:items-stretch sm:justify-center  ">
             
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex  ">
                  <a
                    href="#"
                    className="rounded-md px-3 py-2 text-sm text-white font-bold"
                  >
                   Home
                  </a>
                  <a
                    href="#"
                    className="rounded-md px-3 py-2 text-sm  text-white font-bold hover:bg-gray-700 hover:text-white"
                  >
                   Auctions
                  </a>
                  <a
                    href="#"
                    className="rounded-md px-3 py-2 text-sm  text-white font-bold hover:bg-gray-700 hover:text-white"
                  >
                   Rewards Center
                  </a>
                  <a
                    href="#"
                    className="rounded-md px-3 py-2 text-sm  text-white font-bold hover:bg-gray-700 hover:text-white"
                  >
                  About
                  </a>
                  <a
                    href="#"
                    className="rounded-md px-3 py-2 text-sm  text-white font-bold hover:bg-gray-700 hover:text-white"
                  >
                 Contact
                  </a>
                  <a
                    href="#"
                    className="rounded-md px-3 py-2 text-sm  text-white font-bold hover:bg-gray-700 hover:text-white"
                  >
                  Blog
                  </a>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                type="button"
                className="relative rounded-full bg-purple-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <FaSearch className="text-white"/>
              </button>
              <div className="relative ml-3">
                <div>
                  <button className="text-black font-bold bg-white pr-6 pl-6 rounded-[120px]">
                    Login
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`sm:hidden ${isMenuOpen ? "block" : "hidden"}`} id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <a
              href="#"
              className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
              aria-current="page"
            >
            Home
            </a>
            <a
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Auctions
            </a>
            <a
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Rewards Center
            </a>
            <a
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              About
            </a>
            <a
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Contact
            </a>
            <a
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Blog
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
