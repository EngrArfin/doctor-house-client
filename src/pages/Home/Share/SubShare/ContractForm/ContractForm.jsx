import { BsTelephoneOutbound } from "react-icons/bs";
import { GrLocation } from "react-icons/gr";
import "./bacground.css";

const ContractForm = () => {
  return (
    <div className=" feature-item bg-green-900 text-black mb-10 flex max-w-5xl mx-auto">
      <div className="ml-5 mt-5">
        <h2 className="card-title">Contact With Us</h2> <br />
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inve ntore veritatis et quasi.
        </p>{" "}
        <br />
        <div className="flex">
          <div>
            <BsTelephoneOutbound></BsTelephoneOutbound>
          </div>
          <div>
            <span> +880 1730-324607</span>
          </div>{" "}
          <br />
        </div>
        <div className="flex">
          <div>
            <BsTelephoneOutbound></BsTelephoneOutbound>
          </div>
          <div>
            <span> +mohammadpur@uhfpo.dghs.gov.bd</span>
          </div>
        </div>
        
        <div className="flex">
          <div>
            <GrLocation></GrLocation>
          </div>
          <div>
            <span> Mohammadpur, Magura, Khulna, Bangladesh</span>
          </div>
        </div>
      </div>
      
      <div className=" p-12">
        <input
          className=" p-2  bg-blue-500 text-white "
          type="text"
          name=""
          id=""
          placeholder="Enter Name"
        />
        <input
          className="p-2 ml-2 mb-2 bg-black"
          type="email"
          name=""
          id=""
          placeholder="Enter Email"
        />
        <input
          className="p-2 bg-black"
          type="number"
          name="number"
          id=""
          placeholder="Number"
        />
        <input
          className="p-2 ml-2 mb-2 bg-black"
          type="text"
          name=""
          id=""
          placeholder="Enter Name"
        />
        <input className="p-2 bg-black" type="date" name="date" id="" />
        <input
          className="p-2 ml-2 mb-2 bg-black"
          type="datetime"
          name="Time"
          id=""
        />
        <br />
        <button className="btn btn-error m-center w-300">Book Now</button>
      </div>
    </div>
  );
};

export default ContractForm;
