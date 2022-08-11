import React from "react";
import { Link } from "react-router-dom";
import data from "../../assets/data.json";

const TripsCard = () => {
  return (
    <div className=" flex  flex-col bg-black m-auto p-auto">
      <h1 className="flex py-5 mx-auto font-bold text-4xl text-primary">
        Kommende ture
      </h1>

      <div className="flex  snap-mandatory snap-x overflow-x-scroll pb-10 hide-scroll-bar">
        <div className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 ">
          {data.trips.map((i, key) => (
            <div className="inline-block px-3 snap-center">
              <div className="w-64 h-24 max-w-xs overflow-hidden rounded-lg bg-white grid grid-cols-2">
<div className="grid grid-cols-1 place-items-center gap-1 content-center  text-center">
  <p>{i.date}</p>
  <p>{i.time}</p>
</div>

<figure className="flex flex-col bg-primary">
  <img src={i.img} alt={i.alt} />

</figure>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Link
        to="/trips"
        className="text-white text-center p-3 hover:text-primary"
      >
        Tryk her for mere information om kommende ture
      </Link>
    </div>
  );
};

export default TripsCard;
