import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="flex justify-center items-center mt-32 ">
      <form className="border-2 border-red-500 p-20 w-250 m-10">
        <div className="flex justify-center mb-10 text-3xl">
        <h2 >Login to Mohammadpur Hospital</h2>
        </div>
        
        <div className="mb-2">
          <label
            htmlFor="email"
            className="block mb-3 text-lg font-medium text-gray-700"
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
            <div><label className="block mb-3 text-lg font-medium text-gray-700">
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

