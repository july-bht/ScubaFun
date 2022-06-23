import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => {

    const links = [
        {
            name: 'Hjem',
            to: '/'
        },
        {
            name: 'Dykkerture',
            to: '/trips'
        },
        {
            name: 'Steder',
            to: '/places'
        },
        {
            name: 'Info',
            to: '/info'
        },
        {
            name: 'Kontakt',
            to: '/contact'
        }
    ]
    return (
        <nav className='grid w-auto grid-cols-5 justify-items-center gap-8'>
            {links.map(link => (
                <NavLink className="my-auto hidden md-lg:block font-medium  text-white text-base hover:text-primary" key={link.name} to={link.to}>
                    {link.name}
                </NavLink>
            ))}
        </nav>
    )
}

export default Navigation