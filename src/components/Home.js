import Contact from "./Contacts";
import Navtop from "./Navtop";
import NewItem from "./NewItems";
import Slides from "./PhotoSlide";
import Search from "./Search";
import SideNav from "./SideNav";
import {useEffect} from 'react'
import axios from 'axios'


const Home = () => {
  

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