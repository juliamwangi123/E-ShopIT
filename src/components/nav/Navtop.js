import { useEffect, useState } from "react";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import logoImage from '../../images/logo.png'
import { getCartlength} from '../../redux/features/cart/cartSlice'

const Navtop = () => {
  const dispatch = useDispatch();
  const [cartTotalItem, newCartTotalItems] = useState(null)


  useEffect(() => {
    const numberOfCartItems = JSON.parse(localStorage.getItem('cart'))
    const getPayload= dispatch(getCartlength(numberOfCartItems))
    newCartTotalItems(getPayload.payload.length)
  }, [dispatch])
  

  //get the cart items lenght 

  return (
    <nav className="bg-white  shadow-lg mt-10">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <div className="w-1/3">
          <img className="w-24" src={logoImage} alt="Logo" />
        </div>
        <div className="w-2/3">
          <div className="relative flex items-center">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="text-gray-500" />
            </div>
            <input
              className="block w-full border-2 border-[#f87622] bg-gray-100 rounded-full py-2 pl-10 pr-3 text-gray-900 placeholder-gray-500 focus:bg-white focus:outline-none focus:placeholder-gray-400 focus:text-gray-900 sm:text-sm"
              type="text"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="absolute bg-[#f87622] rounded-tr-[25px] rounded-br-[30px] text-[white] px-4 h-full right-0 top-0" type="submit">
              Search
            </button>
          </div>
        </div>
        <div className="w-1/3 flex justify-end">
        <button className="bg-white flex p-1 rounded-full text-gray-400 hover:text-[#f87622] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white relative">
           <FaShoppingCart className="h-6 w-6" />
            {cartTotalItem > 0 && (
                <div className="absolute right-[-10px] top-[-15px] bg-[#f87622] rounded-full w-6 h-6 flex justify-center items-center text-white text-xs font-bold">
                  {cartTotalItem}
                </div>
              )}
              <div className="hidden sm:block">
                <span className="">Cart</span>
              </div>
            </button>
          <button className="flex ml-4 bg-white p-1 rounded-full text-gray-400 hover:text-[#f87622] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
            <FaUser className="h-6 w-6" />
            <div className="hidden sm:block">
              <span className="">Username</span>
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navtop;
