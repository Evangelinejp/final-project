import Nav from "../Nav/Nav.js"
import logo from '../../assets/images/Logo.svg';

function Header() {
    return(
        <header class="header">
            <div class="wrapper header-wrapper">
            <img src={logo} alt="Little Lemon Logo"/>
            <Nav/>
            </div>
        </header>
    )
}

export default Header;