import React from 'react';

const AppointmentCalendar = () => {
  return (
    <section id="appointments" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-normal text-gray-900 sm:text-4xl">Book Your Appointment</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Select a date and time for your consultation or treatment. Our specialists are ready to provide you with exceptional care.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="p-1">
            <iframe 
              src="https://link.boostkit.io/widget/booking/Ktomr74FyLiLn9N4Enpy" 
              style={{ width: '100%', border: 'none', overflow: 'hidden', minHeight: '850px' }}
              scrolling="no" 
              id="Ktomr74FyLiLn9N4Enpy_1740599589230"
              title="Book your appointment"
              aria-label="Appointment booking calendar"
            ></iframe>
          </div>
        </div>
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-500">
            You'll receive a confirmation email with your appointment details once booked.
          </p>
        </div>
      </div>
      <script src="https://link.boostkit.io/js/form_embed.js" type="text/javascript"></script>
    </section>
  );
};

export default AppointmentCalendar;