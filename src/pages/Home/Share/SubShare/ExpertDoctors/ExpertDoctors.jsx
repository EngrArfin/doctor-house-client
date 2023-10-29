import TitleName from "../TitleName/TitleName";
import doctor1 from "../../../../../assets/doctorImage/doctor-1.jpg";
import doctor2 from "../../../../../assets/doctorImage/doctor-2.jpg";
import doctor3 from "../../../../../assets/doctorImage/doctor-3.jpg";
import { GrLocation } from "react-icons/gr";
import { FaRegClock } from "react-icons/fa";
import { AiOutlineDollarCircle } from "react-icons/ai";

import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const ExpertDoctors = () => {
  const [doctor, setDoctor] = useState([]);
  useEffect( () =>{
    fetch('doctor.json')
    .then(res => res.json())  
    .then(data => setDoctor(data))
  })

  return (
    <div>
      <TitleName
        title={"Our      Expert Doctors"}
        subTitle={
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo "
        }
      ></TitleName>

      <section className="flex mx-auto ml-10 mb-5 flex-direction-row-reverse">

      <div className="card w-96 bg-base-900"> {/* shadow-xl */}
        <figure className="px-5 pt-5">
          <img src={doctor1} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Dr Shamima Khatun</h2>
          <p>BTP - Senior Physiotherapist</p>
          <span className="max-auto w-20">
            <Rating 
          style={{ maxWidth: 180 }} 
          value={5} 
          readOnly 
          />
          </span>
          <div className="flex">
            <div>
              <GrLocation></GrLocation>
            </div>
            <div>
              <p className="ml-3"> Dhanmondi , Dhaka, Bangladesh</p>
            </div>
          </div>
          <div className="flex align-item-center">
            <div>
              <FaRegClock></FaRegClock>
            </div>
            <div>
              <p className="ml-3"> Available On Mon, 22 December</p>
            </div>
          </div>
          <div className="flex align-item-center">
            <div>
              <AiOutlineDollarCircle></AiOutlineDollarCircle>
            </div>
            <div>
              <p className="ml-3">$15</p>
            </div>
          </div>
          <Link to="/profile" className="btn btn-outline btn-error">View Profile</Link>
        </div>
      </div>

      <div className="card w-96 bg-base-100 ml-5">
        <figure className="px-5 pt-5">
          <img src={doctor2} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Karyen Anderson</h2>
          <p>BTP - Senior Physiotherapist</p>
          <span className="max-auto w-20">
            <Rating 
          style={{ maxWidth: 180 }} 
          value={5} 
          readOnly 
          />
          </span>
          <div className="flex">
            <div>
              <GrLocation></GrLocation>
            </div>
            <div>
              <p className="ml-3"> Dhanmondi, Dhaka, Bangladesh</p>
            </div>
          </div>
          <div className="flex align-item-center">
            <div>
              <FaRegClock></FaRegClock>
            </div>
            <div>
              <p className="ml-3"> Available On Mon, 22 December</p>
            </div>
          </div>
          <div className="flex align-item-center">
            <div>
              <AiOutlineDollarCircle></AiOutlineDollarCircle>
            </div>
            <div>
              <p className="ml-3">$15</p>
            </div>
          </div>
          <button className="btn btn-error  btn-error">View Profile</button>
        </div>
      </div>

      <div className="card w-96 bg-base-100 ml-5">
        <figure className="px-5 pt-5">
          <img src={doctor3} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Karyen Anderson</h2>
          <p>BTP - Senior Physiotherapist</p>
          <span className="max-auto w-20">
            <Rating 
          style={{ maxWidth: 180 }} 
          value={5} 
          readOnly 
          />
          </span>
          <div className="flex">
            <div>
              <GrLocation></GrLocation>
            </div>
            <div>
              <p className="ml-3"> Dhanmondi, Dhaka, Bangladesh</p>
            </div>
          </div>
          <div className="flex align-item-center">
            <div>
              <FaRegClock></FaRegClock>
            </div>
            <div>
              <p className="ml-3"> Available On Mon, 22 December</p>
            </div>
          </div>
          <div className="flex align-item-center">
            <div>
              <AiOutlineDollarCircle></AiOutlineDollarCircle>
            </div>
            <div>
              <p className="ml-3">$15</p>
            </div>
          </div>
          <button className="btn btn-outline btn-error">View Profile</button>
        </div>
      </div>
      </section>
    </div>
  );
};

export default ExpertDoctors;
