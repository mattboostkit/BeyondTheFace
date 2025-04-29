import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactInfo: React.FC = () => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden transform transition-all duration-300 hover:shadow-lg">
      <div className="p-8">
        <h3 className="text-xl font-medium text-gray-900 mb-6">Contact Information</h3>

        <div className="space-y-6">
          <div className="flex items-start">
            <MapPin className="h-6 w-6 text-primary-500 mr-3 mt-1" />
            <div>
              <p className="font-medium text-gray-900">Address</p>
              <p className="text-gray-600 mt-1">
                19 Vale Road<br />
                Tunbridge Wells<br />
                Kent TN1 1BS
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <Phone className="h-6 w-6 text-primary-500 mr-3 mt-1" />
            <div>
              <p className="font-medium text-gray-900">Phone</p>
              <p className="text-gray-600 mt-1">+44 7717 633418</p>
            </div>
          </div>

          <div className="flex items-start">
            <Mail className="h-6 w-6 text-primary-500 mr-3 mt-1" />
            <div>
              <p className="font-medium text-gray-900">Email</p>
              <p className="text-gray-600 mt-1">maryna@beyondtheface.co.uk</p>
            </div>
          </div>

          <div className="flex items-start">
            <Clock className="h-6 w-6 text-primary-500 mr-3 mt-1" />
            <div>
              <p className="font-medium text-gray-900">Opening Hours</p>
              <div className="text-gray-600 mt-1">
                <div className="grid grid-cols-2 gap-2">
                  <p>Monday - Friday:</p>
                  <p>9am - 7pm</p>
                  <p>Saturday:</p>
                  <p>10am - 5pm</p>
                  <p>Sunday:</p>
                  <p>Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;