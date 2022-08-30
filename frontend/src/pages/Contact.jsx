import React, { useRef } from 'react';
import Line from "../components/Line";
import { NavLink } from 'react-router-dom';
import MAP from '../images/maps-google.png';
import emailjs from '@emailjs/browser';


const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_y0u1esl', 'template_epfgx1t', form.current, 'user_X07eRIrDpaIHC6q5zpRvS')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };







  return (

    <div className='pt-32 flex justify-center'>


    <div className='w-3/5'>

    {/* TITLE */}
    <div className='text-center'>
      <h2 className='text-4xl font-bold'>Kontakt</h2>
      < Line />
    </div>
    {/* TITLE END */}





    <div className='md:grid md:grid-cols-2 md:gap-8 '>
      
      {/* LEFT-SIDE */}
        <div className='p-5'>

      <div className='p-2'>
        <p className='flex justify-start text-black pb-8'>+45 42789605</p>
        <p className='flex justify-start text-black pb-8'>contact@scubafun.dk</p>
      </div>
      {/* FORM */}
      <div className='bg-secondary rounded'>
        <form ref={form} onSubmit={sendEmail} className='flex flex-col p-2'>
          <label className='flex text-black flex-col'>
            Fulde navn:
            <input type="text" name="from_name" className='p-1 bg-white rounded' required />
          </label>
          
          <label className='flex text-black flex-col'>
            Email:
            <input type="email" name="user_email" className='p-1 bg-white rounded' required />
          </label>

          <label className='flex text-black flex-col'>
            Besked:
          </label>
          <textarea name='message' className='h-12 md:h-16 lg:h-24 pl-1 bg-white rounded' type="text" required />
          <div className='flex justify-center pt-3'>
          <button type="submit" value="Send" className='mr-4 h-8 transition duration-500'>Send</button>
          </div>
          
        </form>
      </div>

        {/* FORM END */}

        </div>
        {/* LEFT-SIDE END */}































        {/* RIGHT-SIDE */}
        <div className='p-5'>

        <figure className='shadow-lg'>
          <img className='w-full h-full' src={MAP} alt="MAP" />
        </figure>

          <p className='font-bold text-lg text-black'>Lager adresse</p>
          <p className='text-black'>Svinget 2, 8570 Trustrup, Lyngby</p>

          {/*56.36840614366134, 10.747420628835362 - lat lon til Svinget 2, Trustrup*/} 

        </div>
        {/* RIGHT-SIDE END */}

    </div>

    </div>

    </div>
  )
}

export default Contact;