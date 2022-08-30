import Line from "../components/Line";
import React, { useState } from 'react';
import data from '../assets/data.json';
import { IconContext } from 'react-icons';
import { FiPlus, FiMinus } from 'react-icons/fi';
import infoIMG from '../images/info-IMG.jpg'



const Info = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = index => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <section className="pt-20">
  
      <figure>
        <img alt="" className="w-full object-cover h-3/5 sm:h-80" src={infoIMG} />
      </figure>

    <div className='text-center pt-12 mb-12'>
    <h2 className='text-3xl font-bold'>Praktisk Informasjon</h2>
    < Line />
  </div>
      <div className="pb-24">
          {data.info.map((item, index) => {
            return (
              <section className="grid lg:px-80 md:px-8">
              <div className="pb-4">
                <div className="bg-secondary flex justify-between w-full text-center cursor-pointer" onClick={() => toggle(index)} key={index}>
                  <h4 className="sm:text-1xl p-2 pl-4 font-bold text-xl text-black">{item.title}</h4>
                  <span className="flex items-center pr-4">{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                </div>
                {clicked === index ? (
                  <div className="bg-secondary border-t-2 w-full h-auto flex flex-col justify-center items-center">
                    <div className="py-1 px-2">
                    <p className=" text-sm md:text-base pl-3">{item.text}</p>
                    </div>
                  </div>
                ) : null}
              </div>
              </section>
            );
          })}

      <section className="lg:px-80 md:px-8 pt-5">
        <div className="bg-secondary flex flex-col px-8 p-5 justify-between w-full text-center cursor-pointer">
           <p className="p-2 pl-4 font-bold text-2xl text-black grid justify-center">Andre spørgsmål</p>
           <p className="text-black text-base md:text-xl">Skulle du have yderlige spørgsmål er du meget velkommen til at kontakte os på sms/telefon +45 42 78 96 05 eller e-mail: contact@scubafun.dk.</p>
        </div>
      </section> 

       </div>
    </section>
  );
};

export default Info;