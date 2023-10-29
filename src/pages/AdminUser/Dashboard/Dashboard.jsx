import { NavLink, Outlet } from "react-router-dom";

import {
  FaHome,
  /* FaShoppingCart, */
  FaWallet,
} from "react-icons/fa";
import NavBar from "../../Home/Share/NavBar/NavBar";

const Dashboard = () => {
  return (
    <section className="max-w-7xl mx-auto">
        <NavBar></NavBar>
      <div className="drawer lg:drawer-open max-w-7xl mx-auto">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side  text-black "> {/* bg-[#214333] */}
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

          <ul className="menu p-4 w-80  ">
            {/* here replace with below code */}

            
            <li>
              <NavLink to="/">
                <FaHome></FaHome> All User
              </NavLink>
            </li>
            <li>
              <NavLink to="/menu">
                <FaWallet></FaWallet> Add a Doctor
              </NavLink>
            </li>
            <li>
              <NavLink to="/order/:category">
                <FaWallet></FaWallet>Manage Doctors
              </NavLink>
            </li>
            <li>
              <NavLink to="/order/:category">
                {" "}
                <FaWallet></FaWallet>Home
              </NavLink>
            </li>

            <div className="divider"></div>

            <li>
              <NavLink to="/">
                <FaHome></FaHome> All User
              </NavLink>
            </li>
            <li>
              <NavLink to="/menu">
                <FaWallet></FaWallet> Add a Doctor
              </NavLink>
            </li>
            <li>
              <NavLink to="/order/:category">
                <FaWallet></FaWallet>Manage Doctors
              </NavLink>
            </li>
            <li>
              <NavLink to="/order/:category">
              
                <FaWallet></FaWallet>Home
              </NavLink>
            </li>


          </ul>

        </div>
      </div>
    </section>
  );
};

export default Dashboard;
