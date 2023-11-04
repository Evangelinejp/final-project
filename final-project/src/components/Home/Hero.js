import image from '../../assets/images/restaurantfood.jpg';
import {Link} from "react-router-dom";

function Hero() {
    return(
        <article className="hero">
        <div>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <Link to="/reservation">
                <button type="button">
                    Book a table now!
                </button>
            </Link>
        </div>
        <img src={image} alt="The chef holding a plate of newly made bruschetta"/>
        </article>
    )
}

export default Hero;