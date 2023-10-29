import { Link } from "react-router-dom";


const Login = () => {
  return (
    <section className="registration">
      <form className="registration-form border-2 border-red-500">
        <h2 className="mb-5">Sign In to Doc House</h2>

        <div className="mb-2">
          <label
            htmlFor="email"
            className="block text-lg font-medium text-gray-700"
          >
            Enter Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className=" w-full px-3 py-2 border rounded-lg shadow-sm focus:ring focus:ring-indigo-300 focus:outline-non"
          />
        </div>

        <div>
          <div className="flex justify-between">
            <div><label className="block  text-lg font-medium text-gray-700">
            Password 
          </label></div>
          <div className="text-red-500">
            <Link>Forgot password?</Link>
            </div>
          </div>
          
          <input
            type="password"
            name=""
            id=""
            placeholder="Password"
            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:ring focus:ring-indigo-300 focus:outline-none"
          />
        </div>

        <button className="mt-3 bg-blue-400 rounded-lg text-antiquewhite font-semibold px-4 py-2">
          Log In
        </button>

        <p className="ml-20 mt-3 mb-3 max-auto">
          I have no account? go to
          <Link to="/signup" className=" text-red-400">
            SIGN UP
          </Link>
        </p>
      </form>
    </section>
  );
};

export default Login;

