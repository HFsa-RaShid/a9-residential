import { useContext, useRef} from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

import registerBackground from '../../assets/image/bg.jpg'
import { updateProfile } from "firebase/auth";



const Register = () => {
    const {createUser} = useContext(AuthContext);
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
        .then(result => {
            console.log(result.user)
            updateProfile(result.user,{
                displayName: name,
                photoURL: photoUrl,
            })
            .then(() =>{
                console.log('name,photo added')
            })
            .catch(error => {
                console.error(error)
            })
            formRef.current.reset();
            window.location.href = "/";
        })
        .catch(error => {
            console.error(error)
        });
    }
    return (
        <div className="hero min-h-[571px]" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${registerBackground})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
       
        <div className="hero-content flex-col w-[500px]">
            
            <h1 className="text-5xl font-bold text-white">Register now!</h1>
            
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-black opacity-70">
            <form className="card-body " onSubmit={handleRegister} ref={formRef}>
                <div className="form-control">
                <label className="label">
                    <span className="label-text font-bold text-white">Name</span>
                </label>
                <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
                </div>

                <div className="form-control">
                <label className="label">
                    <span className="label-text font-bold text-white">Email</span>
                </label>
                <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                </div>

                <div className="form-control">
                <label className="label">
                    <span className="label-text font-bold text-white">Photo URL</span>
                </label>
                <input type="text" name="photoUrl" placeholder="Enter Photo URL" className="input input-bordered" required />
                </div>

                <div className="form-control">
                <label className="label">
                    <span className="label-text font-bold text-white">Password</span>
                </label>
                <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                <label className="label">
                    <a href="#" className="label-text-alt link link-hover font-bold text-white">Forgot password?</a>
                </label>
                </div>

                <div className="form-control mt-2">
             
             <button className="btn bg-black text-white font-bold">Register</button>

            
                
                
                </div>
            </form>
            <p className="text-center text-white">Already have an account? Please <Link to="/login">
                <button className="text-blue-400 underline font-bold">SignIn</button>
            </Link></p>
            </div>
        </div>
       
    </div>
        
    );
};

export default Register;