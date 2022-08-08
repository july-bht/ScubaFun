import React from 'react'
import PlacesCard from './PlacesCard';



const HomeCard = this.props.data?.map(
    (item, index) => 
      index < 3 && ( // <= only 5 items
        <PlacesCard
          key={item.id} 
          HomeCard={item} 
        />
      )
  );
  


export default HomeCard