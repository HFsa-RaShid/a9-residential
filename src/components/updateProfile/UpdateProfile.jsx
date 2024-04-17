import { useContext, useEffect } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import app from "../../firebase/firebaseinfo.config";
import { getAuth } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";


const UpdateProfile = () => {
    

    const {user} = useContext(AuthContext);
    const auth = getAuth(app);
    const navigate = useNavigate()

   
    useEffect(() => {
        AOS.init({duration: 2000});
    }, []);

    const handleUpdate = e =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const name = form.get('name');
        const photoUrl = form.get('photoUrl');
        console.log(name,photoUrl);

        updateProfile(auth.currentUser,{
            displayName: name,
            photoURL: photoUrl,
        })
        
        .then(() =>{
           toast.success('Successfully updated')
            navigate('/updateProfile')
           
        })
        .catch(error => {
            console.error(error);
        })
       
    }


    return (
        <div className="w-[80%] md:w-[70%] lg:w-[50%] container mx-auto mt-10 mb-10 border p-10" data-aos = "fade-up">
            
            <Helmet>
                <title>Update Profile | Sweet Home</title>
            </Helmet>
            <h1 className="text-center text-[30px] font-bold">Update Your Profile!!!</h1>
            <p className="text-center">{user.email}</p>

            <form onSubmit={handleUpdate}>
                <div className="form-control">
                <label className="label">
                    <span className="label-text font-bold ">Name</span>
                </label>
                <input type="text" name="name" placeholder={user.displayName} className="input input-bordered" required />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text font-bold ">Photo URL</span>
                </label>
                <input type="text" name="photoUrl" placeholder={user.photoURL} className="input input-bordered" required />
                </div>

                <button  className="btn bg-black text-white font-bold w-full mt-4">Update</button>

            </form>
            <ToastContainer />
        </div>
    );
};

export default UpdateProfile;