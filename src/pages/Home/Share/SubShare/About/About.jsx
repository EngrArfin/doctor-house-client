const About = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div>
        <h1 className="card-title">About Me</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>

      <div className="flex justify-around">
        <div>
          <h1 className="card-title">Education</h1>
          <h2>American Delta Medical University</h2>
          <p>BDS</p>
          <p>1998 - h00g</p>

          <h2 className="card-title">Work & Experience</h2>
          <h3>Glowing Smiles Family Dental Clinic</h3>
          <p>2010 - Present (5 years)</p>
          <h3>Comfort Care Dental Clinic</h3>
          <p> 2007 - 2010 (3 years)</p>

          <h3>Dream Smile Dental Practice</h3>
          <p>2005-2007 (2 years)</p>

          <div>
            <h2 className="card-title">Services</h2>
            <p className="mt-5 ml-3">
              <li>Tooth cleaning</li>
              <li>Root Canal Therapy</li>
              <li>Implants</li>
              <li>Composite Bonding</li>
              <li>Fissure Sealants</li> 
              <li>Surgical Extractions</li>
            </p>
          </div>
        </div>


        <div>
          <h1 className="card-title">Awards</h1>
          <p>July h01«</p>
          <h2>Humanity Award </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
            Proin a ipsum tellus. Interdum et malesuada <br /> fames ac ante
            ipsum primis in faucibus.
          </p>

          <p>March 2011</p>
          <h3>Certificate for International Volunteer Service</h3>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. 
         Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>

         <p>May 2008</p>

         <h2>The Dental Professional of The Year Award</h2>

         <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. 
        Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>

        <h2 className="card-title">Specializations</h2>
        <p className="mt-5 ml-3">
        <li>Children Care</li>
        <li>Dental Care</li>
        <li>Oral and Maxillofacial Surgery</li>
        <li>Orthodontist</li>
        <li>Periodontist</li>
        <li>Prosthodontics</li>
        </p>
        </div>
      </div>
    </div>
  );
};

export default About;
