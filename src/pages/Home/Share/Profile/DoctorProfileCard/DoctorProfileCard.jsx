import { Rating } from "@smastrom/react-rating";
import { GrLocation } from "react-icons/gr";

import doctor1 from "../../../../../assets/doctorImage/doctor-1.jpg";
import ProfileHeader from "../ProfileHeader/ProfileHeader";

const DoctorProfileCard = () => {
  return (
    <section>
      <ProfileHeader></ProfileHeader>

      <div className="max-w-7xl mx-auto mt-20">
        <div className="card ml-50 w-120 bg-sky-500 max-h-screen ">
          <div className="hero-content flex-col lg:flex-row">
            <img src={doctor1} className="max-w-sm rounded-lg shadow-2xl" />
            <div>
              <h2 className="card-title">Karyen Anderson</h2>
              <p>BTP - Senior Physiotherapist</p>
              <span className="max-auto w-20">
                <Rating style={{ maxWidth: 180 }} value={5} readOnly />
              </span>

              <div className="flex">
                <div>
                  <GrLocation></GrLocation>
                </div>
                <div>
                  <p className="ml-3">
                    Dhanmondi, Dhaka, Bangladesh{" "}
                    <span className="text-red-500">- Get Directions</span>
                  </p>
                </div>
              </div>
              <div>
                <button className="btn btn-square">
                  <input
                    type="checkbox"
                    checked="checked"
                    className="checkbox checkbox-xs"
                  />
                </button>
                <button className="btn btn-square">
                <input type="checkbox" checked="checked" className="checkbox checkbox-xs" /> 
                </button>
                <button className="btn btn-square">
                <input type="checkbox" checked="checked" className="checkbox checkbox-xs" /> 
                </button>
                <button className="btn btn-square">
                <input type="checkbox" checked="checked" className="checkbox checkbox-xs" /> 
                </button>
                <button className="btn btn-square">
                <input type="checkbox" checked="checked" className="checkbox checkbox-xs" /> 
                </button>
              </div>

              <div className="mt-2">
                <button className="btn btn-outline">Dental Filling</button>
                <button className="btn btn-outline ml-4">
                  Teeth Whitneing
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorProfileCard;
