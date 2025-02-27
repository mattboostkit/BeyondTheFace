import React from 'react';
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone, Clock } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';
  
  // Function to handle smooth scrolling to sections
  const scrollToSection = (e, sectionId) => {
    if (isHomePage) {
      e.preventDefault();
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If not on home page, navigate to home with state to trigger scroll after navigation
      navigate('/', { state: { scrollToSection: sectionId } });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div className="md:col-span-1">
            <div className="mb-4 h-10">
              <img src="https://ik.imagekit.io/boostkit/Beyond%20The%20Face/logo_white.png?updatedAt=1740599856410" alt="Beyond The Face logo in white" className="h-full" />
            </div>
            <p className="text-gray-400 mb-4">
              Premium non-surgical aesthetic treatments delivered by qualified professionals in a welcoming, clinical environment.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white" aria-label="Follow us on Facebook">
                <Facebook className="h-5 w-5" aria-hidden="true" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white" aria-label="Follow us on Instagram">
                <Instagram className="h-5 w-5" aria-hidden="true" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white" aria-label="Follow us on Twitter">
                <Twitter className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-normal mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/#treatments" 
                  onClick={(e) => scrollToSection(e, 'treatments')}
                  className="text-gray-400 hover:text-white"
                >
                  Treatments
                </Link>
              </li>
              <li>
                <Link 
                  to="/#results" 
                  onClick={(e) => scrollToSection(e, 'results')}
                  className="text-gray-400 hover:text-white"
                >
                  Results
                </Link>
              </li>
              <li>
                <Link 
                  to="/#appointments" 
                  onClick={(e) => scrollToSection(e, 'appointments')}
                  className="text-gray-400 hover:text-white"
                >
                  Appointments
                </Link>
              </li>
              <li>
                <Link 
                  to="/#about" 
                  onClick={(e) => scrollToSection(e, 'about')}
                  className="text-gray-400 hover:text-white"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/facelifts" className="text-gray-400 hover:text-white">
                  Facelifts
                </Link>
              </li>
              <li>
                <Link 
                  to="/#contact" 
                  onClick={(e) => scrollToSection(e, 'contact')}
                  className="text-gray-400 hover:text-white"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-normal mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-sage-500 mr-2 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-gray-400">19 Vale Road, Tunbridge Wells, TN1 1BS</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-sage-500 mr-2 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-gray-400">+44 7717 633418</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-sage-500 mr-2 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-gray-400">maryna@beyondtheface.co.uk</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-normal mb-4">Opening Hours</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Clock className="h-5 w-5 text-sage-500 mr-2 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div className="text-gray-400">
                  <p className="mb-1">Monday - Friday: 9am - 7pm</p>
                  <p className="mb-1">Saturday: 10am - 5pm</p>
                  <p>Sunday: Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Beyond The Face. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;