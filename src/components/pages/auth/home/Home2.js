import React from 'react'
import Navtop from '../../../nav/Navtop'
import FlashSale from './FlashSale'
import HomeBackground from './HomeBackground'
import Products from './Products'

export default function Home2() {
  return (
    <>
    <div>
      <Navtop/>
      <HomeBackground/>
      <div className='flash'>
        <FlashSale/>
      </div>
      <div >
       <Products/>

      </div>
    </div>
     
    </>
  )
}
