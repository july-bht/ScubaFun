import React from 'react'
import Logo from '../components/Logo'
import Navigation from './Navigation'

const Header = () => {
    return (

        <header className='header h-20'>
            <div className=' z-10 flex justify-between w-screen p-5 fixed bg-black'>
                <figure className='flex items-center'>
                    <Logo />
                </figure>
                <div className='flex'>
                    <Navigation />
                    <div className='pr-6 px-5 py-4 flex items-center'>
                    <button className='hidden px-4 py-1 md-lg:block transition duration-500'>Shoppen</button>
                    </div>
                </div>
            </div>
        </header>
    
    )
}

export default Header