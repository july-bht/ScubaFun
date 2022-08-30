import React from "react";
import Logo from "../components/Logo";
import Navigation from "./Navigation";
import { Link, NavLink } from "react-router-dom";
import '../CSS/styles.css';

const links = [
  {
    name: "Hjem",
    to: "/",
  },
  {
    name: "Dykkerture",
    to: "/trips",
  },
  {
    name: "Steder",
    to: "/places",
  },
  {
    name: "Info",
    to: "/info",
  },
  {
    name: "Kontakt",
    to: "/contact",
  },
];

const Header = () => {
  return (
<<<<<<< HEAD
    <header id='header'>
    <div className=' z-10 flex justify-between w-screen p-5 fixed'>
        <figure>
            <Logo />
        </figure>
        <div className='flex gap-20'>
            <Navigation />
            <button>Shoppen</button>
=======
    <nav className="w-full flex justify-between px-4 py-2 fixed z-50 mx-auto bg-black">
      <figure className="flex items-center hover:cursor-pointer">
        <Link to="/">
          <Logo />
        </Link>
      </figure>

      {/* Desktop Navigation */}
      <div className="hidden  space-x-8 md:flex">
        <div className="pr-6 px-1 py-4 gap-5 flex items-center">
          {links.map((link) => (
            <NavLink
              className="my-auto  font-medium w-auto text-white text-base hover:text-primary"
              key={link.name}
              to={link.to}
            >
              {link.name}
            </NavLink>
          ))}

          <button className="px-4 py-1 transition duration-500">
            Shoppen
          </button>
>>>>>>> parent of 0b92c65 (link)
        </div>
    </div>
</header>
  );
};

export default Header;
