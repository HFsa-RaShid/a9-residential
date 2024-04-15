
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
const Bank = ({bank}) => {
    const {id,image,name,maximum_loan_amount,interest_rate,tenure} = bank;

    useEffect(() => {
        AOS.init({duration: 2000});
    }, []);

    return (
        <div className="card  bg-base-100 shadow-xl mb-10" data-aos = "fade-up">
            <Helmet>
                <title>Banks for Loan | Sweet Home</title>
            </Helmet>
            
            <figure><img src={image} className='h-[150px]' /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold">{name}</h2>
                <div className="flex mb-1">
                        <p className="font-bold w-[80%]">Maximum Loan Amount:</p>
                        <p>{maximum_loan_amount}</p>
                </div>
                <div className="flex mb-1">
                        <p className="font-bold w-[70%]">Interest Rate:</p>
                        <p>{interest_rate}</p>
                </div>
                <div className="flex mb-1">
                        <p className="font-bold w-[70%]">Tenure:</p>
                        <p>{tenure}</p>
                </div>
                <div className="card-actions justify-end">
                    <button className="bg-black w-full text-white py-2 px-5 rounded-2xl">Apply Now</button>
                </div>
            </div>
        </div>

        
    );
};

export default Bank;