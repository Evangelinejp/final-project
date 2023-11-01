import Header from "../Header/Header.js"
import Footer from "../Footer/Footer.js"
import {Outlet} from "react-router-dom";

function Layout() {
    return (
        <>
            <Header/>

            <Outlet/>

            <Footer/>
        </>
    )
}

export default Layout;