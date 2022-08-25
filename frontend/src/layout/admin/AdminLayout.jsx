import React from "react";
import { Link, NavLink } from "react-router-dom";

const AdminLayout = () => {
  return (
    <section className="bg-primary flex flex-col items-center justify-center h-screen">
      <Link to="/">
        <h1 className="p-5 font-bold fixed top-0 left-0">Return to HomePage</h1>
      </Link>

      <section>
        <div className="flex gap-2 justify-center">
          <p className="text-white text-6xl">ADMIN PAGE</p>
        </div>

        {/* FORM */}
        <section className="flex justify-center pt-12">
          <div className="bg-black lg:w-1/3 sm:w-1/2 w-4/5">
            <form className="flex flex-col px-12 py-7">
              <label className="flex gap-2 text-white flex-col">
                Brugernavn
                <input className="p-1 bg-white text-black" type="text" name="name" />
              </label>

              <label className="flex pt-3 gap-2 text-white flex-col">
                Kodeord
                <input className="p-1 bg-white text-black" type="text" name="email" />
              </label>
            </form>

            <div className="flex justify-center pb-7">
              <button className="h-8 transition duration-500">
                Log ind
              </button>
            </div>
          </div>
        </section>
        {/* FORM END*/}
      </section>
    </section>
  );
};

export default AdminLayout;
