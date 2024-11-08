'use client';
import { Menu, Transition } from "@headlessui/react";
import { ChevronDown, Search, Menu as MenuIcon, MapPin } from "lucide-react";
import Link from "next/link";
import { Fragment } from "react";

export default function Navbar() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-black">
            <span className="text-black">ZOMATO</span>
          </Link>
        </div>
        {/* Search Bar */}
        <div className="flex-1 mx-4 hidden md:flex">
          <div className="relative w-full flex items-center">
            {/* Dropdown Button */}
            <Menu as="div" className="relative">
              {({ open }) => (
                <>
                  <Menu.Button className="flex items-center px-4 py-2 bg-gray-100 border border-r-0 border-gray-300 rounded-l-md focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none">
                    <MapPin className="w-5 h-5 text-red-500 mr-1" />
                    <span className="text-gray-700">Bengaluru</span>
                    <ChevronDown className="w-4 h-4 ml-1 text-gray-500" />
                  </Menu.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-1 z-50 border border-gray-200">
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={`${
                              active ? "bg-gray-100" : ""
                            } w-full text-left px-4 py-2 text-gray-700`}
                          >
                            Bengaluru
                          </button>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={`${
                              active ? "bg-gray-100" : ""
                            } w-full text-left px-4 py-2 text-gray-700`}
                          >
                            Mumbai
                          </button>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={`${
                              active ? "bg-gray-100" : ""
                            } w-full text-left px-4 py-2 text-gray-700`}
                          >
                            Delhi
                          </button>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={`${
                              active ? "bg-gray-100" : ""
                            } w-full text-left px-4 py-2 text-gray-700`}
                          >
                            Hyderabad
                          </button>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </>
              )}
            </Menu>
            {/* Text Input */}
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search for restaurant, cuisine or a dish"
                className="w-full py-2 pl-10 pr-4 rounded-r-md border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
            </div>
          </div>
        </div>
        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/login" className="hover:text-red-500 transition">
            Log in
          </Link>
          <Link
            href="/signup"
            className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition"
          >
            Sign up
          </Link>
        </div>
        {/* Hamburger Menu for mobile */}
        <div className="md:hidden">
          <Menu>
            <Menu.Button className="flex items-center">
              <MenuIcon className="w-6 h-6" />
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 mt-2 w-72 bg-white shadow-lg rounded-md py-1 z-50">
                {/* Search Bar in Dropdown */}
                <div className="px-4 py-2">
                  <div className="relative w-full flex items-center">
                    <Menu as="div" className="relative">
                      <Menu.Button className="flex items-center px-4 py-2 bg-gray-100 border border-r-0 border-gray-300 rounded-l-md focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none">
                        <MapPin className="w-5 h-5 text-red-500 mr-1" />
                        <span className="text-gray-700">Bengaluru</span>
                        <ChevronDown className="w-4 h-4 ml-1 text-gray-500" />
                      </Menu.Button>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-1 z-50 border border-gray-200">
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                className={`${
                                  active ? "bg-gray-100" : ""
                                } w-full text-left px-4 py-2 text-gray-700`}
                              >
                                Bengaluru
                              </button>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                className={`${
                                  active ? "bg-gray-100" : ""
                                } w-full text-left px-4 py-2 text-gray-700`}
                              >
                                Mumbai
                              </button>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                className={`${
                                  active ? "bg-gray-100" : ""
                                } w-full text-left px-4 py-2 text-gray-700`}
                              >
                                Delhi
                              </button>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                className={`${
                                  active ? "bg-gray-100" : ""
                                } w-full text-left px-4 py-2 text-gray-700`}
                              >
                                Hyderabad
                              </button>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                    <div className="relative w-full">
                      <input
                        type="text"
                        placeholder="Search for restaurant, cuisine or a dish"
                        className="w-full py-2 pl-10 pr-4 rounded-r-md border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none"
                      />
                      <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
                    </div>
                  </div>
                </div>
                {/* Login and Signup Links */}
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      href="/login"
                      className={`block px-4 py-2 ${
                        active ? "bg-gray-100" : ""
                      }`}
                    >
                      Log in
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      href="/signup"
                      className={`block px-4 py-2 ${
                        active ? "bg-gray-100" : ""
                      }`}
                    >
                      Sign up
                    </Link>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </nav>
    </header>
  );
}
