import Banner from "../banner/Banner";
import contactImg from '../../assets/image/c2-removebg-preview.png'
import { NavLink } from "react-router-dom";
import EstateCards from "../estateCards/EstateCards";
import Loan from "../loan/Loan";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";

const Home = () => {
    useEffect(() => {
        AOS.init({duration: 2000});
    }, []);

    return (
        
        <div className="container mx-auto mt-6 ">
             <Helmet>
                <title>Home | Sweet Home</title>
            </Helmet>
            <Banner></Banner>
            <EstateCards></EstateCards>
            <Loan></Loan>

            <div className="hero h-[600px] relative mb-10" data-aos = "fade-up">
                <div className="h-full w-full">
                    <div className="h-[200px]">

                    </div>
                    <div className=" h-[400px] w-[80%] rounded-2xl relative bg-[#79BBBC]" >
                        <div className="w-[50%] absolute top-10 left-10 " data-aos = "fade-down">
                            <h1 className="text-white text-[23px] md:text-[30px] lg:text-[40px]  font-bold ">
                            Would you like to live in Sweet Homes?

                             </h1>
                            <div className="md:flex justify-between gap-5 text-white mt-6">
                                <div className="mb-3">
                                    <p>NUMBER</p>
                                    <p>(880)1734528340</p>

                                </div>
                                <div >
                                    <p>HEADQUARTER</p>
                                    <p>University of Barishal, Barishal-8254</p>
                                </div>

                            </div>
                            <div className="mt-4 md:mt-6 lg:mt-8">
                                <NavLink to="/contact"><button className="py-2 px-5 text-white bg-[#2B4848] rounded-2xl text-[18px]">Contact Us</button></NavLink>
                            </div>
                        
                        </div>

                    </div>

                </div>
                <img className="w-[40%] md:w-[50%] h-full absolute right-0" data-aos = "fade-up" src={contactImg} alt="" />

            </div>

            

        </div>
    );
};

export default Home;