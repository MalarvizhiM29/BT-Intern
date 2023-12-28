import {Link} from "react-router-dom"

const Header=()=>{
    return(
      <>
        <div className='header'>
            <div>LOGO</div>
            <div className='nav'>
              <span>
                <Link to="/" className="headlink">Home</Link>
              </span>
              <span>
                <Link to="/about" className="headlink">About</Link>
              </span>
              <span>
                <Link to="/contact" className="headlink">Contact</Link>
              </span>
            </div>
        
        </div>
      </>
    )
  }

export default Header;