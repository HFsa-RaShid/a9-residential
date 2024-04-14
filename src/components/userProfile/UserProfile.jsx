import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";


const UserProfile = () => {
    const {user} = useContext(AuthContext);
    return (
        <div >
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