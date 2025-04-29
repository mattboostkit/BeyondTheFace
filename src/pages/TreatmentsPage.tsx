import React from 'react';
import { treatments } from '../data/treatments';
import TreatmentDetail from '../components/TreatmentDetail';
import SEO from '../components/SEO';

const TreatmentsPage: React.FC = () => {
  // Define structured data for treatments
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": "Aesthetic Treatments at Beyond The Face",
    "description": "Discover our comprehensive range of aesthetic treatments designed to enhance your natural beauty, including exosome therapy, microneedling, and more.",
    "about": {
      "@type": "MedicalBusiness",
      "name": "Beyond The Face",
      "url": "https://beyondtheface.co.uk"
    },
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": treatments.map((treatment, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "MedicalProcedure",
          "name": treatment.name,
          "description": treatment.description,
          "procedureDuration": treatment.duration
        }
      }))
    }
  };

  return (
    <div id="top" className="pt-20 bg-gray-50">
      <SEO
        title="Aesthetic Treatments"
        description="Discover our comprehensive range of aesthetic treatments designed to enhance your natural beauty, including exosome therapy, microneedling, and more."
        canonicalUrl="/treatments"
        structuredData={structuredData}
      />
      <div className="bg-gradient-to-r from-primary-500 to-secondary-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-serif font-bold sm:text-4xl">Our Treatments</h1>
          <p className="mt-4 text-xl">
            Discover our comprehensive range of aesthetic treatments designed to enhance your natural beauty.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-16">
          {treatments.map((treatment) => (
            <TreatmentDetail key={treatment.id} treatment={treatment} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TreatmentsPage;
