import React from 'react';
import data from"../../assets/data.json";



const Card = () => {

// onclick open modal
const openModal = () => {
  document.querySelector(".modal-overlay").classList.add("visible");
  document.querySelector(".modal-container").classList.add("visible");
}

// onclick close modal
const closeModal = () => {
  document.querySelector(".modal-overlay").classList.remove("visible");
  document.querySelector(".modal-container").classList.remove("visible");
}

  return (
    <div className="pt-5 flex flex-col gap-5 justify-center container">
         
    {/* card */}
    {data.trips.map((i, key)=>(
        <div className='w-max mx-auto' key={key}>
        <div  className="rounded-md flex h-32 mx-auto hover:shadow-lg hover:text-black hover:scale-105 ease-in-out duration-200">
       {/* time and dato */}
       <div className="my-auto px-12    font-thin">
         <p>{i.date}</p>
         <p>{i.time}</p>
       </div>

       {/* info */}
       <div className="relative bg-secondary grid grid-cols-1 place-items-center content-center px-8 ">
       
            <h5 className="small-title">{i.title}</h5>

         {/* læs mere onclick modal */}
        
          {/* onclick open Modal */}
          <p onClick={openModal} className="text-center hover:text-primary cursor-pointer">læs mere</p>

          <div className=' fixed top-0  left-0 z-100 modal-overlay h-screen w-screen bg-black opacity-50 hidden'>
            <div className='h-1/2 w-1/2 bg-black bg-opacity-90 p-5'>
              <div className='flex justify-between '>
                <p> Båddykning</p>
              <div className='text-white cursor-pointer' onClick={closeModal}> &times;</div>
              </div>
              <img src="" alt="" />
              <div className="flex">
                <h3>båd</h3>
                pris
              </div>
              <div className="p-5 flex">
                <p></p>
                <div>
                  <h5></h5>
                  <ul><li></li></ul>
                  <p></p>
                </div>
                

              </div>
            </div>
          

          </div>

       

       

 
         
       </div>

       {/* price */}
       <div className="bg-primary h-32  w-10 grid grid-cols-1 place-items-center content-center">
         <div className="rotate-90  w-max">
           <span className=" text-white font-medium ">{i.price} dk</span>
         </div>
       </div>

       {/* image */}
       <figure className='rounded'>
         <img className="h-3/4 w-48 rounded-md" src={i.img} alt={i.alt} />
         <figcaption className=" h-1/4 bg-black text-white p-1">
          {i.place}
         </figcaption>
       </figure>
     </div>

     <div className='border border-secondary max-w-min ml-24 my-1 h-16'></div>
     </div>
    ))}
     
   </div>
  )
}

export default Card