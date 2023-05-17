import React from 'react'
import { useState } from 'react'

import Navtop from '../../nav/Navtop'
import FlashSale from './FlashSale'
import HomeBackground from './HomeBackground'
import Products from './Products'

export default function Home2() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };
  return (
    <>
    <div className='bg-[#f8fafc]'>
      <Navtop onSearch={handleSearch}/>
      <HomeBackground/>
      <div className='flash'>
        <FlashSale/>
      </div>
      <div className='p'>
       <Products  searchQuery={searchQuery}/>

      </div>
    </div>
     
    </>
  )
}
