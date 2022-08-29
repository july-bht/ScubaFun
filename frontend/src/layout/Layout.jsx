import React from 'react';
import { Outlet } from 'react-router-dom'

import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div className=''>
            <Header />

            <main className=''>
                <Outlet />
            </main>

            <Footer />
        </div>
    )
}

export default Layout