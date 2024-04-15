import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Loan = () => {
    const loanImageUrl = "https://i.ibb.co/3hzz9fh/loan.webp";
    useEffect(() => {
        AOS.init({duration: 3000});
    }, []);

    return (
        <div className="relative h-[400px] mb-20 mt-20 rounded-2xl w-full " style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${loanImageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }} data-aos = "fade-up">
            <div className="w-[55%] absolute top-28 left-[25%]" data-aos = "fade-down">
                <h1 className="text-center text-[28px] md:text-[35px] font-bold text-white" >HOME LOAN</h1>
                <p className="text-center text-[18px] md:text-[24px] font-bold text-white " >Find the best way to finance your dream home</p>
                <div className="md:flex  md:gap-8 justify-around ml-5 md:ml-0">
                    <NavLink to='/loan'><button className="bg-black text-white py-2 px-6 mt-10 rounded-2xl " >Apply For Loan</button></NavLink>
                    <NavLink to='/banks'><button className="bg-white text-black border border-black py-2 px-6 mt-5 md:mt-10 rounded-2xl">View All Banks</button></NavLink>
                </div>

            </div>
           
        </div>
         
    );
};

export default Loan;