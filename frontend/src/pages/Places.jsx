import React from "react";
import Line from "../components/Line";
import data from "../assets/data.json";

import PlacesAside from "./components/PlacesAside";

const Places = () => {
  return (
    <section>
      {/* search aside */}
      <PlacesAside />

      {/* map  */}

      {/* TITLE */}
      <div>
        <p className="flex justify-center text-4xl font-bold text-black">
          Dykker Steder
        </p>
        <Line />
      </div>
      {/* TITLE END */}

      {/* CARDS */}
      <div className="h-3/4 pt-12 grid md:grid-cols-3 grid-cols-2 p-5 gap-8 justify-items-center w-screen">
        {/* CARDS SECTION */}
        {data.places.map((item, i) => (
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img
              className="w-full"
              src={item.img}
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{item.title}</div>
              <p className="text-gray-700 text-base">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Places;
