import Banner from "../banner/Banner";
import contactImg from '../../assets/image/c2-removebg-preview.png'
import { NavLink } from "react-router-dom";
import EstateCards from "../estateCards/EstateCards";
import Loan from "../loan/Loan";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
    useEffect(() => {
        AOS.init({duration: 2000});
    }, []);

    return (
        
        <div className="container mx-auto mt-6 ">
            <Banner></Banner>
            <EstateCards></EstateCards>
            <Loan></Loan>

            <div className="hero h-[600px] relative mb-10" data-aos = "fade-up">
                <div className="h-full w-full">
                    <div className="h-[200px]">

                    </div>
                    <div className=" h-[400px] w-[80%] rounded-2xl relative bg-[#79BBBC]" >
                        <div className="w-[50%] absolute top-10 left-10 " data-aos = "fade-down">
                            <h1 className="text-white text-[40px]  font-bold ">
                            Would you like to live in Sweet Homes?

                             </h1>
                            <div className="flex justify-between text-white mt-6">
                                <div>
                                    <p>NUMBER</p>
                                    <p>(880)1734528340</p>

                                </div>
                                <div>
                                    <p>HEADQUARTER</p>
                                    <p>112 Nuzrul Lane,Uttra,dhaka-1230</p>
                                </div>

                            </div>
                            <div className=" mt-16">
                                <NavLink to="/contact"><button className="py-2 px-5 text-white bg-[#2B4848] rounded-2xl text-[18px]">Contact Us</button></NavLink>
                            </div>
                        
                        </div>

                    </div>

                </div>
                <img className=" h-full absolute right-0" data-aos = "fade-up" src={contactImg} alt="" />

            </div>

            

        </div>
    );
};

export default Home;