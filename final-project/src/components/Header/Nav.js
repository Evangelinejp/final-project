import {Link} from "react-router-dom";


function Nav() {

    return(
        <nav id="topNav" className="nav">
            <Link to="/">HOME</Link>
            <Link to="/about">ABOUT</Link>
            <Link to="/menu">MENU</Link>
            <Link to="/reservation">RESERVATION</Link>
            <Link to="/order">ORDER</Link>
            <Link to="/login">LOGIN</Link>
        </nav>
    )
}

export default Nav;