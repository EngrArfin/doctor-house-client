import { Rating } from '@smastrom/react-rating';

import '@smastrom/react-rating/style.css'
import { AiOutlineDollarCircle } from 'react-icons/ai';
import { FaRegClock } from 'react-icons/fa';
import { GrLocation } from 'react-icons/gr';

import { Link } from 'react-router-dom';

const DoctorsCard = ({item}) => {
    const { name, bpt, location, time, image, price, rating } = item;
    return (
        <div>

<section className="flex mx-auto ml-10 mb-5 flex-direction-row-reverse">
      <div className="card w-96 bg-base-900">
        
        <figure className="px-5 pt-5">
          <img src={image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{bpt}</p>
          <span className="max-auto w-20 ">
            <Rating 
            style={{ maxWidth: 180 }} 
            value={rating} 
            readOnly 
            />
          </span>
          <div className="flex">
            <div>
              <GrLocation></GrLocation>
            </div>
            <div>
              <p className="ml-3">{location}</p>
            </div>
          </div>
          <div className="flex align-item-center">
            <div>
              <FaRegClock></FaRegClock>
            </div>
            <div>
              <p className="ml-3">{time}</p>
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
            Appointment
          </Link>
        </div>
      </div>
    </section>
            
        </div>
    );
};

export default DoctorsCard;