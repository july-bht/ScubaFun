import Line from "../components/Line";
import React, { useState } from 'react';
import data from '../assets/data.json';
import { IconContext } from 'react-icons';
import { FiPlus, FiMinus } from 'react-icons/fi';


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
    <section>
    <div className='text-center pt-24 mb-12'>
    <h2 className='text-3xl font-bold'>Praktisk Informasjon</h2>
    < Line />
  </div>
    <IconContext.Provider value={{ color: '#00FFB9', size: '25px' }}>
      <div className="relative h-screen mb-32 sm:mb-0">
        <div className="absolute top-0">
          {data.info.map((item, index) => {
            return (
              <section className="grid lg:px-80 md:px-8">
              <div className="pb-4">
                <div className="bg-secondary flex justify-between w-full text-center cursor-pointer" onClick={() => toggle(index)} key={index}>
                  <p className="sm:text-1xl p-2 pl-4 font-bold text-xl text-black">{item.title}</p>
                  <span className="flex items-center">{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                </div>
                {clicked === index ? (
                  <div className="bg-secondary border-t-2 w-full h-auto flex flex-col justify-center items-center">
                    <div className="py-1 px-2">
                    <h4 className="text-black text-sm md:text-base pl-3">{item.text}</h4>
                    </div>
                  </div>
                ) : null}
              </div>
              </section>
            );
          })}

      <div className="lg:px-80 md:px-8 pt-5">
        <div className="bg-secondary flex flex-col px-8 p-5 justify-between w-full text-center cursor-pointer">
           <p className="p-2 pl-4 font-bold text-2xl text-black grid justify-center">Andre spørgsmål</p>
           <p className="text-black text-base md:text-xl">Skulle du have yderlige spørgsmål er du meget velkommen til at kontakte os på sms/telefon +45 42 78 96 05 eller e-mail: contact@scubafun.dk.</p>
        </div></div>   
      </div>

      </div>
    </IconContext.Provider>
    </section>
  );
};

export default Info;