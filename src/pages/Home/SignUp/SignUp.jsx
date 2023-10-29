import { Link } from "react-router-dom";
import "./registration.css";
const SignUp = () => {
  return (
    <section className="registration">
      <form className="registration-form border-2 border-red-500">
        <h2>Sign Up to Doc House</h2>

        <div className="flex">
          <input
            type="text"
            name=""
            id=""
            placeholder="Name"
            className="rounded-lg text-antiquewhite w-60 mx-2"
          />

          <input
            type="text"
            name=""
            id=""
            placeholder="Username"
            className="rounded-lg text-antiquewhite w-60 mx-1"
          />
        </div>

        <input type="email" name="" id="" placeholder="Email " />
        <input type="password" name="" id="" placeholder="Password" />
       
        <button className="bg-blue-400 rounded-lg text-antiquewhite font-semibold px-4 py-2">
        Create Account
        </button>

        <p className="ml-20 mt-3 mb-3 max-auto">
          Already have account? Go to
          <Link to="/login" className=" text-red-400 ml-2">Log In</Link>
        </p>
      </form>
    </section>
  );
};

export default SignUp;
