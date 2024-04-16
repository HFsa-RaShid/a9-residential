import { useContext} from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { RiHomeHeartFill } from "react-icons/ri";
import 'animate.css';
const Navbar = () => {
  const {user,logOut} = useContext(AuthContext);
  console.log(user);
  
  const handleSignOut = () =>{
    logOut()
    .then(() =>{
      window.location.href = "/";
    })
    .catch()

  }

    const links =
    <>
      
        <li ><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/updateProfile'>Update Profile</NavLink></li>
        <li><NavLink to='/userProfile'>User Profile</NavLink></li>
        <li> <NavLink to='/contact'>Contact Us</NavLink></li>

    </>
    return (
        <div className="navbar sticky top-0 z-50  shadow-2xl bg-slate-50 container mx-auto">
            <div className="navbar-start ">
              <div className="dropdown ">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>

                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-semibold text-[18px] animate__animated animate__fadeInDown">
                    {links}
      
                </ul>
              </div>
              <div className=" animate__animated animate__fadeInLeft">
              <h1 className="text-black text-[18px]"><span className="text-4xl text-black font-bold">S</span>weet</h1>
                <div className=" flex ml-3">
                
                <RiHomeHeartFill className="w-[30px] h-[30px]" />
              <h1 className="text-black text-[18px]"><span className="text-2xl text-black font-bold">H</span>ome</h1>
                </div>

              
              </div>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1  flex flex-col lg:flex-row font-semibold text-[18px] animate__animated animate__fadeInDown">
                
                  {links}
              </ul>
            </div>
            <div className="navbar-end">
              {
                user ?
                    <div className="flex gap-3 animate__animated animate__fadeInRight">
                        <div className="tooltip tooltip-hover tooltip-bottom" data-tip={user.displayName}>
                          <div className="w-10 h-10 rounded-full border border-black">
                        
                            <img alt="Tailwind CSS Navbar component" src={user.photoURL} className="h-full w-full mx-auto rounded-full" />
                          </div>
    
                        </div>
                  
                  
                        <button onClick={handleSignOut} className="py-2 px-4 border border-black text-black rounded-xl font-bold">Sign Out</button>

                    </div>
                

                :
                    <div className="flex gap-2 animate__animated animate__fadeInRight ">
                      <Link to='/login'><button className="py-2 px-4 bg-black text-white rounded-xl">Sign In</button></Link>
                    
                    </div>

              }
              
              
            </div>
           
        </div>
    );
};

export default Navbar;