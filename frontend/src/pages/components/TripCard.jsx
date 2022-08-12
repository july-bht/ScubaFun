import React from "react";
import data from "../../assets/data.json";
import Modal from "../components/modaltest.js";

const Card = () => {
  return (
    <div className="pt-5 flex flex-col gap-5 justify-center container">
      {/* card */}
      {/* {data.trips.map((i, key) => (
        <div className="w-max mx-auto" key={key}>
          <div className="rounded-md flex h-32 mx-auto hover:shadow-lg hover:text-black hover:scale-105 ease-in-out duration-200">
         
            <div className="my-auto px-12    font-thin">
              <p>{i.date}</p>
              <p>{i.time}</p>
            </div>

  
            <div className="relative bg-secondary grid grid-cols-1 place-items-center content-center px-8 ">
              <h5 className="small-title">{i.title}</h5>
          
            <Modal/>

            </div>

     
            <div className="bg-primary h-32  w-10 grid grid-cols-1 place-items-center content-center">
              <div className="rotate-90  w-max">
                <span className=" text-white font-medium ">{i.price} dk</span>
              </div>
            </div>

       
            <figure className="rounded">
              <img className="h-3/4 w-48 rounded-md" src={i.img} alt={i.alt} />
              <figcaption className=" h-1/4 bg-black text-white p-1">
                {i.place}
              </figcaption>
            </figure>
          </div>

          <div className="border border-secondary max-w-min ml-24 my-1 h-16"></div>
        </div>
      ))} */}
    </div>
  );
};

export default Card;
