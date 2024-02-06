"use client";
import Link from "next/link";
import React from "react";
import { useState } from "react";

const NavbarOrvi = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <header className="bg-white">
        <nav className="flex justify-between items-center w-[92%] mx-auto">
          <div>
            <img
              className="w-16 cursor-pointer"
              src="https://cdn-icons-png.flaticon.com/512/5968/5968204.png"
              alt="..."
            />
          </div>
          <div
            className={`nav-links duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 ${
              isMenuOpen ? "top-[9%]" : "-top-[100%]"
            } md:w-auto w-full flex items-center px-5`}
          >
            <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8 bg-red-500">
   
                <li className="hover:bg-gray-300 p-2 hover:rounded-md">
                  <Link href="/">Home</Link>
                </li>

                <li className="hover:bg-gray-300 p-2 hover:rounded-md">
                  <Link href="/about">About Us</Link>
                </li>
                <li className="hover:bg-gray-300 p-2 hover:rounded-md">
                  <Link href="/services">Services</Link>
                </li>
                <li className="hover:bg-gray-300 p-2 hover:rounded-md">
                  <Link href="/contact">Contact Us</Link>
                </li>
              {/* Add more menu items here */}
            </ul>
          </div>
          <div className="flex items-center gap-6">
            <button
              onClick={toggleMenu}
              className="text-white px-5 py-2 rounded-full hover:bg-[#87acec] md:hidden"
            >
              <div>
                   <button onClick={toggleMenu}>
            <svg
              width="40px"
              height="40px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 18L20 18"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M4 12L20 12"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M4 6L20 6"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </button>
              </div>
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavbarOrvi;
