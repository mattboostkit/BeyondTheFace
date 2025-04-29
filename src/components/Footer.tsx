import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-serif font-bold bg-gradient-to-r from-primary-300 to-primary-400 bg-clip-text text-transparent">Beyond The Face</h3>
            <p className="text-gray-300">
              Premium aesthetic treatments tailored to enhance your natural beauty.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/beyondthefacertw/" className="text-gray-300 hover:text-primary-300 transition-colors duration-200" target="_blank" rel="noopener noreferrer">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-medium text-primary-300">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-primary-300 transition-colors duration-200">Home</Link>
              </li>
              <li>
                <Link to="/treatments" className="text-gray-300 hover:text-primary-300 transition-colors duration-200">Treatments</Link>
              </li>
              <li>
                <Link to="/exosomes" className="text-gray-300 hover:text-primary-300 transition-colors duration-200">Exosomes</Link>
              </li>
              <li>
                <Link to="/facelifts" className="text-gray-300 hover:text-primary-300 transition-colors duration-200">Facelifts</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-primary-300 transition-colors duration-200">Contact</Link>
              </li>

            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-medium text-primary-300">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-primary-300 flex-shrink-0" />
                <span className="text-gray-300">19 Vale Road, Tunbridge Wells, Kent TN1 1BS</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-primary-300 flex-shrink-0" />
                <span className="text-gray-300">+44 7717 633418</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-primary-300 flex-shrink-0" />
                <span className="text-gray-300">maryna@beyondtheface.co.uk</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-medium text-primary-300">Opening Hours</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Clock size={18} className="mr-2 text-primary-300 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Monday - Friday: 9am - 7pm</p>
                  <p className="text-gray-300">Saturday: 10am - 5pm</p>
                  <p className="text-gray-300">Sunday: Closed</p>
                </div>
              </li>
            </ul>

          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Beyond The Face. All rights reserved.</p>
          <p className="mt-2">
            <Link to="/privacy-policy" className="hover:text-primary-300 transition-colors duration-200">Privacy Policy</Link> |{' '}
            <Link to="/terms" className="hover:text-primary-300 transition-colors duration-200">Terms & Conditions</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;