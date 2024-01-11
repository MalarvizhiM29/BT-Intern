import {Link} from "react-router-dom"
import SwiggyLogo from "../swiggy.png";

const Header=()=>{
    return(
      <>
        <div className='header'>
            <div>
              <img src={SwiggyLogo} className="swiggylogo"></img>
            </div>
            <div className='nav'>
              <span>
                <Link to="/" className="headlink">Home</Link>
              </span>
              <span>
                <Link to="/help" className="headlink">Help</Link>
              </span>
              <span>
                <Link to="/cart" className="headlink">Cart</Link>
              </span>
            </div>
        
        </div>
      </>
    )
  }

export default Header;