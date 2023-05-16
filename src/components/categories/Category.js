import { useSelector } from "react-redux"

const Category = () =>{
    const {products} = useSelector((state) => state.products)

    const handleCategory = (cat) =>{
      const c=  products.filter((product =>{
            return product.category === cat
        }));

        console.log(c)
    }

    return(
        <div className="categories flex-wrap text-gray-500  ">
            <small className="hidden sm:inline mr-[6px]">Top Searches: </small>
            <small 
                className="mr-[5px]"
                onClick={()=>{handleCategory("men's clothing")}}>
                Men
            </small> 
            <small 
                className="mr-[5px]"
                onClick={()=>{handleCategory("women's clothing")}}>
                Women
            </small>
            <small 
                className="mr-[5px]"
                onClick={()=> handleCategory('jewelery')}>
                Jewelry
            </small>
            <small 
                className="mr-[5px]"
                onClick={()=>{handleCategory("electronics")}}>
                Electronics
            </small> 
            <small className="mr-[5px]">Phone</small> 
            <small className="mr-[5px]">Watches</small> 
            <small className="mr-[5px]">Handbags</small> 
            <small className="mr-[5px]">Wigs</small> 
            <small className="mr-[5px]">Shoes</small> 
      </div>
    )
}


export default Category