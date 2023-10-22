import { FaRegClock } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import { BsTelephoneOutbound } from "react-icons/bs";

const Card = () => {
  return (
    <div>
      <div className="flex ml-20">
        <div className="card flex-row w-96 bg-green-900 text-primary-content">
          <div className="card-body flex-row align-item-center mt-10 ml-5">
            <div className="w-xl">
              <FaRegClock></FaRegClock>
            </div>
            <div>
              <h2 className="card-title">Opening Hours</h2>
              <p>Open 9.00 am to 5.00pm Everyday</p>
            </div>
          </div>
        </div>
        <div className="card flex-row w-96 bg-green-900 text-primary-content">
          <div className="card-body flex-row align-item-center mt-10 ml-5">
            <div className="w-xl">
            <GrLocation></GrLocation>
            </div>
            <div>
              <h2 className="card-title">Opening Hours</h2>
              <p>Open 9.00 am to 5.00pm Everyday</p>
            </div>
          </div>
        </div>
        <div className="card flex-row w-96 bg-green-900 text-primary-content">
          <div className="card-body flex-row align-item-center mt-10 ml-5">
            <div className="w-xl">
              <BsTelephoneOutbound></BsTelephoneOutbound>
            </div>
            <div>
              <h2 className="card-title">Opening Hours</h2>
              <p>Open 9.00 am to 5.00pm Everyday</p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Card;
