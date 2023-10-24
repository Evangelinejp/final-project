import logo from '../../assets/images/block-logo.png';
import NavFooter from '../NavFooter/NavFooter';

function Footer() {
    return(
        <footer>
            <div className="footer-wrapper">
                <img src={logo} alt="Little Lemon Logo"/>
                <div className="footer-nav">
                <h3>Navigation</h3>
                <NavFooter/>
                </div>

                <div className="footer-contact">
                <h3>Contact</h3>
                <ul>
                    <li>221b, Baker street, Chicago, IL</li>
                    <li>(XXX) XXX-XXXX</li>
                    <li>littlemon@lemon.com</li>
                </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;