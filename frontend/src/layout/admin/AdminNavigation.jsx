import React from "react";
import Logo from "../../components/Logo";
import { Link, NavLink } from "react-router-dom";


const links = [
  {
    name: "Tilbage til hjemmesiden",
    to: "/",
  }

];

const Header = () => {
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
           <Link to="admin">Shoppen</Link> 
          </button>
        </div>
      </div>
      {/* Desktop Navigation END */}

      {/* Ipad/Mobile Navigation */}
      <div className="md:hidden">
        {/* <Navigation pageWrapId={"page-wrap"} outerContainerId={"App"} /> */}
      </div>
      {/* Ipad/Mobile Navigation END */}

    </nav>
  );
};

export default Header;
