import Header from "./AdminNavigation";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";


const AdminLayout = ( { children } ) => {
  return (
    <>

    <div>

        <Header />

        <main>
            <Outlet />
        </main>
    </div>

    </>
  );
};

export default AdminLayout;
