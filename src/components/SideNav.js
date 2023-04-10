import {FaAngleDown, FaAngleRight, FaBaby, FaBabyCarriage, FaCookie, FaHamburger, FaHandScissors, FaHome, FaHospitalUser, FaLaptop, FaList, FaListOl, FaListUl, FaMixer, FaPhone, FaShoePrints, FaStopwatch, FaThumbsUp, FaTshirt, FaTv, FaWineBottle, FaWrench } from "react-icons/fa";

const SideNav = () => {
    return ( 
        <div className="SideBar">
            <div id="top">
                <FaList/>
                <h2>Categories</h2>
                <FaAngleDown/>
            </div>
        <ul>
            <li>
                <a href="#" className="active">
                    <span className="icon"><i><FaThumbsUp/></i></span>
                        <span className="item">Kilit Featured</span>
                        <span className="iconB"><i><FaAngleRight/></i></span>
                </a>
            </li>
            <li>
                <a href="#" >
                    <span className="icon"><i><FaPhone/></i></span>
                        <span className="item">Phone & Accessories</span>
                        <span className="iconB"><i><FaAngleRight/></i></span>
                </a>
            </li>
            <li>
                <a href="#">
                    <span className="icon"><i><FaShoePrints/></i></span>
                        <span className="item">Shoes</span>
                        <span className="iconB"><i><FaAngleRight/></i></span>
                </a>
            </li>
            <li>
                <a href="#">
                    <span className="icon"><i><FaTv/></i></span>
                        <span className="item">TV,Audio&Video</span>
                        <span className="iconB"><i><FaAngleRight/></i></span>
                </a>
            </li>
            <li>
                <a href="#" >
                    <span className="icon"><i><FaHospitalUser/></i></span>
                        <span className="item">Beauty,Health &Hair</span>
                        <span className="iconB"><i><FaAngleRight/></i></span>
                </a>
            </li>
            <li>
                <a href="#">
                    <span className="icon"><i><FaHome/></i></span>
                        <span className="item">Home & Living</span>
                        <span className="iconB"><i><FaAngleRight/></i></span>
                </a>
            </li>
            <li>
                <a href="#">
                    <span className="icon"><i><FaCookie/></i></span>
                        <span className="item">Appliances</span>
                        <span className="iconB"><i><FaAngleRight/></i></span>
                </a>
            </li>
            <li>
                <a href="#" >
                    <span className="icon"><i><FaBabyCarriage/></i></span>
                        <span className="item">Bags</span>
                        <span className="iconB"><i><FaAngleRight/></i></span>
                </a>
            </li>
            <li>
                <a href="#">
                    <span className="icon"><i><FaTshirt/></i></span>
                        <span className="item">Clothes</span>
                        <span className="iconB"><i><FaAngleRight/></i></span>
                </a>
            </li>
            <li>
                <a href="#">
                    <span className="icon"><i><FaStopwatch/></i></span>
                        <span className="item">Watch & Jewellery</span>
                        <span className="iconB"><i><FaAngleRight/></i></span>
                </a>
            </li>
            <li>
                <a href="#" >
                    <span className="icon"><i><FaLaptop/></i></span>
                        <span className="item">Computer & Accessories</span>
                        <span className="iconB"><i><FaAngleRight/></i></span>
                </a>
            </li>
            <li>
                <a href="#">
                    <span className="icon"><i><FaBaby/></i></span>
                        <span className="item">Baby,Kids & Maternity</span>
                        <span className="iconB"><i><FaAngleRight/></i></span>
                </a>
            </li>
            <li>
                <a href="#">
                    <span className="icon"><i><FaWineBottle/></i></span>
                        <span className="item">Drinks</span>
                        <span className="iconB"><i><FaAngleRight/></i></span>
                </a>
            </li>
            <li>
                <a href="#" >
                    <span className="icon"><i><FaWrench/></i></span>
                        <span className="item">Automotive</span>
                        <span className="iconB"><i><FaAngleRight/></i></span>
                </a>
            </li>
            <li>
                <a href="#">
                    <span className="icon"><i><FaListOl/></i></span>
                        <span className="item">Others</span>
                        <span className="iconB"><i><FaAngleRight/></i></span>
                </a>
            </li>
        </ul>
        </div>
     );
}
 
export default SideNav;