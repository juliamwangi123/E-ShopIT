import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/features/products/productSlice";
import { useEffect} from "react";
import { Link } from "react-router-dom";

const NewItem = () => {
    const dispatch = useDispatch();
    const{error, status, loading,products} = useSelector((state)=> state.products)
  
    useEffect(()=>{
      // axios.get('https://backend-production-5031.up.railway.app/products')
      // .then((res)=>{
      //   res.data.products.map(products => console.log(products._id))
      // }).catch(err => console.log(err.message))
      dispatch(fetchProducts());
      console.log(products)
  
    },[dispatch])
    return ( 
        <div className="newItem">
            {loading && <div>loading ...</div>}
            {error && <div>{error}</div>}
            {products && products.map((product)=>(<div key={product._id}>
               <Link to={`product/${product.id}`}>
               {product._id}
               </Link>
                
                </div>)) }
            <div className="items">
                itemOne
            </div>
            <div className="items">
                itemTres
            </div>
            <div className="items">
                itemTres
            </div>
            <div className="items">
                itemOne
            </div>
            <div className="items">
                itemTres
            </div>
            <div className="items">
                itemTres
            </div>
        </div>
     );
}
 
export default NewItem;