import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { treatments, categories } from '../data/treatments';

const TreatmentsSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-primary-500 font-semibold tracking-wide uppercase">Our Treatments</h2>
          <p className="mt-2 text-3xl leading-8 font-serif font-bold text-gray-900 sm:text-4xl bg-gradient-to-r from-secondary-800 to-secondary-600 bg-clip-text text-transparent">
            Premium Aesthetic Treatments
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            We offer a comprehensive range of regenerative aesthetic treatments to enhance your natural beauty.
          </p>
        </div>

        <div className="mt-16">
          {categories.map((category) => (
            <div key={category} className="mb-16">
              <h3 className="text-2xl font-bold text-gray-800 mb-8 border-b border-gray-200 pb-2">{category}</h3>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {treatments
                  .filter((treatment) => treatment.category === category)
                  .map((treatment) => (
                    <div key={treatment.id} className="bg-white rounded-lg shadow-sm overflow-hidden transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group">
                      <Link to={`/treatments#${treatment.id}`} className="block h-48 overflow-hidden">
                        <img
                          src={treatment.image}
                          alt={treatment.name}
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                        />
                      </Link>
                      <div className="p-6 border-t border-gray-100">
                        <Link to={`/treatments#${treatment.id}`} className="block">
                          <h4 className="text-lg font-medium text-gray-900 mb-2 hover:text-primary-500 transition-colors duration-200">{treatment.name}</h4>
                        </Link>
                        <p className="text-gray-500 mb-4 line-clamp-3">{treatment.description}</p>
                        <p className="text-primary-500 font-medium mb-4">{treatment.price}</p>
                        <Link
                          to={`/treatments#${treatment.id}`}
                          className="inline-flex items-center text-primary-500 hover:text-primary-600 group"
                        >
                          Learn more <ArrowRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-200" />
                        </Link>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
          <div className="mt-10 text-center">
            <Link
              to="/treatments#top"
              className="inline-block bg-gradient-to-r from-primary-400 to-primary-500 text-white hover:from-primary-500 hover:to-primary-600 px-6 py-3 rounded-md text-base font-medium shadow-md transition-all duration-200 hover:shadow-lg transform hover:-translate-y-0.5"
            >
              View All Treatments
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreatmentsSection;