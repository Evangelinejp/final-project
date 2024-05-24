import Hero from "./Hero";
import Specials from "./Specials";
import Testimonials from "./Testimonials";
import {useEffect} from "react";

function Home() {

    useEffect(() => {
        document.title = "Little Lemon"
      }, []);

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