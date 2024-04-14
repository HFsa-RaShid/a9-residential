import { NavLink } from "react-router-dom";

const Loan = () => {
    const loanImageUrl = "https://i.ibb.co/3hzz9fh/loan.webp";

    return (
        <div className="relative h-[400px] mt-20 rounded-2xl" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${loanImageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="md:w-[50%] absolute top-28 left-[25%]">
                <h1 className="text-center text-[35px] font-bold text-white">HOME LOAN</h1>
                <p className="text-center text-[24px] font-bold text-white">Find the best way to finance your dream home</p>
                <div className="flex  gap-8 w-[60%]  mx-auto">
                    <NavLink to='/loan'><button className="bg-black text-white py-2 px-6 mt-10 rounded-2xl " >Apply For Loan</button></NavLink>
                    <NavLink to='/banks'><button className="bg-white text-black border border-black py-2 px-6 mt-10 rounded-2xl">View All Banks</button></NavLink>
                </div>

            </div>
           
        </div>
         
    );
};

export default Loan;