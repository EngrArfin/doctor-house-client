import TitleName from "../TitleName/TitleName";

import doctor2 from "../../../../../assets/doctorImage/doctor-2.jpg";
import doctor3 from "../../../../../assets/doctorImage/doctor-3.jpg";


const PatientsOpinion = () => {
  return (
    <div>
      <TitleName
        title={"What Our Patients Says"}
        subTitle={
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa </br> quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
        }
      ></TitleName>

      <section className="flex justify-around">
      <div className="card w-100 bg-base-100 shadow-xl">
        <div className="card-body flex-row">
          <div>
            <div>
              <img className="w-14 rounded-full" src={doctor2} />
            </div>
          </div>

          <div>
            <h2 className="card-title">Awlad Hossain</h2>
            <p>Product Designer</p>
          </div>
        </div>
        <p className="m-5">
          Lorem Ipsum has been the industry’s standard <br /> dummy text ever
          since the 1500s, when an unknow printer tool a <br />
          galley of type and scrambled it to make type specimen book has <br />
          survived not only five centurines.
        </p>
      </div>

      <div className="card w-100 bg-base-100 shadow-xl">
        <div className="card-body flex-row">
          <div>
            <div>
              <img className="w-14 rounded-full" src={doctor3} />
            </div>
          </div>

          <div>
            <h2 className="card-title">Shuvo Shekh</h2>
            <p>Medicine Secilist</p>
          </div>
        </div>
        <p className="m-5">
          Lorem Ipsum has been the industry’s standard <br /> dummy text ever
          since the 1500s, when an unknow printer tool a <br />
          galley of type and scrambled it to make type specimen book has <br />
          survived not only five centurines.
        </p>
      </div>
      </section>
    </div>
  );
};

export default PatientsOpinion;
