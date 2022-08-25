import React, { useState } from "react";
import data from "../../assets/data.json";
import {AiOutlineClose} from "react-icons/ai"
  
const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text.slice(0, 450) : text}
      <span onClick={toggleReadMore} className="cursor-pointer text-white px-1">
        {isReadMore ? "...Læs merre" : " Vis mindre"}
      </span>
    </p>
  );
};


const Card = () => {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <div className="pt-5 flex flex-col gap-5 justify-center container">
      {data.trips.map((i, key) => (
        <div
          type="button"
          onClick={() => setShowModal(true)}
          className="w-max mx-auto"
          key={key}
        >
          <div className="rounded-md flex h-32 mx-auto hover:shadow-lg hover:text-black ">
            <div className="my-auto px-12    font-thin">
              <p>{i.date}</p>
              <p>{i.time}</p>
            </div>

            <div className="relative bg-secondary grid grid-cols-1 place-items-center content-center px-8 ">
              <h5 className="small-title">{i.title}</h5>
              <p
                className="cursor-pointer hover:text-secondary"
                type="button"
                onClick={() => setShowModal(true)}
              >
                Læs mere
              </p>
            </div>

            {/* price */}
            <div className="bg-primary h-32  w-10 grid grid-cols-1 place-items-center content-center">
              <div className="rotate-90  w-max">
                <span className=" text-white font-medium ">{i.price} dk</span>
              </div>
            </div>

            {/* image */}
            <figure className="rounded">
              <img className="h-3/4 w-48 rounded-md" src={i.img} alt={i.alt} />
              <figcaption className=" h-1/4 bg-black text-white p-1">
                {i.place}
              </figcaption>
            </figure>
          </div>
        </div>
      ))}
      {showModal ? (
        <>
          <div className="h-screen w-screen justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative  my-6 mx-auto max-w-3xl  ">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg p-4 relative flex mt-20 flex-col w-full bg-black bg-opacity-80 outline-none focus:outline-none">
                {/*header*/}

                <div>
                  <div className="flex items-start justify-between pb-1 border-b border-solid border-slate-200 rounded-t">
                    <p className="">Omkring turen</p>
                    <button
                      className="pb-2 ml-auto hover:bg-transparent bg-transparent border-0 text-white  float-right text-2xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                     <AiOutlineClose className="" />
                    </button>

        

                  </div>
                  {/*body*/}
                  <img className="w-full h-40 object-cover " src={data.trips[0].img} alt="" />
                  <div className="flex gap-5">
                    <h3 className="text-white text-start p-2 text-3xl font-bold">{data.trips[0].title}</h3>
                    <div className="bg-primary text-white font-semibold h-max py-2 px-4 mt-2">{data.trips[0].price}</div>
                  </div>

                  <div className="bg-black bg-opacity-80 h-max p-3">
                    <div className="flex gap-5">
                      <p>{data.trips[0].date}</p>
                      <p>{data.trips[0].time}</p>
                    </div>
                 
                      <div className="flex gap-5 ">
                        <p className="w-2/3 text-start my-4 pr-7 text-white opacity-80  leading-relaxed
                        tex-sm md:text-base">
                          <ReadMore>
                                {data.trips[0].modal.description}
                          </ReadMore>
                      
                        </p>
                        <div className="w-1/3  text-start">
                          <h4 className="pb-3 text-white font-semibold opacity-90">
                            {data.trips[0].modal.contentRight.title}
                          </h4>
                          <ul className="pb-5 text-white opacity-80 pl-4">
                            {data.trips[0].modal.contentRight.list.map(
                              (i, key) => (
                                <li className=" list-disc " key={key}>{i}</li>
                              )
                            )}
                          </ul>
                          <p className="text-white opacity-80"> {data.trips[0].modal.contentRight.info}</p>
                          <p className="text-white opacity-80"> {data.trips[0].modal.contentRight.extra}</p>
              
                      </div>
                    </div>
                    {/*footer*/}
                  </div>

                  <button className="px-8 py-2 mt-5">Tilmeld</button>

                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
};

export default Card;
