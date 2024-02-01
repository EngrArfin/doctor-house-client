import { Rating } from '@smastrom/react-rating';

import '@smastrom/react-rating/style.css'
import { AiOutlineDollarCircle } from 'react-icons/ai';
import { FaRegClock } from 'react-icons/fa';
import { GrLocation } from 'react-icons/gr';

import { Link } from 'react-router-dom';

const DoctorsCard = ({ item }) => {
  const { name, bpt, location, time, image, price, rating } = item;
  return (
    <div className=''>
      <section className="flex justify-center mx-auto my-5">
        <div className="card-container w-96 border-2 border-green-200 rounded-xl">
          <div className="card bg-base-900">

            <figure className="px-2 pt-1">
              <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{name}</h2>
              <p>{bpt}</p>
              <div className="flex items-center">
                <GrLocation className="mr-1" />
                <p>{location}</p>
              </div>

              <div className="flex items-center">
                <FaRegClock className="mr-1" />
                <p>{time}</p>
              </div>

              <div className="flex items-center">
                <AiOutlineDollarCircle className="mr-1" />
                <p>{price}</p>
              </div>

              <div className='flex justify-between mt-3'>
                <Link to="/appoint" className="btn btn-outline btn-error">
                  Appointment
                </Link>
                <Link to="/profile" className="btn btn-outline btn-error">
                  Details
                </Link>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* <section className="flex mx-auto ml-10 mb-5 flex-direction-row-reverse border-2 m-5 border-red-200">
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
            <div className='flex justify-between '>
              <div>
                <Link to="/profile" className="btn btn-outline btn-error">
                  Appointment
                </Link>
              </div>
              <div>
                <Link to="/profile" className="btn btn-outline btn-error">
                  Details
                </Link>

              </div>
            </div>
          </div>
        </div>
      </section> */}

    </div>
  );
};

export default DoctorsCard;