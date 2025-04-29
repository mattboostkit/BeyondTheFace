import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, RefreshCw, PoundSterling, FileText } from 'lucide-react';
import { Treatment } from '../types';

interface TreatmentDetailProps {
  treatment: Treatment;
}

const TreatmentDetail: React.FC<TreatmentDetailProps> = ({ treatment }) => {
  return (
    <div id={treatment.id} className="py-12 scroll-mt-24">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
            <img
              src={treatment.image}
              alt={treatment.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <div className="lg:col-span-2 space-y-6">
          <h3 className="text-2xl font-bold text-gray-900">{treatment.name}</h3>
          
          <div className="grid grid-cols-2 gap-4 my-6">
            <div className="flex items-center p-3 bg-gradient-to-r from-gray-50 to-white rounded-lg border border-gray-100 shadow-sm">
              <Clock className="h-5 w-5 text-primary-500 mr-2" />
              <div>
                <p className="text-sm text-gray-500">Duration</p>
                <p className="font-medium">{treatment.duration}</p>
              </div>
            </div>
            
            <div className="flex items-center p-3 bg-gradient-to-r from-gray-50 to-white rounded-lg border border-gray-100 shadow-sm">
              <RefreshCw className="h-5 w-5 text-primary-500 mr-2" />
              <div>
                <p className="text-sm text-gray-500">Recovery</p>
                <p className="font-medium">{treatment.recovery}</p>
              </div>
            </div>
            
            {treatment.price && ( // Conditionally render price block
              <div className="flex items-center p-3 bg-gradient-to-r from-gray-50 to-white rounded-lg border border-gray-100 shadow-sm">
                <PoundSterling className="h-5 w-5 text-primary-500 mr-2" />
                <div>
                  <p className="text-sm text-gray-500">Price</p>
                  <p className="font-medium">{treatment.price}</p>
                </div>
              </div>
            )}
            
            <div className="flex items-center p-3 bg-gradient-to-r from-gray-50 to-white rounded-lg border border-gray-100 shadow-sm">
              <FileText className="h-5 w-5 text-primary-500 mr-2" />
              <div>
                <p className="text-sm text-gray-500">Category</p>
                <p className="font-medium">{treatment.category}</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-gray-900">Description</h4>
            <p className="text-gray-600">{treatment.description}</p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-gray-900">Expected Results</h4>
            <p className="text-gray-600">{treatment.expectedResults}</p>
          </div>
          
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-block bg-gradient-to-r from-primary-400 to-primary-500 text-white hover:from-primary-500 hover:to-primary-600 px-6 py-3 rounded-md text-base font-medium shadow-md transition-all duration-200 hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Book This Treatment
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TreatmentDetail;