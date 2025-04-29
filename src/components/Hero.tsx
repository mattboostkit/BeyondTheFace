import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/images/BTF_Hero.avif'; // Import the new hero image

const Hero: React.FC = () => {
  return (
    <div id="top" className="relative bg-gray-50 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage} // Use the imported hero image
          alt="Aesthetics clinic"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/80 to-secondary-800/50 mix-blend-multiply" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-40 sm:px-6 lg:px-8 lg:py-64"> {/* Increased vertical padding */}
        <div className="max-w-2xl">
          <h1 className="text-4xl font-serif font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Revealing Your True Beauty
          </h1>
          <p className="mt-6 text-xl text-white">
            Beyond The Face is Tunbridge Wells' premier aesthetics clinic, offering advanced, non-invasive treatments
            designed to enhance your natural beauty and boost your confidence. Experience transformation at the cellular level.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              to="/treatments#top"
              className="inline-block bg-gradient-to-r from-white to-gray-100 text-primary-500 hover:text-primary-600 px-6 py-3 rounded-md text-base font-medium shadow-md transition-all duration-200 hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Our Treatments
            </Link>
            <Link
              to="/contact#top"
              className="inline-block bg-gradient-to-r from-primary-400 to-primary-500 text-white hover:from-primary-500 hover:to-primary-600 px-6 py-3 rounded-md text-base font-medium shadow-md transition-all duration-200 hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;