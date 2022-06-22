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
            name: 'Praktisk info',
            to: '/info'
        },
        {
            name: 'Kontakt',
            to: '/contact'
        }
    ]
    return (
        <nav className='flex gap-10'>
            {links.map(link => (
                <NavLink className="my-auto font-medium text-white text-medium hover:text-primary" key={link.name} to={link.to}>{link.name}</NavLink>
            ))}
        </nav>
    )
}

export default Navigation