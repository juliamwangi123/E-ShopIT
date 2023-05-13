import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { Link } from "react-router-dom";

import{fetchProducts} from '../../../../redux/features/products/productSlice'

function Products() {
    const {loading, error} = useSelector((state)=>state.products );
    const dispatch = useDispatch();

    useEffect(()=>{
      dispatch(fetchProducts());
    },[dispatch]);

    //dispay random products 
    const getRandomProducts = (state) => {
      const products = state.products.products;
      const shuffledProducts = [...products].sort(() => 0.5 - Math.random());
      return shuffledProducts.slice(0, 8);
    };

    const products = useSelector(getRandomProducts)
    
  return (
    <div>
       {loading && <div>loading ...</div>}
        {error && <div>{error}</div>}
        <div className=" flex flex-wrap -mx-4">
          {products &&products.map(product => (
        <div key={product.id} className=" w-full sm:w-1/2 md:w-1/4 p-4">
          <div className="bg-white rounded-lg shadow p-4 h-full flex flex-col">
            <img src={product.image} alt={product.name} className="w-full h-48 object-contain mb-4 rounded-lg" />
            {/* <h2 className="font-bold text-lg mb-2">{product.name}</h2> */}
            <p className="text-gray-500 flex-grow">{product.description.length > 100 ? `${product.description.substr(0, 70)}...` : product.description}</p>
            <p className="text-gray-600 mb-2">${product.price.toFixed(2)}</p>
            <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-lg hover:bg-blue-600">Buy now</button>
          </div>
        </div>
      ))}
        </div>
    </div>
  )
}

export default Products