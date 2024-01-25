import Hero from "./Hero";
import Specials from "./Specials";
import Testimonials from "./Testimonials";

function Home() {
    return(
        <main className="main">
            <Hero/>
            <div className="middleSection">
            <Specials/>
            <Testimonials/>
            </div>
        </main>
    )
}

export default Home;