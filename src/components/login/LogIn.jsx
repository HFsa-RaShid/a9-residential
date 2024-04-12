import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebaseinfo.config";
import loginLogo from '../../assets/image/bg-login.png'

const LogIn = () => {
  const {signInUser}=useContext(AuthContext)
  const formRef = useRef(null);

// google login start
const [user,setUser] =useState(null);
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const handleGoogleLogIn =() =>{
    signInWithPopup(auth,googleProvider)
    .then(result =>{
        const loggedInUser = result.user;
        console.log(loggedInUser);
        setUser(loggedInUser)
    })
    .catch(error =>{
        console.log('error',error.message);
    })

  }
//   google login end
// github login start
const githubProvider = new GithubAuthProvider();
const handleGithubLogIn = () =>{
    signInWithPopup(auth,githubProvider)
    .then(result =>{
        const loggedUser = result.user;
        console.log(loggedUser);
        setUser(loggedUser)
    })
    .catch(error =>{
        console.log('error',error.message);
    })
}
// github login end


  const handleLogin = e =>{
    e.preventDefault();
    const form = new FormData(e.currentTarget)
    const email = form.get('email');
    const password = form.get('password');
    console.log(email,password);
    signInUser(email,password)
    .then(result =>{
        console.log(result.user);
        formRef.current.reset();
    })
    .catch(error =>{
        console.error(error)
    })
      
  }


    return (
      <div className="hero max-h-screen bg-base-200 rounded-2xl mb-6 flex justify-around">
      <div className="hero-content flex-col w-[500px] ">
          
          <h1 className="text-5xl font-bold">Login now!</h1>
          
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleLogin} ref={formRef}>
              <div className="form-control">
              <label className="label">
                  <span className="label-text">Email</span>
              </label>
              <input type="email" name="email" placeholder="Enter Email" className="input input-bordered" required />
              </div>
              <div className="form-control">
              <label className="label">
                  <span className="label-text">Password</span>
              </label>
              <input type="password" name="password" placeholder="Enter Password" className="input input-bordered" required />
              <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
              </div>
              <div className="form-control mt-2">
              <button className="btn bg-black text-white font-bold">Sign In</button>
              </div>
              <hr></hr>
              <p className="text-center font-bold">OR</p>
              <div className="flex justify-around">
                <div className="border flex py-2 px-3 rounded-xl gap-3 items-center w-[45%] pl-7">
                    <FcGoogle />
                    <button onClick={handleGoogleLogIn} className="font-bold text-[18px]">Google</button>
                </div>
                <div className="border flex py-2 px-3 rounded-xl gap-3 items-center w-[45%] pl-7">
                    <FaGithub />
                    <button onClick={handleGithubLogIn} className="font-bold text-[18px]">Github</button>

                </div>
                    
                    
              </div>
              
          </form>
          
          <p className="text-center">New to Sweet Home? Please <Link to="/register">
              <button className="text-blue-800 underline font-bold">Register</button>
          </Link></p>
          </div>
          
      </div>
       <img src={loginLogo}/>
      
  </div>
    );
};

export default LogIn;