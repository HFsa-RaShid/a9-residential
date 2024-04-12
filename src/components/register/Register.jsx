import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import register from '../../assets/image/p.png'



const Register = () => {
    const {createUser} =useContext(AuthContext);
    const formRef = useRef(null);

    const handleRegister = e =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const name = form.get('name');
        const email = form.get('email');
        const photoUrl = form.get('photoUrl');
        const password = form.get('password');
        console.log(name,email,photoUrl,password);

        if (password.length < 6) {
            
            alert("Password must be at least 6 characters long.");
            return; 
        }
        else if(! /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()-+=])[A-Za-z\d!@#$%^&*()-+=]{8,}$/.test(password)){
            alert('Password must contain at least one uppercase letter, one lowercase letter, one special character, and one number.');
            return;

        }

        createUser(email,password)
        .then(result =>{
            console.log(result.user);
            formRef.current.reset();
        })
        .catch(error =>{
            console.error(error)
        })
    }
    return (
        <div className="hero min-h-[571px] bg-base-200 rounded-2xl mb-8 flex justify-around">
             <img src={register} className="h-[400px]" />
        <div className="hero-content flex-col w-[500px]">
            
            <h1 className="text-5xl font-bold">Register now!</h1>
            
            <div className="card shrink-0 w-full max-w-md shadow-2xl bg-base-100">
            <form className="card-body " onSubmit={handleRegister} ref={formRef}>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Name</span>
                </label>
                <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
                </div>

                <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                </div>

                <div className="form-control">
                <label className="label">
                    <span className="label-text">Photo URL</span>
                </label>
                <input type="text" name="photoUrl" placeholder="Enter Photo URL" className="input input-bordered" required />
                </div>

                <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                <label className="label">
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
                </div>

                <div className="form-control mt-2">
                <button className="btn bg-black text-white">Register</button>
                </div>
            </form>
            <p className="text-center">Already have an account? Please <Link to="/login">
                <button className="text-blue-800 underline font-bold">SignIn</button>
            </Link></p>
            </div>
        </div>
       
    </div>
        
    );
};

export default Register;