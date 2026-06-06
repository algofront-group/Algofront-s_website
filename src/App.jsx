import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';

/**
 * Root App component.
 * Wraps all pages with persistent Navbar and Footer.
 * The grain-overlay class adds a subtle noise texture to the whole site.
 */
export default function App() {
  return (
    <div className="grain-overlay">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}
