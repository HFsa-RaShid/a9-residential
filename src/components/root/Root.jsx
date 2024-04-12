import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";


const Root = () => {
    return (
        <div className="fonts">
            <div className="container mx-auto ">
            <Navbar></Navbar>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
            
        </div>
    );
};

export default Root;