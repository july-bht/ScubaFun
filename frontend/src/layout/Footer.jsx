import React from 'react'
import Logo from '../components/Logo'
import { AiFillYoutube, AiFillFacebook } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className='bg-black w-full text-white flex p-12 justify-between'>

      <div className="flex items-center">
          <Logo />
      </div>

      <div className="flex items-center">
        <div className='h-12 border-l-2 border-primary flex items-center'>
        <AiFillFacebook className='text-9xl p-11 hover:text-primary hover:cursor-pointer' />
        </div>

        <div className='h-12 border-l-2 border-r-2 border-primary flex items-center'>
        <AiFillYoutube className='text-9xl p-11 hover:text-primary hover:cursor-pointer' />
        </div>
      </div>

      <div className="text-white">
        <p className='text-primary text-2xl'>Firma info</p>
        <p className='text-white'>+45 42 78 96 05</p>
        <p className='text-white'>contact@scubafun.dk</p>
        <p className='text-white'>CVR: 40091149</p>
        <p className='text-white'>Svinget 2 8570</p>
        <p className='text-white'>Trustrup, Lyngby</p>
      </div>

    </footer>
  )
}

export default Footer