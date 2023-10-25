import { FaRegClock } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import { BsTelephoneOutbound } from "react-icons/bs";

const Card = () => {
  return (
    <div>
      <div className="flex mr-15">
        <div className="card m-5 flex-row w-96 bg-green-900 text-primary-content">
          <div className="card-body flex-row align-item-center mt-5 ">
            <div className="w-xl">
              <FaRegClock></FaRegClock>
            </div>
            <div>
              <h2 className="card-title">Opening Hours</h2>
              <p>Open 9.00 am to 5.00pm Everyday</p>
            </div>
          </div>
        </div>
        <div className="card m-5 flex-row w-96 bg-red-400 text-primary-content">
          <div className="card-body flex-row align-item-center mt-5 ml-5">
            <div className="w-xl">
              <GrLocation></GrLocation>
            </div>
            <div>
              <h2 className="card-title">Our Locations</h2>
              <p>Dhanmondi 17, Dhaka -1200, Bangladesh</p>
            </div>
          </div>
        </div>
        <div className="card m-5 flex-row w-96 bg-green-900 text-primary-content">
          <div className="card-body flex-row align-item-center mt-5 ml-5">
            <div className="w-xl">
              <BsTelephoneOutbound></BsTelephoneOutbound>
            </div>
            <div>
              <h2 className="card-title">Contract Us</h2>
              <p>+88 01712 93 45 29 <br/> +88 01750 56 45 15</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
