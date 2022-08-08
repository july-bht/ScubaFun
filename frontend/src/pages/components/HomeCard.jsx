import React from 'react'
import PlacesCard from './PlacesCard';
import data from "../../assets/data.json";



const HomeCard = () => {
    const film = this.props.data?.map(
    (item, index) => 
      index < 5 && ( // <= only 5 items
        <PlacesCard
          key={item.id} 
          film={item} 
        />
      )
  );
  
  return film;
}

export default HomeCard

