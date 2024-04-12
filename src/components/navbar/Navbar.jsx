import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import logo from "../../assets/image/user.png";
import { RiHomeHeartFill } from "react-icons/ri";

const Navbar = () => {
  const {user,logOut} = useContext(AuthContext);
  console.log(user);
  const handleSignOut = () =>{
    logOut()
    .then()
    .catch()

  }


    const links =
    <>
    {
      user ?
      <div className="flex font-semibold text-[18px]">
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/updateProfile'>Update Profile</NavLink></li>
        <li><NavLink to='/userProfile'>User Profile</NavLink></li>
        <li> <NavLink to='/contact'>Contact Us</NavLink></li>
      </div>
      :
      <div className="flex font-semibold text-[18px]">
        <li><NavLink to='/'>Home</NavLink></li>
      <li> <NavLink to='/contact'>Contact Us</NavLink></li>
      </div>
    }
    
    
    </>
    return (
        <div className="navbar bg-base-100 mt-4 sticky top-0 z-50">
            <div className="navbar-start">
              <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                  {links}
                </ul>
              </div>
              <div className="flex items-center">
              <RiHomeHeartFill className="w-[50px] h-[50px]" />
                <div className="text-xl font-extrabold">
                <h1><span className="text-3xl text-blue-800">S</span>weet</h1>
              <h1>Home</h1>
                </div>
              
              </div>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
                {links}
              </ul>
            </div>
            <div className="navbar-end">
              {
                user ?
                    <div className="flex gap-3">
                        <div className="tooltip tooltip-hover tooltip-bottom"     data-tip="hello">
                          <div className="w-10 h-10 rounded-full border border-black">
                        
                            <img alt="Tailwind CSS Navbar component" src={logo} className="h-[80%] mx-auto" />
                          </div>
    
                        </div>
                  
                  
                        <button onClick={handleSignOut} className="py-2 px-4 bg-black text-white rounded-xl">Sign Out</button>

                    </div>
                

                :
                    <div className="flex gap-5">
                      <Link to='/login'><button className="py-2 px-4 bg-black text-white rounded-xl">Sign In</button></Link>
                    <Link to='register'><button className="py-2 px-4 bg-white rounded-xl text-black border border-black font-bold">Register</button></Link></div>

              }
              
              
            </div>
           
        </div>
    );
};

export default Navbar;