import React from "react";
import { NavLink } from "react-router-dom";
import { fallDown as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import Logo from "../components/Logo";

const Navigation = (props) => {
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
  return (
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
         <Link to="/admin">Shoppen</Link> 
        </button>
      </div>
    </div>
    {/* Desktop Navigation END */}

    {/* Ipad/Mobile Navigation */}
    <div className="md:hidden">
      <Navigation />
    </div>
    {/* Ipad/Mobile Navigation END */}

  </nav>
  );
};

export default Navigation;
