import Nav from "./Nav.js"
import logo from '../../assets/images/Logo.svg';
import icon from '../../assets/images/icon_hamburger_menu.svg';

function Header() {
    const openNav = () => {
        var x = document.getElementById("topNav");
        if(x.className === "headerNavBar") {
            x.className += " responsive"
        }
        else
        {
            x.className = "headerNavBar"
        }

    }
    return(
        <header>
            <div className="wrapper header-wrapper">
                <img className="headerLogo" src={logo} alt="Little Lemon Logo"/>
                <img className="headerHamburger" src={icon} alt="hambuger menu to open navigation" onClick={openNav}/>
                <div className="headerNavBar" id="topNav">
                    <Nav/>
                </div>
            </div>
        </header>
    )
}

export default Header;