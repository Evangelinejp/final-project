import Hero from "./Hero";
import Specials from "./Specials";
import Testimonials from "./Testimonials";

function Home() {
    return(
        <main className="home">
            <Hero/>
            <Specials/>
            <Testimonials/>
        </main>
    )
}

export default Home;