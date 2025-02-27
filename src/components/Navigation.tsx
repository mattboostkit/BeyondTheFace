import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  // Create home page prefix for section links
  const homePrefix = isHomePage ? '' : '/';
  
  // Function to handle smooth scrolling to sections
  const scrollToSection = (e, sectionId) => {
    if (isHomePage) {
      e.preventDefault();
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        // Close mobile menu after navigation
        setMobileMenuOpen(false);
      }
    } else {
      // If not on home page, navigate to home with state to trigger scroll after navigation
      navigate('/', { state: { scrollToSection: sectionId } });
    }
  };

  useEffect(() => {
    // Close mobile menu when route changes
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-white/20 shadow-sm" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="h-16">
              <img src="https://ik.imagekit.io/boostkit/Beyond%20The%20Face/logo.png?updatedAt=1740599856464" alt="Beyond The Face logo" className="h-full" />
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to={`${homePrefix}#treatments`} 
              onClick={(e) => scrollToSection(e, 'treatments')}
              className="text-gray-800 hover:text-sage-600 px-3 py-2 text-sm font-medium transition-colors" 
              aria-label="View treatments"
            >
              Treatments
            </Link>
            <Link 
              to={`${homePrefix}#results`} 
              onClick={(e) => scrollToSection(e, 'results')}
              className="text-gray-800 hover:text-sage-600 px-3 py-2 text-sm font-medium transition-colors" 
              aria-label="View before and after results"
            >
              Results
            </Link>
            <Link 
              to={`${homePrefix}#appointments`} 
              onClick={(e) => scrollToSection(e, 'appointments')}
              className="text-gray-800 hover:text-sage-600 px-3 py-2 text-sm font-medium transition-colors" 
              aria-label="Book appointments"
            >
              Appointments
            </Link>
            <Link 
              to="/facelifts" 
              className="text-gray-800 hover:text-sage-600 px-3 py-2 text-sm font-medium transition-colors" 
              aria-label="Learn about facelifts"
            >
              Facelifts
            </Link>
            <Link 
              to={`${homePrefix}#appointments`}
              onClick={(e) => scrollToSection(e, 'appointments')}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-sage-600 hover:bg-sage-500 transition-colors" 
              aria-label="Book an appointment now"
            >
              Book Now
            </Link>
          </div>
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-sage-600 focus:outline-none"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-controls="mobile-menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm" id="mobile-menu" aria-label="Mobile menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to={`${homePrefix}#treatments`} 
              onClick={(e) => scrollToSection(e, 'treatments')}
              className="block text-gray-800 hover:text-sage-600 px-3 py-2 text-base font-medium" 
              aria-label="View treatments"
            >
              Treatments
            </Link>
            <Link 
              to={`${homePrefix}#results`} 
              onClick={(e) => scrollToSection(e, 'results')}
              className="block text-gray-800 hover:text-sage-600 px-3 py-2 text-base font-medium" 
              aria-label="View before and after results"
            >
              Results
            </Link>
            <Link 
              to={`${homePrefix}#appointments`} 
              onClick={(e) => scrollToSection(e, 'appointments')}
              className="block text-gray-800 hover:text-sage-600 px-3 py-2 text-base font-medium" 
              aria-label="Book appointments"
            >
              Appointments
            </Link>
            <Link 
              to="/facelifts" 
              className="block text-gray-800 hover:text-sage-600 px-3 py-2 text-base font-medium" 
              aria-label="Learn about facelifts"
            >
              Facelifts
            </Link>
            <Link 
              to={`${homePrefix}#appointments`}
              onClick={(e) => scrollToSection(e, 'appointments')}
              className="block w-full text-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-sage-600 hover:bg-sage-500 my-2" 
              aria-label="Book an appointment now"
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;