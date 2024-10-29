import fb from "../../assets/images/icon-facebook.svg";
import tw from "../../assets/images/icon-twitter.svg";
import pn from "../../assets/images/icon-pinterest.svg";
import ins from "../../assets/images/icon-instagram.svg";
function Footer() {
  return (
    <footer className="bg-violet-very_dark py-8 flex flex-col sm:flex-row align-items-center justify-center sm:justify-evenly sm:align-items-start text-white">
      <div className="text-center mb-6">
        <h4 className="text-2xl font-bold my-4">Shortly</h4>
      </div>

      <div className="text-center text-sm my-4">
        <h5 className="font-semibold my-2 ">Features</h5>
        <ul>
          <li>Link Shortening</li>
          <li>Branded Links</li>
          <li>Analytics</li>
        </ul>
      </div>
      <div className="text-center text-sm my-4">
        <h5 className="font-semibold my-2 ">Resources</h5>
        <ul>
          <li>Blog</li>
          <li>Developers</li>
          <li>Support</li>
        </ul>
      </div>
      <div className="text-center text-sm my-4">
        <h5 className="font-semibold my-2">Company</h5>
        <ul>
          <li>About</li>
          <li>Our Team</li>
          <li>Careers</li>
          <li>Contact</li>
        </ul>
      </div>

      <div className="flex justify-center space-x-4 mt-8">
        <a href="#" className="text-white">
          <img src={fb} alt="social icon" />
        </a>
        <a href="#" className="text-white">
          <img src={tw} alt="social icon" />
        </a>
        <a href="#" className="text-white">
          <img src={pn} alt="social icon" />
        </a>
        <a href="#" className="text-white">
          <img src={ins} alt="social icon" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
