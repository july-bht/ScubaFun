import React from "react";
import Line from "../components/Line";

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

        <div className="pt-5 flex flex-col gap-5 justify-center container">
         
         {/* card */}
          <div className="flex h-32 mx-auto hover:shadow  hover:scale-105 ease-in-out duration-200">
            {/* time and dato */}
            <div className="my-auto px-12 font-thin">
              <p>dato</p>
              <p>tidspunkt</p>
            </div>

            {/* info */}
            <div className="bg-secondary px-8">
              <h5 className="small-title">båd dykning</h5>

              {/* læs mere onclick modal */}
              <div>læs mere</div>
            </div>

            {/* price */}
            <div className="bg-primary h-32 w-max">
              <div className="rotate-90">
                <span className=" text-white font-medium ">350 kr</span>
              </div>
            </div>

            {/* image */}
            <figure>
              <img className="h-3/4 w-48" src="" alt="" />
              <figcaption className=" h-1/4 bg-black text-white p-2">
                place
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trips;
