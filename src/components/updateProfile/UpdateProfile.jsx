import { useContext, useRef } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import app from "../../firebase/firebaseinfo.config";
import { getAuth } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const UpdateProfile = () => {

    const {createUser} = useContext(AuthContext);
    const formRef = useRef(null);
    const auth = getAuth(app);

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
            formRef.current.reset();
            alert('Update successfully');
        })
        .catch(error => {
            console.error(error)
        })

        
    }


    return (
        <div className="w-[50%] container mx-auto mt-10 mb-10 border p-10">
            <h1 className="text-center text-[30px] font-bold">Update Your Profile!!!</h1>
            <form onClick={handleUpdate}>
                <div className="form-control">
                <label className="label">
                    <span className="label-text font-bold ">Name</span>
                </label>
                <input type="text" name="name" placeholder="Your Name" className="input input-bordered"  />
                </div>

                <div className="form-control">
                <label className="label">
                    <span className="label-text font-bold ">Photo URL</span>
                </label>
                <input type="text" name="photoUrl" placeholder="Enter Photo URL" className="input input-bordered" />
                </div>

                <button  className="btn bg-black text-white font-bold w-full mt-4">Update</button>

            </form>
            
            <ToastContainer />
        </div>
    );
};

export default UpdateProfile;