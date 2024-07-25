"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { UserButton, useAuth } from "@clerk/nextjs";
import Image from "next/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const { userId } = useAuth();
  const isAuth = !!userId;
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-10 transition-all duration-300 ${
        scrolled ? "bg-black/70 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center mx-4 lg:mx-10 p-4">
        <Link href="/" className="flex">
          <Image
            src="/partners_logo/logo_5png.jpg"
            width={100}
            height={30}
            alt="Logo"
            className=" w-[3.6rem] lg:w-[5rem]"
          />
           <span className="ml-2 self-center text-xl lg:text-2xl font-semibold whitespace-nowrap dark:text-white">Powerhouse</span>

        </Link>
        <div className="transition">
          <div className="lg:hidden text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <button onClick={toggleMenu}>
              {isOpen ? (
                <XMarkIcon className="w-8 h-9 ml-20 text-white" />
              ) : (
                <Bars3Icon className="w-9 h-10 text-white" />
              )}
            </button>
          </div>
          <div
            className={`z-20  bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 ${
              isOpen ? "flex" : "hidden"
            } lg:flex`}
          >
            {!isAuth ? (
              <div className="py-2 text-sm lg:bg-transparent lg:flex lg:gap-4 dark:text-gray-200">
                <Link href="/sign-in">
                  <div className="text-white transition rounded bg-red-600 hover:bg-red-500 py-2 px-4 lg:py-3 lg:px-4 border-2">
                    Login
                  </div>
                </Link>
                <Link href="/sign-up">
                  <div className="text-white transition rounded bg-red-600 hover:bg-red-500 py-2 px-4 lg:py-3 lg:px-4 border-2">
                    Sign Up
                  </div>
                </Link>
              </div>
            ) : (
              <div className="py-2 text-sm text-gray-700 dark:text-gray-200">
                <Link href="/profile">
                  <div className="text-white py-2 px-4 lg:py-3 lg:px-4">Profile</div>
                </Link>
                <div className="py-2 px-4 lg:py-3 lg:px-4">
                  <UserButton afterSignOutUrl="/" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
