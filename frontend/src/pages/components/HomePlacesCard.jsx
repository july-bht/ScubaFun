import React from 'react'
import img1 from "../../images/IMG-3.jpg"
import img5 from "../../images/IMG-5.jpg"
import img7 from "../../images/IMG-7.jpg"
import img9 from "../../images/IMG-9.jpg"

const PlacesCard = () => {
  return (
  
    <div className="pt-20 flex flex-col  m-auto p-auto ">
    <h1 className="flex py-5 mx-auto font-bold text-4xl text-black ">
      Top dykker steder
    </h1>
    <div className="flex snap-mandatory snap-x overflow-x-scroll pb-32 hide-scroll-bar">
      <div className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 ">
      <div className="inline-block px-3 snap-center">
          <img src={img5} alt="" className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md  hover:shadow-xl transition-shadow duration-300 ease-in-out"/>
        </div>
        <div className="inline-block px-3 snap-center">
          <img src={img1} alt="" className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out"/>
        </div>
        <div className="inline-block px-3 snap-center">
          <img src={img9} alt="" className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md  hover:shadow-xl transition-shadow duration-300 ease-in-out"/>
        </div>
        <div className="inline-block px-3 snap-center">
          <img src={img7} alt="" className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md  hover:shadow-xl transition-shadow duration-300 ease-in-out"/>
        </div>
      </div>
    </div>
  </div>
  )
}

export default PlacesCard