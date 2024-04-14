import { useContext, useEffect } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import AOS from "aos";
import "aos/dist/aos.css";

const UserProfile = () => {
    const {user} = useContext(AuthContext);

    useEffect(() => {
        AOS.init({duration: 2000});
    }, []);

    return (
        <div data-aos = "fade-up">
            <h1 className="text-center text-[30px] font-bold mt-5">User's Profile!!!</h1>
            <div className="flex container mx-auto md:w-[60%] border h-[300px] mt-5 mb-10 gap-10">
                <div className="w-[30%]">
                    <img src={user.photoURL} className="w-full h-full" />
                </div>
                <div className="text-center mt-28">
                    <h1 className="text-[35px] font-bold">{user.displayName}</h1>
                    <p className="text-[20px] font-semibold">Email: {user.email}</p>

                </div>
            </div>
            
            
        </div>
    );
};

export default UserProfile;