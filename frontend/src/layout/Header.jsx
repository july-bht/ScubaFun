import React from 'react'
import Logo from '../components/Logo'
import Navigation from './Navigation'
import { Link } from "react-router-dom";


const Header = () => {
    return (

        <header className='header w-full h-20 z-40 flex justify-between  p-5 fixed bg-black'>
           
                <figure className='flex items-center hover:cursor-pointer'>
                    <Link to="/"><Logo /></Link>
                </figure>
                <div className='flex'>
                    <Navigation />
                    <div className='pr-6 px-5 py-4 flex items-center'>
                    <button className='hidden px-4 py-1 md-lg:block transition duration-500'>Shoppen</button>
                    </div>
                </div>
         
        </header>
    
    )
}

export default Header