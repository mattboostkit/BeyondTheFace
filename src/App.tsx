import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import TreatmentsPage from './pages/TreatmentsPage';
import ContactPage from './pages/ContactPage';
import ExosomesPage from './pages/ExosomesPage';
import FaceliftPage from './pages/FaceliftPage';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/treatments" element={<TreatmentsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/exosomes" element={<ExosomesPage />} />
              <Route path="/facelifts" element={<FaceliftPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;