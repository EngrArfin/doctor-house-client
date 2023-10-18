import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div>
            <button to='' className="btn btn-active btn-secondary">Home</button>
            <Link to='' className="btn btn-active btn-secondary">About</Link>
            <Link to='' className="btn btn-active btn-secondary">Appointment</Link>
            <Link to='' className="btn btn-active btn-secondary">Login</Link>
        </div>
    );
};

export default NavBar;