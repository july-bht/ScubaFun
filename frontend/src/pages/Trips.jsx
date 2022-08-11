import React from "react";
import Line from "../components/Line";
import Card from "./components/TripCard";

const Trips = () => {
  return (
    <section className=" pt-24 text-center">
      {/* slider */}
      <img className="h-96 w-screen bg-secondary" src="" alt="" />

      {/* cards */}
      <div className=" justify-center flex flex-col p-12">
        <h3 className="title  ">lorem ibsum</h3>
        <Line />

        {/* filter */}
        <div></div>

       <Card/>
      </div>
    </section>
  );
};

export default Trips;
