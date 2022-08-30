<<<<<<< Updated upstream
import Header from "./AdminNavigation";
import React from "react";
import { Link, NavLink } from "react-router-dom";

const AdminLayout = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      <section className="bg-primary flex flex-col items-center justify-center h-screen">
        <section>
          <div className="flex gap-2 justify-center">
            <p className="text-white text-4xl sm:text-6xl">ADMIN PAGE</p>
          </div>
=======
<<<<<<< Updated upstream
import React from 'react'

const AdminLayout = () => {
  return (
    <div>AdminLayout</div>
  )
=======
import Header from "./AdminNavigation";


import React, { useContext } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { LoginContext } from '../../context/LoginContext';

// components


// css



const AdminLayout = ( { children } ) => {


    return (
        <div>

            <Header />

            <main>
                <Outlet />
            </main>
        </div>
    )
>>>>>>> Stashed changes
}
>>>>>>> Stashed changes

          {/* FORM */}
          <section className="flex justify-center pt-12">
            <div className="bg-black lg:w-1/3 sm:w-1/2 w-full">
              <form className="flex flex-col px-12 py-7">
                <label className="flex gap-2 text-white flex-col">
                  Brugernavn
                  <input
                    className="p-1 bg-white text-black"
                    type="text"
                    name="name"
                  />
                </label>

                <label className="flex pt-3 gap-2 text-white flex-col">
                  Kodeord
                  <input
                    className="p-1 bg-white text-black"
                    type="text"
                    name="email"
                  />
                </label>
              </form>

              <div className="flex justify-center pb-7">
                <Link to="/adminHomepage"><button className="h-8 transition duration-500">Log ind</button></Link>
              </div>
            </div>
          </section>
          {/* FORM END*/}
        </section>
      </section>
    </>
  );
};

export default AdminLayout;
