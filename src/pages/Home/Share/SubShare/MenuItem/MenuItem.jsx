import { Rating } from "@smastrom/react-rating";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { FaRegClock } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";

import { Link } from "react-router-dom";

const MenuItem = ({ item }) => {
  const { name, image, price, recipe, rating } = item;

  return (
    <section className="flex mx-auto ml-10 mb-5 flex-direction-row-reverse">
      <div className="card w-96 bg-base-900">
        
        <figure className="px-5 pt-5">
          <img src={image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>BTP - Senior Physiotherapist</p>
          <span className="max-auto w-20">
            <Rating style={{ maxWidth: 180 }} value={5} readOnly />
          </span>
          <div className="flex">
            <div>
              <GrLocation></GrLocation>
            </div>
            <div>
              <p className="ml-3">  Dhanmondi, Dhaka, Bangladesh</p>
            </div>
          </div>
          <div className="flex align-item-center">
            <div>
              <FaRegClock></FaRegClock>
            </div>
            <div>
              <p className="ml-3">Available On Mon, 22 December</p>
            </div>
          </div>
          <div className="flex align-item-center">
            <div>
              <AiOutlineDollarCircle></AiOutlineDollarCircle>
            </div>
            <div>
              <p className="ml-3">{price}</p>
            </div>
          </div>
          <Link to="/profile" className="btn btn-outline btn-error">
            View Profile
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MenuItem;
