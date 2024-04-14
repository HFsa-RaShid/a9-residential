import { NavLink } from "react-router-dom";

const Loan = () => {
    const loanImageUrl = "https://i.ibb.co/3hzz9fh/loan.webp";

    return (
        <div className=" h-[400px]" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${loanImageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="md:w-[50%] mx-auto">
                <h1>HOME LOAN</h1>
                <p>Find the best way to finance your dream home</p>
                <NavLink to='/loan'><button className="bg-black text-white py-2 px-6 mt-10 rounded-2xl mr-6" >Apply For Loan</button></NavLink>
                <NavLink><button className="bg-white text-black border border-black py-2 px-6 mt-10 rounded-2xl">View All Banks</button></NavLink>

            </div>
           
        </div>
         
    );
};

export default Loan;