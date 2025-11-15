import React, { useRef } from "react";
import Image from "next/image";
import { assets } from "@/Assets/assets";

const Navbar: React.FC = () => {
  const sideMenu = useRef<HTMLUListElement | null>(null);

  const openMenu = () => {
    if (sideMenu.current) {
      sideMenu.current.style.transform = "translateX(-16rem)";
    }
  };

  const closeMenu = () => {
    if (sideMenu.current) {
      sideMenu.current.style.transform = "translateX(16rem)";
    }
  };

  return (
    <nav className="w-full fixed px-5 lg:px-8 xl:px-[8%] flex items-center justify-between z-50 bg-white shadow-md">
      <a href="#">
        <Image
          src={assets.Logo_img}
          alt="logo"
          className="h-10 w-20 cursor-pointer mr-14"
        />
      </a>

      <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-gray-200 shadow-amber-50 bg-opacity-50">
        <li className="font-Inter hover:text-blue-700">
          <a href="#top">Home</a>
        </li>
        <li className="hover:text-blue-700">
          <a href="#about">About Me</a>
        </li>
        <li className="hover:text-blue-700">
          <a href="#service">Services</a>
        </li>
        <li className="hover:text-blue-700">
          <a href="#work">My Work</a>
        </li>
        <li className="hover:text-blue-700">
          <a href="#exp">Experience</a>
        </li>
        <li className="hover:text-blue-700">
          <a href="#contact">Contact</a>
        </li>
        <li className="hover:text-blue-700">
          <a href="#blog">Blog</a>
        </li>
      </ul>

      <div className="flex items-center space-x-2">
        <button className="cursor-pointer">
          <Image src={assets.sun_icon} alt="switch-mode" className="w-6" />
        </button>

        <a
          href="#contact"
          className="hidden lg:flex items-center gap-3 px-10 py-2.5 text-blue-600 border border-gray-700 rounded-full ml-4 font-mono"
        >
          <span>Contact</span>
          <Image src={assets.arrow1} alt="contact" className="w-3" />
        </a>

        <button className="block md:hidden ml-3" onClick={openMenu}>
          <Image src={assets.menu_icon} alt="menu" className="w-6" />
        </button>
      </div>

      {/* MOBILE MENU */}
      <ul
        ref={sideMenu}
        className="flex md:hidden flex-col gap-4 py-20 px-10 fixed right-0 top-0 bottom-0 w-64 z-50 h-screen bg-gray-600 transition duration-500 translate-x-64"
      >
        <div className="absolute right-6 top-6 cursor-pointer" onClick={closeMenu}>
          <Image src={assets.cancel_icon} alt="close" className="w-6" />
        </div>

        <li className="hover:text-blue-700">
          <a href="#top" onClick={closeMenu}>Home</a>
        </li>
        <li className="hover:text-blue-700">
          <a href="#about" onClick={closeMenu}>About Me</a>
        </li>
        <li className="hover:text-blue-700">
          <a href="#service" onClick={closeMenu}>Services</a>
        </li>
        <li className="hover:text-blue-700">
          <a href="#work" onClick={closeMenu}>My Work</a>
        </li>
        <li className="hover:text-blue-700">
          <a href="#exp" onClick={closeMenu}>Experience</a>
        </li>
        <li className="hover:text-blue-700">
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </li>
        <li className="hover:text-blue-700">
          <a href="#blog" onClick={closeMenu}>Blog</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
