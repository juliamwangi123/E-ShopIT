import { useEffect, useState } from "react";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import logoImage from '../../images/logo.png'
import{getCartLength} from '../../redux/features/cart/cartSlice'
import Category from "../categories/Category";
import{fetchProducts} from '../../redux/features/products/productSlice'


const Navtop = ({onSearch}) => {
  const dispatch = useDispatch();
  const cartTotalItem = useSelector((state) => state.cart.totalItems);
  const [searchInput, setSearchInput] = useState('')
  const [isOpen, setIsOpen] = useState(false);

  //handle toggle menu on profile
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  //get userId and append it to profile route
  const userId= localStorage.getItem('userId');

  
//handle search
  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearch = () => {
    onSearch(searchInput);
  };

  
  useEffect(() => {
    dispatch(getCartLength());
  }, [dispatch])
  


  return (
    <nav className="bg-white  shadow-lg mt-10">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <div className="w-1/3">
          <img className="w-24" src={logoImage} alt="Logo" 
          />
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
              value={searchInput} onChange={handleInputChange}
            />
            <button className="absolute bg-[#f87622] rounded-tr-[25px] rounded-br-[30px] text-[white] px-4 h-full right-0 top-0" type="submit"
                  onClick={handleSearch}
            >
              
              Search
            </button>
          </div>
          <div className="">
          <Category/>
          </div>
        </div>
        <div className="w-1/3 flex justify-end">
        <Link to={'/cart'}>
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
            </Link>
            {userId ? <div className="relative">
              <button className="flex ml-4 bg-white p-1 rounded-full text-gray-400 hover:text-[#f87622] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                      onClick={toggleDropdown}>
                <FaUser className="h-6 w-6" />
                <div className="hidden sm:block">
                  <span className="">Username</span>
                </div>
              </button>
              {isOpen && (
                <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-lg">
                 {/* Dropdown content */}
                  <Link to={`profile/${userId}` } className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Profile</Link>
                  <Link className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Logout</Link>
              </div>)}
          </div>
          :
          <Link to={'/login'}>
          <button className="flex ml-4 bg-white p-1 rounded-full text-gray-400 hover:text-[#f87622] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
            <FaUser className="h-6 w-6" />
            <div className="hidden sm:block">
              <span className="">My account</span>
            </div>
          </button>
      </Link> 
          
          }
           
        </div>
      </div>
    </nav>
  );
};

export default Navtop;
