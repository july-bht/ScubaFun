import React from 'react'
import Line from "../components/Line";
import MAP from '../images/maps-google.png'

const Contact = () => {
  return (
    <div className='pt-5 flex justify-center bg-slate-200'>

    <div className='w-3/5'>

    {/* TITLE */}
    <div className='text-center'>
      <h2 className='text-4xl font-bold'>Kontakt</h2>
      < Line />
    </div>
    {/* TITLE END */}

    <div className='grid grid-cols-2 gap-8'>
      
    {/* LEFT-SIDE */}
      <div className='p-5'>

      <p className='flex justify-start text-black pb-8'>+45 42789605</p>
      <p className='flex justify-start text-black pb-8'>contact@scubafun.dk</p>

    {/* FORM */}
      <form className='flex flex-col'>
        <label className='flex flex-col'>
          Fulde navn:
          <input className='pl-2' type="text" name="name" />
        </label>
        
        <lable className='flex flex-col'>
          Email:
          <input className='pl-2' type="text" name="email" />
        </lable>

        <lable className='flex flex-col'>
          Besked:
          <input className='h-12 pl-2' type="text" name="besked" />
        </lable>
      </form>
    
      <div className='flex justify-center pt-3'>
        <button className='mr-4 h-8 transition duration-500'>Shoppen</button>
      </div>
    {/* FORM END*/}

      </div>
      {/* LEFT-SIDE END */}

      {/* RIGHT-SIDE */}
      <div className='p-5'>

        <img src={MAP} />

        <p>Lager adresse</p>
        <p>Svinget 2, 8570 Trustrup, Lyngby</p>

      </div>
      {/* RIGHT-SIDE END */}

    </div>

    </div>

    </div>
  )
}

export default Contact