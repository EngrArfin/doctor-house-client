import { Link } from "react-router-dom";

const SignUp = () => {
  
  return (

    <section className="flex justify-center items-center mt-32">
      <form className="border-2 border-red-500 p-4 w-150">
        <div className="flex justify-center mt-16 text-3xl">
          <h2>Sign Up to Doc House</h2>
        </div>

        <div className="flex">
          <div className="mt-4">   
            <label
              htmlFor="email"
              className="block ml-2 mb-2 text-lg font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              name=""
              id=""
              placeholder="Name"
              className="mt-4 text-lg p-3 rounded-lg text-black w-60 mx-2"
            />
          </div>

          <div className="mt-4">
            <label
              htmlFor="email"
              className="block ml-2 mb-2 text-lg font-medium text-gray-700"
            >
              Username
            </label>
            <input
              type="text"
              name=""
              id=""
              placeholder="Username"
              className="mt-4 text-lg p-3  rounded-lg text-antiquewhite w-60 mx-1"
            />
          </div>
        </div>

        <div className="">
          <label
            htmlFor="email"
            className="block ml-2 text-lg font-medium text-gray-700"
          >
            Enter Email
          </label>
          <input
            type="email"
            name=""
            id=""
            placeholder="Email "
            className="mt-4 text-lg p-3 rounded-lg"
          />
        </div>
        <div className="">
          <label
            htmlFor="email"
            className="block ml-2 text-lg font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            name=""
            id=""
            placeholder="Password "
            className="mt-4 text-lg p-3  rounded-lg"
          />
        </div>

        {/* <input type="password" name="" id="" placeholder="Password" /> */}

        <button className="bg-blue-400 rounded-lg text-antiquewhite font-semibold px-4 py-2">
          Create Account
        </button>

        <p className="ml-20 mt-3 mb-3 max-auto">
          Already have account? Go to
          <Link to="/login" className=" text-red-400 ml-2">
            Log In
          </Link>
        </p>
      </form>
    </section>
  );
};

export default SignUp;
