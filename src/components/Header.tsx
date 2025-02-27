import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const homePrefix = isHomePage ? '' : '/';
  
  // Function to handle smooth scrolling to appointments section
  const scrollToAppointments = (e) => {
    if (isHomePage) {
      e.preventDefault();
      const appointmentsSection = document.getElementById('appointments');
      if (appointmentsSection) {
        appointmentsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };
  
  return (
    <header className="relative bg-gray-900 h-[80vh] flex items-center">
      <div className="absolute inset-0">
        <img
          src="https://ik.imagekit.io/boostkit/Beyond%20The%20Face/BTF_Hero.avif?updatedAt=1740599856547"
          alt="Elegant aesthetics treatment room with serene atmosphere and professional equipment"
          className="w-full h-full object-cover opacity-80" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/50 via-gray-900/40 to-transparent"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 text-center">
        <h1 className="text-4xl font-normal tracking-tight text-white sm:text-5xl lg:text-6xl">
          Beyond The Face
        </h1>
        <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
          Discover the artistry of aesthetics. We specialise in bespoke, non-surgical treatments that enhance your natural beauty and restore confidence. Experience the transformation you deserve.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to={`${homePrefix}#appointments`}
            onClick={scrollToAppointments}
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sage-600 hover:bg-sage-500"
            aria-label="Schedule a personal consultation"
          >
            Book a Consultation
          </Link>
          <Link
            to={`${homePrefix}#treatments`}
            className="inline-flex items-center justify-center px-5 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white hover:bg-opacity-10"
            aria-label="Browse available aesthetic treatments"
          >
            Explore Treatments
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;