import React from 'react'

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
          <div className="w-64 h-32 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"></div>
        </div>
        <div className="inline-block px-3 snap-center">
          <div className="w-64 h-32 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"></div>
        </div>
        <div className="inline-block px-3 snap-center">
          <div className="w-64 h-32 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"></div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default TripsCard
