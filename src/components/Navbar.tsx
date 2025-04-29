import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/images/BTF_Logo.png'; // Import the logo

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-lg backdrop-saturate-150 border-b border-white/20 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> {/* Added max-w-7xl back */}
        <div className="flex justify-between items-center h-20 md:h-28"> {/* Responsive height */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img src={logo} alt="Beyond The Face Logo" className="h-12 sm:h-16 md:h-20 w-auto" /> {/* Responsive logo size */}
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-gray-800 hover:text-primary-400 px-3 py-2 text-base font-medium transition-colors duration-200 ${isActive('/') ? 'text-primary-500 border-b-2 border-primary-400' : ''}`}
            >
              Home
            </Link>
            <Link
              to="/treatments"
              className={`text-gray-800 hover:text-primary-400 px-3 py-2 text-base font-medium transition-colors duration-200 ${isActive('/treatments') ? 'text-primary-500 border-b-2 border-primary-400' : ''}`}
            >
              Treatments
            </Link>
            <Link
              to="/exosomes"
              className={`text-gray-800 hover:text-primary-400 px-3 py-2 text-base font-medium transition-colors duration-200 ${isActive('/exosomes') ? 'text-primary-500 border-b-2 border-primary-400' : ''}`}
            >
              Exosomes
            </Link>
            <Link
              to="/facelifts"
              className={`text-gray-800 hover:text-primary-400 px-3 py-2 text-base font-medium transition-colors duration-200 ${isActive('/facelifts') ? 'text-primary-500 border-b-2 border-primary-400' : ''}`}
            >
              Facelifts
            </Link>
            <Link
              to="/contact"
              className={`text-gray-800 hover:text-primary-400 px-3 py-2 text-base font-medium transition-colors duration-200 ${isActive('/contact') ? 'text-primary-500 border-b-2 border-primary-400' : ''}`}
            >
              Contact
            </Link>
            <Link
              to="/contact#booking"
              className="bg-gradient-to-r from-primary-400/90 to-primary-500/90 text-white hover:from-primary-500 hover:to-primary-600 px-4 py-2 rounded-md text-base font-medium shadow-sm transition-all duration-200 hover:shadow-md transform hover:-translate-y-0.5 backdrop-blur-sm"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center z-10">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary-400 focus:outline-none bg-white/80 backdrop-blur-sm shadow-sm"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg backdrop-saturate-150 border-t border-white/20">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/') ? 'text-primary-500 bg-primary-50/50' : 'text-gray-800 hover:bg-primary-50/50 hover:text-primary-400'}`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/treatments"
              className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/treatments') ? 'text-primary-500 bg-primary-50/50' : 'text-gray-800 hover:bg-primary-50/50 hover:text-primary-400'}`}
              onClick={() => setIsOpen(false)}
            >
              Treatments
            </Link>
            <Link
              to="/exosomes"
              className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/exosomes') ? 'text-primary-500 bg-primary-50/50' : 'text-gray-800 hover:bg-primary-50/50 hover:text-primary-400'}`}
              onClick={() => setIsOpen(false)}
            >
              Exosomes
            </Link>
            <Link
              to="/facelifts"
              className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/facelifts') ? 'text-primary-500 bg-primary-50/50' : 'text-gray-800 hover:bg-primary-50/50 hover:text-primary-400'}`}
              onClick={() => setIsOpen(false)}
            >
              Facelifts
            </Link>
            <Link
              to="/contact"
              className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/contact') ? 'text-primary-500 bg-primary-50/50' : 'text-gray-800 hover:bg-primary-50/50 hover:text-primary-400'}`}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/contact#booking"
              className="block w-full text-center bg-gradient-to-r from-primary-400/90 to-primary-500/90 text-white hover:from-primary-500 hover:to-primary-600 px-4 py-2 rounded-md text-base font-medium shadow-sm backdrop-blur-sm mt-3"
              onClick={() => setIsOpen(false)}
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;