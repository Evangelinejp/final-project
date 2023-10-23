import Nav from "./Nav.js"
import logo from './assets/images/Logo.svg';

function Header() {
    return(
        <header>
            <img src={logo} alt="Little Lemon Logo"/>
            <Nav/>
        </header>
    )
}

export default Header;