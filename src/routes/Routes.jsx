import { createBrowserRouter } from "react-router-dom";

import Root from "../components/root/Root";
import Home from "../components/home/Home";
import LogIn from "../components/login/LogIn";
import UpdateProfile from "../components/updateProfile/UpdateProfile";
import UserProfile from "../components/userProfile/UserProfile";
import Register from "../components/register/Register";
import ContactUs from "../components/contact/ContactUs";
import Loan from "../components/loan/Loan";
import LoanForm from "../components/loan/LoanForm";
import CardDetails from "../components/card/CardDetails";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
  
      
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
            path: "/updateProfile",
            element: <UpdateProfile></UpdateProfile>,
        },
        {
            path: "/userProfile",
            element: <UserProfile></UserProfile>,
        },
        {
          path: "/contact",
          element: <ContactUs></ContactUs>,
        },
        {
            path: "/login",
            element: <LogIn></LogIn>,
        },
        {
            path: "/register",
            element: <Register></Register>,
        },
        {
          path: "/card/:id",
          element: <CardDetails></CardDetails>,
          loader: ()=> fetch('../residence.json')
        },
        {
          path: "/loan",
          element: <LoanForm></LoanForm>,
        }
        
        
      ],
    },
  ]);