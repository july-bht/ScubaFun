import React from 'react'
import Logo from '../components/Logo'
import { AiFillYoutube, AiFillFacebook } from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className='bg-black w-full flex flex-col text-white md-lg:grid md-lg:grid-cols-3 p-12 justify-between'>

      <div className="flex items-center justify-center hover:cursor-pointer">
          <Link to="/"><Logo /></Link>
      </div>

      <div className="flex order-last pt-10 md-lg:pt-0 md-lg:order-none items-center justify-center">
        <div className='h-12 border-l-2 border-primary flex items-center'>
        <AiFillFacebook className='text-9xl p-11 hover:text-primary hover:cursor-pointer' />
        </div>

        <div className='h-12 border-l-2 border-r-2 border-primary flex items-center'>
        <AiFillYoutube className='text-9xl p-11 hover:text-primary hover:cursor-pointer' />
        </div>
      </div>

      <div className="text-white pt-10 md-lg:pt-0 flex flex-col justify-center items-center">
        <p className='text-primary text-2xl'>Firma info</p>
        <p className='text-white pt-2'>+45 42 78 96 05</p>
        <p className='text-white pt-1'>contact@scubafun.dk</p>
        <p className='text-white pt-1'>CVR: 40091149</p>
        <p className='text-white pt-1'>Svinget 2 8570</p>
        <p className='text-white pt-1'>Trustrup, Lyngby</p>
      </div>

    </footer>
  )
}

export default Footer