import { Outlet } from "react-router-dom"
import Navbar from "../component/navbar";
import Footer from "../component/footer";
import About from "../component/About";
import { Scroll } from "lucide-react";
import Scroll1 from "./scroll";
const RootLayout=()=>{
    return(
        <>
            <Scroll1/>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}
export default RootLayout;