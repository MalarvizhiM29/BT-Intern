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
                <Link to="/" className="headlink"><i class="fa-solid fa-house"></i>   Home</Link>
              </span>
              <span>
                <Link to="/help" className="headlink"><i class="fa-solid fa-handshake-angle"></i>    Help</Link>
              </span>
              <span>
                <Link to="/cart" className="headlink"><i class="fa-solid fa-cart-shopping"></i>   Cart</Link>
              </span>
            </div>
        
        </div>
      </>
    )
  }

export default Header;