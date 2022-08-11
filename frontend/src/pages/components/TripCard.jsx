import React from 'react';
import data from"../../assets/data.json";

const Card = () => {
  return (
    <div className="pt-5 flex flex-col gap-5 justify-center container">
         
    {/* card */}
    {data.trips.map((i, key)=>(
        <div key={key} className="rounded-md flex h-32 mx-auto hover:shadow-lg hover:text-black hover:scale-105 ease-in-out duration-200">
       {/* time and dato */}
       <div className="my-auto px-12    font-thin">
         <p>{i.date}</p>
         <p>{i.time}</p>
       </div>

       {/* info */}
       <div className="bg-secondary  px-8 ">
       
            <h5 className="small-title">{i.title}</h5>

         {/* læs mere onclick modal */}
         <span>læs mere</span>
 
         
       </div>

       {/* price */}
       <div className="bg-primary h-32 w-max">
         <div className="rotate-90">
           <span className=" text-white font-medium ">{i.price}dk</span>
         </div>
       </div>

       {/* image */}
       <figure className='rounded'>
         <img className="h-3/4 w-48 rounded-md" src={i.img} alt={i.alt} />
         <figcaption className=" h-1/4 bg-black text-white p-2">
          {i.place}
         </figcaption>
       </figure>
     </div>
    ))}
     
   </div>
  )
}

export default Card