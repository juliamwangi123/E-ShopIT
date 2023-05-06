import { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addItem } from '../../redux/features/cart/cartSlice';
import { fetchProduct } from '../../redux/features/products/productDetailsSlice';
import Search from '../Search';
import AddToCart from './Modals/AddToCart';
import { addQuantity ,decrementQuantity,getTotal} from '../../redux/features/cart/cartSlice';


export default function ProductDetails() {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const { error, loading, product } = useSelector((state) => state.productDetails);
  const { id } = useParams();

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  
  useEffect(() => {
    dispatch(fetchProduct(id));
  }, [dispatch]);

  return (
    <div className=" paps bg-gray-100 h-100vh  mx-auto max-w-7xl">
       <Search/>
      <div className='blogDetails h-2/3 bg-white flex flex-col md:flex-row md:items-start  mx-auto max-w-7xl'>
      {product &&  (
        <div className=" image md:w-2/5">
          {/* product image on the left and occupies 45% of the page */}
          <img src='https://image.kilimall.com/kenya/shop/store/goods/5238/2023/02/167757469060249646f69c02840238d835b9d5199c5bd_720.png.webp' alt={product.name}/>
        </div>
      )}
      <div className=" dets md:w-3/5 mt-[20px] flex flex-col  md:pl-10">
        {/* on the right product description , price  quantity , 2 buttons to add to cart and buy */}
        {/* <h2 className="text-3xl font-bold my-4">{product && product.name}</h2> */}
        <p className="text-gray-700  text-[24px] mb-4">{product && product.description}</p>
        <p className="text-[#409eff] mb-4">{product && product.review}</p>
        <p className="text-2xl bg-gray-100 py-4 text-[#f60] font-bold mb-4 mr-[5px]">${product && product.price}</p>
        <div className="flex flex-row items-center mb-4">
          <label htmlFor="quantity" className="mr-2 font-bold">
            Quantity:
          </label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            min="1"
            defaultValue={1}
            className="border border-gray-500 py-1 px-2 w-16"
          />
        </div>
        <div className="flex flex-row items-center">
          <button className="bg-transparent text-[14px] text-[#f60] border border-orange-400 px-10 py-2  mr-2"
          onClick={()=>{
            dispatch(addItem(product))
            dispatch(getTotal())
          }}
          
          >Add to Cart</button>
              <AddToCart isOpen={isOpen} onRequestClose={closeModal} portalClassName="modal">
            <h2>Modal Title</h2>
            <p>This is the content of the modal.</p>
            <button onClick={closeModal}>Close Modal</button>
       </AddToCart>
          <button className="bg-[#f60] text-white px-10 py-2 ">Buy Now</button>
        </div>
      </div>
    </div>
    </div>
  );
}
