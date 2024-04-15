import { useContext, useEffect } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import AOS from "aos";
import "aos/dist/aos.css";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";

const UserProfile = () => {
    const {user} = useContext(AuthContext);

    useEffect(() => {
        AOS.init({duration: 2000});
    }, []);

    return (
        <div data-aos = "fade-up">
            <Helmet>
                <title>User Profile | Sweet Home</title>
            </Helmet>
            <h1 className="text-center text-[30px] font-bold mt-5">User's Profile!!!</h1>
            <div className="flex container mx-auto w-[90%] md:w-[60%] border h-[220px] md:h-[300px] mt-5 mb-10 gap-5 md:gap-10">
                <div className="w-[50%] md:w-[35%]">
                    <img src={user.photoURL} className="w-full h-full" />
                </div>
                <div className="text-center mt-10 md:mt-24 w-[50%] md:w-[65%]">
                    <h1 className="text-[22px] md:text-[35px] font-bold">{user.displayName}</h1>
                    <p className="text-[16px] md:text-[20px] font-semibold mb-6">Email: {user.email}</p>
                    <NavLink to='/updateProfile'><button className="bg-black rounded-xl text-white py-2 px-4">Update Profile</button></NavLink>

                </div>
            </div>
            
            
        </div>
    );
};

export default UserProfile;