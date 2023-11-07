import Card from "./Card";
import {Link} from "react-router-dom";
import salad from '../../assets/images/greek salad.jpg';
import dessert from '../../assets/images/lemon dessert.jpg';
import bruchetta from '../../assets/images/bruchetta.png';

function Specials() {
    return(
    <article className="specials">
        <div className="intro">
        <h1>This week's specials!</h1>
        <Link to="/order">
            <button type="button">
                Online Menu
            </button>
        </Link>
        </div>
        <div className="cards">
            <Card
                image={salad}
                alt="Greek Salad"
                header="Greek Salad"
                price="12.99$"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>

            <Card
                image={bruchetta}
                alt="bruchetta"
                header="Bruschetta"
                price="10.99$"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>

            <Card
                image={dessert}
                alt="cheesecake"
                header="Cheesecake"
                price="7.99$"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
        </div>
    </article>
    )
}

export default Specials;