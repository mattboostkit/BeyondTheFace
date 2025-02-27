import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import BeforeAfterSlider from './BeforeAfterSlider';

const BeforeAfter = () => {
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

  const results = [
    {
      id: 1,
      title: "Dermal Fillers",
      description: "Natural-looking volume restoration in the mid-face area, creating a more youthful appearance without surgery.",
      beforeImage: "https://ik.imagekit.io/boostkit/Beyond%20The%20Face/before1.jpg?updatedAt=1740600036910",
      afterImage: "https://ik.imagekit.io/boostkit/Beyond%20The%20Face/after1.jpg?updatedAt=1740600037027"
    },
    {
      id: 2,
      title: "Anti-Wrinkle Treatment",
      description: "Significant reduction in forehead lines and crow's feet, resulting in a refreshed yet natural expression.",
      beforeImage: "https://ik.imagekit.io/boostkit/Beyond%20The%20Face/before1.jpg?updatedAt=1740600036910",
      afterImage: "https://ik.imagekit.io/boostkit/Beyond%20The%20Face/after1.jpg?updatedAt=1740600037027"
    },
    {
      id: 3,
      title: "Skin Rejuvenation",
      description: "Remarkable improvement in skin texture, tone and radiance after a personalised treatment programme.",
      beforeImage: "https://ik.imagekit.io/boostkit/Beyond%20The%20Face/before1.jpg?updatedAt=1740600036910",
      afterImage: "https://ik.imagekit.io/boostkit/Beyond%20The%20Face/after1.jpg?updatedAt=1740600037027"
    },
  ];

  return (
    <section id="results" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-normal text-gray-900 sm:text-4xl">Transformation Results</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            See the remarkable difference our treatments can make. These before and after photos showcase real results from our clients.
            <span className="block mt-2 text-sm text-gray-500 italic">Drag the slider to compare before and after results</span>
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:gap-16">
          {results.map((result) => (
            <div key={result.id} className="flex flex-col md:flex-row gap-6 md:gap-12">
              <div className="md:w-1/2 flex flex-col">
                <h3 className="text-2xl font-normal text-gray-900 mb-4">{result.title}</h3>
                <p className="text-gray-600 mb-6">{result.description}</p>
                <div className="mt-auto">
                  <BeforeAfterSlider 
                    beforeImage={result.beforeImage} 
                    afterImage={result.afterImage} 
                  />
                </div>
              </div>
              <div className="md:w-1/2 bg-gray-50 p-6 rounded-lg shadow-sm">
                <h4 className="font-normal text-gray-900 mb-3">Treatment Details</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="h-5 w-5 text-sage-500 mr-2">•</span>
                    <span>Personalised consultation and treatment plan</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-5 w-5 text-sage-500 mr-2">•</span>
                    <span>Treatment performed by certified specialists</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-5 w-5 text-sage-500 mr-2">•</span>
                    <span>Results typically visible within 2-4 weeks</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-5 w-5 text-sage-500 mr-2">•</span>
                    <span>Minimal downtime with proper aftercare</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-5 w-5 text-sage-500 mr-2">•</span>
                    <span>Follow-up appointment included</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Link 
                    to={`${homePrefix}#appointments`} 
                    onClick={scrollToAppointments}
                    className="inline-flex items-center font-medium text-sage-600 hover:text-sage-500"
                  >
                    Book this treatment <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;