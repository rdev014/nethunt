"use client";
import Link from "next/link";
import { useState } from "react";
import AuthButton from "../Authbutton";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full py-5 bg-white dark:bg-gray-900 shadow-md">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6">

        {/* Brand Name */}
        <div>
          <Link href="/" aria-label="NetHunt" className="text-3xl font-semibold text-lime-400 dark:text-lime-400">
            NetHunt
          </Link>
        </div>

        {/* Hamburger Menu Button */}
        <button
          className="md:hidden flex items-center text-black dark:text-white focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Desktop Navbar */}
        {!mobileMenuOpen && (
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/about" className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-400">
              About
            </Link>
            <Link href="/community" className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-400">
              Community
            </Link>
            <Link href="/challenges" className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-400">
              Challenges
            </Link>
            <Link href="/contact" className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-400">
              Contact
            </Link>
            <div className="flex items-center space-x-4">
              <Link href="/auth/profile" className="flex items-center text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5.121 18.121A4 4 0 015 17V7a4 4 0 014-4h6a4 4 0 014 4v10a4 4 0 01-.121 1.121M12 7h.01M16 20H8a2 2 0 110-4h8a2 2 0 110 4z"
                  />
                </svg>
                <span className="ml-2">Profile</span>
              </Link>
              <Link href="/auth/login">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500">
                  Login
                </button>
              </Link>
              <Link href="/auth/register">
                <button className="px-4 py-2 bg-orange-400 text-white rounded-lg hover:bg-orange-300">
                  Register
                </button>
              </Link>
              <AuthButton/>
            </div>
          </div>
        )}
      </nav>

      {/* Mobile Navbar */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 py-5 bg-white dark:bg-gray-900 shadow-lg space-y-4">
          <Link href="/about" className="block py-2 text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-400">
            About
          </Link>
          <Link href="/community" className="block py-2 text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-400">
            Community
          </Link>
          <Link href="/challenges" className="block py-2 text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-400">
            Challenges
          </Link>
          <Link href="/contact" className="block py-2 text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-400">
            Contact
          </Link>
          <div className="flex flex-col space-y-4">
            <Link href="/auth/login">
              <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500">
                Login
              </button>
            </Link>
            <Link href="/auth/register">
              <button className="w-full px-4 py-2 bg-orange-400 text-white rounded-lg hover:bg-orange-300">
                Register
              </button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
