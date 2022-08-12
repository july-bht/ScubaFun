import React from 'react'
import Line from '../../components/Line'

const Info = () => {
  return (
     <div
    className="  h-screen p-10 text-center
  md:p-12"
    id="nextSection"
  >
    <div
      className="bg-secondary h-full p-5 flex gap-5 flex-col
    md:flex-row md:p-12
    "
    >
      <figure className="h-full w-full bg-white">
        <img src="" alt="" />
      </figure>
      <div className="my-auto">
        <h3 className="title">Lorem ibsum</h3>
        <Line />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          fugit nulla minima nihil itaque esse eum qui consequatur autem
          ducimus, corrupti modi. Magnam corporis, nobis voluptates rem
          dolor odio minus.
        </p>
      </div>
    </div>
  </div>
  )
}

export default Info;