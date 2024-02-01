import { Link } from "react-router-dom";

const Login = () => {

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  };

  return (
    <section className="flex justify-center items-center mt-32 ">
      <div className="border-2 border-red-500 p-20 w-250 m-10">
      <div className="flex justify-center mb-10 text-3xl">
          <h2>Login to Mohammadpur Hospital</h2>
        </div>
        <form
        onSubmit={handleLogin}
        className=""
      >
      
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
            placeholder="email"
            className=" w-full px-3 py-2 border rounded-lg shadow-sm focus:ring focus:ring-indigo-300 focus:outline-non"
          />
        </div>

        <div>
          <div className="flex justify-between">
            <div>
              <label className="block mb-3 text-lg font-medium text-gray-700">
                Password
              </label>
            </div>
            <div className="text-red-500">
              <Link>Forgot password?</Link>
            </div>
          </div>

          <input
            type="password"
            name="password"
            placeholder="password"
            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:ring focus:ring-indigo-300 focus:outline-none"
          />
        </div>

        <div className="form-control mt-6">
                  <input
                    
                    className="bg-blue-400 rounded-lg text-antiquewhite font-semibold px-4 py-2"
                    type="submit"
                    value="Login"
                  />
                </div>
        

        <p className="ml-20 mt-3 mb-3 max-auto">
          I have no account ? go to
          <Link to="/signup" className=" text-red-400 ml-2">
            SIGN UP
          </Link>
        </p>
      </form>
      </div>
      
    </section>
  );
};

export default Login;
