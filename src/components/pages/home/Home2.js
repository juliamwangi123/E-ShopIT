import React from 'react'
import Navtop from '../../nav/Navtop'
import FlashSale from './FlashSale'
import HomeBackground from './HomeBackground'
import Products from './Products'

export default function Home2() {
  return (
    <>
    <div className='bg-[#f8fafc]'>
      <Navtop/>
      <HomeBackground/>
      <div className='flash'>
        <FlashSale/>
      </div>
      <div className='p'>
       <Products/>

      </div>
    </div>
     
    </>
  )
}
