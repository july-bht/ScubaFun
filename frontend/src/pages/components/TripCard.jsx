
import React from "react";
import data from "../../assets/data.json";

// {data.trips.map((i, key) => (


// )))}



  

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
          <div className="relative  my-6 mx-auto max-w-3xl w-96 ">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-black opacity-80 outline-none focus:outline-none">
                {/*header*/}
                
                  <div>
                  <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl text-white font-semibold">
                    Modal Title
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-white opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-white opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      × frfer
                    </span>
                  </button>
                </div>
                {/*body*/}
                <img className="w-full h-56 " src="" alt="" />
                <div>
                    <h3 className="text-white">båd</h3>
                    <div></div>
                </div>
              
                <div className="bg-black opacity-90">
                  <div className="relative p-6 flex-auto">
                    <p className="my-4 text-slate-500 text-lg leading-relaxed">
                      ncjncjenck
                    </p>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b"></div>
                </div>
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
