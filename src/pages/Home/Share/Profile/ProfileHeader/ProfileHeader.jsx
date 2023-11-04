import "./feature-profile.css"

const ProfileHeader = () => {
  return (
    <div className="feature-profile">
      <div className="  text-white ">
     
        {/* g-base-100 shadow-xl */}
        <div className="card-body flex-row ">
          <div className="m-20">
            <p className="mt-5 text-red-500">Home/DoctorProfile</p>
            <h2 className="card-title text-3xl text-red-600">Doctor Profile</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
