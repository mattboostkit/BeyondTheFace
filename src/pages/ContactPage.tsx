import React from 'react';
import ContactInfo from '../components/ContactInfo';
import ContactForm from '../components/ContactForm';
import GoogleMap from '../components/GoogleMap';
import BookingSection from '../components/BookingSection';
import SEO from '../components/SEO';

const ContactPage: React.FC = () => {
  // Define structured data for contact page
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Beyond The Face",
    "description": "Get in touch with Beyond The Face, Tunbridge Wells' premier aesthetics clinic. Book a consultation or ask us any questions about our treatments.",
    "mainEntity": {
      "@type": "MedicalBusiness",
      "name": "Beyond The Face",
      "telephone": "+44 7717 633418",
      "email": "maryna@beyondtheface.co.uk",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "19 Vale Road",
        "addressLocality": "Tunbridge Wells",
        "addressRegion": "Kent",
        "postalCode": "TN1 1BS",
        "addressCountry": "UK"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "19:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Saturday",
          "opens": "10:00",
          "closes": "17:00"
        }
      ]
    }
  };

  return (
    <div id="top" className="pt-20 bg-gray-50">
      <SEO
        title="Contact Us"
        description="Get in touch with Beyond The Face, Tunbridge Wells' premier aesthetics clinic. Book a consultation or ask us any questions about our treatments."
        canonicalUrl="/contact"
        structuredData={structuredData}
      />
      <div className="bg-gradient-to-r from-primary-500 to-secondary-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-serif font-bold sm:text-4xl">Contact Us</h1>
          <p className="mt-4 text-xl">
            Get in touch with our team or book your appointment today.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <ContactInfo />
          <ContactForm />
        </div>

        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-3">Find Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We are conveniently located in the heart of Tunbridge Wells. Free parking is available nearby.
            </p>
          </div>
          <GoogleMap />
        </div>

        <div id="booking" className="scroll-mt-32 mb-16">
          <BookingSection />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;