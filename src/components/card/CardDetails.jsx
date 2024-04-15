import { NavLink, useLoaderData, useParams } from "react-router-dom";
import { ImHome } from "react-icons/im";
import { MdSell } from "react-icons/md";
import { FaChartArea } from "react-icons/fa";
import { FaSackDollar } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";

const CardDetails = () => {
    const cards = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const card=cards.find(card => card.id === idInt);


    useEffect(() => {
        AOS.init({duration: 2000});
    }, []);

    return (
        <div className="md:flex gap-20 h-[850px] md:h-[550px] lg:h-[520px] px-5 md:px-10 lg:px-5 mt-20 container mx-auto" >
            <Helmet>
                <title>Card Details: {id}| Sweet Home</title>
            </Helmet>
            <div className="md:w-[40%]" data-aos = "fade-down">
                <img src={card.image} />

            </div>
            <div className="md:w-[60%] mt-4 md:mt-0" data-aos = "fade-up">
                <h1 className="text-[30px] font-bold">{card.estate_title}</h1>
                <div className="flex items-center gap-2 text-[20px] mb-3">
                        <ImHome />
                        <p>{card.segment_name}</p>
                </div>
                <p><span className="font-bold text-[20px]">Description: </span>{card.description}</p>

                <div className="mt-4">
                <div className="flex mb-2">
                        <div className="flex items-center gap-2 w-[30%]">
                        <FaSackDollar />
                        <p className="font-bold">ID: </p>
                        </div>
                        <p>{card.id}</p>
                    </div>
                    <div className="flex mb-2">
                        <div className="flex items-center gap-2 w-[30%]">
                        <MdSell />
                        <p className="font-bold">Status:</p>
                        </div>
                        <p>{card.status}</p>
                    </div>
                    <div className="flex mb-2">
                        <div className="flex items-center gap-2 w-[30%]">
                        <FaChartArea />
                        <p className="font-bold">Area: </p>
                        </div>
                        <p>{card.area}</p>
                    </div>
                    <div className="flex mb-2">
                        <div className="flex items-center gap-2 w-[30%]">
                        <FaLocationDot />
                        <p className="font-bold">Location: </p>
                        </div>
                        <p>{card.location}</p>
                    </div>
                    <div className="flex mb-2">
                        <div className="flex items-center gap-2 w-[30%]">
                        <FaSackDollar />
                        <p className="font-bold">Price: </p>
                        </div>
                        <p>{card.price}</p>
                    </div>

                </div>

                <div className=" flex">
                        <div className="flex w-[30%]  gap-2">
                            <FaSackDollar />
                            <p className="font-bold">Facilities: </p>
                        </div>
                        <div className="">
                            {card.facilities.map((facility, index) => (
                                <p key={index}><span>* </span>{facility}</p>
                            ))}
                        </div>
                    </div>
                <NavLink to='/'><button className="bg-black text-white py-2 px-6 mt-5 mb-5 rounded-2xl">Go Back Home</button></NavLink>

            </div>
            
        </div>
    );
};

export default CardDetails;