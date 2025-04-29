import React, { useEffect, useRef } from 'react';
import './ContactForm.css'; // Import the CSS file for form styling

const ContactForm: React.FC = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Function to load the GHL form script
  useEffect(() => {
    // Create script element for the GHL form
    const script = document.createElement('script');
    script.src = 'https://link.boostkit.io/js/form_embed.js';
    script.async = true;

    // Add the script to the document
    document.body.appendChild(script);

    // Function to inject CSS into the iframe to make the form 2 columns
    const injectCSSIntoIframe = () => {
      if (iframeRef.current && iframeRef.current.contentWindow) {
        try {
          const iframeDocument = iframeRef.current.contentWindow.document;
          const styleElement = iframeDocument.createElement('style');
          styleElement.textContent = `
            /* Make the form 2 columns on desktop */
            @media (min-width: 768px) {
              .form-builder--main-container {
                max-width: 768px !important;
                margin: 0 auto !important;
              }
              .form-builder--item-container {
                display: grid !important;
                grid-template-columns: 1fr 1fr !important;
                gap: 20px !important;
              }
              /* Make message field span both columns */
              .form-builder--item-container > div:nth-last-child(2) {
                grid-column: span 2 !important;
              }
              /* Make submit button span both columns */
              .form-builder--item-container > div:last-child {
                grid-column: span 2 !important;
              }
            }
            /* Stack form fields on mobile */
            @media (max-width: 767px) {
              .form-builder--item-container {
                display: flex !important;
                flex-direction: column !important;
              }
            }
          `;
          iframeDocument.head.appendChild(styleElement);
        } catch (error) {
          console.error('Error injecting CSS into iframe:', error);
        }
      }
    };

    // Add event listener for iframe load
    const iframe = iframeRef.current;
    if (iframe) {
      iframe.addEventListener('load', injectCSSIntoIframe);
    }

    // Clean up function to remove the script when component unmounts
    return () => {
      document.body.removeChild(script);
      if (iframe) {
        iframe.removeEventListener('load', injectCSSIntoIframe);
      }
    };
  }, []);

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden transform transition-all duration-300 hover:shadow-lg">
      <div className="p-8 flex flex-col items-center">
        <h3 className="text-xl font-medium text-gray-900 mb-6">Send Us a Message</h3>

        <div className="h-[600px] w-full" id="_builder-form">
          <iframe
            ref={iframeRef}
            src="https://link.boostkit.io/widget/form/DjEGzs34som8LmGvK0oa"
            style={{ width: '100%', height: '100%', border: 'none', borderRadius: '3px' }}
            id="inline-DjEGzs34som8LmGvK0oa"
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="Form 0"
            data-height="600"
            data-layout-iframe-id="inline-DjEGzs34som8LmGvK0oa"
            data-form-id="DjEGzs34som8LmGvK0oa"
            title="Contact Form"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;