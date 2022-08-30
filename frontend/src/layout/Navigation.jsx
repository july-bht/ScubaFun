import React from "react";
import { NavLink } from "react-router-dom";
import { fallDown as Menu } from "react-burger-menu";

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
    // Pass on our props
    <div className="">
      <Menu noTransition {...props}>
        {links.map((link) => (
          <NavLink
            className="my-auto hidden md-lg:block font-medium w-auto text-white text-base hover:text-primary"
            key={link.name}
            to={link.to}
          >
            {link.name}
          </NavLink>
        ))}

        <button className="px-4 py-1 transition duration-500">Shoppen</button>
      </Menu>
    </div>
  );
};

export default Navigation;
