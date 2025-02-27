import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import Header from '../components/Header';
import BeforeAfter from '../components/BeforeAfter';
import AppointmentCalendar from '../components/AppointmentCalendar';
import Treatments from '../components/Treatments';
import { Link, useLocation } from 'react-router-dom';
import SEO from '../components/SEO';

const Home = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const homePrefix = isHomePage ? '' : '/';
  
  // Home page schema with additional service information
  const homeSchemaData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Beyond The Face",
    "description": "Premium non-surgical aesthetic treatments delivered by qualified professionals in Tunbridge Wells.",
    "url": "https://beyondtheface.co.uk",
    "logo": "https://ik.imagekit.io/boostkit/Beyond%20The%20Face/logo.png?updatedAt=1740599856464",
    "image": "https://ik.imagekit.io/boostkit/Beyond%20The%20Face/BTF_Hero.avif?updatedAt=1740599856547",
    "telephone": "+44 7717 633418",
    "email": "maryna@beyondtheface.co.uk",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "19 Vale Road",
      "addressLocality": "Tunbridge Wells",
      "postalCode": "TN1 1BS",
      "addressCountry": "GB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 51.134600,
      "longitude": 0.267410
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
    ],
    "priceRange": "££",
    "sameAs": [
      "https://www.facebook.com/beyondthefaceuk",
      "https://www.instagram.com/beyondthefaceuk"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Aesthetic Treatments",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "MedicalProcedure",
            "name": "Dermal Fillers",
            "description": "Restore lost volume, enhance contours, and reduce deep lines with our premium dermal fillers."
          },
          "price": "250.00",
          "priceCurrency": "GBP",
          "priceValidUntil": "2026-01-01"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "MedicalProcedure",
            "name": "Anti-Wrinkle Treatments",
            "description": "Minimise fine lines and wrinkles with our precisely administered anti-wrinkle injections."
          },
          "price": "199.00",
          "priceCurrency": "GBP",
          "priceValidUntil": "2026-01-01"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "MedicalProcedure",
            "name": "Skin Rejuvenation",
            "description": "Revitalise your complexion with customised treatments that improve skin texture and tone."
          },
          "price": "150.00",
          "priceCurrency": "GBP",
          "priceValidUntil": "2026-01-01"
        }
      ]
    }
  };
  
  // Function to handle smooth scrolling to appointments section
  const scrollToAppointments = (e) => {
    e.preventDefault();
    const appointmentsSection = document.getElementById('appointments');
    if (appointmentsSection) {
      appointmentsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <SEO 
        title="Beyond The Face | Premium Aesthetic Treatments in Tunbridge Wells"
        description="Specialist non-surgical aesthetic treatments by qualified professionals in Tunbridge Wells. Dermal fillers, anti-wrinkle treatments & more."
        canonicalUrl="https://beyondtheface.co.uk/"
        schemaData={homeSchemaData}
      />
      
      {/* Header Section - Full height */}
      <Header />

      {/* About Section with image on right */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center gap-8 lg:gap-16">
            {/* About content - left side */}
            <div className="md:w-1/2 flex flex-col">
              <h2 className="text-3xl font-normal text-gray-900 mb-4">About Our Clinic</h2>
              <p className="text-gray-600 mb-4">
                Founded by Regenerative Skin Specialist Maryna Cole, Beyond the Face offers the very latest beauty and cosmetic treatments that refresh, regenerate and restore your face, neck, body and hair, bringing confidence and a general sense of wellbeing.
              </p>
              <p className="text-gray-600 mb-4">
                Beyond the Face offers a programme of innovative procedures in regenerative skincare, anti-ageing, body contouring and hair regeneration. Maryna also supports Mr Darryl Coombes in pre- and post- surgery, with his APEX Facelift® 360 procedure.
              </p>
              <p className="text-gray-600 mb-6">
                Our state-of-the-art facility on Harley Street features the latest technology and 
                premium products, all within a welcoming environment designed for your comfort and privacy.
              </p>
              <div>
                <a 
                  href="#appointments" 
                  onClick={scrollToAppointments}
                  className="inline-flex items-center px-5 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-sage-600 hover:bg-sage-500 transition-colors" 
                  aria-label="Learn more about our clinic services"
                >
                  Book a Consultation
                </a>
              </div>
            </div>
            
            {/* Image - right side */}
            <div className="md:w-1/2 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://ik.imagekit.io/boostkit/Beyond%20The%20Face/BTF_About.avif?updatedAt=1740599856550" 
                alt="Luxury aesthetics clinic interior with modern treatment room and elegant decor" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vivace RF Microneedling Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center gap-8 lg:gap-16">
            {/* Image - left side */}
            <div className="md:w-1/2 rounded-lg overflow-hidden shadow-lg order-2 md:order-1">
              <img 
                src="https://ik.imagekit.io/boostkit/Beyond%20The%20Face/Vivace%20RF.jpg?updatedAt=1740601033599" 
                alt="Vivace RF Microneedling treatment being performed" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Content - right side */}
            <div className="md:w-1/2 flex flex-col order-1 md:order-2">
              <h2 className="text-3xl font-normal text-gray-900 mb-4">Vivace RF Microneedling</h2>
              <p className="text-gray-600 mb-4">
                Experience the gold standard in microneedling technology with Vivace RF. This revolutionary treatment combines the benefits of microneedling, radiofrequency, and LED light therapy to stimulate collagen production and rejuvenate your skin at the deepest levels.
              </p>
              <p className="text-gray-600 mb-4">
                Vivace delivers precise, customizable treatment with minimal discomfort and virtually no downtime. The unique combination of technologies triggers your body's natural healing process, revealing firmer, more youthful skin with improved texture and tone.
              </p>
              <p className="text-gray-600 mb-6">
                Ideal for treating fine lines, wrinkles, acne scars, enlarged pores, and overall skin laxity, Vivace RF Microneedling provides both immediate and long-term results for a radiant, refreshed appearance.
              </p>
              <div>
                <a 
                  href="#appointments" 
                  onClick={scrollToAppointments}
                  className="inline-flex items-center px-5 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-sage-600 hover:bg-sage-500 transition-colors" 
                  aria-label="Book a Vivace RF Microneedling consultation"
                >
                  Book a Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Treatments Section */}
      <Treatments />

      {/* Results Section - Before & After */}
      <BeforeAfter />

      {/* Appointments Section with Calendar */}
      <AppointmentCalendar />

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-normal text-gray-900 sm:text-4xl">Contact Us</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Have questions about our treatments or want to learn more? Get in touch with our friendly team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
              <div className="p-3 bg-sage-100 rounded-full mb-4">
                <MapPin className="h-6 w-6 text-sage-600" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-normal text-gray-900">Visit Us</h3>
              <p className="mt-2 text-gray-600 text-center">
                19  
Vale Road<br />
                Tunbridge Wells, TN1 1BS<br />
                United Kingdom
              </p>
            </div>

            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
              <div className="p-3 bg-sage-100 rounded-full mb-4">
                <Phone className="h-6 w-6 text-sage-600" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-normal text-gray-900">Call Us</h3>
              <p className="mt-2 text-gray-600">+44 7717 633418</p>
              <p className="mt-1 text-gray-600">Monday to Saturday, 9am - 6pm</p>
            </div>

            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
              <div className="p-3 bg-sage-100 rounded-full mb-4">
                <Mail className="h-6 w-6 text-sage-600" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-normal text-gray-900">Email Us</h3>
              <p className="mt-2 text-gray-600">maryna@beyondtheface.co.uk</p>
              <p className="mt-1 text-gray-600">We'll respond within 24 hours</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;