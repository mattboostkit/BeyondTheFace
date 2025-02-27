import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

type SEOProps = {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  schemaData?: Record<string, any>;
};

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonicalUrl,
  schemaData
}) => {
  const location = useLocation();
  const baseUrl = 'https://beyondtheface.co.uk';
  const currentPath = location.pathname;
  
  // Default SEO values
  const defaultTitle = 'Beyond The Face | Premium Aesthetic Treatments in Tunbridge Wells';
  const defaultDescription = 'Specialist non-surgical aesthetic treatments by qualified professionals in Tunbridge Wells. Dermal fillers, anti-wrinkle treatments & more.';
  
  // Generate canonical URL
  const canonical = canonicalUrl || `${baseUrl}${currentPath}`;
  
  // Default structured data for the business
  const defaultSchemaData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Beyond The Face",
    "description": "Premium non-surgical aesthetic treatments delivered by qualified professionals in Tunbridge Wells.",
    "url": baseUrl,
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
    ]
  };
  
  // Combine default schema with any passed schema data
  const finalSchemaData = schemaData || defaultSchemaData;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title || defaultTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      
      {/* Canonical Tag */}
      <link rel="canonical" href={canonical} />
      
      {/* OpenGraph Meta Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title || defaultTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content="https://ik.imagekit.io/boostkit/Beyond%20The%20Face/BTF_Hero.avif?updatedAt=1740599856547" />
      
      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={title || defaultTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content="https://ik.imagekit.io/boostkit/Beyond%20The%20Face/BTF_Hero.avif?updatedAt=1740599856547" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(finalSchemaData)}
      </script>
    </Helmet>
  );
};

export default SEO;