import React from 'react'
import Logo from '../components/Logo'
import Navigation from './Navigation'

const Header = () => {
    return (

        <header className='header h-20'>
            <div className=' z-10 flex justify-between w-screen p-5 fixed bg-black'>
                <figure>
                    <Logo />
                </figure>
                <div className='flex gap-20'>
                    <Navigation />
                    <button className='mr-4 transition duration-500'>Shoppen</button>
                </div>
            </div>
        </header>
    
    )
}

export default Header