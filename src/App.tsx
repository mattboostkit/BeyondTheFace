import React, { useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Facelifts from './pages/Facelifts';

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  
  useEffect(() => {
    // Handle scrolling to specific sections when navigating between pages
    if (location.state) {
      // Handle appointment section scrolling
      if (location.state.scrollToAppointments) {
        // Clear the state to prevent scrolling on future navigation
        navigate(location.pathname, { replace: true, state: {} });
        
        // Wait for the page to render before scrolling
        setTimeout(() => {
          const appointmentsSection = document.getElementById('appointments');
          if (appointmentsSection) {
            appointmentsSection.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
      
      // Handle contact section scrolling
      else if (location.state.scrollToContact) {
        // Clear the state to prevent scrolling on future navigation
        navigate(location.pathname, { replace: true, state: {} });
        
        // Wait for the page to render before scrolling
        setTimeout(() => {
          const contactSection = document.getElementById('contact');
          if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
      
      // Handle generic section scrolling
      else if (location.state.scrollToSection) {
        // Clear the state to prevent scrolling on future navigation
        navigate(location.pathname, { replace: true, state: {} });
        
        // Wait for the page to render before scrolling
        setTimeout(() => {
          const section = document.getElementById(location.state.scrollToSection);
          if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    }
  }, [location, navigate]);

  return (
    <Routes>
      <Route path="/" element={<Layout><Home /></Layout>} />
      <Route path="/facelifts" element={<Layout><Facelifts /></Layout>} />
    </Routes>
  );
}

export default App;