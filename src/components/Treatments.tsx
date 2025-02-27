import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Treatments = () => {
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

  const treatments = [
    {
      id: 1,
      title: "Dermal Fillers",
      description: "Restore lost volume, enhance contours, and reduce deep lines with our premium dermal fillers.",
      price: "From £250",
      duration: "30-60 mins"
    },
    {
      id: 2,
      title: "Anti-Wrinkle Treatments",
      description: "Minimise fine lines and wrinkles with our precisely administered anti-wrinkle injections.",
      price: "From £199",
      duration: "15-30 mins"
    },
    {
      id: 3,
      title: "Skin Rejuvenation",
      description: "Revitalise your complexion with customised treatments that improve skin texture and tone.",
      price: "From £150",
      duration: "45-60 mins"
    },
    {
      id: 4,
      title: "Lip Enhancement",
      description: "Achieve naturally fuller, well-defined lips with our subtle enhancement techniques.",
      price: "From £225",
      duration: "30-45 mins"
    },
    {
      id: 5, 
      title: "Chemical Peels",
      description: "Remove damaged skin layers to reveal fresher, younger-looking skin beneath.",
      price: "From £125",
      duration: "30 mins"
    },
    {
      id: 6,
      title: "Profhilo",
      description: "Revolutionary skin remodelling treatment that hydrates and boosts collagen production.",
      price: "From £275",
      duration: "30 mins"
    }
  ];

  return (
    <section id="treatments" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-normal text-gray-900 sm:text-4xl">Our Premium Treatments</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            We offer a range of non-surgical aesthetic treatments using only the highest quality products and techniques.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" role="list" aria-label="Available aesthetic treatments">
          {treatments.map((treatment) => (
            <div 
              key={treatment.id} 
              className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow transition-shadow duration-300"
              role="listitem"
            >
              <h3 className="text-xl font-normal text-gray-900 mb-2">{treatment.title}</h3>
              <p className="text-gray-600 mb-4">{treatment.description}</p>
              <div className="flex justify-between items-center border-t border-gray-200 pt-4 mt-auto">
                <div className="text-sage-600 font-medium" aria-label={`Price: ${treatment.price}`}>{treatment.price}</div>
                <div className="text-sm text-gray-500" aria-label={`Duration: ${treatment.duration}`}>{treatment.duration}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to={`${homePrefix}#appointments`}
            onClick={scrollToAppointments}
            className="inline-flex items-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sage-600 hover:bg-sage-500"
            aria-label="Schedule a personal consultation for treatment advice"
          >
            Book a Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Treatments;