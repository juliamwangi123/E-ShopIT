import { FaAngleRight, FaPhone, FaPhoneSquare, FaPiedPiper} from "react-icons/fa"

const Navtop = () => {
    return (
        <div className="stuck-nav">
            <div id="exLeft">
                <span >Seller centre</span>
                <span id="ico"><FaAngleRight/></span>
                <span><FaPhoneSquare/> App download</span>
            </div>
            <div id="exRight">
                <span id="track">Track Order</span>
                <span>Help centre</span>
            </div>
            
            </div>
      );
}

export default Navtop;