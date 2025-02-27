import React, { useEffect } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';

const Facelifts = () => {
  const navigate = useNavigate();
  
  // Facelift page schema
  const faceliftSchemaData = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "about": {
      "@type": "MedicalProcedure",
      "name": "Non-Surgical Facelifts",
      "procedureType": "https://schema.org/CosmeticProcedure",
      "description": "Non-surgical facelift procedures that can help you achieve a more youthful, refreshed appearance without the need for invasive surgery or lengthy recovery times.",
      "bodyLocation": "Face",
      "preparation": "Consultation with aesthetic specialist",
      "followup": "Follow-up appointment included with all treatments"
    },
    "mainContentOfPage": {
      "@type": "WebPageElement",
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": ["h1", "h2", "#procedures"]
      }
    },
    "offers": {
      "@type": "AggregateOffer",
      "highPrice": "1200",
      "lowPrice": "800",
      "priceCurrency": "GBP",
      "offerCount": "3"
    },
    "specialty": "Aesthetic Medicine",
    "audience": {
      "@type": "Audience",
      "audienceType": "Adults seeking skin rejuvenation"
    }
  };
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // Function to navigate to home and scroll to appointments
  const navigateToAppointments = () => {
    navigate('/', { state: { scrollToAppointments: true } });
  };
  
  // Facelift procedure types
  const procedures = [
    {
      id: 1,
      title: "Thread Lift",
      description: "A minimally invasive alternative to facelift surgery that uses temporary, medical-grade suture threads to lift and tighten sagging skin.",
      benefits: [
        "Immediate lifting effect",
        "Minimal downtime (24-48 hours)",
        "Natural-looking results",
        "Stimulates collagen production",
        "Duration of 12-18 months"
      ],
      price: "From £800",
      time: "60-90 minutes"
    },
    {
      id: 2,
      title: "Liquid Facelift",
      description: "A non-surgical procedure that uses a combination of dermal fillers and anti-wrinkle injections to restore volume, reduce wrinkles, and create a lifted appearance.",
      benefits: [
        "No incisions required",
        "Immediate results",
        "Customizable treatment areas",
        "Natural-looking rejuvenation",
        "Duration of 6-18 months"
      ],
      price: "From £950",
      time: "45-60 minutes"
    },
    {
      id: 3,
      title: "HIFU (High-Intensity Focused Ultrasound)",
      description: "Uses ultrasound energy to target deep skin layers, stimulating collagen production and creating a natural lifting and tightening effect.",
      benefits: [
        "No skin damage",
        "Targets deep structural layers",
        "Progressive results over 2-3 months",
        "Can treat multiple areas",
        "Duration of 12-18 months"
      ],
      price: "From £1200",
      time: "60-90 minutes"
    }
  ];

  // FAQ items
  const faqs = [
    {
      question: "How do non-surgical facelifts compare to surgical options?",
      answer: "Non-surgical facelifts provide natural-looking rejuvenation with minimal downtime and lower risk compared to surgery. They're ideal for early to moderate signs of aging, while surgical options may be more appropriate for advanced aging concerns. Our non-surgical options can delay the need for surgery or complement previous surgical results."
    },
    {
      question: "How long do the results last?",
      answer: "Results vary by procedure and individual factors. Thread lifts typically last 12-18 months, liquid facelifts 6-18 months depending on products used, and HIFU treatments 12-18 months. Maintenance treatments can extend results, and we'll provide personalized recommendations during your consultation."
    },
    {
      question: "Is there any downtime?",
      answer: "Downtime is minimal compared to surgical procedures. Thread lifts may require 24-48 hours of reduced activity. Liquid facelifts might cause temporary swelling or bruising for 2-5 days. HIFU treatments typically have no downtime, though some patients experience mild redness for a few hours."
    },
    {
      question: "Am I a good candidate for a non-surgical facelift?",
      answer: "Ideal candidates have mild to moderate skin laxity and realistic expectations. During your consultation, we'll assess your skin condition, medical history, and goals to recommend the most appropriate treatment. Certain medical conditions may require additional consideration or make some treatments unsuitable."
    }
  ];

  return (
    <>
      <SEO 
        title="Non-Surgical Facelifts | Beyond The Face Tunbridge Wells"
        description="Advanced non-surgical facelift treatments including thread lifts, liquid facelifts and HIFU. Minimal downtime, natural results in Tunbridge Wells."
        canonicalUrl="https://beyondtheface.co.uk/facelifts"
        schemaData={faceliftSchemaData}
      />
      
      {/* Hero Section */}
      <section className="relative bg-gray-900 py-32">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1519420638722-a2a5033bff85?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Woman receiving facial aesthetics treatment"
            className="w-full h-full object-cover opacity-30" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/40"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 text-center">
          <h1 className="text-4xl font-normal tracking-tight text-white sm:text-5xl lg:text-6xl">
            Non-Surgical Facelifts
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
            Rejuvenate and restore your youthful appearance without surgery. Our advanced techniques lift, tighten, and revitalize your skin with minimal downtime.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-normal text-gray-900 mb-6">Restore Your Youthful Appearance</h2>
              <p className="text-gray-600 mb-4">
                At Beyond The Face, we offer revolutionary non-surgical facelift procedures that can help you achieve a more youthful, refreshed appearance without the need for invasive surgery or lengthy recovery times.
              </p>
              <p className="text-gray-600 mb-4">
                Our advanced techniques address common signs of aging such as sagging skin, loss of volume, wrinkles, and fine lines. Using the latest innovations in aesthetic medicine, we can provide natural-looking results that enhance your features while maintaining your unique expression.
              </p>
              <p className="text-gray-600 mb-6">
                Each treatment is customized to your specific needs, ensuring optimal results that complement your natural beauty and help you feel confident in your appearance.
              </p>
              <a href="#procedures" className="inline-flex items-center px-5 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-sage-600 hover:bg-sage-500 transition-colors" aria-label="View our facelift procedures">
                Explore Our Procedures
              </a>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://ik.imagekit.io/boostkit/Beyond%20The%20Face/BTF_Facelift.avif?updatedAt=1740599835573" 
                alt="Woman with smooth, lifted skin showing natural-looking results from non-surgical facelift"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Procedures Section */}
      <section id="procedures" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-normal text-gray-900 sm:text-4xl">Our Non-Surgical Procedures</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              We offer several advanced, non-invasive techniques to help you achieve a more youthful and refreshed appearance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {procedures.map((procedure) => (
              <div key={procedure.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="p-6">
                  <h3 className="text-xl font-normal text-gray-900 mb-3">{procedure.title}</h3>
                  <p className="text-gray-600 mb-4">{procedure.description}</p>
                  
                  <h4 className="text-md font-normal text-gray-900 mb-2">Benefits:</h4>
                  <ul className="mb-4 space-y-2">
                    {procedure.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-sage-500 mr-2 flex-shrink-0 mt-0.5" aria-hidden="true" />
                        <span className="text-gray-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex justify-between pt-4 border-t border-gray-100">
                    <div className="text-sage-600 font-medium">{procedure.price}</div>
                    <div className="text-sm text-gray-500">{procedure.time}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <button
              onClick={navigateToAppointments}
              className="inline-flex items-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sage-600 hover:bg-sage-500"
              aria-label="Schedule a consultation for facelift procedures"
            >
              Book a Consultation <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </section>

      {/* Before & After Section */}
      <section id="results" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-normal text-gray-900 sm:text-4xl">See The Results</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              View our gallery of before and after images to see the transformative results of our non-surgical facelift procedures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-100 rounded-lg overflow-hidden">
              <img 
                src="https://ik.imagekit.io/boostkit/Beyond%20The%20Face/before1.jpg?updatedAt=1740600036910" 
                alt="Before non-surgical facelift treatment showing signs of aging and skin laxity" 
                className="w-full h-72 object-cover"
              />
              <div className="p-4 bg-sage-600">
                <h3 className="text-white font-normal text-center">Before Treatment</h3>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg overflow-hidden">
              <img 
                src="https://ik.imagekit.io/boostkit/Beyond%20The%20Face/after1.jpg?updatedAt=1740600037027" 
                alt="After non-surgical facelift treatment showing improved skin firmness and youthful appearance" 
                className="w-full h-72 object-cover"
              />
              <div className="p-4 bg-sage-600">
                <h3 className="text-white font-normal text-center">After Treatment</h3>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              Results may vary from person to person. These images represent typical results, but individual outcomes will depend on your specific situation, skin condition, and treatment plan.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-normal text-gray-900 sm:text-4xl">Frequently Asked Questions</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our non-surgical facelift procedures.
            </p>
          </div>

          <div className="max-w-3xl mx-auto divide-y divide-gray-200">
            {faqs.map((faq, index) => (
              <div key={index} className="py-6">
                <h3 className="text-lg font-normal text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Section */}
      <section id="consultation" className="py-16 bg-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-normal text-gray-900">Ready to Transform Your Appearance?</h2>
                <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                  Schedule a personalized consultation with our specialists to discuss which non-surgical facelift option is right for you.
                </p>
              </div>
              
              <div className="flex flex-col md:flex-row md:items-center md:justify-center space-y-4 md:space-y-0 md:space-x-6">
                <button
                  onClick={navigateToAppointments}
                  className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-sage-600 hover:bg-sage-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sage-500"
                  aria-label="Book a consultation for facelift procedures"
                >
                  Book Your Consultation
                </button>
                <button
                  onClick={() => {
                    navigate('/', { state: { scrollToContact: true } });
                  }}
                  className="inline-flex justify-center items-center px-6 py-3 border border-gray-300 rounded-md shadow-sm text-base font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sage-500"
                  aria-label="Contact us with questions about facelift procedures"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Facelifts;