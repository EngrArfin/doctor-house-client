//import { useContext } from "react";
import { Link } from "react-router-dom";
import { FaClinicMedical, FaHandHoldingMedical } from 'react-icons/fa';

const NavBar = () => {
  
    /* const { user, logOut } = useContext(AuthContext); */
  /* const [cart] = useCart(); */

 /*  const handelLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  }; */

    const navOptions = (
        <>
          <li>
            <Link className="uppercase" to="/">Home</Link>
          </li>
          <li><Link className="uppercase" to="/menu">About</Link></li>
          <li><Link className="uppercase" to="/order/salad">Appointment</Link></li>
          <li>
            <Link className="uppercase" to="/userhome">Login</Link>
          </li>
          
          {/* {user ? (
            <>
              <button onClick={handelLogOut} className="btn btn-ghost uppercase">
                LogOut
              </button>
            </>
          ) : (
            <>
              <li>
                <Link className="uppercase" to="/login">Login</Link>
              </li>
            </>
          )} */}
        </>
      );

    return (
<>
      <div className="navbar bg-green-900 text-white">
        <div className="navbar-start">
          
          <a className="btn ml-20 btn-ghost uppercase  text-xl"> <FaClinicMedical></FaClinicMedical> <span className="text-red-400">Doctor</span>House</a>
        </div>


        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>


        <div className="navbar-end">
        <div className="dropdown dropdown-end">
            <label
              tabIndex={0}
              className="btn btn-outline border-yellow-200 border-2 border-b-6 mt-4 m-2 btn-circle"
            >
              <div className="indicator">
                <FaHandHoldingMedical></FaHandHoldingMedical>
              </div>
            </label>
            <div
              tabIndex={0}
              className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg">1 Items</span>
                <span className="text-info">Subtotal: $ 00.00</span>
              </div>
            </div>
        
        </div>

        </div>
      </div>
    </>
     
    );
};

export default NavBar;


       