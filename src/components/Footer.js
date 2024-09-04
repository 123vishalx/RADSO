import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';
import { faSquareFacebook, faTwitter, faGooglePlusG, faTelegramPlane } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import logo from "../assets/Radso-logo-full.png";

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="footer bg-black text-gray-300 py-10">
      <div className="container mx-auto px-4 lg:px-10"> {/* Added padding for large screens */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div className="flex items-center">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-blue-500 mr-4" />
            <div>
              <h4 className="font-bold text-white">Find us</h4>
              <span>Coimbatore, Tamil Nadu, India</span>
            </div>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon icon={faPhone} className="text-blue-500 mr-4" />
            <div>
              <h4 className="font-bold text-white">Call us</h4>
              <span>+91 9944481798</span>
            </div>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon icon={faEnvelopeOpen} className="text-blue-500 mr-4" />
            <div>
              <h4 className="font-bold text-white">Mail us</h4>
              <span>dhiviya@radso.com</span>
            </div>
          </div>
        </div>
        <div className="border-t border-white mb-10"></div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center mb-5 pl-0 h-20 w-25">
              <img className="h-16 w-auto" src={logo} alt="Logo" />
            </div>
            <p className="mb-5 text-gray-300">
              Semiconductors solutions have transformed our business. Our products will be reliable, efficient and perfectly suited to your needs.
            </p>
            <div>
              <span className="font-bold mr-2 text-white">Follow us</span>
              <a href="#!" className="mr-2 text-gray-300 hover:text-white"><FontAwesomeIcon icon={faSquareFacebook} /></a>
              <a href="#!" className="mr-2 text-gray-300 hover:text-white"><FontAwesomeIcon icon={faTwitter} /></a>
              <a href="#!" className="mr-2 text-gray-300 hover:text-white"><FontAwesomeIcon icon={faGooglePlusG} /></a>
              <a href="#!" className="mr-2 text-gray-300 hover:text-white"><FontAwesomeIcon icon={faTelegramPlane} /></a>
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-5 text-white">Useful Links</h3>
            <ul onClick={handleScrollToTop} className="flex flex-wrap gap-4 md:gap-2 lg:grid lg:grid-cols-2 lg:gap-6 lg:gap-y-5">
              <li className="w-1/2 md:w-1/2 lg:w-auto"><Link to="/" className="hover:text-white">Home</Link></li>
              <li className="w-1/2 md:w-1/2 lg:w-auto"><Link to="/services" className="hover:text-white">Services</Link></li>
              <li className="w-1/2 md:w-1/2 lg:w-auto"><Link to="/about" className="hover:text-white">Company</Link></li>
              <li className="w-1/2 md:w-1/2 lg:w-auto"><Link to="/blog" className="hover:text-white">Blog</Link></li>
              <li className="w-1/2 md:w-1/2 lg:w-auto"><Link to="/about" className="hover:text-white">About</Link></li>
              <li className="w-1/2 md:w-1/2 lg:w-auto"><Link to="/contact" className="hover:text-white">Contact</Link></li>
              <li className="w-1/2 md:w-1/2 lg:w-auto"><Link to="/faq" className="hover:text-white">FAQ</Link></li>
              <li className="w-1/2 md:w-1/2 lg:w-auto"><Link to="/terms" className="hover:text-white">Terms and Conditions</Link></li>
              <li className="w-1/2 md:w-1/2 lg:w-auto"><Link to="/privacy" className="hover:text-white">Privacy and Policy</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-5 text-white">Subscribe</h3>
            <p className="mb-5 text-gray-300">Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
            <form className="flex">
              <input type="text" placeholder="Email Address" className="w-full p-2 rounded-l-md bg-gray-800 text-gray-300 border-none focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <button className="bg-blue-500 p-2 rounded-r-md text-white"><FontAwesomeIcon icon={faTelegramPlane} /></button>
            </form>
          </div>
        </div>
      </div>
      <div className="bg-black py-10 px-10 mt-30 mb-0 w-full lg:px-10"> {/* Added padding for large screens */}
        <div className="container mx-auto px-4 flex justify-center">
          <div className="flex items-center">
            <p className="text-center text-gray-300">&copy; 2024, All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
