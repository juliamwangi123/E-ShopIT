import {  FaAngleDown, FaCartPlus, FaSearch, FaUser } from "react-icons/fa";
import logo from './logo.png';
const Search = () => {
    return ( 
        <div className="searchBar">
            <div id="logoImg">
            <img src={logo}/>
            </div>
            <div className="searchCont">
            <div id="search">
                <i ><i className="icon"><FaSearch/></i></i>
                <input type="text" placeholder="I'm Looking For.." />
                <label id="selector">
                    <select>
                        <option>Product</option>
                        <option>Product</option>
                        <option>Product</option> 
                    </select>
                </label>
                <button class="button">Search</button>
                
            </div>
            <div className="topSearch">
                    Top Searches :<a href="" className="topS">Phones</a>
                    <a href="" className="topS">bags</a>
                    <a href="" className="topS">laptop</a>
                    <a href="" className="topS">plates</a>
                    <a href="" className="topS">cams</a>
                </div>
                </div>
            <div id="cart">
                    <FaCartPlus/>
                    Cart
                    <FaAngleDown/> 
                    </div>
            <div id="userAcc">
                <FaUser/>
                My Account
                <FaAngleDown/>
            </div>
        </div>
     );
}
 
export default Search;