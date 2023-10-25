import { BsTelephoneOutbound } from "react-icons/bs";
import { GrLocation } from "react-icons/gr";

const ContractForm = () => {
  return (
    <div className=" bg-green-900 text-white mb-10 flex max-w-5xl mx-auto">
      <div className="ml-5 mt-5">
        <h2 className="card-title">Contact With Us</h2> <br />
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inve ntore veritatis et quasi.
        </p> <br />

        <div className="flex">
          <div>
            <BsTelephoneOutbound></BsTelephoneOutbound>
          </div>
          <div>
            <span> +88 01750 14 14 14</span>
          </div>
        </div> <br />
        <div className="flex">
          <div>
            <GrLocation></GrLocation>
          </div>
          <div>
            <span> Dhanmondi, Dhaka, Bangladesh</span>
          </div>
        </div>
      </div>
      <div className=" p-12">
        <input className=" p-2  bg-black " type="text" name="" id="" placeholder="Enter Name" /> 
        <input className="p-2 ml-2 mb-2 bg-black" type="email" name="" id="" placeholder="Enter Email" />
        <input className="p-2 bg-black" type="number" name="number" id=""  placeholder="Number"/>
        <input className="p-2 ml-2 mb-2 bg-black" type="text" name="" id="" placeholder="Enter Name" />
        <input className="p-2 bg-black" type="date" name="date" id="" />
        <input className="p-2 ml-2 mb-2 bg-black" type="datetime" name="Time" id="" />
        <br />
        <button className="btn btn-error m-center w-300">Book Now</button>

      </div>
    </div>
  );
};

export default ContractForm;