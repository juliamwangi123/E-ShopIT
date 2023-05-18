import {useEffect, useState}from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addQuantity ,clearCart,removeItem,decrementQuantity,getTotal} from '../../../redux/features/cart/cartSlice';


export default function Cart() {
  const[cartItems, setCartItems] = useState([]);
  const{total} = useSelector((state) =>state.cart)
  const dispatch = useDispatch();
  


  
  useEffect(() => {
    const savedCartItems = JSON.parse(localStorage.getItem('cart'));
    if (savedCartItems && savedCartItems.length > 0) {
      setCartItems(savedCartItems) 
    };
    dispatch(getTotal(total))
    
  }, [dispatch])

 
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-10">
      <h1 className="text-3xl font-bold mb-5">Your Cart</h1>
      <div className="flex flex-col">
        {/* Cart items table */}
        <div className="overflow-x-auto">
          <table className="table-auto border w-full">
            <thead>
              <tr className="border-b">
                <th className="p-2">Image</th>
                <th className="p-2">Name</th>
                <th className="p-2">Unit Price</th>
                <th className="p-2">Quantity</th>
                <th className="p-2">Good Amount</th>
                <th className="p-2">Delete</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item._id} className="border-b">
                  <td className="p-2">
                    <img src={item.image} alt={item.name} className="h-20" />
                  </td>
                  <td className="p-2">{item.name}</td>
                  <td className="p-2">${item.price.toFixed(2)}</td>
                  <td className="p-2 ">
                      <button onClick={()=>
                      {
                        dispatch(addQuantity(item))
                        setCartItems(JSON.parse(localStorage.getItem('cart')));
                        dispatch(getTotal(total))

                      }}>+</button>
                        <p>{item.quantity}</p>    

                      <button
                      onClick={()=>{
                        dispatch(decrementQuantity(item))
                        setCartItems(JSON.parse(localStorage.getItem('cart')));
                        dispatch(getTotal(total))
                      }}
                      >-</button>
                    </td>
                  <td className="p-2">
                    ${(item.price * item.quantity).toFixed(2)}
                  </td>
                  <td className="p-2">
                    <button
                      onClick={() => {
                         dispatch((removeItem(item)))
                         setCartItems(JSON.parse(localStorage.getItem('cart')));
                         dispatch(getTotal(total))
                      }}
                      className="text-red-600 hover:text-red-800 font-medium"
                    >
                      X
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Cart summary */}
        <div className="flex flex-col sm:flex-row sm:justify-between items-center mt-5">
          <div className="mb-5 sm:mb-0">
            <button className="bg-red-600 hover:bg-red-800 text-white py-2 px-4 rounded-md"
            onClick={()=> {
              dispatch(clearCart())
              setCartItems([])
            }
            }
            >
              Clear Cart
            </button>
          </div>
          <div className="font-medium text-lg"
          >Total:{total} </div>
            </div>
            </div>
            <Link to={'/orderSummary'}>
            <button
                className="bg-orange-500 mt-[10px] hover:bg-orange-600 text-white font-bold py-2 px-4 rounded "
                type="button" >
              Proceed to Checkout
            </button>
            </Link>

            </div>

        
  )
}
