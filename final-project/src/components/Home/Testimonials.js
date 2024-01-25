import Rating from "./Rating";
import Mary from "../../assets/images/mary.png";

function Testimonials() {
    return(
        <article className="testimonials">
            <div className="intro">
                <h1>Testimonials</h1>
            </div>
            <div className="ratings">
                <Rating
                    rating="4 out of 5"
                    image={Mary}
                    alt="Mary"
                    name="Mary"
                    quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit!"/>

                <Rating
                    rating="4 out of 5"
                    image={Mary}
                    alt="Mary"
                    name="Mary"
                    quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit!"/>

                <Rating
                    rating="4 out of 5"
                    image={Mary}
                    alt="Mary"
                    name="Mary"
                    quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit!"/>

                <Rating
                    rating="4 out of 5"
                    image={Mary}
                    alt="Mary"
                    name="Mary"
                    quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit!"/>
            </div>
        </article>
    )

}

export default Testimonials;