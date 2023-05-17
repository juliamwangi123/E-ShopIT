import React, { useEffect, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { Link } from "react-router-dom";

import{fetchProducts} from '../../../redux/features/products/productSlice'

function Products({ searchQuery }) {
    const {loading,products, error} = useSelector((state)=>state.products );
    const [matchingProducts, setMatchingProducts] = useState([]);
    const[noProduct, setNoProduct] = useState(false)
    const dispatch = useDispatch();


  useEffect(()=>{
    if (!searchQuery) {
      // Reset the matching products array if the search query is empty
      setMatchingProducts([]);
      setNoProduct(false)
    } else {
      // Filter the products based on the search query and update the state
      const filteredProducts = products.filter((product) => {
        if(product.title.toLowerCase().includes(searchQuery) || 
           product.category.toLowerCase().includes(searchQuery))
         { return product}
      });
      setMatchingProducts(filteredProducts);

      if(filteredProducts.length === 0){
        setNoProduct(true)}
    }

      dispatch(fetchProducts());
    },[searchQuery,dispatch]);


    // dispay random products 
  const getRandomProducts = () => {
      const shuffledProducts = [...products].sort(() => 0.5 - Math.random());
      return shuffledProducts.slice(0, 8);
    };


 const showProducts =  searchQuery ? matchingProducts : getRandomProducts()
  
  return (
    <div className='flex items-center justify-center'>
       {loading && <div className='Loader'></div>}
       {noProduct && <div className='text-[24px]'> Sorry! Item out of stock</div>}
        {error && <div>{error}</div>}
        <div className=" flex flex-wrap -mx-4">
          {showProducts &&showProducts.map(product => (
        <div key={product._id} className=" w-full sm:w-1/2 md:w-1/4 p-2">
          <div className="bg-white rounded-lg shadow p-4 h-full flex flex-col">
            <img src={product.image} alt={product.name} className="w-full h-48 object-contain mb-4 rounded-lg" />
            {/* <h2 className="font-bold text-lg mb-2">{product.name}</h2> */}
            <Link className='flex-grow  mb-[5px] description' to={`product/${product._id}`}>
            <p className="text-gray-500 flex-grow   hover:text-[#f87622]">{product.description.length > 100 ? `${product.description.substr(0, 70)}...` : product.description}</p>
            </Link>
            <div className='flex justify-between '>
            <p className="text-[#c00] font-[700] text-[16px] ">${product.price.toFixed(2)}</p>
            <p className='bg-[#f87622] text-[white] px-2'> Save 15% </p>
            </div>
            <Link className='flex-grow ' to={`product/${product._id}`}>
            <button className="bg-[#f87622] w-full text-white text-[18px] font-[700] px-4 py-[8px] mt-2  ">Buy now</button>
            </Link>
          </div>
        </div>
      ))}
        </div>
    </div>
  )
}

export default Products