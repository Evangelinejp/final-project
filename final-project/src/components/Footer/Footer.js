import logo from '../../assets/images/Logo.svg';
import Nav from "../Nav/Nav.js"

function Footer() {
    return(
        <footer>
            <img src={logo} alt="Little Lemon Logo"/>
            <h3>Navigation</h3>
            <Nav/>

            <h3>Contact</h3>
            <ul>
                <li>221b, Baker street, Chicago, IL</li>
                <li>(XXX) XXX-XXXX</li>
                <li>littlemon@lemon.com</li>
            </ul>
        </footer>
    )
}

export default Footer;