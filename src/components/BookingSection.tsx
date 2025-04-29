import React, { useEffect } from 'react';
import './BookingSection.css';

const BookingSection: React.FC = () => {
  // Function to load the GHL booking script
  useEffect(() => {
    // Create script element for the GHL booking
    const script = document.createElement('script');
    script.src = 'https://link.boostkit.io/js/form_embed.js';
    script.async = true;

    // Add the script to the document
    document.body.appendChild(script);

    // Clean up function to remove the script when component unmounts
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section className="booking-section py-16 bg-gradient-to-r from-primary-400 to-primary-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white">
          <h2 className="text-3xl font-serif font-bold sm:text-4xl">
            Ready to Transform Your Look?
          </h2>
          <p className="mt-4 text-xl">
            Book your consultation today and take the first step towards a more confident you.
          </p>
        </div>

        <div className="booking-container mt-10 bg-white p-4 md:p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:shadow-xl max-w-4xl mx-auto">
          <h3 className="text-xl font-medium text-gray-900 mb-4 text-center">Schedule an Appointment</h3>
          <div className="booking-iframe-container">
            {/* Calendar Embed - Increased height to avoid scrolling */}
            <iframe
              src="https://link.boostkit.io/widget/booking/Ktomr74FyLiLn9N4Enpy"
              className="booking-iframe"
              style={{
                height: '100%',
                minHeight: '750px',
                width: '100%',
                border: 'none',
                overflow: 'visible'
              }}
              id="Ktomr74FyLiLn9N4Enpy_1743697473322"
              title="Booking Calendar"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;