import React from "react";
import Header from "./AdminNavigation";
import data from "../../assets/data.json";
import Card from "../../pages/components/TripCard";

const AdminHomepage = () => {
  return (
    <>
      <div>
        <Header />
      </div>

      <section className="flex justify-center bg-secondary">
        <div className="flex flex-col md-lg:flex-row md-lg:w-5/6 gap-24 justify-center mt-24 ">
          <section className="">
            <div>
              <p className="text-black pl-10 md-lg:pl-0 text-3xl font-bold">Dykker Ture</p>
            </div>

            {/* dykker ture start */}
            <div className="pt-5 mx-10 md-lg:m-0">
              <div className="h-fit border rounded bg-white p-5">
                {/* filter */}
                <div>
                  <Card />
                </div>
              </div>
            </div>
          </section>
          {/* dykker ture end */}

          {/* steder start */}
          <section className="">
            <div className="w-full flex">
              <p className="text-black pl-10 md-lg:pl-0 text-3xl font-bold">Steder</p>
            </div>
            {/* Card section start */}
            <div className="pt-5 mx-10 md-lg:m-0">
              <div className="h-fit border rounded bg-white p-5 grid grid-cols-2 md-lg:grid-cols-1 xl:grid-cols-2 gap-5 justify-items-start w-full">
                {data.places.map((item, i) => (
                  <div
                    key={i}
                    className="max-w-sm rounded overflow-hidden shadow-lg"
                  >
                    <img
                      className="w-full object-cover"
                      src={item.img}
                      alt="Sunset in the mountains"
                    />
                    <div className="px-6 py-4 bg-secondary">
                      <div className="font-bold text-xl mb-2">{item.title}</div>
                      <p className="text-gray-700 text-base">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Card section end */}
          </section>
          {/* steder end */}
        </div>
      </section>
    </>
  );
};

export default AdminHomepage;
