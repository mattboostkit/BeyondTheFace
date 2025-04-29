import React from 'react';
import { MapPin, Phone, Mail, Award, Shield, CheckCircle } from 'lucide-react';
import GallerySection from '../components/GallerySection';
import FAQSection from '../components/FAQSection'; // Import the reusable FAQ component
import SEO from '../components/SEO';

const ExosomesPage: React.FC = () => {
  // Define structured data for exosome therapy
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": "Exosome Therapy at Beyond The Face",
    "description": "Experience revolutionary skin regeneration with exosome therapy at Beyond The Face, Tunbridge Wells' premier aesthetics clinic.",
    "about": {
      "@type": "MedicalProcedure",
      "name": "Exosome Therapy",
      "description": "Advanced cellular rejuvenation treatment using exosomes to stimulate collagen and elastin production for skin regeneration.",
      "procedureType": "https://schema.org/CosmeticProcedure",
      "howPerformed": "Exosomes are applied to the skin in conjunction with microneedling to enhance absorption and effectiveness."
    },
    "mainEntity": {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is an Exosome?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Exosomes are tiny, naturally occurring extracellular vesicles secreted by cells. They've become a revolutionary advancement in skincare and regenerative aesthetics due to their ability to repair and rejuvenate the skin at a cellular level."
          }
        },
        {
          "@type": "Question",
          "name": "What are the benefits of using exosomes on the skin?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Key benefits include cellular communication, skin regeneration, anti-inflammatory effects, enhanced skin barrier function, and antioxidant protection."
          }
        }
      ]
    }
  };

  return (
    <div id="top" className="pt-20 bg-gray-50">
      <SEO
        title="Exosome Therapy"
        description="Experience revolutionary skin regeneration with exosome therapy at Beyond The Face, Tunbridge Wells' premier aesthetics clinic."
        canonicalUrl="/exosomes"
        structuredData={structuredData}
      />
      {/* Hero section */}
      <div className="bg-gradient-to-r from-primary-500 to-secondary-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-serif font-bold sm:text-4xl">Exosome Therapy</h1>
          <p className="mt-4 text-xl">
            Experience revolutionary skin regeneration at our exclusive Vale Road clinic, where cutting-edge exosome therapy meets luxury aesthetics.
          </p>
        </div>
      </div>

      {/* Treatment Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-primary-400 font-semibold tracking-wide uppercase">Treatment Overview</h2>
            <p className="mt-2 text-3xl leading-8 font-serif font-bold text-gray-900 sm:text-4xl">
              Transform Your Skin at the Cellular Level
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Our advanced exosome treatments deliver remarkable rejuvenation results through cutting-edge cellular technology.
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-400 text-white mb-5">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-medium text-gray-900">Fine Lines & Wrinkles</h3>
                <p className="mt-2 text-base text-gray-500">
                  Reduction in the appearance of fine lines and wrinkles through enhanced collagen production.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-400 text-white mb-5">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-medium text-gray-900">Skin Texture & Tone</h3>
                <p className="mt-2 text-base text-gray-500">
                  Remarkable improvement in skin texture, tone, and overall complexion through cellular renewal.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-400 text-white mb-5">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-medium text-gray-900">Collagen Production</h3>
                <p className="mt-2 text-base text-gray-500">
                  Significant boost in natural collagen and elastin production for firmer, more youthful skin.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-400 text-white mb-5">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-medium text-gray-900">Improving Skin Texture and Quality</h3>
                <p className="mt-2 text-base text-gray-500">
                  Exosomes promote smoother, more radiant skin by stimulating collagen and elastin production and accelerating cellular turnover.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <GallerySection />

      <FAQSection />

      {/* Contact/Book Section */}
      <section className="py-16 bg-primary-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="text-white">
              <h2 className="text-3xl font-serif font-bold sm:text-4xl">
                Book Your Consultation
              </h2>
              <p className="mt-4 text-xl">
                Transform your skin with Tunbridge Wells' most advanced regenerative treatment.
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-white mr-3 mt-1" />
                  <div>
                    <p className="font-medium">Visit us at:</p>
                    <p className="mt-1">
                      19 Vale Road<br />
                      Tunbridge Wells<br />
                      Kent TN1 1BS
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-white mr-3 mt-1" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="mt-1">+44 7717 633418</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-white mr-3 mt-1" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="mt-1">maryna@beyondtheface.co.uk</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex space-x-4">
                <div className="flex items-center">
                  <Award className="h-5 w-5 text-white mr-2" />
                  <span>GMC-registered practitioners</span>
                </div>
                <div className="flex items-center">
                  <Shield className="h-5 w-5 text-white mr-2" />
                  <span>CQC-approved clinic</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-medium text-gray-900 mb-6">Schedule Your Consultation</h3>
              <div className="h-[400px] border-0 w-full">
                {/* Placeholder for GoHighLevel Calendar Integration */}
                <div className="border border-gray-300 rounded-md h-full flex items-center justify-center bg-gray-50">
                  <div className="text-center p-4">
                    <p className="text-gray-500 mb-4">Appointment booking calendar will be embedded here.</p>
                    <p className="text-sm text-gray-400">Select your preferred date and time for your exosome treatment consultation.</p>
                    <button className="mt-4 bg-primary-400 text-white py-2 px-4 rounded-md hover:bg-primary-500 transition-colors">
                      Book Consultation
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExosomesPage;