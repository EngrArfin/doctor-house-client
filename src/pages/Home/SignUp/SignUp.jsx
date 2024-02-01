import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <section className="flex justify-center items-center mb-10 mt-32 ">
      <div className="border-2 border-red-500 p-4 w-150">
        <div className="flex justify-center mt-16 text-3xl">
          <h2>SignUp to Mohammadpur Hospital</h2>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className=" ">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Name</span>
            </label>
            <input
              type="text"
              {...register("name", { required: true })}
              name="name"
              placeholder="Name"
              className="input input-bordered"
            />
            {errors.name && (
              <span className="text-red-600">Name is required</span>
            )}
          </div>

          {/* Email */}

          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Email</span>
            </label>
            <input
              type="email"
              {...register("email", { required: true })}
              name="email"
              placeholder="Email"
              className="input input-bordered"
            />
            {errors.email && (
              <span className="text-red-600">Email is required</span>
            )}
          </div>

          {/* Password */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: true,
                minLength: 6,
                maxLength: 20,
                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
              })}
              placeholder="Password"
              className="input input-bordered"
            />
            {errors.password?.type === "required" && (
              <p className="text-red-600">Password is required</p>
            )}
            {errors.password?.type === "minLength" && (
              <p className="text-red-600">Password must be 6 characters</p>
            )}
            {errors.password?.type === "maxLength" && (
              <p className="text-red-600">
                Password must be less than 20 characters
              </p>
            )}
            {errors.password?.type === "pattern" && (
              <p className="text-red-600">
                Password must have one Uppercase one lower case, one number and
                one special character.
              </p>
            )}
            <label className="label">
              <a href="#" className="label-text-alt link link-hover text-white">
                Forgot password?
              </a>
            </label>
          </div>

          <div className="form-control mt-6">
            <input
              className="bg-blue-400 rounded-lg text-antiquewhite font-semibold px-4 py-2"
              type="submit"
              value="Create Account"
            />
          </div>

         
        </form>
        <p className="ml-20 mt-3 mb-3 max-auto">
          Already have an account{" "}
          <Link to="/login" className="text-red-400 ml-2 ">
            Login
          </Link>
        </p>
      </div>
    </section>
  );
};

export default SignUp;
