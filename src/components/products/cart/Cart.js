import { type } from '@testing-library/user-event/dist/type';
import {useEffect}from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../../redux/features/cart/cartSlice'


export default function Cart() {
  const dispatch = useDispatch();
  const {cart}= useSelector((state) => state.cart)

  useEffect(() => {
    const savedCartItems = JSON.parse(localStorage.getItem('cart'));
    if (savedCartItems && savedCartItems.length > 0) {
      savedCartItems.forEach(element => {
        dispatch(addItem(element))
      });}
    
  }, [dispatch])

  
  
  return (
    <div>
      <h2>cart page</h2>
      {cart.map((items)=>(
      <div key={items.id}>
        <p>{items.name}</p>
        <p>{items.quantity}</p>

        </div>
    ))}</div>
  )
}
