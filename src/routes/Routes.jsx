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
import Banks from "../components/loan/Banks";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../components/errorPage/ErrorPage";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      
      children: [
        {
          path: "/",
          element: <Home></Home>,
          
        },
        {
            path: "/updateProfile",
            element: <PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>,
        },
        {
            path: "/userProfile",
            element: <PrivateRoute><UserProfile></UserProfile></PrivateRoute>,
        },
        {
          path: "/contact",
          element: <PrivateRoute><ContactUs></ContactUs></PrivateRoute>,
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
          element: <PrivateRoute><CardDetails></CardDetails></PrivateRoute>,
          loader: ()=> fetch('../residence.json')
        },
        {
          path: "/loan",
          element: <PrivateRoute><LoanForm></LoanForm></PrivateRoute>,
        },
        {
          path: "/banks",
          element: <Banks></Banks>,
        }

        
        
      ],
    },
  ]);