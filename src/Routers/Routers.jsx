import {
    createBrowserRouter,
    
  } from "react-router-dom"; 
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import DoctorProfile from "../pages/Home/DoctorProfile/DoctorProfile";
import Login from "../pages/Home/Login/Login";
import Dashboard from "../pages/AdminUser/Dashboard/Dashboard";
import SignUp from "../pages/Home/SignUp/SignUp";
import DoctorMenu from "../pages/Home/Share/Profile2/DoctorMenu/DoctorMenu";
import PrivateRoute from "./PrivateRoute";
import Appointment from "../pages/Home/Share/Profile2/Appointment/Appointment";

 export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: "/profile",
            element: <DoctorProfile></DoctorProfile>
        },
        {
            path: "/appointment",
            element: <DoctorMenu></DoctorMenu> 
        },
        {
            path: "/appoint",
            element: <Appointment></Appointment>
        },
        
        {
            path: "/signup",
            element: <SignUp></SignUp>
        },
        {
            path: "/login",
            element: <Login></Login>
        }
        
        
    ]
  },
  {
    path: 'dashboard',
    element: <Dashboard></Dashboard>,
    children: [
        {
            path: 'userhome',
        }

    ]
  }
 
]);
