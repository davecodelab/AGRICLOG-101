
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-farm-green font-bold text-lg mb-3">Farm-to-Market</h3>
            <p className="text-gray-600 text-sm">
              Connecting farmers directly to buyers in towns and cities. We're reducing waste and helping both sides get better value.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-farm-green text-sm">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-farm-green text-sm">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-farm-green text-sm">Services</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-farm-green text-sm">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-3">Get Started</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/signup/farmer" className="text-gray-600 hover:text-farm-green text-sm">Join as Farmer</Link>
              </li>
              <li>
                <Link to="/signup/buyer" className="text-gray-600 hover:text-farm-green text-sm">Register as Buyer</Link>
              </li>
              <li>
                <Link to="/login" className="text-gray-600 hover:text-farm-green text-sm">Sign In</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-8 pt-6">
          <p className="text-sm text-gray-500 text-center">© 2025 Farm-to-Market. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
