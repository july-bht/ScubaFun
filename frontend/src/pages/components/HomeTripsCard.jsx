import React from 'react';
import img2 from "../../images/IMG-2.jpg"
import img4 from "../../images/IMG-4.jpg"
import img6 from "../../images/IMG-6.jpg"
import img8 from "../../images/IMG-8.jpg"

const TripsCard = () => {
  return (
  
    <div className=" flex flex-col bg-black m-auto p-auto">
    <h1
      className="flex py-5 mx-auto font-bold text-4xl text-primary">
      Næste ture
    </h1>
    <div className="flex snap-mandatory snap-x overflow-x-scroll pb-10 hide-scroll-bar">
      <div className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 ">
        <div className="inline-block px-3 snap-center">
          <img src={img2} alt='' className="w-64 h-32 max-w-xs overflow-hidden rounded-lg shadow-md  hover:shadow-xl transition-shadow duration-300 ease-in-out"/>
        </div>
        <div className="inline-block px-3 snap-center">
          <img src={img4} alt='' className="w-64 h-32 max-w-xs overflow-hidden rounded-lg shadow-md  hover:shadow-xl transition-shadow duration-300 ease-in-out"/>
        </div>
        <div className="inline-block px-3 snap-center">
          <img src={img6} alt='' className="w-64 h-32 max-w-xs overflow-hidden rounded-lg shadow-md  hover:shadow-xl transition-shadow duration-300 ease-in-out"/>
        </div>
        <div className="inline-block px-3  snap-center">
          <img src={img8} alt='' className="w-64 h-32 max-w-xs overflow-hidden rounded-lg shadow-md  hover:shadow-xl transition-shadow duration-300 ease-in-out"/>
        </div>
    
      </div>
    </div>
  </div>
  )
}

export default TripsCard
