import React from 'react';

const GoogleMap: React.FC = () => {
  return (
    <div className="w-full rounded-lg overflow-hidden shadow-md">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2503.8598650965523!2d0.2596902775330436!3d51.12949283823929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47df45b7021198fb%3A0x9d15e0cd4a3caa05!2sBeyond%20The%20Face!5e0!3m2!1sen!2suk!4v1744657497838!5m2!1sen!2suk"
        width="100%"
        height="314"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Beyond The Face Google Map Location"
        className="w-full"
      ></iframe>
    </div>
  );
};

export default GoogleMap;