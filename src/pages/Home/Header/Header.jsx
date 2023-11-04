import doctor1 from "../../../assets/doctorImage/doctor-1.jpg";
import doctor2 from "../../../assets/doctorImage/doctor-2.jpg";
import doctor3 from "../../../assets/doctorImage/doctor-3.jpg";
import "./back-header.css";

const Header = () => {
  return (
    <div className="feature">
      <div className="  text-white "> {/* g-base-100 shadow-xl bg-green-900 */}
        <div className="card-body flex-row ">
          <div className="m-20">
            <h2 className="card-title text-red-600 text-4xl">
            Mohammadpur Upazila Health Complex Best Help Center
            </h2>
            <p className="mt-5">
              Lorem Ipsum is simply dummy text they are printing typesetting{" "}
              <br /> has been the industry stardard ..
            </p>
            <div className="card-actions flex-col mt-24 justify-end">
              <button className="btn btn-warning">All Service</button>
            </div>
          </div>
          <div className="">
            <div className="flex ml-60">
              <div>
              <figure className=" ">
                <img className="h-72 w-72" src={doctor1} alt="" />
              </figure>
              </div>
              <div className=" flex-auto ml-10">
              <figure className="flex-auto">
                <img className="h-72 w-72" src={doctor2} alt="" />
              </figure>
              </div>
            </div>
            <div className="absolute mt-3 ml-40">
              <figure>
                <img className="h-72 w-72" src={doctor3} alt="" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
