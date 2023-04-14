import Contact from "./Contacts";
import Navtop from "./Navtop";
import NewItem from "./NewItems";
import Slides from "./PhotoSlide";
import Search from "./Search";
import SideNav from "./SideNav";
import {useEffect} from 'react'
import axios from 'axios'


const Home = () => {

  useEffect(()=>{
    axios.get('https://backend-production-5031.up.railway.app/products')
    .then((res)=>{
      res.data.products.map(products => console.log(products._id))
    }).catch(err => console.log(err.message))

  })

    return ( 
        <div className="Home">
           <Navtop/> 
          <div className="container">
           <Search/>
           <div className="category">
                <div className="navbar">
                    <SideNav/>
                </div>
                <div className="content">
                  <Slides/> 
                </div>
            </div>
           <NewItem/>
           <Contact/>
          </div>
          
        </div>
     );
}
export default Home;