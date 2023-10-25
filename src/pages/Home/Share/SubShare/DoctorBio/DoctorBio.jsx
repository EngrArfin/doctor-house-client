import { Link } from "react-router-dom";

const DoctorBio = () => {
  return (
    <div className=" max-w-7xl mx-auto">
      <div className="overflow-x-auto mt-3 mb-3">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className=" bg-red-500">
                <Link to="/about">Overview</Link>
              </th>
              {/* <button className="btn btn-info">Overview</button> */}
              <th>
              <Link to=''>Locations</Link>
              </th>
              

              <th>
                <Link to=''>Reviews</Link>
              </th>
              <th>
              <Link to=''>Business Hours</Link>
              </th>
            </tr>
          </thead>
          <tbody>
          
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DoctorBio;
