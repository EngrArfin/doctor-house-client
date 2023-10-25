const About = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="card  lg:card-side  ">
        <figure>
          {/* <img className="ml-20 "
            src={doctor5}
            alt="Album"
          /> */}
        </figure>
        <div className="card-body ml-20">
          <h2 className="card-title">Our Services</h2>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem{" "}
            <br /> accusantium doloremque laudantium, totam rem aperiam, <br />{" "}
            eaque ipsa quae ab illo inve ntore veritatis et quasi architecto
            beatae <br /> vitae dicta sunt explicabo.
          </p>
          <div className="card-actions">
            <button className="btn btn-warning">Cavity Protection</button>
            <button className="btn btn-active">Cosmetic Dentisty</button>
            <button className="btn btn-active">Oral Surgery</button>
          </div>
          {/* <img className="h-72 w-96" src={doctor6} alt="" /> */}
          <h2 className="card-title">Electro Gastrology Therapy</h2>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem{" "}
            <br /> accusantium doloremque laudantium, totam rem aperiam, <br />{" "}
            eaque ipsa quae ab illo inve ntore veritatis et quasi architecto
            beatae <br /> vitae dicta sunt explicabo.
          </p>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem{" "}
            <br /> accusantium doloremque laudantium, totam rem aperiam, <br />{" "}
            eaque ipsa quae ab illo inve ntore veritatis et quasi architecto
            beatae <br /> vitae dicta sunt explicabo.
          </p>
          <div className="card-actions">
            <button className="btn btn-outline btn-warning">
              More Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
