import React from 'react'
import Line from "../components/Line";

import PlacesAside from './components/PlacesAside';

const Places = () => {
  return (
    <section>

      {/* search aside */}
   <PlacesAside/>

      {/* map  */}
      <div className='h-3/4 w-screen bg-secondary'>

      </div>

    </section>
  )
}

export default Places