import React from 'react'
import Line from "../components/Line";

// IMAGES
import MAP from '../images/maps-google.png'
import IMG1 from '../images/IMG-1.jpg'
import IMG2 from '../images/IMG-2.jpg'
import IMG3 from '../images/IMG-3.jpg'
import IMG4 from '../images/IMG-4.jpg'
import IMG5 from '../images/IMG-5.jpg'
import IMG6 from '../images/IMG-6.jpg'
import IMG7 from '../images/IMG-7.jpg'
import IMG8 from '../images/IMG-8.jpg'
import IMG9 from '../images/IMG-9.jpg'


import PlacesAside from './components/PlacesAside';

const Places = () => {
  return (
    <section>

      {/* search aside */}
   <PlacesAside/>

      {/* map  */}

      {/* TITLE */}
        <div>
          <p className='flex justify-center text-4xl font-bold text-black'>Dykker Steder</p>
          <Line />
        </div>
      {/* TITLE END */}

      {/* CARDS */}
      <div className='h-3/4 pt-12 grid md:grid-cols-3 grid-cols-2 p-5 gap-8 justify-items-center w-screen'>
      {/* CARDS SECTION 1 */}
      <div class="max-w-sm rounded overflow-hidden shadow-lg">
          <img class="w-full" src={IMG1} alt="Sunset in the mountains" />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Lorem ibsum</div>
            <p class="text-gray-700 text-base">
            is simply dummy text of the printing and typesetting industry. Lorem Ipsum has 
            </p>
          </div>
        </div>

        <div class="max-w-sm rounded overflow-hidden shadow-lg">
          <img class="w-full" src={IMG3} alt="Sunset in the mountains" />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Lorem ibsum</div>
            <p class="text-gray-700 text-base">
            is simply dummy text of the printing and typesetting industry. Lorem Ipsum has 
            </p>
          </div>
        </div>

        <div class="max-w-sm rounded overflow-hidden shadow-lg">
          <img class="w-full" src={IMG2} alt="Sunset in the mountains" />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Lorem ibsum</div>
            <p class="text-gray-700 text-base">
            is simply dummy text of the printing and typesetting industry. Lorem Ipsum has 
            </p>
          </div>
        </div>
      {/* CARDS SECTION 1 END */}

      {/* CARDS SECTION 2 */}
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
          <img class="w-full" src={IMG5} alt="Sunset in the mountains" />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Lorem ibsum</div>
            <p class="text-gray-700 text-base">
            is simply dummy text of the printing and typesetting industry. Lorem Ipsum has 
            </p>
          </div>
        </div>
        
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
          <img class="w-full" src={IMG4} alt="Sunset in the mountains" />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Lorem ibsum</div>
            <p class="text-gray-700 text-base">
            is simply dummy text of the printing and typesetting industry. Lorem Ipsum has 
            </p>
          </div>
        </div>

        <div class="max-w-sm rounded overflow-hidden shadow-lg">
          <img class="w-full" src={IMG6} alt="Sunset in the mountains" />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Lorem ibsum</div>
            <p class="text-gray-700 text-base">
            is simply dummy text of the printing and typesetting industry. Lorem Ipsum has 
            </p>
          </div>
        </div>
      {/* CARDS SECTION 2 END */}

      {/* CARDS SECTION 3 */}
      <div class="max-w-sm rounded overflow-hidden shadow-lg">
          <img class="w-full" src={IMG7} alt="Sunset in the mountains" />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Lorem ibsum</div>
            <p class="text-gray-700 text-base">
            is simply dummy text of the printing and typesetting industry. Lorem Ipsum has 
            </p>
          </div>
        </div>

        <div class="max-w-sm rounded overflow-hidden shadow-lg">
          <img class="w-full" src={IMG9} alt="Sunset in the mountains" />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Lorem ibsum</div>
            <p class="text-gray-700 text-base">
            is simply dummy text of the printing and typesetting industry. Lorem Ipsum has 
            </p>
          </div>
        </div>

        <div class="max-w-sm hidden md:block rounded overflow-hidden shadow-lg">
          <img class="w-full" src={IMG8} alt="Sunset in the mountains" />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Lorem ibsum</div>
            <p class="text-gray-700 text-base">
            is simply dummy text of the printing and typesetting industry. Lorem Ipsum has 
            </p>
          </div>
        </div>
      {/* CARDS SECTION 3 END */}
      </div>
      {/* CARDS END */}
        <br />
    </section>
  )
}

export default Places