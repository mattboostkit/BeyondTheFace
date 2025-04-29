import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// This component handles scrolling to top on page navigation
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there's a hash in the URL, scroll to that element
    if (hash) {
      // Give the DOM time to render before scrolling
      setTimeout(() => {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Otherwise scroll to top of page
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]); // Re-run when location changes

  return null; // This component doesn't render anything
};

export default ScrollToTop;