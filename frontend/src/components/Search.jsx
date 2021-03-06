import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

const Search = () => {
  return (
    <div className='flex'>
      <input className='rounded-full pl-5 py-1 border-primary border bg-white text-text' type="text" placeholder='Søg...' />
      <div className='search-btn border-l border-primary pl-2 py-1  my-auto h-6 rounded-r-full pr-2   text-primary
      hover:bg-primary  hover:h-8 hover:text-white hover:py-2'>
        <AiOutlineSearch className=' ' />
      </div>
    </div>
  )
}

export default Search