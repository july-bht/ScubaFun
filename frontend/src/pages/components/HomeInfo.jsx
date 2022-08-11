import React from 'react';
import Line from '../../components/Line';
import data from "../../assets/data.json";

const Info = () => {
  return (
     <div
    className="  h-screen p-10 text-center
  md:p-12"
    id="nextSection"
  >
    <div
      className="bg-secondary h-full p-5 flex gap-16 flex-col
    md:flex-row md:p-12
    "
    >
      <figure className="h-full w-full bg-white">
        <img className='object-cover h-full' src={data.home.info.img} alt={data.home.info.alt} />
      </figure>
      <div className="my-auto">
        <h5>{data.home.info.subtitle}</h5>
        <h3 className="title ">{data.home.info.title}</h3>
        <Line />
        <p className=''>{data.home.info.description}</p>
      </div>
    </div>
  </div>
  )
}

export default Info;