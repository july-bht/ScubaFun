import React from 'react'
import Line from '../components/Line'

const SignUp = () => {
  return (
    <section className='p-12 pt-28'>
      <h3 className="title">Tilmelding</h3>
      <Line/>
      <div className='flex gap-5 pt-5 px-32 flex-col md:flex-row'>

        <div className="bg-secondary flex flex-col px-8 p-5 justify-between w-full text-center cursor-pointer">
           <p className="p-2 pl-4 font-bold text-2xl text-black grid justify-center">Praktisk Information</p>

          <div>
            <div className='flex gap-2 justify-between'>
              <div className='w-full'>
              <p className='text-2xl text-black w-full text-left'>Sted</p>
              </div>

              <div className='w-full '>
              <p className='text-2xl text-black w-full text-left pl-4 md:pl-20'>-Grenaa</p>
              </div>
              
            </div>
          </div>
        </div>

        <div className="bg-secondary flex flex-col px-8 p-5 justify-between w-full text-center cursor-pointer">
        <input className='p-1 bg-white text-black rounded' type="text" name="email" placeholder='Navn' />
        </div>
      </div>

      <div className='flex justify-center pt-12'>
      <button className='mr-4 h-8 transition duration-500'>Send Tilmedlign</button>
      </div>
    </section>
  )
}

export default SignUp