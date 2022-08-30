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
    <header id='header'>
    <div className=' z-10 flex justify-between w-screen p-5 fixed'>
        <figure>
            <Logo />
        </figure>
        <div className='flex gap-20'>
            <Navigation />
            <button>Shoppen</button>
        </div>
    </div>
</header>
  );
};

export default Header;
