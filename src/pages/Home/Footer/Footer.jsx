import { FaClinicMedical } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-base-200 text-base-content">
        <aside>
          <FaClinicMedical></FaClinicMedical>
          <h2 className="uppercase  text-xl">
          Mohammadpur Health Complex
            <br />
          </h2>
          <p>Mohammadpur Upazila Health Complexis simply dummy text of <br /> the printing and typesetting industry. has been <br /> since the printer took.</p>
          <div className="card-actions">
          <button className="btn btn-outline btn-warning">Appointment</button>

          </div>
        </aside>
        <nav>
          <header className="footer-title">Services</header>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <header className="footer-title">Company</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <header className="footer-title">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
      F
    </div>
  );
};

export default Footer;
