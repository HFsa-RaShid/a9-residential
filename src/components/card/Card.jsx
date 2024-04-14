import { ImHome } from "react-icons/im";
import { FaSackDollar } from "react-icons/fa6";
import { MdSell } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Card = ({card}) => {
    const {id,estate_title,segment_name,price,status,image,location} = card;
    useEffect(() => {
        AOS.init({duration: 2000});
    }, []);

    return (
        
        <div className="card bg-base-100 shadow-xl" data-aos = "fade-up">
                <figure className="px-10 pt-10">
                    <img src={image} className="rounded-2xl w-full h-[180px]"/>
                </figure>
                <div className="card-body ">
                    <h2 className="card-title">{estate_title}</h2>
                    <div className="flex items-center gap-2">
                        <ImHome />
                        <p>{segment_name}</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <FaSackDollar />
                            <p className="font-bold">{price}</p>

                        </div>
                        <div className="flex items-center gap-2">
                           <MdSell />
                            <p className="font-bold"><span className="font-normal">For</span> {status}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaLocationDot />
                        <p>{location}</p>
                    </div>
                    <div className="card-actions mx-auto w-full mt-3">
                    <NavLink to={`/card/${id}`}><button className="bg-black w-full text-white py-2 px-5 rounded-2xl">View Details</button></NavLink>
                    </div>
                </div>
        </div>
        
    );
};

export default Card;